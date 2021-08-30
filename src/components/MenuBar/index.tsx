import React from 'react';
import Button from '../Button';
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  BellIcon,
  EmailIcon,
  HomeIcon,
  FavoriteIcon,
  ProfileIcon,
  BottomSide,
  Avatar,
  Profile,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home Page</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </TopSide>

      <BottomSide>
        <Avatar />

        <Profile>
          <strong>Jonathan Lima</strong>
          <span>@jlimadev</span>
        </Profile>

        <ExitIcon />
      </BottomSide>
    </Container>
  );
};

export default MenuBar;
