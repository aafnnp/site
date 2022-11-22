import {Grid, GridItem, Text, Heading, Link} from '@chakra-ui/react'

export default function IndexPage() {
  // const canvasRef = useRef(null)
  // useEffect(() => {
  //   if(canvasRef.current){
  //     const ctx = canvasRef.current.getContext("2d")
  //   }
  // }, [])
  return (
    <Grid
      position="relative"
      templateColumns="repeat(5, 1fr)"
      pt={{sm: 4, md: 4, lg: 8, xl: 40}}
      px={{sm: 4, md: 4, lg: 8, xl: 20}}
      pb={20}
      w="100vw"
      h="100vh"
      gap={4}
    >
      <GridItem colSpan={{sm: 5, md: 3, lg: 3, xl: 3}}>
        <Heading as="h1">Feedback</Heading>
        <Text mb={4}>
          You can send me feedback, suggestions and questions by emailing me at{' '}
          <Link href="mailto:gemini0525@foxmail.com">
            gemini0525@foxmail.com
          </Link>
        </Text>
        <Text mb={4}>
          Alternatively, you can send me a message on{' '}
          <Link href="https://twitter.com/Manonicu">Twitter</Link>
        </Text>
        <Text>
          If you spot outdated information in any of my articles, send me a link
          and I will make sure to update the article ASAP.
        </Text>
      </GridItem>
      <GridItem colSpan={{sm: 5, md: 2, lg: 2, xl: 2}}>
        <style jsx>{`
          .symmetry {
            display: flex;
            justify-content: center;
            align-items: center;
            --background: white;
            --unitSize: 4px;
          }

          .transform {
            --x: 0;
            --y: 0;
            --r: 0;
            --s: 0;
            --_scale: 1;
            transform: scaleX(var(--_scale)) translateX(var(--x))
              translateY(var(--y)) rotate(var(--r)) skew(var(--s));
          }

          .flipVertical {
            --x: 0;
            --y: 0;
            --r: 0;
            --s: 0;
            --_scale: -1;
            transform: scaleX(var(--_scale)) translateX(var(--x))
              translateY(var(--y)) rotate(var(--r)) skew(var(--s));
          }

          .flipHorizontal {
            --x: 0;
            --y: 0;
            --r: 0;
            --s: 0;
            --_scale: -1;
            transform: scaleY(var(--_scale)) translateX(var(--x))
              translateY(var(--y)) rotate(var(--r)) skew(var(--s));
          }

          .tracedImage {
            position: absolute;
            height: calc(var(--unitSize) * 80);
            width: unset;
            opacity: 0.5;
            /*z-index: 1;*/
            display: none;
          }

          .canvas {
            width: calc(var(--unitSize) * 40);
            height: calc(var(--unitSize) * 40);
            position: relative;
            /*border: calc(var(--unitSize) * 0.1) solid;*/
            /*opacity: 0.4;*/
          }

          .canvas *,
          .canvas *::before,
          .canvas *::after {
            position: absolute;
          }

          .pseudo::before,
          .pseudo::after {
            content: '';
            display: block;
          }

          .leon {
            --color: black;
            animation: hueCycle 10s linear infinite;
          }

          @keyframes hueCycle {
            0% {
              filter: hue-rotate(0);
            }

            100% {
              filter: hue-rotate(360deg);
            }
          }

          .g1 {
            width: calc(var(--unitSize) * 9.7);
            height: calc(var(--unitSize) * 1);
            background: var(--color);
            --x: calc(var(--unitSize) * -7.5);
            --y: calc(var(--unitSize) * -5.6);
          }

          .g2 {
            width: calc(var(--unitSize) * 7.5);
            height: calc(var(--unitSize) * 1.6);
            background: var(--color);
            border-radius: calc(var(--unitSize) * 0.5) calc(var(--unitSize) * 4)
              0 0 / calc(var(--unitSize) * 1) calc(var(--unitSize) * 1) 0 0;
            --y: calc(var(--unitSize) * -6.5);
            --x: calc(var(--unitSize) * -8);
            --r: -5deg;
          }

          .g3 {
            width: calc(var(--unitSize) * 10.8);
            height: calc(var(--unitSize) * 1.8);
            border: calc(var(--unitSize) * 1) solid var(--color);
            border-top: none;
            border-radius: 50% / 0 0 100% 100%;
            --y: calc(var(--unitSize) * -6);
          }

          .g4 {
            width: calc(var(--unitSize) * 2.8);
            height: calc(var(--unitSize) * 1.4);
            background: var(--color);
            border-top: none;
            --y: calc(var(--unitSize) * -4.3);
            --x: calc(var(--unitSize) * -13.3);
            --r: -66deg;
          }

          .g5 {
            width: calc(var(--unitSize) * 2);
            height: calc(var(--unitSize) * 1);
            background: var(--color);
            border-top: none;
            --y: calc(var(--unitSize) * -5.6);
            --x: calc(var(--unitSize) * -12.3);
            --r: -10deg;
          }

          .g6 {
            width: calc(var(--unitSize) * 5);
            height: calc(var(--unitSize) * 1.7);
            background: var(--color);
            border-top: none;
            --y: calc(var(--unitSize) * -1.4);
            --x: calc(var(--unitSize) * -12.7);
            --r: 65deg;
          }

          .g7 {
            width: calc(var(--unitSize) * 9.2);
            height: calc(var(--unitSize) * 1.5);
            background: var(--color);
            /*border: calc(var(--unitSize) * 1) solid var(--color;*/
            border-top: none;
            border-radius: 50% / 0 0 20% 20%;
            --y: calc(var(--unitSize) * 0.8);
            --x: calc(var(--unitSize) * -7.8);
          }

          .g8 {
            width: calc(var(--unitSize) * 5);
            height: calc(var(--unitSize) * 1.7);
            background: var(--color);
            border-top: none;
            --y: calc(var(--unitSize) * -1.3);
            --x: calc(var(--unitSize) * -2.6);
            --r: -59deg;
          }

          .g9 {
            width: calc(var(--unitSize) * 3);
            height: calc(var(--unitSize) * 1.5);
            background: var(--color);
            border-top: none;
            --y: calc(var(--unitSize) * -4.3);
            --x: calc(var(--unitSize) * -1.9);
            --r: 60deg;
          }

          .g10 {
            width: calc(var(--unitSize) * 4);
            height: calc(var(--unitSize) * 1.5);
            border: calc(var(--unitSize) * 1) solid var(--color);
            border-bottom: none;
            border-radius: 50% / 100% 100% 0 0;
            --y: calc(var(--unitSize) * -3.3);
          }

          .g11 {
            width: calc(var(--unitSize) * 4);
            height: calc(var(--unitSize) * 1.5);
            background: var(--color);
            --y: calc(var(--unitSize) * -4.5);
          }

          .e1 {
            width: calc(var(--unitSize) * 5.3);
            background: var(--color);
            height: calc(var(--unitSize) * 0.6);
            --x: calc(var(--unitSize) * -6.4);
            --y: calc(var(--unitSize) * -3.9);
            --r: 6deg;
            border-radius: 50% / 60% 50% 0 0;
          }

          .e2 {
            width: calc(var(--unitSize) * 1.4);
            background: var(--color);
            height: calc(var(--unitSize) * 0.2);
            --x: calc(var(--unitSize) * -3.5);
            --y: calc(var(--unitSize) * -3);
            --r: 63deg;
            border-radius: calc(var(--unitSize) * 999.9)
              calc(var(--unitSize) * 999.9) calc(var(--unitSize) * 999.9) 0;
          }

          .e3 {
            width: calc(var(--unitSize) * 3);
            height: calc(var(--unitSize) * 1.8);
            --x: calc(var(--unitSize) * -9.4);
            --y: calc(var(--unitSize) * -3.4);
            border-radius: 100% 0 0 0;
            border-top: calc(var(--unitSize) * 0.5) solid var(--color);
            border-left: calc(var(--unitSize) * 0.3) solid var(--color);
          }

          .e4 {
            width: calc(var(--unitSize) * 1.8);
            height: calc(var(--unitSize) * 0.5);
            background: var(--color);
            border-top: none;
            border-radius: 50% / 20% 15% 20% 20%;
            --y: calc(var(--unitSize) * -1.9);
            --x: calc(var(--unitSize) * -10.3);
            --r: -120deg;
          }

          .e5 {
            width: calc(var(--unitSize) * 2);
            height: calc(var(--unitSize) * 0.3);
            background: var(--color);
            border-radius: 0 10% 10% 30% / 0 50% 50% 100%;
            --r: -1deg;
            --y: calc(var(--unitSize) * -1.1);
            --x: calc(var(--unitSize) * -9.1);
          }

          .e6 {
            width: calc(var(--unitSize) * 2.3);
            height: calc(var(--unitSize) * 0.2);
            background: var(--color);
            border-radius: calc(var(--unitSize) * 100);
            --r: -10deg;
            --y: calc(var(--unitSize) * -1);
            --x: calc(var(--unitSize) * -4.7);
          }

          .e7 {
            width: calc(var(--unitSize) * 3.7);
            height: calc(var(--unitSize) * 3);
            background: var(--color);
            border-radius: 50%;
            --r: -5deg;
            --y: calc(var(--unitSize) * -2.7);
            --x: calc(var(--unitSize) * -6.9);
          }

          .e8 {
            width: calc(var(--unitSize) * 1.5);
            height: calc(var(--unitSize) * 1.3);
            background: white;
            border-radius: 50%;
            --r: -5deg;
            --y: calc(var(--unitSize) * -3.2);
            --x: calc(var(--unitSize) * -6.5);
          }

          .n1 {
            width: calc(var(--unitSize) * 0.5);
            height: calc(var(--unitSize) * 2.2);
            border-radius: 0 0 0 calc(var(--unitSize) * 999.9);
            border-left: calc(var(--unitSize) * 0.2) solid var(--color);
            border-bottom: calc(var(--unitSize) * 0.1) solid var(--color);
            --r: 9deg;
            --y: calc(var(--unitSize) * 3.5);
            --x: calc(var(--unitSize) * -3);
          }

          .n2 {
            width: calc(var(--unitSize) * 3.7);
            height: calc(var(--unitSize) * 2.5);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.3) solid var(--color);
            border-inline: calc(var(--unitSize) * 0.2) solid var(--color);
            --vClip: 45%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 4.6);
          }

          .n3 {
            width: calc(var(--unitSize) * 0.5);
            height: calc(var(--unitSize) * 0.2);
            border-radius: 20% 50% 0 20% / 50% 100% 0 50%;
            background: var(--color);
            --r: -12deg;
            --y: calc(var(--unitSize) * 4.5);
            --x: calc(var(--unitSize) * -1.7);
          }

          .b1 {
            border-radius: calc(var(--unitSize) * 3);
            width: calc(var(--unitSize) * 10);
            height: calc(var(--unitSize) * 5);
            --s: -16deg;
            --r: 20deg;
            --y: calc(var(--unitSize) * 8.7);
            --x: calc(var(--unitSize) * -4.3);
            background: var(--color);
            /*opacity: 0.2;*/
          }

          .b2 {
            width: calc(var(--unitSize) * 8);
            height: calc(var(--unitSize) * 2.1);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.5) solid var(--color);
            border-inline: calc(var(--unitSize) * 0.2) solid var(--color);
            --vClip: 45%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 6.6);
          }

          .b3 {
            border-radius: 50% / 0 0 100% 100%;
            background: var(--color);
            width: calc(var(--unitSize) * 30);
            height: calc(var(--unitSize) * 20);
            --y: calc(var(--unitSize) * 12);
            --vClip: 26%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            /*opacity: 0.3;*/
          }

          .b4 {
            background: white;
            border-radius: 0 0 calc(var(--unitSize) * 1.8) 0;
            width: calc(var(--unitSize) * 5.5);
            height: calc(var(--unitSize) * 3.5);
            --s: -5deg;
            --y: calc(var(--unitSize) * 5.8);
            --r: 25deg;
            --x: calc(var(--unitSize) * -11.2);
          }

          .b5 {
            border-radius: 50% / 100% 100% 0 0;
            width: calc(var(--unitSize) * 8.8);
            height: calc(var(--unitSize) * 4);
            border-top: calc(var(--unitSize) * 3.5) solid var(--color);
            --y: calc(var(--unitSize) * 7.5);
            --r: -52deg;
            --x: calc(var(--unitSize) * -12.4);
            --hClip: 60%;
            clip-path: polygon(
              0% 0%,
              var(--hClip) 0%,
              var(--hClip) 100%,
              0% 100%
            );
          }

          .b6 {
            border-radius: 50% / 100% 100% 0 0;
            width: calc(var(--unitSize) * 9.6);
            height: calc(var(--unitSize) * 4.8);
            border-top: calc(var(--unitSize) * 4) solid var(--color);
            --y: calc(var(--unitSize) * 11.8);
            --r: -68deg;
            --x: calc(var(--unitSize) * -10.8);
            --hClip: 60%;
            clip-path: polygon(
              0% 0%,
              var(--hClip) 0%,
              var(--hClip) 100%,
              0% 100%
            );
          }

          .b7 {
            border-radius: 50% / 0 0 100% 100%;
            width: calc(var(--unitSize) * 12.5);
            height: calc(var(--unitSize) * 6.6);
            background: white;
            --y: calc(var(--unitSize) * 11.5);
            /*--x: calc(var(--unitSize) * -10.8);*/
          }

          .b8 {
            border-radius: 50% / 100% 100% 0 0;
            width: calc(var(--unitSize) * 7.9);
            height: calc(var(--unitSize) * 4.1);
            border-top: calc(var(--unitSize) * 3.6) solid white;
            --y: calc(var(--unitSize) * 8.2);
            --r: -25deg;
            --x: calc(var(--unitSize) * -3.9);
            --hClip: 23%;
            clip-path: polygon(
              0% 0%,
              var(--hClip) 0%,
              var(--hClip) 100%,
              0% 100%
            );
          }

          .b9 {
            border-radius: 50% / 100% 100% 0 0;
            width: calc(var(--unitSize) * 8.8);
            height: calc(var(--unitSize) * 4.8);
            border-top: calc(var(--unitSize) * 4.2) solid white;
            --y: calc(var(--unitSize) * 10.7);
            --r: -86deg;
            --x: calc(var(--unitSize) * -3.8);
            --hClip: 52%;
            clip-path: polygon(
              0% 0%,
              var(--hClip) 0%,
              var(--hClip) 100%,
              0% 100%
            );
          }

          .b10 {
            width: calc(var(--unitSize) * 14);
            height: calc(var(--unitSize) * 1.3);
            --y: calc(var(--unitSize) * 8.2);
            background: var(--color);
            border-radius: 50% / 0% 0% 80% 80%;
          }

          .beard {
            /*opacity: 0.5;*/
          }

          .m1 {
            border-radius: 50% / 0 0 100% 100%;
            background: var(--color);
            overflow: hidden;
            border: calc(var(--unitSize) * 0.2) solid var(--color);
            width: calc(var(--unitSize) * 10);
            height: calc(var(--unitSize) * 4);
            --y: calc(var(--unitSize) * 12);
          }

          .m2 {
            border-radius: 50% / 0 0 100% 100%;
            background: white;
            border: calc(var(--unitSize) * 0.2) solid var(--color);
            width: calc(var(--unitSize) * 12);
            height: calc(var(--unitSize) * 1.2);
            --y: calc(var(--unitSize) * 9.9);
            --vClip: 26%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            /*opacity: 0.3;*/
          }

          .m3 {
            border-radius: 50%;
            width: calc(var(--unitSize) * 8);
            height: calc(var(--unitSize) * 5);
            background: white;
            --y: calc(var(--unitSize) * 2.5);
          }

          .h1 {
            width: calc(var(--unitSize) * 9.5);
            background: var(--color);
            height: calc(var(--unitSize) * 9.1);
            border-radius: calc(var(--unitSize) * 2);
            --s: -12deg;
            --x: calc(var(--unitSize) * -19.1);
            --y: calc(var(--unitSize) * -6.3);
            --r: -28deg;
          }

          .h2 {
            width: calc(var(--unitSize) * 7.5);
            background: var(--color);
            height: calc(var(--unitSize) * 5.5);
            border-radius: calc(var(--unitSize) * 0.8);
            --s: -20deg;
            --x: calc(var(--unitSize) * -20.8);
            --y: calc(var(--unitSize) * -3);
            --r: -35deg;
          }

          .h3 {
            width: calc(var(--unitSize) * 8.1);
            background: var(--color);
            height: calc(var(--unitSize) * 5);
            border-radius: calc(var(--unitSize) * 0.8);
            --s: -7deg;
            --x: calc(var(--unitSize) * -17.8);
            --y: calc(var(--unitSize) * -14.7);
            --r: 4deg;
          }

          .h4 {
            width: calc(var(--unitSize) * 8.1);
            background: var(--color);
            height: calc(var(--unitSize) * 9.2);
            border-radius: calc(var(--unitSize) * 2);
            --s: 16deg;
            --x: calc(var(--unitSize) * -18);
            --y: calc(var(--unitSize) * -9.7);
            --r: -20deg;
          }

          .h5 {
            width: calc(var(--unitSize) * 8.1);
            background: var(--color);
            height: calc(var(--unitSize) * 9.2);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * -13.9);
            --y: calc(var(--unitSize) * -16.6);
            --r: 7deg;
          }

          .h6 {
            width: calc(var(--unitSize) * 8.1);
            background: var(--color);
            height: calc(var(--unitSize) * 9.2);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * -9.5);
            --y: calc(var(--unitSize) * -20.7);
            --r: 7deg;
          }

          .h7 {
            width: calc(var(--unitSize) * 8.1);
            background: var(--color);
            height: calc(var(--unitSize) * 9.2);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: 12deg;
            --x: calc(var(--unitSize) * -2.6);
            --y: calc(var(--unitSize) * -22.6);
            --r: 24deg;
          }

          .h8 {
            width: calc(var(--unitSize) * 8.1);
            background: var(--color);
            height: calc(var(--unitSize) * 9.2);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * 1.7);
            --y: calc(var(--unitSize) * -23.2);
            --r: 56deg;
          }

          .h9 {
            width: calc(var(--unitSize) * 8.1);
            background: var(--color);
            height: calc(var(--unitSize) * 9.2);
            border-radius: calc(var(--unitSize) * 2.1);
            --s: 6deg;
            --x: calc(var(--unitSize) * 8.1);
            --y: calc(var(--unitSize) * -21.4);
            --r: 108deg;
          }

          .h10 {
            width: calc(var(--unitSize) * 8.1);
            background: var(--color);
            height: calc(var(--unitSize) * 9.2);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * 14);
            --y: calc(var(--unitSize) * -16.3);
            --r: 92deg;
          }

          .h11 {
            width: calc(var(--unitSize) * 9.6);
            background: var(--color);
            height: calc(var(--unitSize) * 9);
            border-radius: calc(var(--unitSize) * 0.7);
            --s: -26deg;
            --x: calc(var(--unitSize) * 17.9);
            --y: calc(var(--unitSize) * -11.2);
            --r: 88deg;
          }

          .h12 {
            width: calc(var(--unitSize) * 6.1);
            background: var(--color);
            height: calc(var(--unitSize) * 7.2);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * 19.4);
            --y: calc(var(--unitSize) * -0.3);
            --r: 128deg;
          }

          .h13 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * 20.1);
            --y: calc(var(--unitSize) * -4.1);
            --r: 129deg;
          }

          .h14 {
            width: calc(var(--unitSize) * 4.1);
            background: var(--color);
            height: calc(var(--unitSize) * 6);
            border-radius: calc(var(--unitSize) * 0.7);
            --s: -19deg;
            --x: calc(var(--unitSize) * 17.6);
            --y: calc(var(--unitSize) * 5.4);
            --r: 209deg;
          }

          .h15 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * -15.5);
            --y: calc(var(--unitSize) * -16);
            --r: 86deg;
          }

          .h16 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -13deg;
            --x: calc(var(--unitSize) * -11.6);
            --y: calc(var(--unitSize) * -19.7);
            --r: 92deg;
          }

          .h17 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: 12deg;
            --x: calc(var(--unitSize) * -6.8);
            --y: calc(var(--unitSize) * -24);
            --r: 102deg;
          }

          .h18 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -24deg;
            --x: calc(var(--unitSize) * 0.8);
            --y: calc(var(--unitSize) * -24.2);
            --r: -67deg;
          }

          .h19 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: 2deg;
            --x: calc(var(--unitSize) * 5.7);
            --y: calc(var(--unitSize) * -23.2);
            --r: -13deg;
          }

          .h20 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: 9deg;
            --x: calc(var(--unitSize) * 12.7);
            --y: calc(var(--unitSize) * -18.8);
            --r: 182deg;
          }

          .h21 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -16deg;
            --x: calc(var(--unitSize) * 17.2);
            --y: calc(var(--unitSize) * -14.1);
            --r: 87deg;
          }

          .h22 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * 19.8);
            --y: calc(var(--unitSize) * -7.8);
            --r: 129deg;
          }

          .h23 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * 2.7);
            --y: calc(var(--unitSize) * -16.2);
            --r: 129deg;
          }

          .h24 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 0.9);
            --s: -4deg;
            --x: calc(var(--unitSize) * 16.2);
            --y: calc(var(--unitSize) * -8.3);
            --r: 111deg;
          }

          .h25 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 0.6);
            --s: -18deg;
            --x: calc(var(--unitSize) * 14.2);
            --y: calc(var(--unitSize) * -11);
            --r: 84deg;
          }

          .h25 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 0.6);
            --s: -18deg;
            --x: calc(var(--unitSize) * 14.2);
            --y: calc(var(--unitSize) * -11);
            --r: 84deg;
          }

          .h26 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: 1deg;
            --x: calc(var(--unitSize) * 16.7);
            --y: calc(var(--unitSize) * -5.7);
            --r: 156deg;
          }

          .h27 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -29deg;
            --x: calc(var(--unitSize) * 17.1);
            --y: calc(var(--unitSize) * -0.1);
            --r: 122deg;
          }

          .h28 {
            width: calc(var(--unitSize) * 5.5);
            background: var(--color);
            height: calc(var(--unitSize) * 6.4);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -16deg;
            --x: calc(var(--unitSize) * 17.4);
            --y: calc(var(--unitSize) * 2.4);
            --r: 111deg;
          }

          .h29 {
            width: calc(var(--unitSize) * 4.1);
            background: var(--color);
            height: calc(var(--unitSize) * 4.5);
            border-radius: calc(var(--unitSize) * 0.5);
            --s: -9deg;
            --x: calc(var(--unitSize) * 17.1);
            --y: calc(var(--unitSize) * 4.3);
            --r: 213deg;
          }

          .h30 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 0.6);
            --s: -9deg;
            --x: calc(var(--unitSize) * 11.8);
            --y: calc(var(--unitSize) * -13.9);
            --r: 164deg;
          }

          .h31 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 0.7);
            --s: -9deg;
            --x: calc(var(--unitSize) * 10);
            --y: calc(var(--unitSize) * -15.6);
            --r: 158deg;
          }

          .h32 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * 7.9);
            --y: calc(var(--unitSize) * -15.9);
            --r: 158deg;
          }

          .h33 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * 3.1);
            --y: calc(var(--unitSize) * -16);
            --r: 107deg;
          }

          .h34 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 0.7);
            --s: -9deg;
            --x: calc(var(--unitSize) * -1.4);
            --y: calc(var(--unitSize) * -16.4);
            --r: 129deg;
          }

          .h35 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -18deg;
            --x: calc(var(--unitSize) * 1.4);
            --y: calc(var(--unitSize) * -16.3);
            --r: 133deg;
          }

          .h36 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 0.5);
            --s: -9deg;
            --x: calc(var(--unitSize) * -3.4);
            --y: calc(var(--unitSize) * -16.4);
            --r: 129deg;
          }

          .h37 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.3);
            --s: -9deg;
            --x: calc(var(--unitSize) * -5.3);
            --y: calc(var(--unitSize) * -15.1);
            --r: 30deg;
          }

          .h38 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.4);
            --s: -9deg;
            --x: calc(var(--unitSize) * -9.7);
            --y: calc(var(--unitSize) * -14);
            --r: 182deg;
          }

          .h39 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * -12.6);
            --y: calc(var(--unitSize) * -12.4);
            --r: 180deg;
          }

          .h40 {
            width: calc(var(--unitSize) * 5.2);
            background: var(--color);
            height: calc(var(--unitSize) * 6.4);
            border-radius: calc(var(--unitSize) * 0.7);
            --s: -9deg;
            --x: calc(var(--unitSize) * -17.5);
            --y: calc(var(--unitSize) * 3.4);
            --r: 143deg;
          }

          .h41 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * -15.3);
            --y: calc(var(--unitSize) * -7.4);
            --r: 179deg;
          }

          .h42 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * -17.2);
            --y: calc(var(--unitSize) * -2.7);
            --r: 162deg;
          }

          .h43 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -14deg;
            --x: calc(var(--unitSize) * -20.1);
            --y: calc(var(--unitSize) * 0.4);
            --r: 189deg;
          }

          .h44 {
            width: calc(var(--unitSize) * 6.2);
            background: var(--color);
            height: calc(var(--unitSize) * 7);
            border-radius: calc(var(--unitSize) * 1.2);
            --s: -9deg;
            --x: calc(var(--unitSize) * -17);
            --y: calc(var(--unitSize) * 1.3);
            --r: 129deg;
          }

          .h45 {
            width: calc(var(--unitSize) * 3.4);
            background: var(--color);
            height: calc(var(--unitSize) * 3.3);
            border-radius: calc(var(--unitSize) * 0.4);
            --s: -9deg;
            --x: calc(var(--unitSize) * -15.5);
            --y: calc(var(--unitSize) * 5.8);
            --r: 157deg;
          }

          .h46 {
            width: calc(var(--unitSize) * 4.7);
            background: var(--color);
            height: calc(var(--unitSize) * 3.5);
            border-radius: calc(var(--unitSize) * 0.6);
            --s: 28deg;
            --x: calc(var(--unitSize) * -17.9);
            --y: calc(var(--unitSize) * 4.4);
            --r: 114deg;
          }

          .h47 {
            width: calc(var(--unitSize) * 5.2);
            background: var(--color);
            height: calc(var(--unitSize) * 4.5);
            border-radius: calc(var(--unitSize) * 0.7);
            --s: 28deg;
            --x: calc(var(--unitSize) * -18.2);
            --y: calc(var(--unitSize) * 4.1);
            --r: 141deg;
          }

          /*.head {*/
          /*    opacity: 0.5;*/
          /*}*/

          .s1 {
            width: calc(var(--unitSize) * 23.5);
            height: calc(var(--unitSize) * 12.7);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.9) solid var(--color);
            border-inline: calc(var(--unitSize) * 0.2) solid var(--color);
            --vClip: 45%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 17.1);
          }

          .s2 {
            width: calc(var(--unitSize) * 6.1);
            height: calc(var(--unitSize) * 0.5);
            background: var(--color);
            --y: calc(var(--unitSize) * 19.2);
            --r: 68deg;
            --x: calc(var(--unitSize) * -9.2);
          }

          .s3 {
            width: calc(var(--unitSize) * 2.7);
            height: calc(var(--unitSize) * 0.5);
            background: var(--color);
            --y: calc(var(--unitSize) * 24.1);
            --r: 90deg;
          }

          .s4 {
            width: calc(var(--unitSize) * 7.6);
            height: calc(var(--unitSize) * 5.5);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.5) solid var(--color);
            border-right: calc(var(--unitSize) * 0.3) solid var(--color);
            border-left: calc(var(--unitSize) * 0.7) solid var(--color);
            --vClip: 45%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 12);
            --r: 137deg;
            --x: calc(var(--unitSize) * -16.5);
          }

          .s5 {
            width: calc(var(--unitSize) * 12.6);
            height: calc(var(--unitSize) * 2.4);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.4) solid var(--color);
            border-right: calc(var(--unitSize) * 0.8) solid var(--color);
            border-left: calc(var(--unitSize) * 0.4) solid var(--color);
            --vClip: 45%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 17.4);
            --r: 37deg;
            --x: calc(var(--unitSize) * -14.6);
          }

          .s6 {
            width: calc(var(--unitSize) * 11.8);
            height: calc(var(--unitSize) * 4.4);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.4) solid var(--color);
            border-right: calc(var(--unitSize) * 0.6) solid var(--color);
            border-left: calc(var(--unitSize) * 0.4) solid var(--color);
            --vClip: 45%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 24.7);
            --r: 244deg;
            --x: calc(var(--unitSize) * -8.8);
          }

          .s7 {
            width: calc(var(--unitSize) * 11.8);
            height: calc(var(--unitSize) * 5.2);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.4) solid var(--color);
            border-right: calc(var(--unitSize) * 0.6) solid var(--color);
            border-left: calc(var(--unitSize) * 0.4) solid var(--color);
            --vClip: 65%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 26.4);
            --r: 232deg;
            --x: calc(var(--unitSize) * -10);
          }

          .s8 {
            width: calc(var(--unitSize) * 15.6);
            height: calc(var(--unitSize) * 2.8);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.4) solid var(--color);
            border-right: calc(var(--unitSize) * 0.6) solid var(--color);
            border-left: calc(var(--unitSize) * 0.4) solid var(--color);
            --vClip: 65%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 20.2);
            --r: 384deg;
            --x: calc(var(--unitSize) * -15.6);
          }

          .s9 {
            width: calc(var(--unitSize) * 9.3);
            height: calc(var(--unitSize) * 4.1);
            border-radius: 0 0 60% 40%/ 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.3) solid var(--color);
            border-right: calc(var(--unitSize) * 0.4) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --vClip: 54%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 15.1);
            --r: 452deg;
            --x: calc(var(--unitSize) * -20.2);
          }

          .s10 {
            width: calc(var(--unitSize) * 8.1);
            height: calc(var(--unitSize) * 5.4);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.5) solid var(--color);
            border-right: calc(var(--unitSize) * 0.2) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --vClip: 52%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 11.7);
            --r: 510deg;
            --x: calc(var(--unitSize) * -17.6);
          }

          .s11 {
            width: calc(var(--unitSize) * 4.5);
            height: calc(var(--unitSize) * 0.5);
            background: var(--color);
            --y: calc(var(--unitSize) * 26.7);
            --r: -34deg;
            --x: calc(var(--unitSize) * -1.8);
          }

          .s12 {
            width: calc(var(--unitSize) * 4);
            height: calc(var(--unitSize) * 0.4);
            background: var(--color);
            --y: calc(var(--unitSize) * 26.7);
            --r: 42deg;
            --x: calc(var(--unitSize) * -5);
          }

          .s13 {
            width: calc(var(--unitSize) * 3.5);
            height: calc(var(--unitSize) * 1.3);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.5) solid var(--color);
            border-right: calc(var(--unitSize) * 0.2) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --vClip: 52%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 24.4);
            --r: 687deg;
            --x: calc(var(--unitSize) * -10.5);
          }

          .s14 {
            width: calc(var(--unitSize) * 5.7);
            height: calc(var(--unitSize) * 2);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.5) solid var(--color);
            border-right: calc(var(--unitSize) * 0.2) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --vClip: 54%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 27.3);
            --r: -105deg;
            --x: calc(var(--unitSize) * -11);
          }

          .s15 {
            width: calc(var(--unitSize) * 9.6);
            height: calc(var(--unitSize) * 2.5);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 1) solid var(--color);
            border-right: calc(var(--unitSize) * 0.2) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --vClip: 23%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 29.5);
            --r: -95deg;
            --x: calc(var(--unitSize) * -18.3);
          }

          .s16 {
            width: calc(var(--unitSize) * 4.2);
            height: calc(var(--unitSize) * 1.4);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 1) solid var(--color);
            border-right: calc(var(--unitSize) * 0.2) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --hClip: 60%;
            clip-path: polygon(
              0% 0%,
              var(--hClip) 0%,
              var(--hClip) 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 19.8);
            --r: -150deg;
            --x: calc(var(--unitSize) * -22.5);
          }

          .s17 {
            width: calc(var(--unitSize) * 17.8);
            height: calc(var(--unitSize) * 1.4);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.7) solid var(--color);
            border-right: calc(var(--unitSize) * 0.2) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --vClip: 23%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 27.1);
            --r: -67deg;
            --x: calc(var(--unitSize) * -25.7);
          }

          .s18 {
            width: calc(var(--unitSize) * 2.7);
            height: calc(var(--unitSize) * 1.1);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.7) solid var(--color);
            border-right: calc(var(--unitSize) * 0.2) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --vClip: 23%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 19.1);
            --r: -24deg;
            --x: calc(var(--unitSize) * -21.6);
          }

          .s19 {
            width: calc(var(--unitSize) * 6.7);
            height: calc(var(--unitSize) * 1.1);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 0.7) solid var(--color);
            border-right: calc(var(--unitSize) * 0.2) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --vClip: 23%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 37.3);
            --r: 64deg;
            --x: calc(var(--unitSize) * -28);
          }

          .s20 {
            width: calc(var(--unitSize) * 5.8);
            height: calc(var(--unitSize) * 2.3);
            border-radius: 50% / 0 0 100% 100%;
            border-bottom: calc(var(--unitSize) * 1.9) solid var(--color);
            border-right: calc(var(--unitSize) * 0.2) solid var(--color);
            border-left: calc(var(--unitSize) * 0.1) solid var(--color);
            --hClip: 60%;
            clip-path: polygon(
              0% 0%,
              var(--hClip) 0%,
              var(--hClip) 100%,
              0% 100%
            );
            --y: calc(var(--unitSize) * 35.9);
            --r: -211deg;
            --x: calc(var(--unitSize) * 20.4);
          }

          .laptop {
            width: calc(var(--unitSize) * 41.3);
            height: calc(var(--unitSize) * 33);
            border-radius: 50% / 10% 10% 90% 90%;
            background: var(--color);
            --vClip: 34%;
            clip-path: polygon(
              0% var(--vClip),
              100% var(--vClip),
              100% 0%,
              0% 0%
            );
            --y: calc(var(--unitSize) * 45.1);
          }
        `}</style>
        <div className="canvas symmetry">
          <div className="leon symmetry">
            <div className="head symmetry">
              <div className="symmetry">
                <div className="g1 transform"></div>
                <div className="g1 flipVertical"></div>
                <div className="g2 transform"></div>
                <div className="g2 flipVertical"></div>
                <div className="g3 transform"></div>
                <div className="g4 transform"></div>
                <div className="g4 flipVertical"></div>
                <div className="g5 transform"></div>
                <div className="g5 flipVertical"></div>
                <div className="g6 transform"></div>
                <div className="g6 flipVertical"></div>
                <div className="g7 transform"></div>
                <div className="g7 flipVertical"></div>
                <div className="g8 transform"></div>
                <div className="g8 flipVertical"></div>
                <div className="g9 transform"></div>
                <div className="g9 flipVertical"></div>
                <div className="g10 transform"></div>
                <div className="g11 transform"></div>
              </div>
              <div className="symmetry">
                <div className="e2 transform"></div>
                <div className="e2 flipVertical"></div>
                <div className="e3 transform"></div>
                <div className="e3 flipVertical"></div>
                <div className="e4 transform"></div>
                <div className="e4 flipVertical"></div>
                <div className="e5 transform"></div>
                <div className="e5 flipVertical"></div>
                <div className="e6 transform"></div>
                <div className="e6 flipVertical"></div>
                <div className="e7 transform"></div>
                <div className="e7 flipVertical"></div>
                <div className="e8 transform"></div>
                <div className="e8 flipVertical"></div>
                <div className="e1 transform"></div>
                <div className="e1 flipVertical"></div>
              </div>
              <div className="symmetry">
                <div className="n1 transform"></div>
                <div className="n1 flipVertical"></div>
                <div className="n2 transform"></div>
                <div className="n3 transform"></div>
                <div className="n3 flipVertical"></div>
              </div>
              <div className="symmetry beard">
                <div className="b1 transform"></div>
                <div className="b1 flipVertical"></div>
                <div className="b2 transform"></div>
                <div className="b2 flipVertical"></div>
                <div className="b3 transform"></div>
                <div className="b3 flipVertical"></div>
                <div className="b5 transform"></div>
                <div className="b5 flipVertical"></div>
                <div className="b4 transform"></div>
                <div className="b4 flipVertical"></div>
                <div className="b6 transform"></div>
                <div className="b6 flipVertical"></div>
                <div className="b7 transform"></div>
                <div className="b8 transform"></div>
                <div className="b8 flipVertical"></div>
                <div className="b9 transform"></div>
                <div className="b9 flipVertical"></div>
                <div className="b10 transform"></div>
              </div>
              <div className="symmetry">
                <div className="m1 transform symmetry">
                  <div className="m3 transform"></div>
                </div>
                <div className="m2 transform"></div>
                <div className="m2 flipVertical"></div>
              </div>
              <div className="symmetry">
                <div className="h1 transform"></div>
                <div className="h2 transform"></div>
                <div className="h3 transform"></div>
                <div className="h4 transform"></div>
                <div className="h5 transform"></div>
                <div className="h6 transform"></div>
                <div className="h7 transform"></div>
                <div className="h8 transform"></div>
                <div className="h9 transform"></div>
                <div className="h10 transform"></div>
                <div className="h11 transform"></div>
                <div className="h12 transform"></div>
                <div className="h13 transform"></div>
                <div className="h14 transform"></div>
                <div className="h15 transform"></div>
                <div className="h16 transform"></div>
                <div className="h17 transform"></div>
                <div className="h18 transform"></div>
                <div className="h19 transform"></div>
                <div className="h20 transform"></div>
                <div className="h21 transform"></div>
                <div className="h22 transform"></div>
                <div className="h23 transform"></div>
                <div className="h24 transform"></div>
                <div className="h25 transform"></div>
                <div className="h26 transform"></div>
                <div className="h27 transform"></div>
                <div className="h28 transform"></div>
                <div className="h29 transform"></div>
                <div className="h30 transform"></div>
                <div className="h31 transform"></div>
                <div className="h32 transform"></div>
                <div className="h33 transform"></div>
                <div className="h34 transform"></div>
                <div className="h35 transform"></div>
                <div className="h36 transform"></div>
                <div className="h37 transform"></div>
                <div className="h38 transform"></div>
                <div className="h39 transform"></div>
                <div className="h40 transform"></div>
                <div className="h41 transform"></div>
                <div className="h42 transform"></div>
                <div className="h43 transform"></div>
                <div className="h44 transform"></div>
                <div className="h45 transform"></div>
                <div className="h46 transform"></div>
                <div className="h47 transform"></div>
              </div>
              <div className="symmetry">
                <div className="s1 transform"></div>
                <div className="s1 flipVertical"></div>
                <div className="s2 transform"></div>
                <div className="s2 flipVertical"></div>
                <div className="s3 transform"></div>
                <div className="s3 flipVertical"></div>
                <div className="s4 transform"></div>
                <div className="s4 flipVertical"></div>
                <div className="s5 transform"></div>
                <div className="s5 flipVertical"></div>
                <div className="s6 transform"></div>
                <div className="s6 flipVertical"></div>
                <div className="s7 transform"></div>
                <div className="s7 flipVertical"></div>
                <div className="s8 transform"></div>
                <div className="s8 flipVertical"></div>
                <div className="s9 transform"></div>
                <div className="s9 flipVertical"></div>
                <div className="s10 transform"></div>
                <div className="s10 flipVertical"></div>
                <div className="s11 transform"></div>
                <div className="s11 flipVertical"></div>
                <div className="s12 transform"></div>
                <div className="s12 flipVertical"></div>
                <div className="s13 transform"></div>
                <div className="s13 flipVertical"></div>
                <div className="s14 transform"></div>
                <div className="s14 flipVertical"></div>
                <div className="s15 transform"></div>
                <div className="s15 flipVertical"></div>
                <div className="s16 transform"></div>
                <div className="s16 flipVertical"></div>
                <div className="s17 transform"></div>
                <div className="s17 flipVertical"></div>
                <div className="s18 transform"></div>
                <div className="s18 flipVertical"></div>
                <div className="s19 transform"></div>
                <div className="s19 flipVertical"></div>
                <div className="s20 transform"></div>
                <div className="s20 flipVertical"></div>
                <div className="s21 transform"></div>
                <div className="s21 flipVertical"></div>
                <div className="s22 transform"></div>
                <div className="s22 flipVertical"></div>
                <div className="s23 transform"></div>
                <div className="s23 flipVertical"></div>
                <div className="s24 transform"></div>
                <div className="s24 flipVertical"></div>
                <div className="s25 transform"></div>
                <div className="s25 flipVertical"></div>
              </div>
              <div className="laptop transform"></div>
            </div>
          </div>
        </div>
      </GridItem>
    </Grid>
  )
}
