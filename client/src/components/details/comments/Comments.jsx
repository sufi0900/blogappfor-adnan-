import React, { useState, useEffect, useContext } from "react";
import { Box, TextareaAutosize, Button, styled, Avatar } from "@mui/material";

import { DataContext } from "../../../context/DataProvider";

import { API } from "../../../service/api";

//components
import Comment from "./Comment";

const Container = styled(Box)`
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

const Image = styled(Avatar)`
  width: 50px;
  height: 50px;
`;

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px !important;
  width: 100%;
  margin: 0 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  resize: none;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  &:focus {
    outline: none;
    border-color: #1976d2; /* Add a focus border color */
    box-shadow: 0 0 3px rgba(25, 118, 210, 0.3); /* Add a focus box shadow */
  }
`;

const CommentButton = styled(Button)`
  height: 40px;
  border-radius: 8px;
`;

const initialValue = {
  name: "",
  postId: "",
  date: new Date(),
  comments: "",
};

const Comments = ({ post }) => {
  const url = "https://static.thenounproject.com/png/12017-200.png";

  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);

  const { account } = useContext(DataContext);

  useEffect(() => {
    const getData = async () => {
      const response = await API.getAllComments(post._id);
      if (response.isSuccess) {
        setComments(response.data);
      }
    };
    getData();
  }, [toggle, post]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: account.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const addComment = async () => {
    await API.newComment(comment);
    setComment(initialValue);
    setToggle((prev) => !prev);
  };

  return (
    <Box>
      <Container>
        <Image src={url} alt="dp" />
        <StyledTextArea
          rowsMin={5}
          placeholder="What's on your mind?"
          onChange={(e) => handleChange(e)}
          value={comment.comments}
        />
        <CommentButton
          variant="contained"
          color="primary"
          size="medium"
          onClick={(e) => addComment(e)}
        >
          Post
        </CommentButton>
      </Container>
      <Box>
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => (
            <Comment comment={comment} setToggle={setToggle} />
          ))}
      </Box>
    </Box>
  );
};

export default Comments;
