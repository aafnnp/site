import React from 'react'

export default function ErrorPage() {
  return (
    <>
      <style jsx>{`
        :root {
          --card-height: 300px;
          --card-width: calc(var(--card-height) / 1.5);
        }
        .card-list {
          width: 100%;
          height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card {
          width: var(--card-width);
          height: var(--card-height);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding: 0 36px;
          perspective: 2500px;
          margin: 0 50px;
        }

        .cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          transition: all 0.5s;
          position: absolute;
          width: 100%;
          z-index: -1;
        }

        .card:hover .card-content {
          transform: perspective(900px) translateY(-5%) rotateX(25deg)
            translateZ(0);
          box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
        }

        .card-content::before,
        .card-content::after {
          content: '';
          opacity: 0;
          width: 100%;
          height: 80px;
          transition: all 0.5s;
          position: absolute;
          left: 0;
        }
        .card-content::before {
          top: 0;
          height: 100%;
          background-image: linear-gradient(
            to top,
            transparent 46%,
            rgba(12, 13, 19, 0.5) 68%,
            rgba(12, 13, 19) 97%
          );
        }
        .card-content::after {
          bottom: 0;
          opacity: 1;
          background-image: linear-gradient(
            to bottom,
            transparent 46%,
            rgba(12, 13, 19, 0.5) 68%,
            rgba(12, 13, 19) 97%
          );
        }

        .card:hover .card-content::before,
        .card-content::after {
          opacity: 1;
        }

        .card:hover .card-content::after {
          height: 120px;
        }
        .title {
          width: 100%;
          transition: transform 0.5s;
        }
        .card:hover .title {
          transform: translate3d(0%, -50px, 100px);
        }

        .character {
          width: 100%;
          opacity: 0;
          transition: all 0.5s;
          position: absolute;
          z-index: -1;
        }

        .card:hover .character {
          opacity: 1;
          transform: translate3d(0%, -30%, 100px);
        }
      `}</style>
      <div className="card-list">
        <div className="card">
          <div className="card-content">
            <img
              src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
              className="cover-image"
            />
          </div>
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
            className="title"
          />
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
            className="character"
          />
        </div>

        <div className="card">
          <div className="card-content">
            <img
              src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
              className="cover-image"
            />
          </div>
          <img
            src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
            className="title"
          />
          <img
            src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
            className="character"
          />
        </div>
      </div>
    </>
  )
}
