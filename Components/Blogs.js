import { useEffect, useState } from 'react';
import styled from 'styled-components';


export default function Blogs() {
const [blogs, setblogs] = useState(null);

const BlogWrapper = styled.section`
    width: 80%;
    margin: auto;
    display: flex;
    justifu-content: center
  `;

  const BlogCard = styled.div`
    width: 20vw;
    margin: auto;
  `;

  useEffect(async () => {
    const res = await fetch('/api/blog');
    const {data} = await res.json();
    if (!blogs) {
      setblogs(data)
    }
  }, [blogs])
  


  return (
    <BlogWrapper >

      {blogs && blogs.map((b) => {
        return (
          <a href={`/blog/${b.slug}`}>
          <BlogCard key={b.id}>
            <img src={b.featured_image} alt="" />
            <h4>By {b.author}</h4>
            <h3>{b.title}</h3>
            <p>{b.content}</p>
          </BlogCard>
          </a>
        )
      })}


    </BlogWrapper>
  )
}
