import React, { useContext } from 'react';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

function Cart() {
  const { shoppingCart } = useContext(AuthContext);

  const renderCart = shoppingCart.map((product) => (
    <div key={product.id}>
      <h1>{product.name}</h1>
      <h1>{product.quantity}</h1>
      <img src={product.image_url} alt={product.name} />
    </div>
  ));

  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      <div>
        <h1 className="text-5xl mt-5 text-center">Cart</h1>
        {renderCart}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

// cartTotalItems, setCartTotalItems,setShoppingCart,
