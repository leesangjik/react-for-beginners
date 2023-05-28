import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <Link
        to={`/movie/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={styles.img__box}>
          <img src={coverImg} alt={title} className={styles.movie__img} />
        </div>
        <div className={styles.title__box}>{title}</div>
      </Link>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
