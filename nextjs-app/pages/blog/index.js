const BlogsPage = ({ blogs }) => (
  <div>
    <ul>
      {blogs.map(blog => (
        <li>
          <a href={`/blog/${blog.slug}`}>{blog.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export const getStaticPaths = async () => {
  const blogs = require('./blogs.json');
  const paths = blogs.map(blog => ({
    params: {
      slug: blog.slug
    }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async () => {
  const blogs = require('./blogs.json');
  return {
    props: {
      blogs
    }
  };
};

export default BlogsPage;
