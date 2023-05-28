import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../routes/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoives] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const getMovies = async () => {
    const res1 = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    const json1 = await res1.json();
    setMoives(json1.data.movies);
    const res2 = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=like_count"
    );
    const json2 = await res2.json();
    setMovies2(json2.data.movies);
    //console.log(json2.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.home__container}>
          <div className={styles.rating__movie_box}>
            <h2 className={styles.title__box}>Top rating {movies.length}</h2>
            <div className={styles.movie__box}>
              <div className={styles.movies}>
                {movies.map((x) => (
                  <Movie
                    key={x.id}
                    id={x.id}
                    coverImg={x.medium_cover_image}
                    title={x.title}
                    summary={x.summary}
                    genres={x.genres}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.likeCount__movie_box}>
            <h2 className={styles.title__box}>
              Top Like Movie {movies.length}
            </h2>
            <div className={styles.likeCount__box}>
              <div className={styles.movie__box}>
                <div className={styles.movies}>
                  {movies2.map((x) => (
                    <Movie
                      key={x.id}
                      id={x.id}
                      coverImg={x.medium_cover_image}
                      title={x.title}
                      summary={x.summary}
                      genres={x.genres}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
