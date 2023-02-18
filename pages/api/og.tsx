import {ImageResponse} from '@vercel/og'
import {NextRequest} from 'next/server'
import colors from 'utils/colors'

export const config = {
  runtime: 'edge'
}

const font = fetch(
  new URL('../../assets/fonts/Dosis-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function (req: NextRequest) {
  const {searchParams} = req.nextUrl
  const tag = searchParams.get('tag')
  const title = searchParams.get('title')
  const cover = searchParams.get('cover')
  const fontData = await font

  if (cover) {
    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            backgroundImage: `url(${cover})`,
            backgroundColor: colors[tag].bg,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: colors[tag]?.color,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: '"Dosis"',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              fontSize: 24,
              padding: 16
            }}
          >
            @ManonIcu
          </div>
          <div
            style={{
              fontSize: 48,
              display: 'flex',
              alignSelf: 'flex-end',
              padding: 16
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 800,
        height: 600,
        fonts: [
          {
            name: 'Dosis',
            data: fontData,
            style: 'normal'
          }
        ]
      }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          backgroundColor: colors[tag].bg,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          color: colors[tag]?.color,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: '"Dosis"',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-start',
            fontSize: 24,
            padding: 16
          }}
        >
          @ManonIcu
        </div>
        <div
          style={{
            fontSize: 48,
            display: 'flex',
            alignSelf: 'flex-end',
            padding: 16
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 800,
      height: 600,
      fonts: [
        {
          name: 'Dosis',
          data: fontData,
          style: 'normal'
        }
      ]
    }
  )
}
