// Import React
import React, { Component } from "react";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Spectacle
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Title from '../slides/Title';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {};

preloader(images);

const theme = createTheme({
  primary: "#fff",
  title: "#ff4081"
}, {
  title: 'Leckerli One',
  primary: 'Open Sans'
});

export default () => (
  <Spectacle theme={theme}>
    <Deck transition={[]}>
      <Slide transition={[]} bgColor="title"><Title /></Slide>
      <CodeSlide
        transition={[]}
        lang="js"
        code={require("raw!../assets/let.example")}
        ranges={[
          { loc: [0, 3] },
          { loc: [4, 5] },
          { loc: [6, 9] },
          { loc: [10, 11] }
        ]}
      />
      <CodeSlide
        transition={[]}
        lang="js"
        code={require("raw!../assets/const.example")}
        ranges={[
          { loc: [0, 1] },
          { loc: [2, 3] },
          { loc: [4, 7] },
          { loc: [8, 9] },
          { loc: [10, 11 ]}
        ]}
      />
      <CodeSlide
        transition={[]}
        lang="js"
        code={require("raw!../assets/arrowFunction.example")}
        ranges={[
          { loc: [0, 3] },
          { loc: [4, 5] }
        ]}
      />
      <CodeSlide
        transition={[]}
        lang="js"
        code={require("raw!../assets/destructuring.example")}
        ranges={[
          { loc: [0, 3] },
          { loc: [4, 5] },
          { loc: [6, 11] },
          { loc: [12, 17] },
          { loc: [18, 21] },
          { loc: [22, 23] }
        ]}
      />
      <CodeSlide
        transition={[]}
        lang="js"
        code={require("raw!../assets/spread.example")}
        ranges={[
          { loc: [0, 4] },
          { loc: [5, 6] },
          { loc: [7, 8] },
          { loc: [9, 11] },
          { loc: [12, 13] }
        ]}
      />
      <CodeSlide
        transition={[]}
        lang="js"
        code={require("raw!../assets/class.example")}
        ranges={[
          { loc: [0, 3] },
          { loc: [4, 8] },
          { loc: [9, 14] },
          { loc: [15, 20] },
          { loc: [21, 31] },
          { loc: [0, 14] },
          { loc: [15, 31] }
        ]}
      />
    </Deck>
  </Spectacle>
);
