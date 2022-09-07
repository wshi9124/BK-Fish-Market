import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../CommonComponents/Logo';
import AdminNavBar from '../../CommonComponents/AdminNavBar';
import Footer from '../../CommonComponents/Footer';

function AddFish() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('Steak or fillet');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [errorMessages, setErrorMessages] = useState<[] | ''>([]);
  const activeStatus = 'true';

  const handleCreateNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('active', activeStatus);

    fetch('/products', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          res.json()
            .then(() => {
              setErrorMessages([]);
              navigate('/admin');
            });
        } else {
          res.json()
            .then(({ errors }) => {
              setErrorMessages(errors);
            });
        }
      });
  };

  return (
    <div className="mb-10">
      <Logo />
      <AdminNavBar />
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-5xl mt-10">Add New Product</h1>
        <p className="text-center text-red-500 text-lg my-5">
          {errorMessages ? errorMessages.map((error) => (
            <span key={error}>
              {error}
              ,
              {' '}
            </span>
          )) : null}
        </p>
        <div className="flex flex-col w-2/5 pt-0 shadow-lg rounded-lg px-6 py-5 mb-10">
          <form onSubmit={handleCreateNewProduct}>
            <p className="text-lg font-semibold mb-2 mt-7 text-left">Name</p>
            <label htmlFor="name">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Category</p>
            <select
              className="w-full text-xl py-2 px-3 border cursor-default"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Steak or fillet">Steak or Fillet</option>
              <option value="Whole fish">Whole Fish</option>
              <option value="Shellfish">Shellfish</option>
              <option value="Other">Other</option>
            </select>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Price</p>
            <label htmlFor="price">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Description</p>
            <label htmlFor="description">
              <textarea
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                name="description"
                placeholder="Add Description"
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <p className="mt-2">Upload Event Pic</p>
            <input
              className="ml-20 mt-1"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}

            />
            <button
              className="bg-slate-900 text-white mt-6 py-3 px-6 rounded-md hover:bg-slate-800 w-full text-xl"
              type="submit"
            >
              Add New Product
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddFish;
