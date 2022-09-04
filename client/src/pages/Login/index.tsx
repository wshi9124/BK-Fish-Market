import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginItems = {
      email,
      password,
      account_type: userType,
    };
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      body: JSON.stringify(loginItems),
    })
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              setErrorMessage('');
              setUser(data);
              if (data.account_type === 'admin') {
                navigate('/admin');
              } else if (data.account_type === 'user') {
                navigate('/home');
              }
            });
        } else {
          res.json()
            .then(({ error }) => {
              setErrorMessage(error);
              setEmail('');
              setPassword('');
            });
        }
      });
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Logo />
      <NavBar />
      <div className="h-5/6 w-full flex">
        <div className="relative -left-10 h-full w-2/3 fishBackground" />
        <div className="w-1/3 flex items-center justify-center mr-10 mb-40">
          <div className="w-96">
            <p className="text-5xl mb-5">Log In</p>
            <div className="shadow-md rounded-lg">
              <form onSubmit={handleLogin}>
                <div className="h-3 bg-slate-900 rounded-t-md" />
                <div className="px-7 pt-5 pb-3">
                  <p className="text-center text-red-500 text-lg">{errorMessage || null}</p>
                  <p className="text-lg font-semibold mb-2">Email</p>
                  <label htmlFor="email">
                    <input
                      className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onClick={() => setErrorMessage('')}
                    />
                  </label>
                  <p className="text-lg font-semibold mb-2 mt-3">Password</p>
                  <label htmlFor="password">
                    <input
                      className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onClick={() => setErrorMessage('')}
                    />
                  </label>
                  <p className="text-lg font-semibold mb-2 mt-3 focus:outline-black">User Type</p>
                  <select
                    className="w-full text-xl py-2 px-3 border cursor-default"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                  <button
                    className="bg-slate-900 text-white mt-6 py-3 px-6 rounded-md hover:bg-slate-800 w-full text-xl"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div className="flex justify-center">
                <button
                  className="mb-3 hover:text-slate-600"
                  type="button"
                  onClick={() => navigate('/createAccount')}
                >
                  No account? Register here
                  {' '}

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
