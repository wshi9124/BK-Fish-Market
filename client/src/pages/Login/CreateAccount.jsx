import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../CommonComponents/Logo';

function CreateAccount() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <Logo />
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-4xl mt-12">Create New Account</h1>
        <div className="flex flex-col w-2/5 pt-0 shadow-lg rounded-lg px-6 py-5">
          <form>
            <p className="text-lg font-semibold mb-2 mt-7 text-left">First Name</p>
            <label htmlFor="firstName">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Last Name</p>
            <label htmlFor="lastName">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Email</p>
            <label htmlFor="email">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="text"
                name="email"
                placeholder="Email"
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Password</p>
            <label htmlFor="password">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Confirm Password</p>
            <label htmlFor="confirmPassword">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">User Type</p>
            <select className="w-full text-xl py-2 px-3 border cursor-default">
              <option>User</option>
              <option>Admin</option>
            </select>
            <button
              className="bg-slate-900 text-white mt-6 py-3 px-6 rounded-md hover:bg-slate-800 w-full text-xl"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <button
            className="mt-2 text-right mr-1 hover:text-slate-600"
            type="button"
            onClick={() => navigate('/login')}
          >
            Back to Login
            {' '}

          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateAccount;
