import ReactDOM from "react-dom/client";
import App from "./router/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostListProvider from "./store/post-list-store";
import PostList from "./components/PostList";
import CreatePost from "./components/Create_post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PostListProvider>
    <RouterProvider router={router} />
  </PostListProvider>,
);
