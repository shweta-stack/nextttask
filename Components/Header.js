import styled from 'styled-components';
import bgimg from '../assets/bg-intro-desktop.svg';


export default function Header() {

  const HeadWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;

  `;

  const HeadContent = styled.div`
    width: 50%;
  `;

  const HeadImage = styled.div`
    width: 50%;
    height: 50vh;
  `;

  const Navbutton = styled.button`
        padding: 1vmax 2vmax;
        background: linear-gradient(to right, #31d35c, #2bb7da);
        border: none;
        border-radius: 10vmax;
        color: #fff;
    `;


    return (
      <HeadWrapper>
        <HeadContent>
          <h1>
            Next generation <br />
            digital banking
          </h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil, explicabo dolorem labore debitis eligendi. Sint iusto eligendi ea perferendis repellat fugit placeat quo esse dicta? Esse error inventore doloremque?</p>
          <Navbutton>Request Invite</Navbutton>
        </HeadContent>



      <HeadImage>
  
      </HeadImage>

      </HeadWrapper>
    )
  }
  