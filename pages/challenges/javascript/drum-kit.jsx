import React, { Component } from 'react';

export default class Index extends Component {
  componentDidMount() {
    const keys = document.querySelectorAll('.key');
    document.addEventListener('keydown', function (e) {
      const { keyCode } = e;
      const key = document.querySelector(`div[data-key="${keyCode}"]`);
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      if (key) {
        key.classList.add('playing');
        audio.play();
      }
      keys.forEach((item) => {
        item.classList.remove('playing');
        document.addEventListener('transitionend', function () {
          item.classList.remove('playing');
        });
      });
    });
  }

  render() {
    return (
      <>
        <style jsx>
          {`
            .keys {
              display: flex;
              flex: 1;
              min-height: 100vh;
              align-items: center;
              justify-content: center;
              background: url('https://i.imgur.com/b9r5sEL.jpg') no-repeat;
            }

            .key {
              border: 0.4rem solid black;
              border-radius: 0.5rem;
              margin: 1rem;
              font-size: 1.5rem;
              padding: 1rem 0.5rem;
              transition: all 0.07s ease;
              width: 10rem;
              text-align: center;
              color: white;
              background: rgba(0, 0, 0, 0.4);
              text-shadow: 0 0 0.5rem black;
            }

            .playing {
              transform: scale(1.1);
              border-color: #ffc600;
              box-shadow: 0 0 1rem #ffc600;
            }

            kbd {
              display: block;
              font-size: 4rem;
            }

            .sound {
              font-size: 1.2rem;
              text-transform: uppercase;
              letter-spacing: 0.1rem;
              color: #ffc600;
            }
          `}
        </style>
        <div className="keys">
          <div data-key="65" className="key">
            <kbd>A</kbd>
            <span className="sound">clap</span>
          </div>
          <div data-key="83" className="key">
            <kbd>S</kbd>
            <span className="sound">hihat</span>
          </div>
          <div data-key="68" className="key">
            <kbd>D</kbd>
            <span className="sound">kick</span>
          </div>
          <div data-key="70" className="key">
            <kbd>F</kbd>
            <span className="sound">openhat</span>
          </div>
          <div data-key="71" className="key">
            <kbd>G</kbd>
            <span className="sound">boom</span>
          </div>
          <div data-key="72" className="key">
            <kbd>H</kbd>
            <span className="sound">ride</span>
          </div>
          <div data-key="74" className="key">
            <kbd>J</kbd>
            <span className="sound">snare</span>
          </div>
          <div data-key="75" className="key">
            <kbd>K</kbd>
            <span className="sound">tom</span>
          </div>
          <div data-key="76" className="key">
            <kbd>L</kbd>
            <span className="sound">tink</span>
          </div>
        </div>
        <audio
          data-key="65"
          src="https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/clap.wav"
        />
        <audio
          data-key="83"
          src="https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/hihat.wav"
        />
        <audio
          data-key="68"
          src="https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/kick.wav"
        />
        <audio
          data-key="70"
          src="https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/openhat.wav"
        />
        <audio
          data-key="71"
          src="https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/boom.wav"
        />
        <audio
          data-key="72"
          src="https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/ride.wav"
        />
        <audio
          data-key="74"
          src="https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/snare.wav"
        />
        <audio
          data-key="75"
          src="https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/tom.wav"
        />
        <audio
          data-key="76"
          src="https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/tink.wav"
        />
      </>
    );
  }
}
