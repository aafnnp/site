import Link from 'next/link';
import React, { Component } from 'react';

export default class CanIUse extends Component {
  state = {
    desktop: [],
    mobile: [],
  };

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Fyrd/caniuse/main/data.json')
      .then((res) => res.json())
      .then((res) => {
        const {
          stats: {
            chrome,
            firefox,
            ie,
            edge,
            safari,
            and_chr,
            and_ff,
            android,
            ios_saf,
          },
        } = res.data[this.props.tag];

        this.setState(
          {
            desktop: this.getSupportData([chrome, firefox, ie, edge, safari]),
            mobile: this.getSupportData([and_chr, and_ff, android, ios_saf]),
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  getSupportData = (arr) => {
    return arr.map((item) => {
      const firstSupportItems = Object.entries(item).find(
        (el) => el[1] === 'y'
      );
      return firstSupportItems ? firstSupportItems[0] : 'No';
    });
  };

  render() {
    return (
      <div className="caniuse my-4">
        <div className="caniuse-header text-xs text-gray-500 break-words">
          This browser support data is from
          <Link href={`https://caniuse.com/#feat=${this.props.tag}`}>
            Caniuse
          </Link>
          ,which has more detail. A number indicates that browser supports the
          feature at that version and up.
        </div>
        <div className="caniuse-section">
          <h4>Desktop</h4>
          <div className="browser desktop grid grid-cols-5 gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/CDWccX.jpg"
              alt="chrome"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mqRvLw.jpg"
              alt="firefox"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/uKn6gH.jpg"
              alt="IE"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/aoF7l0.jpg"
              alt="Edge"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mIxpPG.jpg"
              alt="Safari"
              loading="lazy"
            />
          </div>
          <div className="version grid grid-cols-5 gap-4 text-center">
            {this.state.desktop.map((item, index) => {
              return (
                <span
                  key={index}
                  className="text-white rounded p-2 font-bold bg-green"
                  style={{
                    backgroundColor: item === 'No' ? '#ff0024' : '#47ca4c',
                  }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div className="caniuse-section mt-4">
          <h4>Mobile / Tablet</h4>
          <div className="browser mobile grid grid-cols-4 gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/CDWccX.jpg"
              alt="Android Chrome"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mqRvLw.jpg"
              alt="Android Firefox"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/VK4LoM.jpg"
              alt="Android"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mIxpPG.jpg"
              alt="Safari"
              loading="lazy"
            />
          </div>
          <div className="version grid grid-cols-4 gap-4 text-center">
            {this.state.mobile.map((item, index) => {
              return (
                <span
                  key={index}
                  className="text-white rounded p-2 font-bold bg-green"
                  style={{
                    backgroundColor: item === 'No' ? '#ff0024' : '#47ca4c',
                  }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
