import Footer from "./components/footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar";
import "./App.css";
import CreatePost from "./components/Create_post";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="div-container ">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
