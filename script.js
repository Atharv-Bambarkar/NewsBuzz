const API_KEY="82d2b55b3ccb41148a9165d9000abb7f";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=>fetchNews("India"));


async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
  bindData(data.articles);

}


function bindData(articles) {
  const cardContainer=document.getElementById("card-container");
  const newsCardTemplate=document.getElementById("template-news-card");
  cardContainer.innerHTML="";
  articles.forEach((article) => {
    if(!article.urlToImage) return;
    const cardClone=newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone,article);
    cardContainer.appendChild(cardClone);
  })
}

function fillDataInCard(cardClone,article) {
  const newsImg=cardClone.querySelector('#news-img');
  const newsTitle=cardClone.querySelector('#news-title');
  const newsSource=cardClone.querySelector('#news-source');
  const newsDesc=cardClone.querySelector('#news-desc');

  newsImg.src=article.urlToImage;
  newsTitle.innerHTML=article.title;
  newsDesc.innerHTML=article.description;


  const date= new Date(article.publishedAt).toLocaleString("en-IN",{
    timeZone:"Asia/Jakarta"
  });

  newsSource.innerHTML=`${article.source.name} 🔹 ${date}`;
}