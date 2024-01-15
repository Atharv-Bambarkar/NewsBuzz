const API_KEY="82d2b55b3ccb41148a9165d9000abb7f";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=>fetchNews("India"));


async function fetchNews(query) {
  const res = await  fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
}