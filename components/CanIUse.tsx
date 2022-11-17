import Link from 'next/link'
import dynamic from 'next/dynamic'
import {BrowserEnums} from 'utils'
import {useCanIUse} from 'hooks/useCanIUse'

const Image = dynamic(() => import('components/Image'))

const Section = ({browser, data}) => {
  return (
    <div className="caniuse-section mt-4">
      <h5 className="text-xs py-4 font-bold capitalize">{browser}</h5>
      <div className="grid grid-cols-4 mb-2 gap-4">
        {Object.entries(BrowserEnums[browser]).map(([key, value], index) => {
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
                    data.desktop[index] === 'No' ? '#ff0024' : '#47ca4c'
                }}
              >
                {data.desktop[index]}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function CanIUse({tag}) {
  const data = useCanIUse(tag)

  return (
    <div className="mx-auto my-12">
      <div className="text-gray-500 text-xs">
        This browser support data is from
        <Link
          className="px-1 text-red-500"
          href={`https://caniuse.com/#feat=${tag}`}
        >
          Caniuse
        </Link>
        ,which has more detail. A number indicates that browser supports the
        feature at that version and up. Update Time:
        <span className="text-red-500 px-1">{data.updateTime}</span>
      </div>
      <Section browser="desktop" data={data} />
      <Section browser="mobile" data={data} />
    </div>
  )
}
