const API_URL = "https://your-backend-url.vercel.app/api";

export async function fetchMessage() {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data;
}
