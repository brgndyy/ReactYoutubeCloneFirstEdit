import React from "react";
import classes from "./VideoDetail.module.css";
import { useLocation } from "react-router-dom";
import ChannelInfo from "./ChannelInfo";
import RelatedVideos from "./RelatedVideos";

function VideoDetail() {
  const { state } = useLocation();

  console.log(state);

  return (
    <section className={classes.VideoDetail_section}>
      <article>
        <iframe
          title={state.title}
          width="100%"
          height="640"
          type="text/html"
          src={`http://www.youtube.com/embed/${state.id}`}
          style={{ border: "none" }}
        ></iframe>
        <div>
          <h2 className={classes.VideoDetail_title}>{state.title}</h2>
          <ChannelInfo
            id={state.channelId}
            title={state.channelTitle}
            description={state.description}
          />
          <pre></pre>
        </div>
      </article>
      <section>
        <RelatedVideos id={state.id} />
      </section>
    </section>
  );
}

export default VideoDetail;
