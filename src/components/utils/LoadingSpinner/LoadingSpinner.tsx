
import style from "./LoadingSpinner.module.css"; // You can create a separate CSS file for styling the spinner

const LoadingSpinner = () => {
  return (
    <div className={style.container}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;