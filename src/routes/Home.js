import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../routes/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoives] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
    );
    const json = await response.json();
    setMoives(json.data.movies);
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
      )}
    </div>
  );
}

export default Home;
