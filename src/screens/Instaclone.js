import React from "react";
import { Button } from "react-bootstrap";
import Post from "../components/post";
import "../assets/style.scss";
import User1 from "../assets/Img/men-1.png";
import User2 from "../assets/Img/men-2.png";
import User3 from "../assets/Img/women-1.png";
import Post1 from "../assets/Img/post1.jpeg";
import Post2 from "../assets/Img/post3.jpeg";
import Post3 from "../assets/Img/testvid.mp4";

class Instaclone extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div clasName="instbox">
            <Post userimg={User1} name="sam" post={Post1} footer="like" />
            <Post userimg={User2} name="Dan" post={Post2} footer="like" />
            <Post
              userimg={User3}
              name="Dan"
              post={Post2}
              video={Post3}
              footer="like"
            />
          </div>
        </div>
      </>
    );
  }
}
export default Instaclone;
