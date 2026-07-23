import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addList: [],
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "going to Bihar",
    body: "Hi friends I am going to Bihar for my vacations.Hope to enjoy a lot . peace out",
    reaction: 3,
    userId: "ravir32",
    tags: ["vacation", "Bihar", "Enjoying"],
  },
  {
    id: "2",
    title: "palacement ho gy",
    body: "Hi friends I got placed on my campus Placement ",
    reaction: 5,
    userId: "ravit 2",
    tags: ["placement", "job", "campus"],
  },
];
export default PostListProvider;
