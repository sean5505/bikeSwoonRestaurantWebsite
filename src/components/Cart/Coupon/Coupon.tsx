import { useState } from "react";
import style from "./Coupon.module.css";

function Coupon() {
  const [couponInput, setCouponInput] = useState<string>("");

  function updateCouponInput(e:any){
    setCouponInput(e.target.value)

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
          maxLength={9}
          placeholder="Enter Your Coupon"
        />
        <button disabled>Apply</button>
      </div>
    </div>
  );
}

export default Coupon;
