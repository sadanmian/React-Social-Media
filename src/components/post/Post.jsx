import React, { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const user = Users.filter((e) => e.id === post.id);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={user[0].profilePicture} />
            <span className="postUsername">{user[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
