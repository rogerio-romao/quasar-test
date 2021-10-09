export default function () {
  return {
    featured: [
      {
        id: 1,
        name: "React Realtime Chat App",
        // image: require("../assets/chat.png"),
        shortDesc: "A realtime chat application a la Whatsapp.",
        longDesc:
          "This is a React application that uses Firebase for the backend. I am using Realtime Database, Authentication, Storage, Hosting and Functions. The app is using the latest React syntax, with Hooks, including custom hooks, for things like api calls, media queries and modal windows. Uses the Notification api to send messages to users and RSuite UI library.",
        source: "https://github.com/rogerio-romao/react-chat-app",
        live: "https://react-chat-app-fca7d.web.app/",
      },
      {
        id: 2,
        name: "Online Portfolio/CV",
        // image: require("../assets/portfolio.png"),
        shortDesc: "My online portfolio / CV website",
        longDesc:
          "This website uses Vue as the framework with heavy use of Vuex for the state (separate modules for each component), with bespoke components for every section of the app and clear separation of concerns between data and presentation, where Tailwind is used for most CSS. Deployed on Netlify via Github integration.",
        source: "https://github.com/rogerio-romao/rogerio",
        live: "#",
      },
      {
        id: 3,
        name: "Idle DJ Game",
        // image: require("../assets/idle-dj.png"),
        shortDesc: "Idle / clicker game made with Vue and Vuex.",
        longDesc:
          "Still a work in progress, the idea here, was to experiment using Vuex to the full capacity. There is a tremendous amount of state and inter-dependencies, extensive use of modules, actions and mutations.",
        source: "https://github.com/rogerio-romao/idle_dj",
        live: "https://silly-lamport-fbfed0.netlify.app/",
      },
      {
        id: 4,
        name: "The Spiral",
        // image: require("../assets/spiral.png"),
        shortDesc: "A JS music player / visualiser / generative art.",
        longDesc:
          "Very proud of this one, programmed from scratch, pushing the envelope with animation and canvas, custom functions including a stagger using requestanimationframe, and a custom music player. Won a Codepen Pick! Also works as a standalone desktop app, planning to have this for sale in App Store.",
        source: "https://codepen.io/rogerio-romao/pen/mdevOwm",
        live: "https://codepen.io/rogerio-romao/full/mdevOwm",
      },
      {
        id: 5,
        name: "Netflix Clone",
        // image: require("../assets/netflix-clone.png"),
        shortDesc: "Netflix clone using TMDB API with movie trailer previews.",
        longDesc:
          "This is a React application that is hosted on Firebase, done using Hooks and functional components. The data is coming from the TMDB API, and each title can be clicked to watch a movie preview.",
        source: "https://github.com/rogerio-romao/netflix-clone-react",
        live: "https://netflix-clone-f2569.web.app/",
      },
      {
        id: 6,
        name: "Music Player",
        // image: require("../assets/music-player.png"),
        shortDesc: "A javascript music player. Simple but beautiful and solid.",
        longDesc:
          "I wanted to program something similar to Winamp in Javascript and learn how to handle audio on the web. I am very pleased with the look and functionality i managed to include, and have some ideas to expand it in the future.",
        source: "https://codepen.io/rogerio-romao/pen/vYNvBzd",
        live: "https://codepen.io/rogerio-romao/full/vYNvBzd",
      },
      {
        id: 7,
        name: "The Randomizer",
        // image: require("../assets/randomizer.png"),
        shortDesc:
          "An app that gives you a random value on different categories.",
        longDesc:
          "This is an app that has several categories like countries, colors, number, music keys etc, and the app will get a random value from them. App built in VueJS with Vuetify for the interface, and using a couple of API's for some of the categories.",
        source: "https://codepen.io/rogerio-romao/pen/Baoqvmm",
        live: "https://codepen.io/rogerio-romao/full/Baoqvmm",
      },
      {
        id: 8,
        name: "Converse",
        // image: require("../assets/converse.png"),
        shortDesc: "A responsive units conversion app.",
        longDesc:
          "Unit Conversion Program, does distances, weights and temperatures. Sleek flat style design and attention to user experience were my focus, as well as functional and well structured and documented code. Built using JQuery.",
        source: "https://codepen.io/rogerio-romao/pen/RwPaaRR",
        live: "https://codepen.io/rogerio-romao/full/RwPaaRR",
      },
      {
        id: 9,
        name: "Guess The Number",
        // image: require("../assets/guess-number.png"),
        shortDesc: "Guess the number game.",
        longDesc:
          "My take on the common programming challenge of Guess the Number game. I tried to make it into as polished an app as possible - attention to details, a nice visualizer pattern for the guesses, automatic adjustment of the maximum guesses determined by the max number chosen by the user and a nice interface.",
        source: "https://codepen.io/rogerio-romao/pen/XWbQbbN",
        live: "https://codepen.io/rogerio-romao/full/XWbQbbN",
      },
      {
        id: 10,
        name: "Game of Life",
        // image: require("../assets/gol.png"),
        shortDesc: "My version of the classic Conway's Game of Life.",
        longDesc:
          "This was an entry for a Game of Life challenge in Codepen. Programmed a version of the classic game of life, with a feature to draw your own patterns, and learned a lot while doing so!",
        source: "https://codepen.io/rogerio-romao/pen/VwvbdZE",
        live: "https://codepen.io/rogerio-romao/full/VwvbdZE",
      },
    ],
  };
}
