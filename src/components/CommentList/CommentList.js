import React from "react";
import { connect } from "react-redux";

export const CommentListComponent = ({ comments }) => {
  const mapComments = React.useCallback(() => {
    return comments.map((c, index) => <li key={c + index}>{c}</li>);
  });
  return (
    <div>
      <h4>Comments</h4>
      <ul>{mapComments()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export const CommentList = connect(mapStateToProps)(CommentListComponent);
