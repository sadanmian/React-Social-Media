import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/person/1.jpeg" />
            <span className="postUsername">Username</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">Hey! It's First Post :)</span>
          <img src="/assets/post/1.jpeg" className="postImg" />
        </div>
        
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" />
            <img className="likeIcon" src="assets/heart.png" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
