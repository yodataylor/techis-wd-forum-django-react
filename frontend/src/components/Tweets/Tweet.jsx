import React, { useEffect } from "react";
import SampleIcon from "../../assets/img/sample-icon.jpg";
import IconHeartGray from "../../assets/img/icon-heart-gray.svg";
import IconHeartTwitterBlue from "../../assets/img/icon-heart-twitterblue.svg";
import IconSmallMenu from "../../assets/img/icon-small-menu.svg";
import { deleteTweet } from "../../reducks/tweets/operations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en";
import API from "../../API";

const api = new API();

TimeAgo.addDefaultLocale(en);

const Tweet = ({ tweet }) => {
  const dispatch = useDispatch();
  const [menuToggle, setMenuToggle] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const clickLikeButton = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      api
        .likeAddTweet(tweet.id)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      setLikeCount((prevLikeCount) => prevLikeCount + 1);
    } else {
      api
        .likeSubtractTweet(tweet.id)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      setLikeCount((prevLikeCount) => prevLikeCount - 1);
    }
  };

  useEffect(() => {
    setLikeCount(tweet.like_count);
  }, [tweet]);

  return (
    <div class="tweet-list">
      <div class="tweet">
        <div class="user">
          <a href="#">
            <img src={SampleIcon} class="" />
          </a>
        </div>
        <div class="content">
          <div class="name">
            <a href="#" class="">
              <span class="nickname">{tweet.name}</span>
              <span class="datetime">
                <ReactTimeAgo date={tweet.updated_at} locale="en-US" timeStyle="twitter" />
              </span>
            </a>
            <img class="menu_icon" onClick={() => setMenuToggle(!menuToggle)} src={IconSmallMenu} />
            {menuToggle && (
              <div class="menu">
                <span onClick={() => dispatch(deleteTweet(tweet.id))}>Delete</span>
                <br />
                <span onClick={() => dispatch(push("/edit/" + tweet.id))}>Edit</span>
              </div>
            )}
          </div>
          <p>{tweet.body}</p>
          {tweet.image && (
            <a href={tweet.image} target="_blank">
              <img class="post-image" src={tweet.image} />
            </a>
          )}
          <div class="icon-list">
            <div class="like" onClick={clickLikeButton}>
              {isLiked ? <img src={IconHeartTwitterBlue} /> : <img src={IconHeartGray} />}
            </div>
            <div class="like-count">{likeCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
