const api = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(api + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmZmYWYyYzBmZDk2ZGM1MmFjZDQ3YzE1M2Q1Y2Y5ZSIsInN1YiI6IjYyNWNlMmUyODU3MDJlMDA1MWVkZjk3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HWEQvy-zPOD_u-2VkMXMxrFBXCOXFD3zTG7Q3DzTNbI",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => response.json());
}
