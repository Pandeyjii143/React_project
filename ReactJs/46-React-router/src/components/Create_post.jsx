import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";

const CreatePost = () => {
  //const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create=post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user Id here
        </label>

        <input
          type="number"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter your tags with space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function createPostaction(data) {
  const formdata = await data.request.formData();

  const postData = Object.fromEntries(formdata);

  postData.tags = postData.tags.split(" ");

  console.log(postData);

  const response = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  const post = await response.json();

  console.log("Created Post:", post);

  return redirect("/");
}

export default CreatePost;
