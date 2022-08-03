import { BASE_URL } from "../config";

export const getPokemon = async (id) => {
  return fetch(BASE_URL + id).then((res) => {
    if (!res.ok)
      return res.text().then((text) => {
        throw new Error(text);
      });
    return res.json();
  });
};
