import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClinet = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params) {
    return this.httpClinet.get("search", params);
  }

  async videos(params) {
    return this.httpClinet.get("videos", params);
  }

  async channels(params) {
    return this.httpClinet.get("channels", params);
  }
}
