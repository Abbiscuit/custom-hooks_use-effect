import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log("useEffect Runs");

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for the resources");
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setErrorMessage(null);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsPending(false);
      });

    return () => {
      console.log("Unmount");
    };
  }, [url]);

  return { data, isPending, errorMessage };
  // Arrayでリターンも可能だが、Objectの方が取扱が容易な場合がある(例：　Custom Hooks利用時のdestructuringなど)
  // return [data, isPending, errorMessage];
};

export default useFetch;
