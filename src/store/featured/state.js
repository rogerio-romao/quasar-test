export default function () {
  return {
    featured: [
      {
        id: 1,
        projectRef: 23,
        name: "Tchef - NPM package",
        image: require("../../assets/tchef.png"),
        shortDesc:
          "A NPM package that wraps the fetch API, and adds lots of useful features.",
        longDesc:
          "This is a NPM package that wraps the fetch API, and adds lots of useful features. It adds result type returns, so no more try-catch, typed responses, and retries among other things. These are features that I found myself writing over and over again, so I decided to make a package out of it. It is written in Typescript, and has a full test suite.",
        source: "https://github.com/rogerio-romao/tchef",
        live: "https://www.npmjs.com/package/tchef",
      },
      {
        id: 2,
        projectRef: 24,
        name: "Typescript Backend Starter",
        image: require("../../assets/typescript.png"),
        shortDesc: "My Typescript backend starter template.",
        longDesc:
          "Boilerplate code takes an imense amount of time, and it's easy to forget important things. I built this template to be a starting point for my backend projects at work. It uses Typescript, bundling via ESBuild, my own custom ESLint preset, test ready with Vitest, and Consola for logging. Using the new watch mode in Node, and setup as a template in Github, it's easy to get started with a new project.",
        source: "https://github.com/rogerio-romao/typescript-backend-starter",
        live: "https://github.com/rogerio-romao/typescript-backend-starter",
      },
      {
        id: 3,
        projectRef: 22,
        name: "Color Palette Creator",
        image: require("../../assets/palette.png"),
        shortDesc: "Create color schemes and export them to use on your app.",
        longDesc:
          "This uses Vue3 and Vuex. It allows you to create color schemes and export them as CSS to use on your app. You set a main color, and it generates a bunch of variations of that color based on color theory. You can then pick variations and edit them to create a new color scheme, or have the app generate a random scheme for you with those variations. You can login and save your color schemes to your account.",
        source: "https://github.com/rogerio-romao/pallete-creator",
        live: "https://palette-creator.surge.sh/",
      },
      {
        id: 4,
        projectRef: 20,
        name: "Online Portfolio/CV V2",
        image: require("../../assets/portfoliov2.png"),
        shortDesc: "My online portfolio / CV website",
        longDesc:
          "My 2.0 portfolio. First time exploring the Quasar UI library. It is Vue3 based, using the composition API, with Vuex handling the data. Went for a streamlined look, and ease of use when editing. Mobile responsive. ",
        source: "https://github.com/rogerio-romao/quasar-test",
        live: "https://portfolio-v2-puce-theta.vercel.app/",
      },
      {
        id: 5,
        projectRef: 8,
        name: "The Spiral",
        image: require("../../assets/spiral.png"),
        shortDesc: "A JS music player / visualiser / generative art.",
        longDesc:
          "Very proud of this one, programmed from scratch, pushing the envelope with animation and canvas, custom functions including a stagger using requestanimationframe, and a custom music player. Won a Codepen Pick! Also works as a standalone desktop app, planning to have this for sale in App Store.",
        source: "https://codepen.io/rogerio-romao/pen/mdevOwm",
        live: "https://codepen.io/rogerio-romao/full/mdevOwm",
      },
      {
        id: 6,
        projectRef: 11,
        name: "Music Player",
        image: require("../../assets/music-player.png"),
        shortDesc: "A javascript music player. Simple but beautiful and solid.",
        longDesc:
          "I wanted to program something similar to Winamp in Javascript and learn how to handle audio on the web. I am very pleased with the look and functionality i managed to include, and have some ideas to expand it in the future.",
        source: "https://codepen.io/rogerio-romao/pen/vYNvBzd",
        live: "https://codepen.io/rogerio-romao/full/vYNvBzd",
      },
      {
        id: 7,
        projectRef: 1,
        name: "Converse",
        image: require("../../assets/converse.png"),
        shortDesc: "A responsive units conversion app.",
        longDesc:
          "Unit Conversion Program, does distances, weights and temperatures. Sleek flat style design and attention to user experience were my focus, as well as functional and well structured and documented code. Built using JQuery.",
        source: "https://codepen.io/rogerio-romao/pen/RwPaaRR",
        live: "https://codepen.io/rogerio-romao/full/RwPaaRR",
      },
      {
        id: 8,
        projectRef: 6,
        name: "Guess The Number",
        image: require("../../assets/guess-number.png"),
        shortDesc: "Guess the number game.",
        longDesc:
          "My take on the common programming challenge of Guess the Number game. I tried to make it into as polished an app as possible - attention to details, a nice visualizer pattern for the guesses, automatic adjustment of the maximum guesses determined by the max number chosen by the user and a nice interface.",
        source: "https://codepen.io/rogerio-romao/pen/XWbQbbN",
        live: "https://codepen.io/rogerio-romao/full/XWbQbbN",
      },
    ],
  };
}
