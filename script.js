let searchBtn = document.getElementById("search-btn")
let resultMovie = document.querySelector(".result-movie")
let error404 = document.querySelector(".not-found")

let getMovie = () => {
    key = "9757a639";
    const  movieName = document.querySelector('.search-box input').value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    if (movieName.length <= 0) {
        error404.classList.add("hide");
      return;
    }
    else {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.Response == "True") {
            console.log(data)
            error404.classList.add("hide");
            resultMovie.innerHTML = `
              <div class="info">
                  <img src=${data.Poster} class="poster">
                  <div>
                      <h2>${data.Title}</h2>
                      <div class="rating">
                          <p class="fa-solid fa-star">
                          <h4>${data.imdbRating}</h4>
                      </div>
                      <div class="details">
                          <span>${data.Year} - </span>
                          <span>${data.Runtime}</span>
                      </div>
                      <div class="genre">
                          <div>${data.Genre.split(",").join("</div><div>")}</div>
                      </div>
                  </div>
              </div>
                <div class="about">
                    <div>
                        <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                    </div>
                    <div>
                        <h3>Cast:</h3>
                        <p>${data.Actors}</p>
                    </div>
                <div/>

          `;
          resultMovie.classList.add('fadeIn');
          }else{
            error404.classList.remove("hide");
            resultMovie.classList.add("hide")
          };
        });
    };
  };

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
document.addEventListener("DOMContentLoaded", getMovie);