function HttpStatus() {
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
      <audio data-key="65" src="/sounds/clap.wav" />
      <audio data-key="83" src="/sounds/hihat.wav" />
      <audio data-key="68" src="/sounds/kick.wav" />
      <audio data-key="70" src="/sounds/openhat.wav" />
      <audio data-key="71" src="/sounds/boom.wav" />
      <audio data-key="72" src="/sounds/ride.wav" />
      <audio data-key="74" src="/sounds/snare.wav" />
      <audio data-key="75" src="/sounds/tom.wav" />
      <audio data-key="76" src="/sounds/tink.wav" />
    </>
  );
}

export default HttpStatus;
