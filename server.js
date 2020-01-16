const Stream = require("node-rtsp-stream-es6");

const options = {
  name: "aot-stream",
  url: "rtsp://admin:Aottech123@216.232.132.54:554/Streaming/Channels/101",
  port: 5000
};

stream = new Stream(options);

stream.start();
