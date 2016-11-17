// Import React
import React, { Component } from "react";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import { Deck, Slide, Spectacle } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Title from '../slides/Title';
import LiveRefactorDemo from '../slides/LiveRefactorDemo';

import { Howl } from 'howler';
import carelessWhisper from '../assets/careless_whisper.mp3';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/styles.scss");

const images = {
  titleBg: require('../assets/bg.gif')
};

preloader(images);

const theme = createTheme({
  primary: "#fff",
  title: "#ff4081"
}, {
  title: 'Leckerli One',
  primary: 'Open Sans'
});

export default class Presentation extends Component {
  constructor() {
    super();

    this.music = new Howl({
      src: [carelessWhisper]
    });

    this.toggleMusic = this.toggleMusic.bind(this);
  }

  toggleMusic() {
    if (this.music.playing()) {
      this.music.stop();
    } else {
      this.music.play();
    }
  }

  render() {
    return (
      <div>
        <a className="btn-big-red" onClick={this.toggleMusic}>ES6</a>
        <Spectacle theme={theme}>
          <Deck transition={[]}>
            <Slide
              align="flex-start flex-end"
              transition={[]}
              bgColor="title"
              bgImage={images.titleBg}
            >
              <Title />
            </Slide>
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
                { loc: [10, 11] }
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
            <Slide transition={[]} bgColor="primary"><LiveRefactorDemo /></Slide>
          </Deck>
        </Spectacle>
      </div>
    );
  }
}
