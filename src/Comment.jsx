import React from 'react';

import { Container, Article, Title, Content } from './style';

const Comment = ({ data }) => {
  return (
    <Container>
      <Article>
        <header>
          <Title>Comment Id</Title>
          <span>{data.id}</span>
        </header>
        <section>
          <Title>Email</Title>
          <span>{data.email}</span>
        </section>
        <main>
          <Title>Comment</Title>
          <Content>{data.body}</Content>
        </main>
      </Article>
    </Container>
  );
};

export default Comment;
