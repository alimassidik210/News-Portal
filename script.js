const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const keyword = document.querySelector(".keyword-value");
  fetch(
    `https://newsapi.org/v2/everything?q=${keyword.value}&apiKey=2ccb522267454aa29085fc0e2003fa2c`
  )
    .then((response) => response.json())
    .then((response) => {
      const newsSearch = response.articles;
      containerNews.innerHTML = render(newsSearch);
    });
});

const containerNews = document.querySelector(".container-news");

axios
  .get(
    "https://newsapi.org/v2/top-headlines?apiKey=2ccb522267454aa29085fc0e2003fa2c&country=us"
  )
  .then((response) => {
    containerNews.innerHTML = render(response.data.articles);
  });

function render(response) {
  let news = "";
  response.forEach((m) => {
    news += `
        <div class="col-md-4 my-3">
          <div class="card ">
            <img src="${m.urlToImage}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${m.title}</h5>
              <p class="card-text text-muted">
              ${m.publishedAt}
              </p>
              <a href=" ${m.url}" target="_/blank" class="btn btn-warning">Read More Here</a>
            </div>
          </div>
        </div>`;
  });
  return news;
}
