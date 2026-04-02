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
        projectRef: 22,
        name: "Color Palette Creator",
        image: require("../../assets/palette.png"),
        shortDesc: "A tool to create and manage color palettes.",
        longDesc:
          "This app allows you to create color schemes and export them as CSS to use on your app. You set a main color, and it generates a bunch of variations of that color based on color theory. You can then pick variations and edit them to create a new color scheme, or have the app generate a random scheme for you with those variations. You can save palettes and preview them on the app itself.",
        source: "https://github.com/rogerio-romao/color-palette-creator",
        live: "https://palette-creator.rogerioromao.dev",
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
