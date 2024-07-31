import { useState, useEffect } from "react";

const key = "3414cf68";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movie not found");
          }
          setMovies(data.Search);
        } catch (err) {
          // console.log(err);
          // console.log(err.message);
          // setError(err.message || "Movie not found");
          if (err.name !== "AbortError") {
            setError(err.message || "Movie not found");
          }
        } finally {
          setIsLoading(false);
        }
      }

      // returning from function if the movie length is less than 3
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  //   return variable that are used in app2v
  return { movies, isLoading, error };
}
