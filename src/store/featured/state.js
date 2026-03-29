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
