import { createSelector } from "reselect";

const tweetsSelector = (state) => state.tweets;

export const getTweets = createSelector(
    [tweetsSelector],
    state => state.list
);