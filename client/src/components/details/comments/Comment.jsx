import React, { useContext } from "react";
import { Typography, Box, styled } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { API } from "../../../service/api";
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
  margin-top: 20px;
  background: #f5f5f5;
  padding: 15px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 8px;
`;

const Container = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Name = styled(Typography)`
  font-weight: 600;
  font-size: 18px;
  margin-right: 10px;
  color: #2196f3; /* Highlight the user's name with a color */
`;

const StyledDate = styled(Typography)`
  font-size: 14px;
  color: #878787;
  margin-right: 10px;
`;

const DeleteIcon = styled(Delete)`
  cursor: pointer;
  color: #f44336; /* Use a red color for the delete icon */
  margin-left: auto;
`;

const CommentText = styled(Typography)`
  font-size: 16px;
  line-height: 1.5;
`;

const Comment = ({ comment, setToggle }) => {
  const { account } = useContext(DataContext);

  const removeComment = async () => {
    await API.deleteComment(comment._id);
    setToggle((prev) => !prev);
  };

  return (
    <Component>
      <Container>
        <Name>{comment.name}</Name>
        <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
        {comment.name === account.username && (
          <DeleteIcon onClick={removeComment} />
        )}
      </Container>
      <CommentText>{comment.comments}</CommentText>
    </Component>
  );
};

export default Comment;
