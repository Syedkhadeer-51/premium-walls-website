import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function LoginModal({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Try to sign in
    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!loginError && loginData?.user) {
      // Logged in — check if profile exists
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', loginData.user.id)
        .single();

      if (!profileData) {
        // No profile — insert new
        const { error: insertError } = await supabase.from('profiles').insert([
          {
            id: loginData.user.id,
            full_name: fullName,
            address,
          },
        ]);
        if (insertError) {
          setErrorMsg(insertError.message);
          return;
        }
      } else if (!profileData.full_name || !profileData.address) {
        // Update if missing fields
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ full_name: fullName, address })
          .eq('id', loginData.user.id);
        if (updateError) {
          setErrorMsg(updateError.message);
          return;
        }
      }

      onLogin(loginData.user);
      return;
    }

    // If login fails, try sign up
    if (loginError && loginError.message.includes('Invalid login credentials')) {
      const { data: signupData, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        setErrorMsg(signupError.message);
        return;
      }

      // Insert profile
      const userId = signupData?.user?.id;
      if (userId) {
        const { error: profileError } = await supabase.from('profiles').insert([
          {
            id: userId,
            full_name: fullName,
            address,
          },
        ]);
        if (profileError) {
          setErrorMsg(profileError.message);
          return;
        }
      }

      onLogin(signupData.user);
    } else {
      setErrorMsg(loginError?.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded space-y-4 w-full max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-center">Login or Create Account</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />

      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        Continue
      </button>
    </form>
  );
}
