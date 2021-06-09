import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoTwitterblue from "../assets/img/logo-twitterblue.svg";
import Loading from "../assets/img/loading.gif";
import PostTweet from "../components/Tweets/PostTweet";
import Tweet from "../components/Tweets/Tweet";
import { fetchTweets } from "../reducks/tweets/operations";
import { getTweets } from "../reducks/tweets/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const tweets = getTweets(selector);

  useEffect(() => {
    dispatch(fetchTweets());
  }, []);

  return (
    <div class="main">
      <div class="main-header">
        <img src={LogoTwitterblue} class="logo" />
        <h1>Home</h1>
      </div>
      <PostTweet />
      <div class="ditch"></div>
      {tweets.length > 0 ? (
        tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <div class="loading">
          <img src={Loading} class="" />
        </div>
      )}
    </div>
  );
};

export default Home;
