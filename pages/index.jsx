import { Box, Center, Grid, HStack, Image, Link, Text } from '@chakra-ui/react';
import { Pagination } from '@nextui-org/react';
import { getAllPosts } from 'api/getAllPosts';
import Layout from 'components/Layout';
import React from 'react';

export default function IndexPage(props) {
  const [curPage, setCurPage] = React.useState(1);
  const postList = props.posts[curPage - 1];

  return (
    <Layout>
      {postList.map((item) => {
        const { slug, data } = item;
        return (
          <Grid templateColumns="30% auto" gap={6} key={item.slug} py={2}>
            <Box width="100%" color="gray" textAlign="right">
              <Text color="gray.500" isTruncated>
                {data.date}
              </Text>
            </Box>
            <Box width="100%">
              <HStack>
                <Link href={`/blog/${slug}`}>{data.title}</Link>
                {data.tags?.map((tag) => (
                  <Image
                    boxSize="1rem"
                    alt={tag}
                    key={tag}
                    htmlWidth="1rem"
                    htmlHeight="1rem"
                    src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
                  />
                ))}
              </HStack>
            </Box>
          </Grid>
        );
      })}
      <Center py={4}>
        <Pagination
          total={props.posts.length}
          initialPage={curPage}
          onChange={(page) => setCurPage(page)}
        />
      </Center>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
