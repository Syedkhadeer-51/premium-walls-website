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

    const lowerEmail = email.trim().toLowerCase();

    // ✅ 1️⃣ Check if profile exists by email
    const { data: existingProfile, error: profileLookupError } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', lowerEmail)
      .maybeSingle();

    if (profileLookupError) {
      setErrorMsg('Profile lookup failed: ' + profileLookupError.message);
      return;
    }

    // ✅ 2️⃣ Try to sign in first
    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      email: lowerEmail,
      password,
    });

    if (loginData?.user && !loginError) {
      // ✅ Logged in
      if (!existingProfile) {
        // No profile yet → insert
        const { error: insertProfileError } = await supabase.from('profiles').insert([
          {
            id: loginData.user.id,
            full_name: fullName,
            address,
            email: lowerEmail,
          },
        ]);
        if (insertProfileError) {
          setErrorMsg('Failed to insert profile: ' + insertProfileError.message);
          return;
        }
      } else if (!existingProfile.full_name || !existingProfile.address) {
        // Profile exists but incomplete → update
        const { error: updateProfileError } = await supabase
          .from('profiles')
          .update({
            full_name: fullName,
            address,
          })
          .eq('id', loginData.user.id);

        if (updateProfileError) {
          setErrorMsg('Failed to update profile: ' + updateProfileError.message);
          return;
        }
      }

      onLogin(loginData.user);
      return;
    }

    // ✅ 3️⃣ If login failed…
    if (loginError) {
      if (existingProfile) {
        setErrorMsg('Incorrect password. Please try again.');
        return;
      }

      // No existing profile → create new user
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: lowerEmail,
        password,
      });

      if (signUpError) {
        if (signUpError.message.toLowerCase().includes('rate limit')) {
          setErrorMsg('Too many signup attempts. Please wait a few minutes.');
        } else {
          setErrorMsg(signUpError.message);
        }
        return;
      }

      const newUserId = signUpData?.user?.id;
      if (newUserId) {
        const { error: insertProfileError } = await supabase.from('profiles').insert([
          {
            id: newUserId,
            full_name: fullName,
            address,
            email: lowerEmail,
          },
        ]);
        if (insertProfileError) {
          setErrorMsg('Failed to create profile: ' + insertProfileError.message);
          return;
        }
      }

      onLogin(signUpData.user);
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
