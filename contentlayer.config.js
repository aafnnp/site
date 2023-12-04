import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  // 定义入口字段
  fields: {
    date: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'list',
      of: {type: 'string'},
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: false
    },
    draft: {
      type: 'boolean',
      required: false
    },
    cover: {
      type: 'string',
      required: false
    },
    originalUrl: {
      type: 'string',
      required: false
    },
    updateTime: {
      type: 'string',
      required: false
    },
    handle: {
      type: 'string',
      required: false
    }
  },
  // 定义额外出参
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath
    },
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`
    },
    readingTime: {
      type: 'nested',
      resolve: (doc) => readingTime(doc.body.code)
    }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          // 代码主题类型 https://unpkg.com/browse/shiki@0.14.2/themes/
          theme: 'one-dark-pro',
          // To apply a custom background instead of inheriting the background from the theme
          keepBackground: false
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            // 锚点类名
            className: ['anchor']
          }
        }
      ]
    ]
  }
})
