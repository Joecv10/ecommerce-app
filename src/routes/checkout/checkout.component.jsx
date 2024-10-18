import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import "./checkout.style.scss";
import { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return <CheckOutItem key={id} cartItem={cartItem} />;
      })}

      <span className="total">{`$ ${cartTotal}`}</span>
    </div>
  );
};

export default CheckOut;
