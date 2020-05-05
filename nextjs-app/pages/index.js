import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my blog!</h1>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <Link href="/about">Learn more about me!</Link>
        <Link href="/blog">My Blogs</Link>
      </div>
    </div>
  );
};

export default Home;
