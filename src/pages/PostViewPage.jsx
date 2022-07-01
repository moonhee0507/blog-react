import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

import PostBackground from "../components/postview/PostBackground";
import PostContent from "../components/postview/PostContent";


function PostViewPage(props) {
    const { postId } = useParams();
    
    
    const post = data.posts.find((item) => {
        return item.id == postId;
    });

    console.log('post', post)
    return (
        <div>
            <PostBackground />
            <PostContent />
        </div>
    );
}

export default PostViewPage;