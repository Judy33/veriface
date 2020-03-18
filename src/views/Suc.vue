<template>
  <div class="isSuc">
    <div class="top" v-show="isSuccess">
      <img src="../assets/success.png" alt />
      <p>
        实名认证
        <span style="color: green">成功</span>
      </p>
    </div>
    <button type="button" class="layui-btn layui-btn-normal wrapper" @click="backHome">完成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSuccess: true
    };
  },
  methods: {
    backHome() {
          window.ReactNativeWebView.postMessage("ok")
      // window.postMessage("nihao");
      // window.close()
      console.log("dasd");
      window.closePage.jsMethod(1)
   //点击关闭窗口
      // var browserName = navigator.appName;
    
      // if (browserName == "Netscape") {
      //   //     window.open('', '_self', '');
      //   window.close();
      // }
      // if (browserName == "Microsoft Internet Explorer") {
      //   //     window.parent.opener = "whocares";
      //   window.parent.close();
      // }
    }
  }
};
</script>

<style scoped>
.isSuc {
  text-align: center;
  height: 100%;
}

/* .content {
  width: 90%;
  margin: 0 auto;
  height: 400px;
  background: #fff;
} */
.top {
  margin: 30px 0;
}
.top p {
  margin-top: 40px;
  font-size: 30px;
}
.top img {
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
}
.layui-btn-normal {
  height: 40px !important;
  width: 200px;
  text-align: center;
  margin-bottom: 10px;
  position: absolute;
  bottom: 0;
  right: 50%;
  margin-right: -100px;
}
</style>