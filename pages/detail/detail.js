var desc = 'https://api.douban.com/v2/movie/subject/';
Page({
  data: {
    film: {},
    showLoading: true,
    options: null
  },
  onLoad: function (options) {
      var that = this;
      wx.setNavigationBarTitle({
        title: options.title,
      });
      wx.request({
        url: desc + options.id,
        header: {
          "content-type": "json"
        },
        success: function(res) {
            var data = res.data;
            console.log(data)
            that.setData({
              film: data,
              showLoading: false
            })
        }
      })
  },
})