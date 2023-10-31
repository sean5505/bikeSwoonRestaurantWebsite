import style from "./Testimonials.module.css";
import { Star } from "@mui/icons-material";
import { DocumentData } from "firebase/firestore";

type Props = {
  item: DocumentData;
  key: number;
};

function CreateTestimonial(props: Props) {

  return (
    <div className={style.review} key={props.key}>
      <img
        className={style.reviewImg}
        src={props.item.img}
        alt={props.item.name}
        title={props.item.name}
      />
      <h3 className={style.reviewName}>{props.item.name}</h3>
      <span className={style.rating}>
      {Array.from({ length: props.item.rating }, (_, index) => (
    <Star key={index} />
  ))}
      </span>
      <p className={style.description}>"{props.item.review}</p>
    </div>
  );
}

export default CreateTestimonial;
