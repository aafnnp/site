import {
  Box,
  Center,
  Grid,
  HStack,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Pagination } from '@nextui-org/react';
import { getAllPosts } from 'api/getAllPosts';
import Layout from 'components/Layout';
import React from 'react';

export default function IndexPage(props) {
  console.log('🚀 ~ file: index.jsx ~ line 17 ~ IndexPage ~ props', props);
  const [curPage, setCurPage] = React.useState(1);
  const postList = props.posts[curPage - 1];

  const breakpoints = useBreakpointValue({
    base: {
      columns: '100%',
      gap: 0,
      display: 'none',
    },
    xs: {
      columns: '100%',
      gap: 0,
      display: 'none',
    },
    sm: {
      columns: '100%',
      gap: 0,
      display: 'none',
    },
    md: {
      columns: '100%',
      gap: 0,
      display: 'none',
    },
    xl: {
      columns: '30% auto',
      gap: 6,
      display: 'block',
    },
    lg: {
      columns: '30% auto',
      gap: 6,
      display: 'block',
    },
  });
  return (
    <Layout>
      {postList.map((item) => {
        const { slug, data } = item;
        return (
          <Grid
            templateColumns={breakpoints?.columns || '100%'}
            gap={breakpoints?.gap || 0}
            key={item.slug}
            py={2}
          >
            <Box
              width="100%"
              color="gray"
              textAlign="right"
              display={breakpoints?.display || 'none'}
            >
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
      <Box
        position="absolute"
        w="100vw"
        left="0"
        bottom="0"
        py={4}
        textAlign="center"
        fontSize="xs"
        color="gray.500"
      >
        「<a href="https://webify.cloudbase.net/">CloudBase Webify </a>
        提供网站托管服务」
      </Box>
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
