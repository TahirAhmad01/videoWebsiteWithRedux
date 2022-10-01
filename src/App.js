// import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="videos/:videoId" element={<Video />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
