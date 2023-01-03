import React from "react";
import classes from "./RelatedVideos.module.css";
import useYoutubeApi from "../../store/useYoutubeApi";
import { useQuery } from "@tanstack/react-query";
import Video from "./Video";

function RelatedVideos(props) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["related", props.id], () => {
    return youtube.relatedVideos(props.id);
  });

  console.log(videos);
  return (
    <>
      <div className={classes.relatedVideos_container}>
        {isLoading && <p>Loading 중입니다..</p>}
        {error && <p>에러가 발생했습니다 </p>}
        <ul className={classes.relatedVidoes_ul}>
          {videos &&
            videos.map((item, key) => {
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
    </>
  );
}

export default RelatedVideos;
