interface config {
  src: string;
  width: string | number;
  quality: string | number | null;
}

const ImgLoader = ({ src, width, quality }: config):string => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export { ImgLoader }
