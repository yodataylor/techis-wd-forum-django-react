import React, { useEffect } from "react";
import SampleIcon from "../../assets/img/sample-icon.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTweet, updateTweet } from "../../reducks/tweets/operations";

const PostTweet = ({ tweet }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(""),
    [body, setBody] = useState(""),
    [image, setImage] = useState([]);

  const inputName = (event) => {
    setName(event.target.value);
  };

  const inputBody = (event) => {
    setBody(event.target.value);
  };

  const inputImage = (event) => {
    setImage(event.target.files[0]);
  };

  const addTweetButton = () => {
    if (tweet && tweet.id) {
      dispatch(updateTweet(tweet.id, name, body, image));
    } else {
      dispatch(addTweet(name, body, image));
      setName("");
      setImage([]);
      setBody("");
    }
  };

  useEffect(() => {
    if (tweet && tweet.id) {
      setName(tweet.name);
      setBody(tweet.body);
    }
  }, [tweet]);

  return (
    <div class="tweet-post">
      <div class="my-icon">
        <img src={SampleIcon} class="" />
      </div>
      <div class="input-area">
        <input type="text" name="name" value={name} placeholder="Your name" maxlength="14" onChange={inputName} required />
        <textarea name="body" placeholder="What's happening?" value={body} maxlength="140" onChange={inputBody} required></textarea>
        <div class="bottom-area">
          <div class="mb-0">
            <input class="form-control form-control-sm" name="image" type="file" onChange={inputImage} />
          </div>
          <button onClick={addTweetButton} class="btn" type="submit">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTweet;
