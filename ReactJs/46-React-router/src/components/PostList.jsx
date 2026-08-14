import Post from "./Post";
import WelcomeMsg from "./welcomeMsg";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMsg />}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  return data.posts;
};

export default PostList;
