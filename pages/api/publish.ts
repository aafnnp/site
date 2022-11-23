import type {NextApiRequest, NextApiResponse} from 'next'
// // [
// //   {
// //     _id: '56744723958ef13879b9549b',
// //     slug: 'testing',
// //     name: 'Testing',
// //   },
// // ]
//
// // const PlatformMaps = {
// //   hashNode:{
// //     url:''
// //   },
// //   devTo:{},
// //   medium:{},
// // }
//
// interface PostProps{
//   title?:string
//   content?:string
//   tags?:string
//   cover?:string
// }
//
// /**
//  * 自动发布文章到hashnode
//  * @param title
//  * @param content
//  * @param tags
//  * @param cover
//  * @constructor
//  */
// export const PostToHashNode = async ({title, content, tags, cover}:PostProps) => {
//   const res = await fetch('https://api.hashnode.com', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: process.env.NEXT_PUBLIC_HASHNODE_TOKEN
//     },
//     body: JSON.stringify({
//       query:
//         'mutation createStory($input: CreateStoryInput!){ createStory(input: $input){ code success message } }',
//       variables: {
//         input: {
//           title: title,
//           contentMarkdown: content,
//           tags: tags.map((item) => ({slug: item, name: item})),
//           coverImageURL: cover
//         }
//       }
//     })
//   })
//   // .then((res) => res.json())
//   // .then((res) => console.log(JSON.stringify(res)))
// }
//
// export const PostToDevTo = async ({title, content, tags, cover}:PostProps) => {
//   const res = await fetch('https://dev.to/api/articles', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'api-key': process.env.NEXT_PUBLIC_DEVTO_TOKEN
//     },
//     body: JSON.stringify({
//       article: {
//         title: title,
//         published: true,
//         content: content,
//         tags: tags,
//         series: 'Hello series'
//       }
//     })
//   })
// }
//
// export const PostToMedium = async ({title, content, tags, cover}:PostProps) => {
//   const USER_ID = '85b81f59e9f3'
//   const _headers = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_MEDIUM_TOKEN}`
//     }
//   } as any
//
//   const res = await fetch('https://api.medium.com/v1/me', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_MEDIUM_TOKEN}`,
//     },
//   })
//   console.log(res)
//
//   // 先查询已发布的文章
//   const published = await fetch(
//     `https://api.medium.com/v1/users/${USER_ID}/publications`,
//     {
//       method: 'get',
//       headers: _headers
//     }
//   )
//   const publishedData = await published.json()
//   console.log(publishedData)
//
//   // const publishing = await fetch(
//   //   `https://api.medium.com/v1/users/${USER_ID}/posts`,
//   //   {
//   //     method: 'POST',
//   //     headers: _headers,
//   //     body: JSON.stringify({
//   //       title: title,
//   //       contentFormat: 'markdown',
//   //       content: content,
//   //       canonicalUrl: 'https://manon.icu/',
//   //       tags: tags,
//   //       publishStatus: 'public'
//   //     })
//   //   }
//   // )
//   // const publishingData = await publishing.json()
//   // console.log(publishingData)
// }
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // fetch('https://dev.to/api/articles', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'api-key': process.env.NEXT_PUBLIC_DEVTO_TOKEN
  //   },
  //   // body: JSON.stringify({
  //   //   article: {
  //   //     title: title,
  //   //     published: true,
  //   //     content: content,
  //   //     tags: tags,
  //   //     series: 'Hello series'
  //   //   }
  //   // })
  // }).then(res=>res.json()).then(data=>res.status(200).json(data))
  fetch('https://dev.to/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.NEXT_PUBLIC_DEVTO_TOKEN,
    },
    body: JSON.stringify({
      article: {
        title: 'Hello, World!',
        published: true,
        content: '# You can put Markdown here.\n***\n',
        tags: ['discuss', 'help'],
        series: 'Hello series',
      },
    }),
  })
    .then(res => res.json())
    .then(res => console.log(JSON.stringify(res)))
  res.status(200).json({})
}