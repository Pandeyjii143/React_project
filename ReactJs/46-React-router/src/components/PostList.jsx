import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./welcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, isLoading } = useContext(PostListData);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && postList.length === 0 && <WelcomeMsg />}
      {!isLoading && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
