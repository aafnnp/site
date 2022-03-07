import {
  HomeIcon,
  MailIcon,
  MenuIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/solid';
import React, { Component } from 'react';
import styled from 'styled-components';

export default class ProgressSteps extends Component {
  handleClick(e) {
    e.currentTarget.classList.toggle('active');
    document.querySelector('.rotating-main').classList.toggle('active');
    document.querySelector('.rotating-nav').classList.toggle('active');
  }

  render() {
    return (
      <Wrapper>
        <div className="rotating">
          <div className="rotating-main">
            <hgroup>
              <h1>Amazing Article</h1>
              <p>
                <i>Manon.icu</i>
              </p>
            </hgroup>
            <div className="rotating-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quia in ratione dolores cupiditate, maxime aliquid
                impedit dolorem nam dolor omnis atque fuga labore modi veritatis
                porro laborum minus, illo, maiores recusandae cumque ipsa quos.
                Tenetur, consequuntur mollitia labore pariatur sunt quia harum
                aut. Eum maxime dolorem provident natus veritatis molestiae
                cumque quod voluptates ab non, tempore cupiditate? Voluptatem,
                molestias culpa. Corrupti, laudantium iure aliquam rerum sint
                nam quas dolor dignissimos in error placeat quae temporibus
                minus optio eum soluta cupiditate! Cupiditate saepe voluptates
                laudantium. Ducimus consequuntur perferendis consequatur nobis
                exercitationem molestias fugiat commodi omnis. Asperiores quia
                tenetur nemo ipsa.
              </p>
              <h2>My Dog</h2>
              <p>
                <img
                  src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                  alt="My Dog"
                />
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
                Magnam facere earum unde harum. Ea culpa veritatis magnam at
                aliquid. Perferendis totam placeat molestias illo laudantium?
                Minus id minima doloribus dolorum fugit deserunt qui vero
                voluptas, ut quia cum amet temporibus veniam ad ea ab
                perspiciatis, enim accusamus asperiores explicabo provident.
                Voluptates sint, neque fuga cum illum, tempore autem maxime
                similique laborum odio, magnam esse. Aperiam?
              </p>
            </div>
          </div>
          <div className="rotating-btn" onClick={this.handleClick.bind(this)}>
            <MenuIcon className="w-10 h-10 absolute top-3/4 left-3/4 -ml-5 -mt-5" />
            <XIcon className="w-10 h-10 absolute top-3/4 left-1/4 -ml-5 -mt-5" />
          </div>
          <ul className="rotating-nav">
            <li>
              <HomeIcon className="w-4 h-4 mr-4" />
              HOME
            </li>
            <li>
              <UserIcon className="w-4 h-4 mr-4" />
              ABOUT
            </li>
            <li>
              <MailIcon className="w-4 h-4 mr-4" />
              CONTACT
            </li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .rotating {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #2d2d2d;
  }

  .rotating-main {
    position: relative;
    padding: 100px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    font-size: 16px;
    transition: transform 0.5s ease-in-out;
    transform-origin: 0 0;
    z-index: 10;
  }

  .rotating-main.active {
    transform-origin: 0 0;
    transform: rotateZ(-15deg);
  }

  .rotating-main hgroup {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .rotating-main i {
    font-size: 16px;
    color: #999999;
    font-weight: normal;
  }

  .rotating-content p {
    line-height: 1.5;
    margin: 1rem 0;
  }

  .rotating-content h2 {
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 500;
  }

  .rotating-btn {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: #ff6371;
    color: #ffffff;
    top: -100px;
    left: -100px;
    border-radius: 100%;
    transition: transform 0.5s ease-in-out;
    z-index: 99;
  }

  .rotating-btn.active {
    transform: rotateZ(-90deg);
  }

  .rotating-nav {
    position: absolute;
    z-index: 1;
    left: 2rem;
    bottom: 2rem;
    color: #ffffff;
  }

  .rotating-nav li {
    position: relative;
    display: flex;
    align-items: center;
    height: 2rem;
    opacity: 0;
    transition: all 0.5s ease-in-out 0.25s;
  }

  .rotating-nav.active li {
    opacity: 1;
    transform: translateX(0.5rem);
  }

  .rotating-nav li:nth-child(2) {
    transition-delay: 0.5s;
  }

  .rotating-nav li:nth-child(3) {
    transition-delay: 0.75s;
  }

  .rotating-nav.active li:nth-child(2) {
    transform: translateX(1rem);
  }

  .rotating-nav.active li:nth-child(3) {
    transform: translateX(2rem);
  }
`;
