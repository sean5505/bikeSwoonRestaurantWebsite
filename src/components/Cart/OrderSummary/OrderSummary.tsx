import style from "./OrderSummary.module.css";
import { Link } from "react-router-dom";
import ClearCart from "../../Buttons/ClearCart";

type Props = {
  totalPrice: number;
  totalItems: number;
};
function OrderSummary(props: Props) {
  const taxRate = 0.06; // Maryland Sales Tax: 6%
  const taxReduction: number = parseFloat(
    (props.totalPrice * taxRate).toFixed(2)
  );
  const newTotal = (props.totalPrice + taxReduction).toFixed(2);

  return (
    <div className={style.orderSummaryContainer}>
      <h3>Order Summary</h3>
      <table className={style.orderSummary}>
        <tbody>
          <tr>
            <td>Cart Subtotal:</td>
            <td>${Number(props.totalPrice).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Items:</td>
            <td>{props.totalItems}</td>
          </tr>
          <tr>
            <td>Sales Tax</td>
            <td>${taxReduction.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>${newTotal}</td>
          </tr>
        </tbody>
      </table>
      <div className={style.orderButtons}>
       <ClearCart/>
        <Link to="/menu">
          <button>Add more items</button>
        </Link>
        <button disabled>Proceed To Checkout</button>
      </div>
    </div>
  );
}

export default OrderSummary;
