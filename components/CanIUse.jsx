import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { Component } from 'react';

const Image = dynamic(() => import('components/Image'));

export default class CanIUse extends Component {
  static enums = {
    desktop: {
      Chrome: 'chrome',
      Firefox: 'firefox',
      IE: 'ie',
      Edge: 'edge',
      Safari: 'safari',
    },
    mobile: {
      'Android Chrome': 'chrome',
      'Android FireFox': 'firefox',
      Android: 'android',
      'Ios Safari': 'safari',
    },
  };

  state = {
    desktop: [],
    mobile: [],
    updateTime: Date.now(),
  };

  componentDidMount() {
    import('utils').then(({ fetcher }) => {
      fetcher(
        'https://raw.githubusercontent.com/Fyrd/caniuse/main/data.json'
      ).then((res) => {
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
        import('dayjs').then((dayjs) => {
          this.setState({
            desktop: this.getSupportData([chrome, firefox, ie, edge, safari]),
            mobile: this.getSupportData([and_chr, and_ff, android, ios_saf]),
            updateTime: dayjs
              .default(res.data.updated)
              .format('YYYY-MM-DD HH:mm:ss'),
          });
        });
      });
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
      <div className="mx-auto my-12">
        <div className="text-gray-500 text-xs">
          This browser support data is from
          <Link href={`https://caniuse.com/#feat=${this.props.tag}`}>
            <a className="px-1 text-red-500">Caniuse</a>
          </Link>
          ,which has more detail. A number indicates that browser supports the
          feature at that version and up. Update Time:
          <span className="text-red-500 px-1">{this.state.updateTime}</span>
        </div>
        <div className="caniuse-section">
          <h5 className="text-xs py-4 font-bold">Desktop</h5>
          <div className="grid grid-cols-5 mb-2 gap-4">
            {Object.entries(CanIUse.enums.desktop).map(
              ([key, value], index) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center"
                    key={key}
                  >
                    <Image
                      className="w-12 h-12"
                      src={`https://pics-rust.vercel.app/logos/${value}.svg`}
                      alt={key}
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                    <span
                      className=" mt-2 block w-full text-white rounded-md text-center font-bold p-2"
                      style={{
                        backgroundColor:
                          this.state.desktop[index] === 'No'
                            ? '#ff0024'
                            : '#47ca4c',
                      }}
                    >
                      {this.state.desktop[index]}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="caniuse-section mt-4">
          <h5 className="text-xs py-4 font-bold">Mobile / Tablet</h5>
          <div className="grid grid-cols-4 mb-2 gap-4">
            {Object.entries(CanIUse.enums.mobile).map(([key, value], index) => {
              return (
                <div
                  className="flex flex-col justify-center items-center"
                  key={key}
                >
                  <Image
                    className="w-12 h-12"
                    src={`https://pics-rust.vercel.app/logos/${value}.svg`}
                    alt={key}
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                  <span
                    className=" mt-2 block w-full text-white rounded-md text-center font-bold p-2"
                    style={{
                      backgroundColor:
                        this.state.desktop[index] === 'No'
                          ? '#ff0024'
                          : '#47ca4c',
                    }}
                  >
                    {this.state.desktop[index]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
