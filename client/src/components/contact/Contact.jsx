import React from "react";
import { Box, styled, Typography, Link } from "@mui/material";

const Banner = styled(Box)`
  background-image: url(http://res.cloudinary.com/dtvtphhsc/image/upload/v1700399238/Sufian-Mustafa-Web-Developer_lqleg1.png);
  width: 100wh;
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

  & > h3 {
    margin-top: 30px;
  }

  & > p.contact-me {
    margin-top: 10px;
    color: #333;
  }

  & > p.contact-me > a {
    color: #51d0de;
    text-decoration: none;
  }

  & > p.contact-me > a:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <Box padding={5} borderRadius={10}>
      <Banner />
      <Wrapper>
        <div>
          <Typography variant="h2" component="h2" gutterBottom>
            About This Project
          </Typography>
          <Typography variant="body1" paragraph>
            This project has been created by me for my classmates as part of
            their final year project. It is a quick blog website developed in
            just two days, prioritizing simplicity over complexity. The focus
            was on providing essential features without delving into intricate
            functionalities. The project includes basic CRUD operations—Create,
            Read, Update, and Delete—for blog posts. Please note that no
            extensive time was spent on UI and backend logic, as this website
            serves as a demonstration of fundamental blogging functionalities
            rather than a fully polished application.
          </Typography>

          <Typography variant="body1" paragraph>
            The main features of this blog website include:
          </Typography>
          <ul>
            <li>
              <strong>Quick Setup:</strong> No complex login or signup
              mechanisms.
            </li>
            <li>
              <strong>Basic CRUD Operations:</strong> Create, Read, Update, and
              Delete blog posts.
            </li>
            <li>
              <strong>Focus on Frontend:</strong> Minimal time spent on UI and
              backend logic for the sake of a quick demonstration.
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            Although this project may lack advanced features, it serves as a
            showcase of fundamental blog functionalities. We appreciate your
            visit and hope you find the content engaging!
          </Typography>

          <Typography variant="h3" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" className="contact-me" paragraph>
            If you have any questions or feedback, feel free to{" "}
            <Link target="sufian" href="https://sufianmustafa.com/contact">
              contact me
            </Link>
            .
          </Typography>
        </div>
      </Wrapper>
    </Box>
  );
};

export default About;
