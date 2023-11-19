import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, styled, Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import Comments from "./comments/Comments";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "auto",

  borderRadius: "10px",
});

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffcccc;
  }
`;

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#878787",
  margin: "20px 0",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const DateText = styled(Typography)({
  marginLeft: "auto",
});

const Description = styled(Typography)({
  fontSize: "18px",
  lineHeight: "1.6",
  margin: "20px 0",
  textAlign: "justify",
});

const ActionButtons = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "10px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});
const Wrapper = styled(Box)`
  padding: 20px;
  text-align: justify;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: -20px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  & > h2 {
    color: #333;
    margin-bottom: 20px;
  }

  & > p {
    color: #555;
    line-height: 1.6;
  }

  & > ul {
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
  }

  & > ul > li {
    margin-bottom: 10px;
  }

  & > ul > li > strong {
    color: #333;
  }

  & > p:last-child {
    margin-bottom: 0;
  }
`;
const DetailView = () => {
  const [post, setPost] = useState({});
  const { account } = useContext(DataContext);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, [id]);

  const deleteBlog = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirmed) {
      await API.deletePost(post._id);
      navigate("/");
    }
  };
  return (
    <Box padding={5} borderRadius={10}>
      <Wrapper>
        <br />
        <Image src={post.picture} alt="post" />
        <ActionButtons>
          {account.username === post.username && (
            <>
              <Link to={`/update/${post._id}`}>
                <EditIcon color="primary" />
              </Link>
              <DeleteIcon onClick={deleteBlog} color="error" />
            </>
          )}
        </ActionButtons>
        <Heading>{post.title}</Heading>
        <Author>
          <StyledLink to={`/?username=${post.username}`}>
            <Typography>
              Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
            </Typography>
          </StyledLink>
          <DateText>{new Date(post.createdDate).toDateString()}</DateText>
        </Author>
        <Description>{post.description}</Description>
        <Comments post={post} />
      </Wrapper>
    </Box>
  );
};

export default DetailView;
