import logo from "./logo.svg";
import "./App.css";
import { styled } from "styled-components";
import SideBar from "./pages/SideBar";
import Discover from "./pages/Discover";
import { useState } from "react";

const Section = styled.div`
  display: flex;
  position: relative;
  /* min-height: 70vh; */
  max-height: 95vh;
`;

const ContentDiv = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  background-color: rgb(0 0 0 / 0.05);
`;

const Content = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  /* height: calc(100vh - 72px); */
  overflow-y: scroll;

  display: flex;
  flex-direction: column-reverse;

  ::-webkit-scrollbar {
    //????
    display: none;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const Div = styled.div`
  flex: 1 1 0%;
  height: fit-content;
  padding-bottom: 10rem;
`;

function App() {
  return (
    <Section>
      <SideBar />
      <ContentDiv>
        <Content>
          <Div>
            <Discover />
          </Div>
        </Content>
      </ContentDiv>
    </Section>
  );
}

export default App;
