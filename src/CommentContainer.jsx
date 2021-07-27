import React, { useState, useEffect, useRef } from 'react'
import Comment from './Comment'

const END_POINT = 'https://jsonplaceholder.typicode.com/comments';

const CommentContainer = () => {
    const [commentData, setCommentData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const endofHTML = useRef();
    const page = useRef(1);
    
    const request = async() => {
        try {
            setIsLoading(true);
            const response = await fetch(`${END_POINT}?_page=${page.current}&_limit=10`);
            const comments = await response.json();
            page.current += 1;
            setIsLoading(false)
            return comments;
        } catch(e) {
            console.log("Error found: ", e);
        }
    }

    const commentAPI = {
        get: async() => {
            return await request();
        }
    }

    const endofScroll = async([entry]) => {
        if (entry.isIntersecting) {
            const getComments = await commentAPI.get();
            setCommentData((commentData) => [...commentData, ...getComments])
        }
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(endofScroll, options);
        observer.observe(endofHTML.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {commentData.map(comment => (
                <Comment key = {comment.id} data = {comment}/>
            ))}
            {isLoading && (
                <h1 style = {{ textAlign: 'center' }}>Loading...</h1>
            )}
            <div ref={endofHTML} />
        </>
    )
}

export default CommentContainer;
