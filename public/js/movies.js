//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getMovieData() {
    var request = new XMLHttpRequest();
    request.open('GET', movie_url, true);

    //This function will be called when data returns from the web api
    request.onload = function() {
        //get all the movies records into our movie array
        movie_array = JSON.parse(request.responseText);
        fetchComments();
        displayMovies(category);
    };
    //This command starts the calling of the movies web api
    request.send();
}

function displayMovies(category) 
{    
    var table = document.getElementById("moviesTable");    
    var movieCount = 0;    
    var message = "";    

    table.innerHTML = "";    
    totalMovies = movie_array.length;    
    for (var count = 0; count < totalMovies; count++) 
    {                        
            var thumbnail = movie_array[count].img;            
            var title = movie_array[count].name;            
            var cell = '<div class="col-md-3" style="float: none; margin: 50px auto;">' +                          
                            '<div class="flip-container" >' +              
                                '<div class="flipper">' +
                                    '<div class="front">' + 
                                        '<a id="movies" href="#" data-toggle="modal" data-target="#movieModal" item=' + count + '>'+
                                            '<img src=' + thumbnail + ' width = "250" height = "150" />'+
                                        '</a>'+
                                    '</div>'+                              
                                    '<div class="back">'+                                   
                                        '<div class="bg-dark mystyle text-center" >'+
                                            '<span><br>' + title + '</span><br>' +
                                            '<button href="#" data-toggle="modal" data-target="#movieModal" item="' + count + '" type="button" class="btn btn-sm" onClick="showMovieDetails(this)" >See More</button> '+                     
                                            '<button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-sm" onClick="showMovieComments(this)" >Reviews</button>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>' +
                            '</div>' +
                        '</div>'; 
             table.insertAdjacentHTML('beforeend', cell);            
             movieCount++;            
    }    
    message = movieCount + " Restaurants " + category;    
    document.getElementById("summary").textContent = "Restaurants";    
    document.getElementById("parent").textContent = "";
}

//This function is to display the "Now Showing" movies
function listNowShowingMovies() {
    category = "Now Showing";
    displayMovies(category);
    document.getElementById("nowMenu").classList.add("active");
    document.getElementById("comingMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listComingMovies() {
    category = "Coming Soon";
    displayMovies(category);
    document.getElementById("nowMenu").classList.remove("active");
    document.getElementById("comingMenu").classList.add("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showMovieDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("movieTitle").textContent = movie_array[item].name;
    document.getElementById("moviePoster").src = movie_array[item].img;
    document.getElementById("genre").textContent = movie_array[item].neighbourhood;
    document.getElementById("director").textContent = movie_array[item].postalCode;
    document.getElementById("cast").textContent = movie_array[item].category;
    document.getElementById("release").textContent = movie_array[item].hours;
    document.getElementById("story").textContent = movie_array[item].address;
    document.getElementById("trailer1").src = movie_array[item].video1;
    document.getElementById("trailer2").src = movie_array[item].video2;
}

//This function opens a new window/tab and loads the
//particular movie in the cinema website
function buyTicket() {
    window.open(movie_array[currentIndex].website, "_blank");
}