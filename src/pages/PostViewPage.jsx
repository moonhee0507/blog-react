import React from "react";
import PostBackground from "../components/postview/PostBackground";
import PostContent from "../components/postview/PostContent";


function PostViewPage(props) {
    return (
        <div>
            <PostBackground />
            <PostContent />
        </div>
    );
}

export default PostViewPage;