import React from "react";
import YoutubeApiContext from "./YoutubeApiContext";
import Youtube from "../api/youtube";
import fakeYoutubeClient from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/youtubeClient";

function YoutubeApiProvider(props) {
  const client = new fakeYoutubeClient();
  // const client = new YoutubeClient();
  const youtube = new Youtube(client);

  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {props.children}
    </YoutubeApiContext.Provider>
  );
}

export default YoutubeApiProvider;
