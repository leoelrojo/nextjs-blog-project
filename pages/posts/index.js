import Head from 'next/head';
import { Fragment } from 'react';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-utils';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All my posts</title>
        <meta
          name='description'
          content='A list of programming-related tutorials and posts.'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
