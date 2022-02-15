import dayjs from 'dayjs'
import Link from 'next/link'
import React, { Component } from 'react'
import { fetcher } from 'utils'

interface PageProps {
  tag:string
}

export default class CanIUse extends Component<PageProps> {
  static enums = {
    desktop: {
      Chrome: 'CDWccX.jpg',
      Firefox: 'mqRvLw.jpg',
      IE: 'uKn6gH.jpg',
      Edge: 'aoF7l0.jpg',
      Safari: 'mIxpPG.jpg'
    },
    mobile: {
      'Android Chrome': 'CDWccX.jpg',
      'Android FireFox': 'mqRvLw.jpg',
      Android: 'VK4LoM.jpg',
      'Ios Safari': 'mIxpPG.jpg'
    }
  };

  state = {
    desktop: [],
    mobile: [],
    updateTime: Date.now()
  };

  componentDidMount () {
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
          ios_saf
        }
      } = res.data[this.props.tag]

      this.setState({
        desktop: this.getSupportData([chrome, firefox, ie, edge, safari]),
        mobile: this.getSupportData([and_chr, and_ff, android, ios_saf]),
        updateTime: dayjs(res.data.updated).format('YYYY-MM-DD HH:mm:ss')
      })
    })
  }

  getSupportData = (arr: any) => {
    return arr.map((item: any) => {
      const firstSupportItems = Object.entries(item).find(
        (el) => el[1] === 'y'
      )
      return firstSupportItems ? firstSupportItems[0] : 'No'
    })
  };

  render () {
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
                    <picture className="w-12 h-12">
                      <img src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/${value}`} alt={key} loading="lazy"/>
                    </picture>
                    <span
                      className=" mt-2 block w-full text-white rounded-md text-center font-bold p-2"
                      style={{
                        backgroundColor:
                          this.state.desktop[index] === 'No'
                            ? '#ff0024'
                            : '#47ca4c'
                      }}
                    >
                      {this.state.desktop[index]}
                    </span>
                  </div>
                )
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
                  <picture className="w-12 h-12">
                    <img src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/${value}`} alt={key} loading="lazy"/>
                  </picture>
                  <span
                    className=" mt-2 block w-full text-white rounded-md text-center font-bold p-2"
                    style={{
                      backgroundColor:
                        this.state.desktop[index] === 'No'
                          ? '#ff0024'
                          : '#47ca4c'
                    }}
                  >
                    {this.state.desktop[index]}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
