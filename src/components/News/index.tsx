import React from 'react';

import { Container } from './styles';

interface NewsProps {
  title: string;
  body: string;
}

const News: React.FC<NewsProps> = ({ title, body }) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{body}</strong>
    </Container>
  );
};

export default News;
