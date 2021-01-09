import { useState, useEffect, useCallback } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import Spinner from '../Spinner/Spinner';
import './Blog.css';

function Blog({ getBlog }) {
  const [posts, setPosts] = useState([]);
  const [showSpinner, setSpinner] = useState(false);

  const getPosts = useCallback(async () => {
    setSpinner(true);
    try {
      const data = await getBlog();
      if (data) {
        setPosts(data);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setSpinner(false);
    }
  }, [getBlog]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      {showSpinner ? (
        <Spinner />
      ) : (
        <section className="blog">
          <ul className="blog__list">
            {posts.map((el) => (
              <BlogPost key={el.id} {...el} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default Blog;
