const Blog = ({ blog }) => (
  <div>
    <h1>{blog.title}</h1>
    <div>{blog.content}</div>
  </div>
);

export const getServerSideProps = async (req) => {
  const {slug} = req.query;
  const blogs = require('./blogs.json');
  const blog = blogs.find(bl => bl.slug === slug);

  return {
    props: {
      blog
    }
  }
}

export default Blog;
