import React from 'react';

interface LoginProps {
  onGuestLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onGuestLogin }) => {
  return (
    <div>
      <h1>Welcome to Gomoku</h1>
      <p>Please log in or play as a guest to continue</p>
      <a href="http://localhost:4000/auth/google">
        <button>Login with Google</button>
      </a>
      <button onClick={onGuestLogin}>Play as Guest</button>
    </div>
  );
};

export default Login;
