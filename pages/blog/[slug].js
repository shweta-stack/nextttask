import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';


export default function Slug() {
const [singleblog, setsingleblog] = useState(null);

const router = useRouter();
const slug = router.query.slug;

  useEffect(async () => {
    const res = await fetch(`/api/blog/${slug}`);
    const { data } = await res.json();
      setsingleblog(data)
  },[slug])
  

  const BlogWrapper = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justifu-content: center;
  align-items: center
`;
  
  return (
    <BlogWrapper >
        {singleblog && (
          <>
          <img width="500" src={singleblog.featured_image} alt="" />
          <small>By {singleblog.author}</small>
          <h1>{singleblog.title}</h1>
          <p>{singleblog.content}</p>
          </>
        )}
        
        
    </BlogWrapper>
  )
}
