export default function () {
  return {
    projects: [
      {
        id: 1,
        name: "Converse",
        type: "Front-End",
        shortDesc: "A responsive units conversion app.",
        technologies: ["Javascript", "JQuery", "CSS3", "HTML5"],
        longDesc:
          "Unit Conversion Program, does distances, weights and temperatures. Sleek flat style design and attention to user experience were my focus, as well as functional and well structured and documented code. Built using JQuery.",
        details: true,
      },
      {
        id: 2,
        name: "Todo-List",
        type: "Front-End",
        shortDesc: "A todo list App made with JQuery.",
        technologies: ["Javascript", "JQuery", "CSS3", "HTML5"],
        longDesc:
          "This project uses Sass for the presentation side of things, which i worked a lot on and am pretty happy with. I use variables to make it easier, and implemented a theming functionality. Learnt how to include a drag and drop functionality to the interface as well, after researching settle on JQuery for that. App is responsive using media queries.",
        details: true,
      },
      {
        id: 3,
        name: "Markdown Editor / Previewer",
        type: "Front-End",
        shortDesc:
          "An app where you can write Markdown language and see the rendered result",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "A Markdown language editor / previewer app coded from scratch using a couple npm packages.",
      },
      {
        id: 4,
        name: "Rock Paper Scissors",
        type: "Front-End",
        shortDesc: "A play on the classic game",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "Someone was playing this on a movie I was watching, and I set out to try to program this game, as fast as possible as a challenge, this was roughly 2hrs work.",
      },
      {
        id: 5,
        name: "Pomodoro Clock",
        type: "Front-End",
        shortDesc: "Pomodoro Session Clock",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "A timer app with session and break intervals, dealing with the complexities of time and interval management in coding. There is a session timer and a break timer and the cycle through continuously, with independent intervals, and with a beep everytime a timer runs out. The interface colors switch as well between session and break.",
        details: true,
      },
      {
        id: 6,
        name: "Guess the Number game",
        type: "Front-End",
        shortDesc: "Guess the number game.",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "My take on the common programming challenge of Guess the Number game. I tried to push this simple problem into as much of a polished app as possible with attention to all details, a nice visualizer pattern for the guesses, automatic adjustment of the maximum guesses determined by the max number chosen by the user and a nice clean interface.",
        details: true,
      },
      {
        id: 7,
        name: "The Collatz Sequence",
        type: "Front-End",
        shortDesc: "A visualizer tool for the famous math sequence.",
        technologies: ["Canvas", "Animation", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "This was mainly about trying to develop working with canvas, animation and requestanimationframe. I used a math sequence as the base to program a graph engine on canvas that adjusts to the kind of data it is receiving. Fully commented out code as to how it works.",
        details: true,
      },
      {
        id: 8,
        name: "The Spiral",
        type: "Front-End",
        shortDesc: "A JS music player / visualiser / generative art",
        technologies: ["Canvas", "Animation", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "Very proud of this one, programmed from scratch, pushing the envelope with animation and canvas, custom functions including a stagger using requestanimationframe, and a custom music player. Winner of a Codepen Pick! Also works as a standalone desktop app, planning to have this for sale in App Store.",
        details: true,
      },
      {
        id: 9,
        name: "Game of Life",
        type: "Front-End",
        shortDesc: "My version of the classic Conway's Game of Life",
        technologies: ["Canvas", "Animation", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "This was an entry for a Game of Life challenge in Codepen. Programmed a version of the classic game of life, with a feature to draw your own patterns, and learned a lot while doing so!",
      },
      {
        id: 10,
        name: "The Randomizer",
        type: "Full-Stack",
        shortDesc:
          "An app that gives you a random value on different categories.",
        technologies: [
          "Vue",
          "Vuetify",
          "API's",
          "Javascript",
          "CSS3",
          "HTML5",
        ],
        longDesc:
          "This is an app that has several categories like countries, colors, number, music keys etc, and the app will get a random value from them. App built in VueJS with Vuetify for the interface, and using a couple of API's for some of the categories.",
        details: true,
      },
      {
        id: 11,
        name: "Music Player",
        type: "Front-End",
        shortDesc: "A javascript music player. Simple but beautiful and solid.",
        technologies: ["Javascript", "CSS3", "HTML5"],
        longDesc:
          "I wanted to program something similar to Winamp in Javascript and learn how to handle audio on the web. I am very pleased with the look and functionality i managed to include, and have some ideas to expand it in the future.",
        details: true,
      },
      {
        id: 12,
        name: "Password Generator",
        type: "Front-End",
        shortDesc: "An app to create random secure pesswords.",
        technologies: ["Vue", "Vuetify", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "Constructed using Vue and Vuetify. Select the length of the password you want to generate and if you want numbers and/or special characters included. You also get a handy button to copy the password to clipboard.",
        details: true,
      },
      {
        id: 13,
        name: "Online Portfolio/CV",
        type: "Full-Stack",
        shortDesc: "My online portfolio / CV website",
        technologies: [
          "Vue",
          "Vuex",
          "Tailwind",
          "FontAwesome",
          "Git",
          "Netlify",
          "Javascript",
          "CSS3",
          "HTML5",
        ],
        longDesc:
          "This website uses Vue as the framework with heavy use of Vuex for the state (separate modules for each component), with bespoke components for every section of the app and clear separation of concerns between data and presentation, where Tailwind is used for most CSS. Deployed on Netlify via Github integration.",
        details: true,
      },
      {
        id: 14,
        name: "The Catstagram",
        type: "Full-Stack",
        shortDesc: "A mockup of an Instagram like app",
        technologies: [
          "Vue",
          "Nuxt",
          "Vuetify",
          "Axios",
          "APIs",
          "Git",
          "Netlify",
          "Javascript",
          "CSS3",
          "HTML5",
        ],
        longDesc:
          "This was done with Vue as the framework with Nuxt bootstrapping and Vuetify for the presentation. Uses async API calls via Axios.",
        details: true,
      },
      {
        id: 15,
        name: "Music Database",
        type: "Front-End",
        shortDesc: "A music database to catalogue your tracks.",
        technologies: [
          "Vue",
          "Nuxt",
          "Vuetify",
          "Git",
          "Netlify",
          "Javascript",
          "CSS3",
          "HTML5",
        ],
        longDesc:
          "Having been a DJ, this is something I wanted to create to help me catalogue my collection. It is done using Vue's Vuex store, with the interface using the familiar Goggle Material Design specs in dark mode, courtesy of Vuetify. App build using Nuxt framework. You can add tracks, edit them and delete them, with fields for the most common properties.",
      },
      {
        id: 16,
        name: "Coffe Shop",
        type: "Full-Stack",
        shortDesc: "A shop where you can buy coffee products.",
        technologies: [
          "Gatsby",
          "React",
          "Contentful",
          "GraphQL",
          "SnipCart",
          "Git",
          "Netlify",
          "Javascript",
          "CSS3",
          "HTML5",
        ],
        longDesc:
          "This is an e-commerce website based on Gatsby and React, with a GraphQL backend, that uses the Contentful API for the content management and FormSpree for the contact form. It has continuous integration when deploying to Github via Netlify and also a webhook setup where if the user changes only the Contentful data and not the code itself, a build is triggered on Netlify. The cart is an implementation of SnipCart based on their API and Gatsby plugin.",
      },
      {
        id: 17,
        name: "React Realtime Chat App",
        type: "Full-Stack",
        shortDesc: "A realtime chat application a la Whatsapp.",
        technologies: [
          "React",
          "Firebase",
          "Hosting",
          "Realtime Database",
          "Git",
          "Cloud Functions",
          "Javascript",
          "CSS3",
          "HTML5",
        ],
        longDesc:
          "This is a React application that uses Firebase for the backend. I am using Realtime Database, Authentication via Google and Facebook, Storage, Hosting and Functions. The app is using the latest React syntax, with Hooks, including several custom hooks, for things like api calls, media queries and modal windows. Also uses the Notification api to send messages to users and RSuite UI component library.",
        details: true,
      },
      {
        id: 18,
        name: "Netflix Clone",
        type: "Full-Stack",
        shortDesc: "Netflix clone using TMDB API with movie trailer previews.",
        technologies: [
          "React",
          "Firebase",
          "Hosting",
          "API",
          "Javascript",
          "CSS3",
          "HTML5",
        ],
        longDesc:
          "This is a React application that is hosted on Firebase. The front-end is done using Hooks and functional components. The data is coming from the TMDB API, and each title can be clicked on to start and stop a movie preview. This is done using a couple of npm packages.",
      },
      {
        id: 19,
        name: "Idle DJ Game - Vue.js",
        type: "Front-End",
        shortDesc: "Idle / clicker game made with Vue and Vuex.",
        technologies: ["Vue", "Vuex", "Netlify", "Javascript", "CSS3", "HTML5"],
        longDesc:
          "Still a work in progress, the idea here, more than making something fun to play or with fancy graphics (maybe in the future), was to experiment and learn using Vuex to the full capacity, since there is a tremendous amount of state and inter-dependencies between all the parts of the game. So there is extensive use of modules and a big number of actions and mutations, such as you would have on a real world project.",
        details: true,
      },
    ],
  };
}
