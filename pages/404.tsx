import React from 'react'
import styled from 'styled-components'

export default function Index () {
  return (
    <Wrapper>
      <div className="wrap-404">
        <div className="label">Error</div>
        <div className="numbers">
          <div className="number">
            <div className="four"/>
          </div>
          <div className="number">
            <div className="zero">
              <span/>
            </div>
          </div>
          <div className="number">
            <div className="four last"/>
          </div>
        </div>
        <div className="text">
          <p>Looks like you got lost... Or we trying to confuse you... </p>
          <p>
            Let us bring you at <a href="#">home</a>.
          </p>
        </div>
        <div className="sleep-walker">
          <div className="man">
            <div className="head"/>
            <div className="torso">
              <div className="arm-a"/>
              <div className="arm-b"/>
            </div>
            <div className="legs">
              <div className="leg-a"/>
              <div className="leg-b"/>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Bad+Script');

  .wrap-404 {
    overflow: hidden;
    padding: 2rem 1rem;
  }

  .label {
    text-align: center;
    font-size: 0.75em;
  }

  .numbers {
    padding: 2rem 0 0;
  }

  .number {
    position: relative;
    display: inline-block;
    width: 150px;
    transform: translateX(60%);
  }

  .four {
    position: relative;
    width: 30px;
    height: 150px;
    border: 1px solid #000;
  }
  .four::before,
  .four::after {
    content: '';
    position: absolute;
    border: 1px solid #000;
  }
  .four::before {
    top: 50%;
    right: -1rem;
    width: 120px;
    height: 30px;
  }
  .four::after {
    top: 0;
    left: -60px;
    width: 30px;
    height: 120px;
  }

  .zero {
    position: relative;
    width: 30px;
    height: 150px;
    border: 1px solid #000;
  }
  .zero span {
    position: absolute;
    top: 0;
    left: -60px;
    width: 30px;
    height: 150px;
    border: 1px solid #000;
  }
  .zero::before,
  .zero::after {
    content: '';
    position: absolute;
    border: 1px solid #000;
  }
  .zero::before {
    top: 1rem;
    right: -1rem;
    width: 120px;
    height: 30px;
  }
  .zero::after {
    bottom: 1rem;
    right: -1rem;
    width: 120px;
    height: 30px;
  }

  .text {
    position: relative;
    padding-top: 6rem;
    text-align: center;
    font-size: 1.125em;
  }
  .text a {
    color: #000;
  }
  .text::before {
    content: '';
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    height: 1px;
    background-image: repeating-linear-gradient(
      to left,
      rgba(0, 0, 0, 0.35) 0,
      rgba(0, 0, 0, 0.35) 0.5rem,
      transparent 0.5rem,
      transparent 1rem
    );
  }

  .sleep-walker {
    position: relative;
    height: 1px;
    margin: 5rem 0 3rem;
    background-image: repeating-linear-gradient(
      to left,
      transparent 0,
      transparent 0.12rem,
      rgba(0, 0, 0, 0.15) 0.125rem,
      rgba(0, 0, 0, 0.15) 0.25rem
    );
  }

  .man {
    position: absolute;
    top: -1.4rem;
    left: 0;
    width: 1px;
    height: 2rem;
    opacity: 0.6;
    transform: scale(0.5);
    -webkit-animation: walking 50s linear infinite;
    animation: walking 50s linear infinite;
  }
  .man .head {
    position: relative;
    width: 0.5rem;
    height: 0.5rem;
    transform: translateX(-1px);
    border: 1px solid #000;
    border-radius: 50%;
  }
  .man .head::before {
    content: '';
    position: absolute;
    top: 0.28rem;
    left: 0;
    width: 170%;
    height: 1px;
    background: #000;
    transform-origin: 0% 0%;
    transform: rotate(-25deg);
  }
  .man .torso {
    position: relative;
    width: 1px;
    height: 50%;
    margin: 0 auto;
    background: #000;
  }
  .man .torso .arm-a,
  .man .torso .arm-b {
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;
    height: 85%;
    transform-origin: top center;
    background: #000;
  }
  .man .torso .arm-a::before,
  .man .torso .arm-b::before {
    content: '';
    position: absolute;
    bottom: -0.1rem;
    left: 0rem;
    width: 0.18rem;
    height: 0.18rem;
    border: 1px solid #000;
    border-radius: 50%;
  }
  .man .torso .arm-a {
    transform: rotate(-20deg);
    -webkit-animation: walk1 1.3s linear alternate infinite;
    animation: walk1 1.3s linear alternate infinite;
  }
  .man .torso .arm-b {
    transform: rotate(20deg);
    -webkit-animation: walk2 1.3s linear alternate infinite;
    animation: walk2 1.3s linear alternate infinite;
  }
  .man .legs {
    position: relative;
    width: 1px;
    height: 50%;
    margin: 0 auto;
  }
  .man .legs .leg-a,
  .man .legs .leg-b {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: top center;
    background: #000;
  }
  .man .legs .leg-a::before,
  .man .legs .leg-b::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 1px;
    background: #000;
  }
  .man .legs .leg-a {
    transform: rotate(-20deg);
    -webkit-animation: walk1 1.3s linear alternate infinite;
    animation: walk1 1.3s linear alternate infinite;
  }
  .man .legs .leg-b {
    transform: rotate(20deg);
    -webkit-animation: walk2 1.3s linear alternate infinite;
    animation: walk2 1.3s linear alternate infinite;
  }

  @-webkit-keyframes walking {
    0% {
      left: 0;
      transform: scale(0.5) rotateY(0deg);
    }
    49.9% {
      transform: scale(0.5) rotateY(0deg);
    }
    50% {
      transform: scale(0.5) rotateY(180deg);
      left: 100%;
    }
    100% {
      transform: scale(0.5) rotateY(180deg);
      left: 0;
    }
  }

  @keyframes walking {
    0% {
      left: 0;
      transform: scale(0.5) rotateY(0deg);
    }
    49.9% {
      transform: scale(0.5) rotateY(0deg);
    }
    50% {
      transform: scale(0.5) rotateY(180deg);
      left: 100%;
    }
    100% {
      transform: scale(0.5) rotateY(180deg);
      left: 0;
    }
  }
  @-webkit-keyframes walk1 {
    0% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(20deg);
    }
  }
  @keyframes walk1 {
    0% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(20deg);
    }
  }
  @-webkit-keyframes walk2 {
    0% {
      transform: rotate(20deg);
    }
    50% {
      transform: rotate(-20deg);
    }
  }
  @keyframes walk2 {
    0% {
      transform: rotate(20deg);
    }
    50% {
      transform: rotate(-20deg);
    }
  }
  @media all and (max-width: 768px) {
    header h1 {
      margin-bottom: 3rem;
    }

    .man {
      -webkit-animation-duration: 30s;
      animation-duration: 30s;
    }
  }
  @media all and (max-width: 768px) {
    .numbers {
      display: flex;
      justify-content: center;
    }

    .number {
      width: 90px;
      transform: translateX(36%) scale(0.5);
    }
  }
`
