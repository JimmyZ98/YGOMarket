export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://ygomarket-backend.herokuapp.com/"
    : "http://localhost:8080";
