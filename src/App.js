import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Main from "./pages/Main";
// import Mypage from "./pages/Mypage";
import styled from "styled-components";
import "./App.css";
import "./shared/font/pretendard.css";
import MainPage from "./pages/MainPage";
import Modify from "./pages/Modify";

function App() {
  return (
    <div className="App">
      <StyledApp>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            {/* <Route path="/mypage" element={<Mypage />}></Route> */}
            <Route path="Modify" element={<Modify />}></Route>
          </Routes>
        </Router>
      </StyledApp>
    </div>
  );
}

const StyledApp = styled.div`
  width: 1920px;
  /* width: 100%; */
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #81ecec;
`;

export default App;
