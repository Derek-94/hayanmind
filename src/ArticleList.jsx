import React from 'react'
import Comment from './Comment'
import DummyData from './DummyData';

const ArticleList = () => {
    
    return (
        <>
            {DummyData.map(comment => (
                <Comment data = {comment}/>
            ))}
        </>
    )
}

export default ArticleList;
