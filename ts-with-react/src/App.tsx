import Count from "./component/Count";
import EventObj from "./component/EventObj";
import { PropsType1, PropsType2, PropsType3 } from "./component/PropsType";
import SetText from "./component/SetText";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Practice from "./pages/Practice";
import Matzip from "./pages/Matzip";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lecture" element={<Lecture></Lecture>}></Route>
        <Route path="/practice" element={<Practice></Practice>}></Route>
        <Route path="/practice/matzip" element={<Matzip></Matzip>}></Route>
      </Routes>
    </>
  );
}

export default App;
