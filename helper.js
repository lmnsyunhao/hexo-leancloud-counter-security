var AV = require('leancloud-storage');
AV.init({
  appId: "pNMlAMFXd4ELwOghmnSH2N3k-gzGzoHsz",
  appKey: "Mo4xhDc8SJAQdVidDwsTQFeP"
});
query = new AV.Query('Key');
query.equalTo("AppName", "leanclouduser");
query.find().then(function (results) {
  console.log(results[0].attributes.AppID + "#" + results[0].attributes.AppKey);
}, function (error) {
});
