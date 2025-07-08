import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const commentsData = [
  {
    name: "hello",
    text: "lorem ipsum hello howa rey youuuuu",
    reply: [],
  },
  {
    name: "ameen",
    text: "lorem ipsum hello howa rey youuuuu",
    reply: [
      {
        name: "hello",
        text: "lorem ipsum hello howa rey youuuuu",
        reply: [
          {
            name: "hello",
            text: "lorem ipsum hello howa rey youuuuu",
            reply: [
              {
                name: "hello",
                text: "lorem ipsum hello howa rey youuuuu",
                reply: [
                  {
                    name: "hello",
                    text: "lorem ipsum hello howa rey youuuuu",
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "hello",
    text: "lorem ipsum hello howa rey youuuuu",
    reply: [],
  },
  {
    name: "hello",
    text: "lorem ipsum hello howa rey youuuuu",
    reply: [],
  },
  {
    name: "hello",
    text: "lorem ipsum hello howa rey youuuuu",
    reply: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="flex m-4">
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div>
        <h1 className="">{name}</h1>
        <h1 className="">{text}</h1>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment data={comment} />
      <div className="p-10">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-lg font-medium">Comments</h1>
      <div>
        <CommentList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
