import React, { Component } from 'react';
import styled from 'styled-components';

export default class Index extends Component {
  state = {
    list: [
      {
        title: 'Explore The World',
        imgUrl:
          'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        active: true,
      },
      {
        title: 'Wild Forest',
        imgUrl:
          'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        active: false,
      },
      {
        title: 'Sunny Beach',
        imgUrl:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
        active: false,
      },
      {
        title: 'City on Winter',
        imgUrl:
          'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        active: false,
      },
      {
        title: 'Mountains - Clouds',
        imgUrl:
          'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        active: false,
      },
    ],
  };

  _click(key) {
    const _state = this.state.list.map((item, idx) => ({
      ...item,
      active: key === idx,
    }));
    this.setState({ list: _state });
  }

  render() {
    return (
      <Wrapper>
        <div className="cards bg-white">
          {this.state.list.map((item, key) => {
            const _class = item.active ? 'card active' : 'card';
            return (
              <div
                className={_class}
                key={item.title}
                onClick={this._click.bind(this, key)}
              >
                <img src={item.imgUrl} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .cards {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
    padding: 15vh 15vw;
    gap: 1vw;
    position: absolute;
    left: 0;
    top: 4rem;
    width: 100vw;
  }

  .cards .card {
    position: relative;
    border-radius: 7.5vw;
    width: 7.5vw;
    height: 100%;
    overflow: hidden;
    transition: width 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .cards .card h3 {
    position: absolute;
    left: 3rem;
    bottom: 1rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .cards .card img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cards .card.active {
    width: 50vw;
  }

  .cards .card.active h3 {
    opacity: 1;
  }
`;
