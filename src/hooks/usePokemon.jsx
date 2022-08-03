import { useReducer, useRef, useEffect } from "react";
import { getPokemon } from "../services/pokemon";

const initialState = {
  error: undefined,
  data: undefined,
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...initialState, loading: true, error: undefined };
    case "fetched":
      return { ...initialState, data: action.payload, loading: false };
    case "error":
      return { ...initialState, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default function usePokemon(id) {
  const cache = useRef({});
  const [pokemonData, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "loading" });
      if (cache.current[id] !== undefined)
        return dispatch({ type: "fetched", payload: cache.current[id] });

      try {
        let data = await getPokemon(id);
        cache.current = { ...cache.current, [data.id]: data };
        return dispatch({ type: "fetched", payload: data });
      } catch (error) {
        return dispatch({ type: "error", payload: error.message });
      }
    };
    console.log(id);
    if (id) fetchData(id);
  }, [id]);

  return pokemonData;
}
