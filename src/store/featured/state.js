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
          "Boilerplate code takes an imense amount of time, and it's easy to forget important things. I built this template to be a starting point for my backend projects at work. It uses Typescript, bundling via ESBuild, my own custom ESLint preset, test ready with Vitest, CI enabled and Consola for logging. Using the new watch mode in Node, and setup as a template in Github, it's easy to get started with a new project.",
        source: "https://github.com/rogerio-romao/typescript-backend-starter",
        live: "https://github.com/rogerio-romao/typescript-backend-starter",
      },
      {
        id: 3,
        projectRef: 25,
        name: "Davidoff US Store Locator",
        image: require("../../assets/davidoff-store-locator.png"),
        shortDesc: "A store locator for the Davidoff brand's US webstore.",
        longDesc:
          "This is the store locator for the Davidoff brand's US webstore. I coded both the backend and frontend. It uses Nextjs 14 with the App Router, and the Geolocation API to get the user's location, and the Google Maps API to show the stores. It is responsive and works on any device. Data is stored in Supabase. Search works by inputting a city or zip code, then calculating the distance to the stores and showing the closest ones first.",
        source: "#",
        live: "https://us.davidoffgeneva.com/store-locator",
      },
      {
        id: 4,
        projectRef: 26,
        name: "SFW Shelving Configurator",
        image: require("../../assets/sfw-configurator.png"),
        shortDesc: "A configurator for SFW shelving company's webstore.",
        longDesc:
          "This is made in React, using P5 for drawing the shelves and units. It is a configurator for the SFW shelving company's webstore, that allows the user to choose the size, color, and dimensions for the shelves. The user can save the configuration and retrieve it later. Once the user is happy with the configuration, they can add it to the cart.",
        source: "#",
        live: "#",
      },
      {
        id: 5,
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
        id: 6,
        projectRef: 8,
        name: "The Spiral",
        image: require("../../assets/spiral.png"),
        shortDesc: "A JS music player / visualiser / generative art.",
        longDesc:
          "Very proud of this one, programmed from scratch, pushing the envelope with animation and canvas, custom functions including a stagger using requestanimationframe, and a custom music player. Won a Codepen Pick! Also works as a standalone desktop app, planning to have this for sale in App Store.",
        source: "https://codepen.io/rogerio-romao/pen/mdevOwm",
        live: "https://codepen.io/rogerio-romao/full/mdevOwm",
      },
    ],
  };
}
