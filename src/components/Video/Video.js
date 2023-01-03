import React from "react";
import classes from "./Video.module.css";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { useNavigate } from "react-router-dom";

register("ko", koLocale);

function Video(props) {
  const navigate = useNavigate();

  return (
    <div className={classes.video_container}>
      <li>
        <div className={classes.video_thumbnail_container}>
          <img
            src={props.thumbnailImg}
            alt="img"
            className={classes.thumbnailImg}
            onClick={() =>
              navigate(`watch/${props.id}`, {
                state: {
                  id: props.id,
                  title: props.title,
                  channelTitle: props.channelTitle,
                  publishedAt: props.publishedAt,
                  thumbnailImg: props.thumbnailImg,
                  channelId: props.channelId,
                  description: props.description,
                },
              })
            }
          ></img>
        </div>
        <div className={classes.video_info}>
          <p className={classes.video_info_title}>{props.title}</p>
          <p className={classes.video_info_channelTitle}>
            {props.channelTitle}
          </p>
          <p className={classes.video_info_publishedAt}>
            {format(props.publishedAt, "ko")}
          </p>
        </div>
      </li>
    </div>
  );
}

export default Video;
