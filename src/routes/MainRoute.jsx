import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AutoScrollHard from "../helper/Helper";

const MainRoute = () => {
  return (
    <>
      <AutoScrollHard x={0} y={0} />

      <Routes>
        {/* general */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default MainRoute;
