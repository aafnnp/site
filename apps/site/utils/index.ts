export const getRandomArrayElements = (arr, count) => {
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

export const chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

// @ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const BrowserEnums = {
  desktop: {
    Chrome: 'chrome',
    Firefox: 'firefox',
    IE: 'ie',
    Edge: 'edge',
    Safari: 'safari'
  },
  mobile: {
    'Android Chrome': 'chrome',
    'Android FireFox': 'firefox',
    Android: 'android',
    'Ios Safari': 'safari'
  }
}
