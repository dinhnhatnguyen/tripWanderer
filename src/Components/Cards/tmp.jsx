// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const SocialMediaPost = ({ post }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);

//   const toggleLike = () => setIsLiked(!isLiked);
//   const toggleComments = () => setShowComments(!showComments);

//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <div className="d-flex align-items-center mb-3">
//           <img
//             src={post.avatarUrl}
//             alt="Avatar"
//             className="rounded-circle me-2"
//             style={{ width: "48px", height: "48px" }}
//           />
//           <div>
//             <h5 className="card-title mb-0">{post.username}</h5>
//             <small className="text-muted">{post.timestamp}</small>
//           </div>
//         </div>
//         <p className="card-text">{post.content}</p>
//         {post.imageUrl && (
//           <img
//             src={post.imageUrl}
//             alt="Post"
//             className="img-fluid mb-3"
//             style={{ maxHeight: "400px", objectFit: "cover" }}
//           />
//         )}
//         <div className="d-flex justify-content-between">
//           <button
//             className={`btn btn-link text-decoration-none ${
//               isLiked ? "text-primary" : ""
//             }`}
//             onClick={toggleLike}
//           >
//             <i className={`fa${isLiked ? "s" : "r"} fa-heart`}></i> {post.likes}{" "}
//             Thích
//           </button>
//           <button
//             className="btn btn-link text-decoration-none"
//             onClick={toggleComments}
//           >
//             <i className="far fa-comment"></i> {post.comments.length} Bình luận
//           </button>
//           <button className="btn btn-link text-decoration-none">
//             <i className="far fa-share-square"></i> {post.shares} Chia sẻ
//           </button>
//         </div>
//       </div>
//       {showComments && (
//         <div className="card-footer">
//           <h6>Bình luận:</h6>
//           {post.comments.map((comment, index) => (
//             <div key={index} className="mb-2">
//               <strong>{comment.username}</strong>: {comment.content}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SocialMediaPost;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styled from "styled-components";

const Card = styled.div`
  width: 740px;
  height: 580px;
  // overflow: auto;
  margin-top: 20px;
`;

const PostImage = styled.img`
  width: 700px;
  height: 320px;
  object-fit: cover;
`;

const PostCard = ({
  author,
  time,
  content,
  image,
  likes,
  comments,
  shares,
}) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);
  const [commentList, setCommentList] = useState(comments);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const addComment = (text) => {
    setCommentList([
      ...commentList,
      { author: "Current User", text, likes: 0 },
    ]);
  };

  return (
    <Card className="card">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img
            src={author.avatar}
            alt={author.name}
            className="rounded-circle me-3"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <h5 className="card-title mb-0">{author.name}</h5>
            <small className="text-muted">{time}</small>
          </div>
        </div>
        <p className="card-text">{content}</p>
        <PostImage src={image} alt="Post" className="img-fluid mb-3" />
        <div className="d-flex justify-content-between mb-3">
          <small>{likeCount} lượt thích</small>
          <small>{commentList.length} bình luận</small>
          <small>{shares} lượt chia sẻ</small>
        </div>
        <div className="d-flex justify-content-around mb-3">
          <button className="btn btn-light" onClick={handleLike}>
            <i className="fas fa-heart"></i> Thích
          </button>
          <button className="btn btn-light" onClick={toggleComments}>
            <i className="fas fa-comment"></i> Bình luận
          </button>
          <button className="btn btn-light">
            <i className="fas fa-share"></i> Chia sẻ
          </button>
        </div>
        {showComments && (
          <div>
            {commentList.map((comment, index) => (
              <div key={index} className="mb-2">
                <strong>{comment.author}</strong>: {comment.text}
                <button className="btn btn-sm btn-light ms-2">Thích</button>
                <button className="btn btn-sm btn-light ms-2">Trả lời</button>
              </div>
            ))}
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Viết bình luận..."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addComment(e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default PostCard;
