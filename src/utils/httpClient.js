const api = "https://api.themoviedb.org/3";

console.log(process.env.REACT_APP_BEARER_AUTHORIZATION);

export function get(path) {
  return fetch(api + path, {
    headers: {
      Authorization: `${process.env.REACT_APP_BEARER_AUTHORIZATION}`,
      "Content-Type": `${process.env.REACT_APP_CONTENT_TYPE}`,
    },
  }).then((response) => response.json());
}
