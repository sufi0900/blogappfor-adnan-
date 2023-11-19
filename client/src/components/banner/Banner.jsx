import React from "react";
import { styled, Box, Typography, Avatar } from "@mui/material";

const avatars = [
  "https://res.cloudinary.com/dtvtphhsc/image/upload/v1700395964/2_kojzpr.jpg", // Replace with the actual URL of the first student's avatar
  "https://res.cloudinary.com/dtvtphhsc/image/upload/v1700395964/1_b0umlt.jpg", // Replace with the actual URL of the second student's avatar
  "http://res.cloudinary.com/dtvtphhsc/image/upload/v1700396516/WhatsApp_Image_2023-11-19_at_5.17.01_PM_qh9drv.jpg", // Replace with the actual URL of the third student's avatar
];

const Image = styled(Box)`
  position: relative;
  width: 100%;
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
`;

const AvatarContainer = styled(Box)`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  & > .MuiAvatar-root {
    width: 80px; // Adjust the width to your desired size
    height: 80px; // Adjust the height to your desired size
  }
`;

const StudentName = styled(Typography)`
  font-size: 16px;
  color: #ffffff;
  margin-top: 5px;
`;
const studentNames = ["Adnan", "Kamran", "Misbah"];

const Heading = styled(Typography)`
  font-size: 70px;
  color: #51d0de;
  line-height: 1;
  text-shadow: 2px 2px 2px black;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
  border-radius: 10px;
  padding: 0px 10px;
  margin-top: 10px;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BLOG</Heading>
      <SubHeading>Code for Interview</SubHeading>
      <AvatarContainer>
        {avatars.map((avatar, index) => (
          <Box key={index} textAlign="center">
            <Avatar src={avatar} alt={`Student ${index + 1}`} />
            <StudentName>{studentNames[index]}</StudentName>
          </Box>
        ))}
      </AvatarContainer>
    </Image>
  );
};

export default Banner;
