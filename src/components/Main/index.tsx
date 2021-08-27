import React from 'react';
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  SearchIcon,
  HomeIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Jonathan Lima</strong>
          <span>10 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
