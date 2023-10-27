export function customLoader({src, width, quality}) {
  return `https://cdn.jsdelivr.net/gh/manonicu/pics@master/${src}?w=${width}&q=${
    quality || 75
  }`
}
