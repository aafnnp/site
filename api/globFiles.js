import { globby } from 'globby'

export const globFiles = async (dir) => {
  const files = await globby([dir])
  return files.reduce((acc, file) => {
    const arr = file
      .substring(file.indexOf('/') + 1)
      .replace('.jsx', '')
      .split('/')
    acc.push({
      params: {
        slug: arr
      }
    })
    return acc
  }, [])
}
