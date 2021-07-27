import React, { useState, useEffect } from 'react'
import Comment from './Comment'

const END_POINT = 'https://jsonplaceholder.typicode.com/comments';

const ArticleList = () => {

    const [commentData, setCommentData] = useState([]);
    
    const request = async(page) => {
        try {
            const response = await fetch(`${END_POINT}?_page=${page}&_limit=10`);
            const comments = await response.json();
            setCommentData(comments);
            return comments;
        } catch(e) {
            console.log(e, "Error Found");
        }
    }

    const commentAPI = {
        get: async() => {
            return await request(1);
        }
    }

    useEffect(() => {
        commentAPI.get();
    }, [])

    return (
        <>
            {commentData.map(comment => (
                <Comment key = {comment.id} data = {comment}/>
            ))}
        </>
    )
}

export default ArticleList;
