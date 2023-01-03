export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImgURL(id) {
    const res = await this.apiClient.channels({
      params: { part: "snippet", id },
    });
    const data = res.data.items[0].snippet.thumbnails.default.url;

    return data;
  }

  async relatedVideos(id) {
    const res = await this.apiClient.search({
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        relatedToVideoId: id,
      },
    });

    const data = await res.data.items;
    const realData = await data.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));

    return realData;
  }

  async #searchByKeyword(keyword) {
    const res = await this.apiClient.search({
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: keyword,
      },
    });

    const data = await res.data.items;
    const realData = await data.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));

    return realData;
  }

  async #mostPopular() {
    const res = await this.apiClient.videos({
      params: {
        part: "snippet",
        maxResults: 25,
        chart: "mostPopular",
      },
    });

    const data = await res.data.items;
    return data;
  }
}

// export default class Youtube {
//   constructor(apiClient) {
//     this.apiClient = apiClient;
//   }

//   async search(keyword) {
//     return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
//   }

//   async #searchByKeyword(keyword) {
//     return this.apiClient
//       .search({
//         params: {
//           part: 'snippet',
//           maxResults: 25,
//           type: 'video',
//           q: keyword,
//         },
//       })
//       .then((res) => res.data.items)
//       .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
//   }

//   async #mostPopular() {
//     return this.apiClient
//       .videos({
//         params: {
//           part: 'snippet',
//           maxResults: 25,
//           chart: 'mostPopular',
//         },
//       })
//       .then((res) => res.data.items);
//   }
// }
