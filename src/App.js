import React from "react";

function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment one" },
    { id: 3, text: "Comment one" },
  ];

  const loading = false;
  const showComments = true;

  const conmmetBlock = (
    <div className="comments">
      <h3>Comments {comments.length}</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && conmmetBlock}
    </div>
  );
}

export default App;
