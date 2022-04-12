Vue.component("moviecomp", {
  template: `<div id="something">
  <div>
  <h1 id=centerIt>{{overviews}}</h1>

  <img v-bind:src=link+pictures>
  </div>
  </div>`,

  props: ["overviews", "pictures"],

  data() {
    return {
      link: "https://image.tmdb.org/t/p/w500",
    };
  },
  methods: {},
});
//Hey! I remembered how to do it
const movies = new Vue({
  //location
  el: "#movies",
  //variables
  data: {
    //Super Secret messgae
    message: "Movie Mania (Patent Pending)",

    //For upcoming projects, probably
    upcomingMoves: "Upcoming Movies",

    //The big Kahuna, Movie array to put each movie into it's own, category, spot in line
    movie: [
      //four different movies, four different positions of the array
      {
        original_title: "The Incredibles",
        backdrop_path: "images/incredibles.jpg",
        overview:
          "In this lauded Pixar animated film, married superheroes Mr. Incredible (Craig T. Nelson) and Elastigirl (Holly Hunter) are forced to assume mundane lives as Bob and Helen Parr after all super-powered activities have been banned by the government.",
      },

      {
        original_title: "Shark Tales",
        backdrop_path: "images/sharktales.jpg",
        overview:
          "It tells the story of a fish named Oscar (Smith) who falsely claims to have killed Frankie (Imperioli), the son of a shark mob boss named Don Lino (De Niro), to advance his community standing and teams up with the mobster's other son Lenny (Black) to keep up the other facade.",
      },

      {
        original_title: "DodgeBall",
        backdrop_path: "images/dodgeball.jpg",
        overview:
          "Average Joe's Gym and its owner, Peter La Fleur (Vince Vaughn), are both down on their luck. A fancy competing gym called Globo-Gym, run by the maniacal health nut White Goodman (Ben Stiller), is about to put Average Joe's out of business unless Peter can raise $50,000 to keep his mortgage.",
      },

      {
        original_title: "Spider-Man 2",
        backdrop_path: "images/spiderman.jpg",
        overview:
          "When a failed nuclear fusion experiment results in an explosion that kills his wife, Dr. Otto Octavius (Alfred Molina) is transformed into Dr. Octopus, a cyborg with deadly metal tentacles.",
      },
    ],
  },
  //Functions
  methods: {
    //Everytime you click the button, a new random number is printed and a new overview is outputed
    randMovie() {
      //Straight from the midterm V
      var randomNum1 = Math.floor(Math.random() * 19);
      //Softcode
      var overview = document.getElementById("bigPicture");
      //Classic JS force changing the innerHTML of the div with a question mark on it
      overview.innerHTML =
        this.movie[randomNum1].overview +
        " " +
        `<p id="formatIt">` +
        this.movie[randomNum1].title +
        `</p>`;
    },
    useAPI() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=abe8c274af0dc3b9b300a4f3a1129937&language=en-US&page=1"
        )
        .then((response) => {
          console.log(response);
          console.log(response.data.results);
          this.movie = response.data.results;
        });
    },
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=abe8c274af0dc3b9b300a4f3a1129937&language=en-US&page=1"
      )
      .then((response) => {
        console.log(response);
        this.movie = response.data.results;
      });
  },
});
