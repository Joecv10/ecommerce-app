import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.style.scss";
import CartIconSVG from "../../assets/shopping-bag.svg?react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <CartIconSVG className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
