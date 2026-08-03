import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const PostBody = postBodyElement.current.value;
    const reaction = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    PostTitleElement.current.valul = ";";
    postBodyElement.current.value = ";";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, PostTitle, PostBody, reaction, tags);
  };

  return (
    <form className="createPost" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter your user Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="UserId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={PostTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling now"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Reaction" className="form-label">
          Number Of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reaction"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter your tags with space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
