async function searchMovies(query){
    try{
        const url = `https://www.omdbapi.com/?s=${query}&apikey=ffb0eb42`;
        let res = await fetch(url);
        let data = await res.json();
        return data.Search;
    }catch(error){
        console.log('error: ', error);
    }
}

async function main(){
    let query = document.getElementById('query').value;
    let res = searchMovies(query);
    let data = await res;
    displayMovies(data);
    console.log(data);
}

let id;
function debounceFunction(func, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    }, delay);
}

const moviesDiv = document.getElementById('movies');

function displayMovies(movies){
    moviesDiv.innerHTML = null;
    if(movies === undefined){
        let div = document.createElement('div');
        div.className = 'col-12 text-center';
        let p = document.createElement('p');
        p.innerText = 'Movie not found';
        div.append(p);
        moviesDiv.append(div);
        return false;
    }
    else{
        movies.forEach(el => {
            let div = document.createElement('div');
            div.className = 'col-md-4 mb-4';

            div.innerHTML = `
                <div class="card h-100">
                    <img src="${el.Poster}" class="card-img-top" alt="${el.Title}">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${el.Title}</h5>
                        <p class="card-text">Type: ${el.Type}</p>
                        <p class="card-text">Year: ${el.Year}</p>
                    </div>
                </div>
            `;
            
            moviesDiv.append(div);

            div.addEventListener('click', function(){
                movieDesc(el);
            });
        });
    }
}

const moviesDesc = document.getElementById('movieDesc');

function movieDesc(movie){
    moviesDesc.innerHTML = null;
    let div = document.createElement('div');
    div.className = 'card mb-4';

    div.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${movie.Poster}" class="img-fluid rounded-start" alt="${movie.Title}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Title: ${movie.Title}</h5>
                    <p class="card-text">Type: ${movie.Type}</p>
                    <p class="card-text">Year: ${movie.Year}</p>
                </div>
            </div>
        </div>
    `;
    
    moviesDesc.append(div);
}
