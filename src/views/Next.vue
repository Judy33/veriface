<template>
  <div class="next">
    <div class="head">
      <img src="../assets/home.png" alt />
    </div>
    <div class="content layui-timeline" style="width: 300px;margin:40px auto;">
      <ul class="layui-timeline">
        <div class="prompt-box">
          <span class="prompt-box-number">1</span>
          <span class="prompt-box-text">牢记验证码，点击开始录制</span>
          <span class="prompt-box-text-border"></span>
        </div>
        <div class="prompt-box">
          <span class="prompt-box-number">2</span>
          <span class="prompt-box-text">开启前置摄像头，用普通话朗读数字</span>
          <span class="prompt-box-text-border"></span>
        </div>
        <div class="prompt-box">
          <span class="prompt-box-number">3</span>
          <span class="prompt-box-text">完成录制，等待验证结果</span>
        </div>
      </ul>
    </div>
    <div class="footer">
      <button type="button" class="next-btn wrapper" @click="goUpload">下一步</button>
    </div>
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "next",
  props: {
    isShow: {
      type: Boolean
    }
  },
  data() {
    return {
      iconShow: true,
      token: ""
    };
  },
  components: {},
  created() {
    this.getToken();
  },

  methods: {
    goUpload() {
      //去上传视屏
      this.iconShow = false;
      this.$emit("goNext", this.iconShow);
    },
    getToken() {
      function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
          var str = url.substr(1);
          var strs = str.split("&");
          for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
          }
          // console.log("token"+str);
        }
        return theRequest;
      }
      var Request = new Object();
      Request = GetRequest();
      this.token = Request["token"];
      //保存token到sessionStorage
      sessionStorage.setItem("token", this.token);
      console.log("这是我一进首页就保存的token" + this.token);
    }
  }
};
</script>

<style scoped>
.prompt-box-text-border {
  height: 10px;
  margin: 0 10px;
  width: 0;
  border-left: 1px dotted #0073eb;
  display: block;
}

.prompt-box-number {
  border-radius: 200px;
  border: 1px solid #0073eb;
  text-align: center;
  color: #0073eb;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 12px;
  margin-right: 0.833rem;
  letter-spacing: 0;
  vertical-align: top;
}

.head img {
  width: 100%;
}
.content {
  width: 100%;
}
.layui-timeline {
  width: 300px;
  margin: 0 auto;
}
.footer {
  margin: 0 auto;
  width: 90%;
  position: relative;
}
.next-btn {
  width: 90%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
.layui-layer-btn0 {
  width: 230px;
  height: 40px !important;
  text-align: center;
  margin-bottom: 10px;
}
.layui-layer-btn a {
  line-height: 40px !important;
}
input.file {
  position: relative;
  /* -moz-opacity:0 ; */
  /* filter: alpha(opacity：0); */
  opacity: 0;
  z-index: 2;
}
.wrapper {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
  /* margin-top: 15px; */
  display: inline-block;
  padding: 6px 12px;
  /* margin-bottom: 0; */
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
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>
