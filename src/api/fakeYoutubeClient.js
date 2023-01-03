import axios from "axios";

export default class fakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/videos/RelatedVideos.json")
      : axios.get("/videos/keywordSearch.json");
  }
  async videos() {
    return axios.get("/videos/MainVideos.json");
  }
  async channels() {
    return axios.get("/videos/ChannelDetail.json");
  }
}
