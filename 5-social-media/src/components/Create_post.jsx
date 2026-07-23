const CreatePost = () => {
  return (
    <form className="createPost">
      <div className="mb-3">
        <label htmlfor="exampleInputEmail1" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling now"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
