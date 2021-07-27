import React, { useState, useEffect, useRef } from 'react';
import Comment from './Comment';
import CONSTANT from './constants';

import { Load } from './style'

const CommentContainer = () => {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isEndofData = useRef(false);
  const endofHTML = useRef();
  const page = useRef(1);

  const request = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${CONSTANT.END_POINT}?_page=${page.current}&_limit=${CONSTANT.LIMIT}`,
      );
      const comments = await response.json();
      page.current += 1;
      setIsLoading(false);
      return comments;
    } catch (e) {
      console.log('Error found: ', e);
    }
  };

  const commentAPI = {
    get: async () => await request(),
  };

  const endofScroll = async ([entry]) => {
    if (entry.isIntersecting && !isEndofData.current) {
      const newComments = await commentAPI.get();
      if (newComments.length === 0) {
        isEndofData.current = true;
      } else {
        setCommentData(commentData => [...commentData, ...newComments]);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(endofScroll, CONSTANT.OPTION);
    observer.observe(endofHTML.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {commentData.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
      {isLoading && <Load>Loading...</Load>}
      <div ref={endofHTML} />
    </>
  );
};

export default CommentContainer;
