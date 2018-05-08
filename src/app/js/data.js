// projects object
const projects = [
  {
    "name": "We Do Golf Webapp",
    "screenshot": [
      "wedogolf-1.png",
      "wedogolf-2.png",
      "wedogolf-3.png"
    ],
    "description-1": "Front-End developer for We Do Golf. Building an data-driven UI for golf business marketing.",
    "description-2": "The We Do Golf's front-end was compiled using Gulp, with SASS as a preprocessor for the styling.",
    "github": "http://github.com",
    "link": "http://wdg.se",
    "languages": [
      "html5",
      "agile",
      "sass",
      "css3",
      "gulp",
      "git",
      "jira"
    ]
  },
  {
    "name": "Twitposter",
    "screenshot": [
      "twitposter-1.png",
      "twitposter-2.png",
      "twitposter-3.png"
    ],
    "description-1": "Front-End developer for Twitposter. Building the features of a poster-ordering site.",
    "description-2": "Twitposter was built using component-based architecture with Angular JS and compiled with Gulp. Tests were also writen using Karma and Jasmine in an example of behavior driven development.",
    "github": "http://github.com/",
    "link": "http://www.twitposters.com/",
    "languages": [
      "angular-js",
      "html5",
      "agile",
      "sass",
      "css3",
      "gulp",
      "git",
      "jira",
      "jasmine",
      "karma"
    ]
  },
  {
    "name": "FRET, a Facebook Export Report Tool",
    "screenshot": [
      "fret-1.png",
      "fret-2.png"
    ],
    "description-1": "Front-End developer for FRET, a Facebook report export tool.",
    "description-2": "FRET was built with Typescript and Angular 5, using component-based architecture. It was compiled through browserify.",
    "github": "http://github.com/",
    "link": "http://fret.herokuapp.com/",
    "languages":
    [
      "typescript",
      "angular-2",
      "es6",
      "html5",
      "agile",
      "sass",
      "css3",
      "gulp",
      "git",
      "jira"
    ]
  },
  {
    "name": "Portfolio",
    "screenshot": [
      "portfolio-1.png"
    ],
    "description-1": "Building an interactive and elegant UI for my portfolio site.",
    "description-2": "My portfolio was written in ES6 Vanilla Javascript and complied by gulp using SASS as a preprocessor.",
    "github": "http://github.com",
    "link": "http://samlukecole.co.uk/",
    "languages": [
      "es6",
      "html5",
      "agile",
      "sass",
      "css3",
      "gulp",
      "git",
      "jira"
    ]
  }
];

// pane array
const panes = [
  "intro",
  "about",
  "projects",
  "contact"
]

let projectCounter = 0;
let screenshotCounter = 0;