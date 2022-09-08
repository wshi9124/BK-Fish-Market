import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import AdminNavBar from '../../CommonComponents/AdminNavBar';
import Footer from '../../CommonComponents/Footer';

function EditProductPage() {
  const navigate = useNavigate();
  const { productItem, setProductItem } = useContext(AuthContext);
  const turnNameToString = String(productItem.name);
  const [name, setName] = useState<string>(turnNameToString);
  const turnCategoryToString = String(productItem.category);
  const [category, setCategory] = useState<string>(turnCategoryToString);
  const turnPriceToString = String(productItem.price);
  const [price, setPrice] = useState<string>(turnPriceToString);
  const turnDescriptionToString = String(productItem.description);
  const [description, setDescription] = useState<string>(turnDescriptionToString);
  const [image, setImage] = useState<File | null>(null);
  const [errorMessages, setErrorMessages] = useState<[] | ''>([]);

  useEffect(() => {
    if (productItem.name === '') {
      navigate('/admin');
    }
  }, []);

  const handleEditProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);

    fetch(`/products/${productItem.id}`, {
      method: 'PATCH',
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

  const handleBackToAdminPage = () => {
    setProductItem({});
    navigate('/admin');
  };

  return (
    <div className="mb-6">
      <Logo />
      <AdminNavBar />
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-5xl mt-10">
          Edit Product -
          {' '}
          {productItem.name}
        </h1>
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
          <form onSubmit={handleEditProduct}>
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
              Update
              {' '}
              {productItem.name}
            </button>
            <div className="flex justify-end mr-5">
              <button
                className="mt-2  mr-1 hover:text-slate-600"
                type="button"
                onClick={handleBackToAdminPage}
              >
                Back to Admin Page
                {' '}

              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditProductPage;
