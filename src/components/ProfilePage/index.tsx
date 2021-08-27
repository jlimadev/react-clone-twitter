import React from 'react';
import {
  Container,
  Avatar,
  Banner,
  CakeIcon,
  LocationIcon,
  Followage,
  ProfileInfo,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileInfo>
        <EditButton outlined>Edit Profile</EditButton>
        <h1>Jonathan Lima</h1>
        <h2>@jlimadev</h2>

        <p>
          Software Engineer at <a href="https://johndeere.com">@JohnDeere</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brazil
          </li>
          <li>
            <CakeIcon />
            Born in June, 1996
          </li>
        </ul>

        <Followage>
          <span>
            Following <strong>134</strong>
          </span>
          <span>
            <strong>1354 </strong> Followers
          </span>
        </Followage>
      </ProfileInfo>
    </Container>
  );
};

export default ProfilePage;
