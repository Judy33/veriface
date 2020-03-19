<template>
  <div class="uploadPage">
   
    <div class="text" style="text-align: center; padding: 10px;">   
      <i class="layui-icon layui-icon-close-fill" style="font-size: 40px; color: #1E9FFF;"  @click="goHome"></i> 
      <p style="margin-top: 20px;font-size: 20px;">请牢记以下验证码</p>
      <p style="margin-top: 8px; margin-bottom: 8px;">
        并在
        <span style=" color: red;">5分钟</span>之内完成验证
      </p>
      <p style="color: #666;">
        用普通话朗读数字，保持视频在
        <span style="color: red;">3-8</span>秒
      </p>
      <div class="modal-layer-popup-number">
        <span v-for="(num,index) in code" :key="index">{{num}}</span>
      </div>
      <span type="primary" class="wrapper" v-show="!backHome">
        <label class="btn" for="fileUpload" tab="0" ref="label">记住了，开始录制</label>
      </span>
      <input
        type="file"
        accept="video/*"
        id="fileUpload"
        style="position:absolute; clip:rect(0 0 0 0);"
        @change="uploadVideo($event)"
        capture="camera"
        ref="file"
        v-show="!backHome"
        mutiple="mutiple" 
      />
      <video :src="videoUrl" controls preload="auto" style="display:none" ref="videoPlayer" muted></video>
      <button v-show="backHome" class="wrapper" @click="goHome">获取验证码失败</button>
    </div>
    <!-- <button @click="test">成功</button> -->
  </div>
</template>

<script>
export default {
   props: {
    isShow: {
      type: Boolean
    }
  },
  data() {
    return {
      sessionId: null,
      code: null,
      videoBase64: null,
      sessionIdIem: null,
      time: null,
      for: "fileUpload",
      backHome: false,
      isAcs: null,
      msg: null,
      getToken: null,
      videoUrl: null,
      videoLength: null,
      message: null,
      isUpload: true
    };
  },

  created() {
    //  请求sessionId和code
    this.$http
      .post("http://wallet.adpaytoken.com:8181/face/sessioncode")
      // .post("/api/face/sessioncode")
      .then(res => {
        this.sessionId = res.data.data.sessionId;
        this.code = res.data.data.code;
        console.log(res);
        console.log("这是我拿到的sessionId" + this.sessionId);
        console.log("这是我拿到的code" + this.code);
        //  console.log("这是我拿到的token" + this.getToken);
        //拿到code后开始倒计时
      })
      .catch(err => {
        console.log(err);
        this.backHome = true;
        console.log(this.backHome);
      }),
      //拿取token
      (this.getToken = sessionStorage.getItem("token"));
    //启动倒计时
    this.countDown();
  },
  methods: {
      //点击×关闭弹窗
    goHome() {
      //获取code失败返回首页
      //this.$router.replace("/home");
      this.isUpload = false
      this.$emit('goHome',this.isUpload)
    },
    getObjectUrl(file) {
      //获取视频地址
      let url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      }
      this.videoUrl = url;
      console.log("这是视频的url" + url);
      //获取视频时长
      setTimeout(() => {
        this.videoLength = this.$refs.videoPlayer.duration;
        console.log("这是视频时长" + this.videoLength);
      }, 1000);
    },
    uploadVideo(e) {
      //获取文件
      var file = e.target.files[0];
      //获取视频地址
      this.getObjectUrl(file);
      console.log("这是视屏");
      console.log(file);

      var formdata = new FormData();
      formdata.append("sessionId", this.sessionId);
      console.log("这是我发送的sessionId" + this.sessionId);
      formdata.append("file", file);
      formdata.append("token", this.getToken);
      // console.log("这是我发送的token" + this.getToken);

      //上传视屏中 加载层
      layui.use("layer", function() {
        var layer = layui.layer;
        layer.ready(function() {
          layer.load(2, {
            //icon支持传入0-2
            shade: [0.5, "gray"], //0.5透明度的灰色背景
            content: "上传中...",
            success: function(layero) {
              layero.find(".layui-layer-content").css({
                "padding-top": "39px",
                width: "60px"
              });
            }
          });
        });
      });
      //获取视频成功后判断视频长度
      setTimeout(() => {
        if (this.videoLength <= 2) {
          layui.use("layer", function() {
            var layer = layui.layer;
            layer.msg("视频太短，请保持在3-8秒");
            layer.closeAll("loading");
          });
        } else if (this.videoLength >= 9) {
          layui.use("layer", function() {
            var layer = layui.layer;
            layer.msg("视频过长，请保持在8秒内");
            layer.closeAll("loading");
          });
        } else {
          console.log("正在上传视频...");
          this.doUpload(formdata);
        }
      }, 3000);

      // this.doUpload(formdata);
    },
    doUpload(formdata) {
      //请求接口 并判断上传是否成功
      this.$http
        .post("http://wallet.adpaytoken.com:8181face/verify", formdata)
        //  .post("/api/face/verify", formdata)
        .then(res => {
          this.isAcs = res.data.code;
          this.message = res.data.message;

          //保存message
          sessionStorage.setItem("message", this.message);
          // console.log("这是我拿到的mes" + this.message);
          if (this.isAcs === 100) {
            //如果code是100返回 就成功
            return Promise.resolve(res);
          } else {
            return Promise.reject("errow");
          }
          console.log(res);
        })
        .then(res => {
          console.log("我是成功的code" + this.isAcs);
          layui.use("layer", function() {
            var layer = layui.layer;
            layer.closeAll("loading");
          });
          this.$router.replace("/suc");
        })
        .catch(err => {
          //失败关闭loading
          console.log("我是失败的code" + this.isAcs);
          layui.use("layer", function() {
            var layer = layui.layer;
            layer.closeAll("loading");
          });
          console.log(err + "失败");
          this.$router.replace("/fail");
        });
    },
    //倒计时
    countDown() {
      var t = 8;
      var timer = setInterval(() => {
        this.time = t;
        t--;
        // console.log(this.time);
        if (t < 0) {
          clearInterval(timer);
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.text {
  width: 200px;
  border: 1px solid #ddd;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  box-shadow: 0 1px 1px 0.8px;
  background: #fff;
}
input.file {
  position: relative;
  opacity: 0;
  z-index: 2;
}
.wrapper {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.modal-layer-popup-number span {
  font-size: 25px;
  color: #333;
  display: inline-block;
  width: 25px;
  height: 35px;
  line-height: 35px;
  margin-right: 0.43rem;
  border: 1px solid #e1e1e1;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 10px 2px;
}
/*解决页面可以左右滑动的问题*/
.uploadPage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color:rgba(0, 0, 0, 0.75);
}
.toast {
  background-color: rgba(0, 0, 0, 0.8);
  width: 200px;
  height: 30px;
  z-index: 99;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 6px;
  padding: 10px;
  color: #fff;
}
</style>
