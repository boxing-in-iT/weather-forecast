import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  width: 250px;
  padding: 1rem;
  background-color: #6bb9f0;
  fon: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Card = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  text-align: center;
`;

const Title = styled.div`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.div`
  color: #666;
  font-size: 1rem;
`;

const WeatherCard = ({ data }) => {
  return (
    <Cards>
      <Card>
        <TitleDiv>
          <Title>{data.title}</Title>
          {data?.title1 && <SubTitle>{data.title1}</SubTitle>}
          {data?.title2 && <SubTitle>{data.title2}</SubTitle>}
        </TitleDiv>
      </Card>
    </Cards>
  );
};

export default WeatherCard;

// import React from "react";
// import { styled } from "styled-components";

// const Cards = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 250px;
//   padding: 1rem;
//   background-color: rgb(135, 206, 250);
//   border-radius: 1rem;
// `;

// const Card = styled.div`
//   position: relative;
//   width: 100%;
//   height: 8rem;
// `;

// const TitleDiv = styled.div`
//   margin-top: 1rem;
//   display: flex;
//   flex-direction: column;
// `;

// const Title = styled.div`
//   color: rgb(0, 0, 0);
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `;

// const SubTitle = styled.div`
//   color: rgb(0, 0, 0);
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `;

// const WeatherCard = ({ data }) => {
//   return (
//     <Cards>
//       <Card>
//         <TitleDiv>
//           <Title>{data.title}</Title>
//           <SubTitle>{data?.title1}</SubTitle>
//           {data?.title2 ? <SubTitle>{data?.title2}</SubTitle> : <></>}
//         </TitleDiv>
//       </Card>
//     </Cards>
//   );
// };

// export default WeatherCard;
