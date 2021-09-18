// import Image from 'next/image'
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <style jsx>
        {`
          @import url('https://fonts.loli.net/css2?family=Space+Mono&display=swap');
          @import url('https://fonts.loli.net/css2?family=Montserrat&display=swap');

          .page-not-found-content {
            display: flex;
            width: 100vw;
            min-height: 100vh;
            height: 100vh;
            padding: 40px 77px;
            justify-content: center;
            align-items: center;
            font-family: 'Space Mono', monospace;
          }

          .title {
            position: absolute;
            top: 44px;
            left: 77px;
            font-size: 24px;
            color: #333;
            font-weight: 700;
            font-family: 'Montserrat', monospace;
          }

          //width={540} height={448}
          .slogan {
            margin-bottom: 30px;
            width: 540px;
          }

          .detail {
            flex: 1;
          }

          .detail h2 {
            font-size: 64px;
            font-weight: bold;
            line-height: 95px;
            letter-spacing: -0.035em;
            color: #333;
          }

          .detail p {
            margin: 36px 0 64px;
            color: #4f4f4f;
            font-size: 24px;
            line-height: 36px;
          }

          .detail a {
            display: block;
            padding: 0 15px;
            width: max-content;
            height: 68px;
            line-height: 68px;
            background-color: #333;
            color: #fff;
            text-align: center;
            text-transform: uppercase;
            font-size: 14px;
          }

          .footer {
            position: absolute;
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: #bdbdbd;
            font-weight: 700;
            bottom: 24px;
            left: 0;
            font-family: 'Montserrat', monospace;
          }

          @media only screen and (max-width: 375px) {
            .page-not-found-content {
              padding: 20px 24px;
              flex-direction: column;
              flex-wrap: wrap;
            }

            .title {
              top: 20px;
              left: 24px;
              font-size: 12px;
            }

            .slogan {
              width: 286px;
            }

            .detail {
              flex: none;
            }

            .detail h2 {
              font-size: 24px;
              line-height: 35px;
            }

            .detail p {
              margin: 15px 0 33px;
              font-size: 9px;
              line-height: 27px;
            }

            .detail a {
              display: block;
              height: 34px;
              line-height: 34px;
            }

            .footer {
              font-weight: 500;
            }
          }

          @media only screen and (max-width: 768px) {
            .page-not-found-content {
              padding: 20px 24px;
            }

            .title {
              top: 20px;
              left: 24px;
              font-size: 12px;
            }

            .slogan,
            .detail {
              flex: 1;
            }
            .detail h2 {
              font-size: 36px;
              line-height: 35px;
            }
            .detail p {
              margin: 15px 0 33px;
              font-size: 16px;
              line-height: 32px;
            }
            .detail a {
              display: block;
              height: 34px;
              line-height: 34px;
            }

            .footer {
              font-weight: 500;
            }
          }
        `}
      </style>
      <div className="page-not-found">
        <div className="title">404 NOT FOUND</div>
        <div className="page-not-found-content">
          <div className="slogan">
            <img src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/Scarecrow.png" />
          </div>
          <div className="detail">
            <h2>I have bad news for you</h2>
            <p>
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <Link href="/">
              <a>Back to homepage</a>
            </Link>
          </div>
          <div className="footer">created by username - devChallenges.io</div>
        </div>
      </div>
    </>
  );
}
