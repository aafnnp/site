import Giscus from '@giscus/react';

export default function Comments(){
  return <Giscus
    id="comments"
    repo="Manonicu/site"
    repoId="MDEwOlJlcG9zaXRvcnkzMjY4ODQyMjM="
    category="General"
    categoryId="MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMzU1OTIz"
    mapping="og:title"
    term="Welcome to @giscus/react component!"
    reactionsEnabled="1"
    emitMetadata="1"
    inputPosition="top"
    theme="light"
    lang="en"
    loading="lazy"
  />
}
