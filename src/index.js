import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 14:11"
        content="Nice blog post"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="John"
        timeAgo="Today at 17:00"
        content="Super"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jeff"
        timeAgo="Yesterday at 1:00"
        content="Ok"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
