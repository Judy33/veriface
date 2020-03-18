<template>
  <div class="isFail">
    <div class="failoOrSuccess">
      <div class="content">
        <div class="fail top" v-show="!isSuccess">
          <img class="failImg" src="../assets/fail.png" alt />
          <p>
            实名认证
            <span style="color:red">失败</span>
          </p>
          <p class="message" style="font-size: 20px;color: red;">{{this.mes}}</p>
        </div>
      </div>
    </div>

    <button type="button" class="layui-btn layui-btn-normal wrapper" @click="backHome">完成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSuccess: false,
      mes: null
    };
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    goHome() {
      //获取code失败返回首页
      this.$router.replace("/home");
    },
    getMessage() {
      var mes = sessionStorage.getItem("message");
      var str = "face";
      if (mes && mes.indexOf(str) != -1) {
        this.mes = "没有检测到人脸";
      } else {
         this.mes = mes
      }
      console.log("这是message"+this.mes)
    },
    backHome() {
      window.ReactNativeWebView.postMessage("goback");
      window.localStorage.clear();
      window.sessionStorage.clear();
    }
  }
};
</script>

<style scoped>
.failoOrSuccess {
  text-align: center;
  height: 100%;
}

.content {
  width: 90%;
  margin: 0 auto;
  height: 400px;
  background: #fff;
}
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