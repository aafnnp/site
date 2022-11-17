import {ImageResponse} from '@vercel/og'
import {NextRequest} from 'next/server'
import * as colors from 'utils/colors'
// date: '2022-05-30 15:02:31'
// title: 'Postgresql - Select'
// tags: [postgresql, sql]
// description: 如何从数据库查询数据
// cover: https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/0dXVtX.jpg
export const config = {
  runtime: 'experimental-edge'
}

// const font = fetch(new URL('../../assets/fonts/Dosis.ttf', import.meta.url)).then((res) =>
//   res.arrayBuffer()
// )

export default async function handler(req: NextRequest) {
  try {
    // const fontData = await font
    const {searchParams} = new URL(req.url)

    const title = searchParams.get('title')
    const tags = searchParams.get('tags')
    console.log(title, tags)
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'rgb(29, 155, 240)',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap'
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: 'white',
              whiteSpace: 'pre-wrap'
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 200,
        height: 200
        // fonts: [
        //   {
        //     name: 'Dosis',
        //     data: fontData,
        //     style: 'normal'
        //   }
        // ]
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
