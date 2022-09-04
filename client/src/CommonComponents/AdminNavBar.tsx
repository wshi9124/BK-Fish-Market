import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogOutNavtab from './LogOutNavTab';

function AdminNavBar() {
  const navigate = useNavigate();

  return (
    <div className="flex text-white justify-center bg-slate-900 mx-auto text-lg">
      <ul className="flex">
        <button type="button" onClick={() => navigate('/admin')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Edit All Fish</button>
        <button type="button" onClick={() => navigate('/addFish')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Add New Fish</button>
        <LogOutNavtab />
      </ul>
    </div>

  );
}

export default AdminNavBar;
