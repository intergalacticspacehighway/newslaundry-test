import { useReducer, useEffect } from "react";

const fetchArticles = async () => {
  // const res = await fetch(
  //   "https://cors-anywhere.herokuapp.com/https://ace.qtstage.io/api/v1/collections/entertainment"
  // );
  // const body = await res.json();
  await delay(500);
  const body = require("./data.json");
  return body;
};

const initialState = {
  data: { items: [] },
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: null };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "failure":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useArticles = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: "loading" });
    try {
      const data = await fetchArticles();
      dispatch({ type: "success", payload: data });
    } catch (error) {
      dispatch({ type: "failure", payload: error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { state, refetch: fetchData };
};

async function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
