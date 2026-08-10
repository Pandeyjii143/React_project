import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PostListProvider from "./store/post-list-store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PostListProvider>
    <App />
  </PostListProvider>,
);
