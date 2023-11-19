import React from "react";
import { Box, styled, Typography } from "@mui/material";

const Banner = styled(Box)`
  background-image: url(https://res.cloudinary.com/dtvtphhsc/image/upload/v1694961863/yjomd6nyuutfwodawn0d.jpg);
  width: 100%;
  height: 50vh;
  border-radius: 10px;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

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

const About = () => {
  return (
    <Box padding={5} borderRadius={10}>
      <Banner />
      <Wrapper>
        <div>
          <Typography variant="h2" component="h2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our blogging platform! We are a team of three passionate
            students who came together to create this space for sharing
            thoughts, ideas, and stories. Let us introduce ourselves:
          </Typography>
          <ul>
            <li>
              <strong>Adnan:</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>
              <strong>Misbah:</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>
              <strong>Kamran:</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            Together, we aim to create a diverse and engaging platform where you
            can find articles on a wide range of topics. Thank you for being a
            part of our community!
          </Typography>
        </div>
      </Wrapper>
    </Box>
  );
};

export default About;
