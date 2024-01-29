import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AutoScrollHard from "../helper/Helper";
import DetailMovie from "../pages/movie/DetailMovie";

const MainRoute = () => {
  return (
    <>
      <AutoScrollHard x={0} y={0} />

      <Routes>
        {/* general */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
      </Routes>
    </>
  );
};

export default MainRoute;
