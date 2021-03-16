import React from "react";
import { connect } from "react-redux";
import { fetchComments, saveComment } from "../../redux/actions/comments";

export const CommentBoxComponent = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = React.useState("");

  const onChange = (event) => setComment(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if (comment.length == 0) return;

    saveComment(comment);
    setComment("");
  };

  const onClick = fetchComments;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Post a comment</h3>
        <textarea value={comment} onChange={onChange} />
        <div>
          <button>send</button>
        </div>
      </form>
      <br />
      <button id="fetch-comments" onClick={onClick}>
        FETCH'EM BOOOOIS
      </button>
      <br />
      <br />
    </div>
  );
};

export const CommentBox = connect(null, { saveComment, fetchComments })(
  CommentBoxComponent
);
