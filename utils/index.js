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

// Chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )
