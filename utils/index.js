const getRandomArrayElements = (arr, count) => {
  const shuffled = arr.slice(0)
  let i = arr.length
  const min = i - count
  let temp
  let index

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }

  return shuffled.slice(min)
}

const chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export {getRandomArrayElements, chunk, fetcher}
export { dayjs } from 'dayjs'
