import { Routes, Route } from "react-router-dom";
import VideoCard from "./components/Video/VideoCard";
import VideoDetail from "./components/Video/VideoDetail";
import NotFoundPage from "./pages/NotFoundPage";
import Card from "./components/UI/Card";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Card />}>
          <Route path="videos" element={<VideoCard />} />
          <Route path="videos/:keywords" element={<VideoCard />} />
          <Route path="videos/watch" element={<VideoDetail />} />
          <Route path="videos/watch/:keywords" element={<VideoDetail />} />
        </Route>
        <Route path="*" element={NotFoundPage} />
      </Routes>
    </>
  );
}

export default App;
