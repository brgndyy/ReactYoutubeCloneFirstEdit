import { useContext } from "react";
import YoutubeApiContext from "./YoutubeApiContext";

const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};

export default useYoutubeApi;
