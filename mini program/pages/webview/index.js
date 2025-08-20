Page({
  data: {
    url: 'http://127.0.0.1:5500/mini%20program/htmlpage/index.html',
  },
  onLoad() {
    const userInfo = {
      name: "tong",
      age: "25",
      address: {
        province: "beijing",
        city: "beijing",
        district: "beijing",
      }
    }
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    this.setData({
      url: `http://127.0.0.1:5501/mini%20program/htmlpage/index.html?value:${Math.random()}&user=${JSON.stringify(userInfo)}`,
    })
  },
  onMessage({detail}) {
    console.log("web view onMessage", detail.data);
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', {data: detail.data});

  },
  onWebViewLoad(e) {
    console.log("web view onLoad", e)
  },
  onError(e) {
    console.log("web view onError", e)
  }
})
