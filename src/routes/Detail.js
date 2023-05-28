import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    //console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.detail__container}>
          <div className={styles.background__img__box}>
            <img
              src={detail.large_cover_image}
              alt={detail.title}
              className={styles.background__large__img}
            ></img>
          </div>
          <div className={styles.detail__box}>
            <div className={styles.img__box}>
              <img
                src={detail.large_cover_image}
                alt={detail.title}
                className={styles.large__img}
              ></img>
            </div>
            <div className={styles.info__box}>
              <div className={styles.title__box}>
                <h3
                  className={styles.title}
                >{`  ${detail.title} (${detail.year})`}</h3>
              </div>
              <div className={styles.rating__box}>
                <h3 className={styles.rating}>{`Rating | ${detail.rating}`}</h3>
              </div>
              <div className={styles.runtime__box}>
                <h3
                  className={styles.runtime}
                >{`Running Time | ${detail.runtime}m`}</h3>
              </div>
              <div className={styles.summary__box}>
                <div className={styles.summary}>Summary |</div>
                <p className={styles.description}>{detail.description_full}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
