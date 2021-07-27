import React from 'react';

import { Container, Article, Title, ConTent } from './style'

const Comment = ({data}) => {

	return (
        <Container>
            <Article className = 'article'>
                <header className = 'comment-id-section'>
                    <Title className = 'title'>Comment Id</Title>
                    <span>{data.id}</span>
                </header>
                <section className = 'email-section'>
                    <Title className = 'title'>Email</Title>
                    <span className = 'email-value'>{data.email}</span>
                </section>
                <main className = 'content-section'>
                    <Title className = 'title'>Comment</Title>
                    <ConTent>{data.body}</ConTent>
                </main>
            </Article>
        </Container>
	)
}

export default Comment;
