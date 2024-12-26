const API_URL = import.meta.env.VITE_API_URL as string;

export function fetchTodos() {
  return fetch(API_URL).then((res) => res.json());
}
