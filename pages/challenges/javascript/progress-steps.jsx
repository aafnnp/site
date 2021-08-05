import React, { Component } from 'react';

export default class ProgressSteps extends Component {
  state = { step: 0 };

  handleClick(type = 'prev') {
    let { step } = this.state;
    if (type === 'prev' && step === 0) return false;
    if (type === 'next' && step === 3) return false;
    this.setState({ step: type === 'prev' ? step - 1 : step + 1 });
  }

  render() {
    return (
      <>
        <style jsx>
          {`
            .progress-steps {
              display: flex;
              width: 100vw;
              height: 100vh;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }

            .steps {
              position: relative;
              height: 2rem;
              width: 38.2vw;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .steps::after,
            .steps::before {
              position: absolute;
              display: block;
              content: '';
              height: 0.25rem;
              width: 100%;
              left: 0;
              top: 50%;
              margin-top: -0.125rem;
              background-color: #efefef;
              z-index: -1;
            }

            .steps::before {
              z-index: 1;
              background-color: burlywood;
              width: 0;
            }

            .steps-1::before {
              width: 33.333333%;
            }

            .steps-2::before {
              width: 66.666667%;
            }

            .steps-3::before {
              width: 100%;
            }

            .steps .step {
              position: relative;
              width: 2rem;
              height: 2rem;
              border-radius: 100%;
              background-color: burlywood;
              text-align: center;
              line-height: 2rem;
              color: #ffffff;
              z-index: 99;
            }

            .btn-group {
              display: flex;
              gap: 1rem;
              margin-top: 2rem;
            }

            .btn-group button {
              width: 6rem;
              height: 2rem;
              background-color: burlywood;
              color: #ffffff;
              border-radius: 0.25rem;
            }

            .btn-group button.disabled {
              cursor: not-allowed;
              background: lightgrey;
            }
          `}
        </style>
        <div className="progress-steps">
          <div className={`steps steps-${this.state.step}`}>
            <div className="step">1</div>
            <div className="step">2</div>
            <div className="step">3</div>
            <div className="step">4</div>
          </div>
          <div className="btn-group">
            <button
              className={this.state.step === 0 ? 'disabled' : ''}
              onClick={this.handleClick.bind(this, 'prev')}
            >
              Prev
            </button>
            <button
              className={this.state.step === 3 ? 'disabled' : ''}
              onClick={this.handleClick.bind(this, 'next')}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}
