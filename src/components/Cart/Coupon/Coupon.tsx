import style from './Coupon.module.css'

function Coupon() {
  return (
    <div className={style.couponContainer}>
      <h3>Apply Coupon</h3>
      <div>
        <input className={style.couponInput} type="text" maxLength={9} placeholder="Enter Your Coupon"  />
        <button disabled>Apply</button>
      </div>
    </div>
  );
}

export default Coupon;
