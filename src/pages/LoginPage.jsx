import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import LoginModal from '../components/LoginModal';

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
        padding: '2.5rem 2rem',
        minWidth: 350,
        maxWidth: '90vw'
      }}>
        <LoginModal onLogin={(user) => {
          setUser(user);
          navigate('/cart');
        }} />
      </div>
    </div>
  );
}