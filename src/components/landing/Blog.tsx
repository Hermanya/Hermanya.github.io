import React from "react";
import styled from "styled-components";
import { Title, Heading, Description } from "../typography";
import { Link } from "react-router-dom";
import blogPosts from "../../__generated__/blogPosts";
import Container from "../Container";
const Post = styled.div`
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Blog = () => {
  return (
    <Container>
      <Title>Blog</Title>
      {blogPosts.map(post => (
        <Post>
          <Link to={post.path}>
            <Heading>{post.title}</Heading>
          </Link>
          <div>{post.created}</div>
          <Description>{post.description}</Description>
        </Post>
      ))}
    </Container>
  );
};

export default Blog;
