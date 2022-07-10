import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
function App() {
  //ini untuk mengatur state
  const [cartIsShown, setCartIsShown] = useState(false);
  //saat cart muncul
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  //saat cart hilang
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  //akhir dari mengatur state

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
