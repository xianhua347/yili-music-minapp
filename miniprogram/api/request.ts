const baseUrl = "https://yilil-music-9443-5-1308558358.sh.run.tcloudbase.com/";

export const get = (uri: string) => {
  wx.showLoading({
    title: "加载中",
  });

  return new Promise<any>((resolve, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: "GET",
      success: (res) => {
        resolve(res.data);
      },
      fail: reject,
      complete: () => {
        wx.hideLoading();
      },
    });
  });
};
