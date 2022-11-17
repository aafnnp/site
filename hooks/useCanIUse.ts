import {useState, useEffect} from 'react'
import dayjs from 'dayjs'

export const useCanIUse = (tag) => {
  const [data, setData] = useState({})

  const getSupportData = (arr) => {
    return arr.map((item) => {
      const firstSupportItems = Object.entries(item).find((el) => el[1] === 'y')
      return firstSupportItems ? firstSupportItems[0] : 'No'
    })
  }

  useEffect(() => {
    ;(async () => {
      const {fetcher} = await import('utils')
      const res = await fetcher(
        'https://raw.githubusercontent.com/Fyrd/caniuse/main/data.json'
      )
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
      } = res.data[tag]
      const data = {
        desktop: getSupportData([chrome, firefox, ie, edge, safari]),
        mobile: getSupportData([and_chr, and_ff, android, ios_saf]),
        updateTime: dayjs(res.data.updated).format('YYYY-MM-DD HH:mm:ss')
      }

      setData(data)
    })()
  }, [tag])

  return data
}
