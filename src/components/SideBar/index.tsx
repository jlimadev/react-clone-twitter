import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  Body,
  SearchInput,
  SearchIcon,
  SearchWrapper,
} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Follow suggestions"
            elements={[
              <FollowSuggestion name="Joselito" nickname="@joselito" />,
              <FollowSuggestion name="Nalo" nickname="@onalo" />,
              <FollowSuggestion name="Carol" nickname="@carolinda" />,
            ]}
          />
          <List
            title="News"
            elements={[
              <News
                title="Joselito Strikes again"
                body="Joselito kills 100 persons today."
              />,
              <News
                title="Nalo learned to fly"
                body="Today is a great day for nalo."
              />,
              <News
                title="Carol wins the Miss Universe"
                body="Caroline is considered the most beautiful woman in the universe."
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
