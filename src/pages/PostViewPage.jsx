import React from "react";
import PostBackground from "../components/postView/PostBackground";
import PostContent from "../components/postView/PostContent";


function PostViewPage(props) {
    return (
        <div>
            <PostBackground />
            <PostContent />
        </div>
    );
}

export default PostViewPage;