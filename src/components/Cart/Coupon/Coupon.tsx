import { useState } from "react";
import style from "./Coupon.module.css";

type Props = {
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
};
function Coupon({ setTotalPrice, totalPrice }: Props) {
  const [couponInput, setCouponInput] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isCouponValid, setIsCouponValid] = useState<boolean>(false);

  const couponCodes = {
    tenPercent: ["10OFF"],
    twentyPercent: ["20OFF"],
    thirtyPercent: ["30OFF"],
  };

  function updateCouponInput(e: any) {
    setCouponInput(e.target.value);
    setMessage("");
  }

  function handleSubmit() {
    if (couponCodes.tenPercent.includes(couponInput)) {
      setMessage("10% Off applied");
      setIsCouponValid(true);
      setTotalPrice(totalPrice * 0.9);
    } else if (couponCodes.twentyPercent.includes(couponInput)) {
      setMessage("20% Off applied");
      setIsCouponValid(true);
    } else if (couponCodes.thirtyPercent.includes(couponInput)) {
      setMessage("30% Off applied");
      setIsCouponValid(true);
    } else {
      setMessage("Invalid coupon code");
    }
  }

  return (
    <div className={style.couponContainer}>
      <h3>Apply Coupon</h3>
      <div>
        <input
          className={style.couponInput}
          type="text"
          value={couponInput}
          onChange={(e) => updateCouponInput(e)}
          maxLength={6}
          placeholder="Enter Your Coupon"
          disabled={true} //{isCouponValid ? true : false}
        />
        <button
          type="submit"
          onClick={() => handleSubmit()}
          disabled={true} //{isCouponValid ? true : false}
        >
          Apply
        </button>
        {message && (
          <p className={isCouponValid ? style.message : style.error}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Coupon;
