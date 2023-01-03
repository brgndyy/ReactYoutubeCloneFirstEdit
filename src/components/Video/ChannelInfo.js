import React from "react";
import classes from "./ChannelInfo.module.css";
import useYoutubeApi from "../../store/useYoutubeApi";
import { useQuery } from "@tanstack/react-query";

function ChannelInfo(props) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: url,
  } = useQuery(["channel", props.id], () => {
    return youtube.channelImgURL(props.id), { staletime: 1000 * 60 * 5 };
  });

  console.log(url);

  return (
    <div className={classes.ChannelInfo_container}>
      <div className={classes.ChannelInfo_img_title}>
        {url && (
          <img
            src={url}
            alt={props.title}
            className={classes.ChannelInfo_img}
          ></img>
        )}
        <p className={classes.ChannelInfo_title}>{props.title}</p>
      </div>
      <p className={classes.ChannelInfo_description}>{props.description}</p>
    </div>
  );
}

export default ChannelInfo;
