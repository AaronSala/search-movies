const APILINK ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI="https://api.themoviedb.org/3search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";

const main= document.getElementById('section');
const search= document.getElementById('query');
const form= document.getElementById('form');

returnMovies(APILINK)
function returnMovies (url){
    fetch(url)
    .then(response => response.json())
    .then (function(data) {
      
      data.results.forEach(element => {
        const div_card = document.createElement('div');
        div_card.setAttribute('class','card');

        const div_row = document.createElement('div');
        div_row.setAttribute('class','row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class','column');

        const image = document.createElement('img');
        image.setAttribute('class','thumbnail');
        image.setAttribute('id','image');

        const tittle = document.createElement('h3');
        tittle.setAttribute('id','tittle');

        const center = document.createElement('center');
        
        tittle.innerHTML = `${element.title}`;
        image.src=IMG_PATH+element.poster_path;

        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(tittle);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        main.appendChild(div_row);
      });
    });
    


form.addEventListener('submit', (e)=>{
  e.preventDefault();
  main.innerHTML='';

  const searchItem=search.value;

  if(searchItem){
    returnMovies(SEARCHAPI + searchItem);
    search.value="";
  }
})
}