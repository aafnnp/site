import {ImageResponse} from '@vercel/og'

export const config = {
  runtime: 'experimental-edge'
}

export default async function handler(req) {
  const {searchParams} = req.nextUrl
  const title = searchParams.get('title')
  const cover = searchParams.get('cover')
  console.log(cover, 'cover')
  const username = 'Manon.icu'
  const style = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
  // 'linear-gradient(to right top, #1d9bf0, #85b0f4, #b9c7f7, #e1e2fb, #ffffff);'
  return new ImageResponse(
    (
      <div style={style}>
        <div tw="bg-gray-50 flex flex-col justify-between items-center relative w-full h-full p-4">
          <h2 tw="text-3xl text-twitter font-bold">{title}</h2>
          <p tw="absolute text-right bottom-0 right-0 text-xl">
            <img
              width="32"
              height="32"
              src="https://avatars.githubusercontent.com/u/12791216?v=4"
              alt="avatar"
              style={{
                borderRadius: 32
              }}
            />
            github.com/{username}
          </p>
        </div>
        {/* {cover ? <img */}
        {/*   src={cover} */}
        {/*   alt={title} */}
        {/*   width='100%' */}
        {/*   height={'100%'} */}
        {/*   style={{ */}
        {/*     display: 'block', */}
        {/*     position: 'absolute', */}
        {/*     top: '0', */}
        {/*     left: '0', */}
        {/*     zIndex: '1' */}
        {/*   }} */}
        {/* />: null} */}
      </div>
    ),
    {
      width: 600,
      height: 400
    }
  )
}
