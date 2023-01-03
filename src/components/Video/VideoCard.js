import React from "react";
import { useParams } from "react-router-dom";
import classes from "./VideoCard.module.css";
import Video from "./Video";
import { useQuery } from "@tanstack/react-query";
import useYoutubeApi from "../../store/useYoutubeApi";

function VideoCard() {
  const { keywords } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: video,
  } = useQuery(["videos", keywords], () => {
    return youtube.search(keywords);
  });

  console.log(video);

  return (
    <div className={classes.video_container}>
      {isLoading && <p>Loading 중입니다..</p>}
      {error && <p>에러가 발생했습니다 </p>}
      <ul className={classes.video_card_ul}>
        {video &&
          video.map((item, key) => {
            return (
              <Video
                id={item.id}
                key={key}
                title={item.snippet.title}
                thumbnailImg={item.snippet.thumbnails.medium.url}
                channelTitle={item.snippet.channelTitle}
                publishedAt={item.snippet.publishedAt}
                channelId={item.snippet.channelId}
                description={item.snippet.description}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default VideoCard;
