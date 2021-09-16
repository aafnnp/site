import { chunk, getRandomArrayElements } from '@utils/index';
import fs from 'fs';
import { globby } from 'globby';
import matter from 'gray-matter';
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

export const getAllPosts = async () => {
  const posts = await globby(['_posts']);
  const postsArray = [];
  for await (const post of posts) {
    const fileContents = fs.readFileSync(post, 'utf8');
    const { data, content } = matter(fileContents);
    const postData = {
      data: {
        ...data,
        date: dayjs(data.date).format('MMMM D, YYYY'),
        fromNow: dayjs(data.date).fromNow(),
      },
      content,
      slug: post.replace(/^_posts\//, '').replace(/\.mdx$/, ''),
    };
    postsArray.push(postData);
  }
  return chunk(
    postsArray.sort((a, b) => dayjs(b.data.date) - dayjs(a.data.date)),
    20
  );
};

// 根据slug导出文章
export const GetPostBySlug = async (slug) => {
  const realslug = `${slug.join('/')}`;

  const allPosts = await getAllPosts();

  return allPosts.flat(2).find((post) => post.slug.includes(realslug));
};

// 根据tag导出随机文章
export const GetRandomPost = async () => {
  const randomPost = (await getAllPosts()).flat(2);

  return getRandomArrayElements(
    randomPost,
    randomPost.length < 6 ? randomPost.length - 1 : 6
  );
};
