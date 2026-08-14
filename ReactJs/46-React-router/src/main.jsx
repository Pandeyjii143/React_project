import ReactDOM from "react-dom/client";
import App from "./router/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostListProvider from "./store/post-list-store";
import PostList, { postLoader } from "./components/PostList";
import CreatePost, { createPostaction } from "./components/Create_post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PostList />,
        loader: postLoader,
      },
      {
        path: "create-post",
        element: <CreatePost />,
        action: createPostaction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PostListProvider>
    <RouterProvider router={router} />
  </PostListProvider>,
);
