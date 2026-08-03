import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./welcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setIsLoading(false);
      });
    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, []);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && postList.length === 0 && <WelcomeMsg />}
      {!isLoading && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
