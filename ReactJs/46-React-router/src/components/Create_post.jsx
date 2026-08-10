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

    // Convert string to number
    const reaction = Number(reactionsElement.current.value);

    const tags = tagsElement.current.value.split(" ");

    // Clear inputs
    userIdElement.current.value = "";
    PostTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: PostTitle,
        body: PostBody,
        userId: Number(userId),
        tags: tags,

        reactions: {
          likes: reaction,
          dislikes: 0,
        },
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  };

  return (
    <form onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user Id here
        </label>

        <input
          type="number"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your user ID"
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
          placeholder="Enter post title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>

        <textarea
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Enter post content"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number Of Reactions
        </label>

        <input
          type="number"
          ref={reactionsElement}
          className="form-control"
          id="reaction"
          placeholder="How many people reacted to this post"
          min="0"
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
