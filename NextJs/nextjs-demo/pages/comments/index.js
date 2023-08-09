import { useState } from "react";

export default function index() {
  const [comments, setComments] = useState([]);
  const [comment, addComment] = useState("");
  const fetchComments = async () => {
    const response = await (await fetch("/api/comments")).json();
    setComments(response);
  };

  const handleAddComment = async () => {
    const response = await (
      await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    console.log(response);
  };

  const handleDelete = async (commentId) => {
    const response = await (
      await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
      })
    ).json();
    console.log(response);
    fetchComments();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter comment"
        onChange={(e) => addComment(e.target.value)}
      />
      <br />
      <button onClick={handleAddComment}>Add comment</button>
      <button onClick={fetchComments}>Load comments</button>
      <br />

      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment.id}>
              <h2>
                {comment.id} | {comment.text}
              </h2>
              <button onClick={() => handleDelete(comment.id)}>delete</button>
            </div>
          );
        })}
    </div>
  );
}
