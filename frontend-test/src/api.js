const API_URL = "https://backend-test-omega-olive.vercel.app/";

export async function fetchMessage() {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data;
}
