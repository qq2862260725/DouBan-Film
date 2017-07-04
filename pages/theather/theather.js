var theatherUrl = 'https://api.douban.com/v2/movie/in_theaters';
var detail = '../detail/detail';
Page({
  data: {
      showLoading: true,
      films: [],
  },
  scroll: function (e) {
    //console.log(e)
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  onLoad: function () {
      var that = this;
      wx.request({
        url: theatherUrl,
        header: {
          "content-type": "json"
        },
        success: function(res) {
          console.log(res.data.subjects[0]);
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
