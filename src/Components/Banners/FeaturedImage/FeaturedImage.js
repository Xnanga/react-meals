import styles from "./FeaturedImage.module.css";

const FeaturedImage = (props) => {
  return (
    <div className={styles["featured-img-container"]}>
      <img
        className={styles["featured-img"]}
        src={props.imgSrc}
        alt={props.imgAlt}
      />
    </div>
  );
};

export default FeaturedImage;
