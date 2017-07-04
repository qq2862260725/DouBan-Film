var comingUrl = 'https://api.douban.com/v2/movie/coming_soon';
var detail = '../detail/detail';
Page({
  data: {
    showLoading: true,
    films: [],
    showBottom: true,
    bottom: true,
  },
  scroll: function (e) {
    //console.log(e)
  },
  scrolltolower: function () {
    this.setData({
      showBottom: false
    })
    setTimeout(function () {
      this.setData({
        bottom: false
      })
    }.bind(this), 2000)
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: comingUrl,
      header: {
        "content-type": "json"
      },
      success: function (res) {
        console.log(res.data.subjects);
        that.setData({
          films: res.data.subjects,
          showLoading: false
        })
      }
    })
  },
  viewDetail: function (e) {
    var goal = e.currentTarget.dataset;
    console.log(goal);
    wx.navigateTo({
      url: detail + '?id=' + goal.id + '&title=' + goal.title + '&type=ing',
      success: function () {
        console.log(111);
      }
    })
  }
})
