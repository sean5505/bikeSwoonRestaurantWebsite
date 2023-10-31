import Layout from "../../components/Layout";
import style from "./Cart.module.css";
import CartContainer from "../../components/Cart/CartContainer/CartContainer";
import { useContext } from "react";
import { ThemeContext } from "../../context/AppContext";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";

function Cart() {
  const { theme } = useContext(ThemeContext);
  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      <Layout>
        <section
          className={style.container}
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.secondaryColor,
          }}
        >
          <h2 className={style.cartHeader}>Your Cart</h2>
          {cart.length === 0 ? (
            <div>
              <p>The cart is empty</p>
              <Link to="/menu">
                <button>Order Now</button>
              </Link>
            </div>
          ) : (
            <CartContainer />
          )}
        </section>
      </Layout>
    </>
  );
}

export default Cart;
