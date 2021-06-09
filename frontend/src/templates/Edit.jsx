import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LogoTwitterblue from "../assets/img/logo-twitterblue.svg";
import PostTweet from "../components/Tweets/PostTweet";
import { push } from "connected-react-router";
import API from "../API";

const api = new API();

const Edit = () => {
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState([]);

  let id = window.location.pathname.split("/edit")[1];
  if (id !== "") {
    id = id.split("/")[1];
  }

  useEffect(() => {
    api.getTweet(id).then((tweet) => {
      setTweet(tweet);
    });
  }, [id]);

  return (
    <div class="main">
      <div class="main-header">
        <img src={LogoTwitterblue} class="logo" />
        <h1>Edit{id}</h1>
      </div>
      <PostTweet tweet={tweet} />
      <div class="ditch"></div>
    </div>
  );
};

export default Edit;
