<template>
  <div class="home">
    <next @goNext="goNext" :isShow="isShow"  />
    <up-load v-show="!isShow" :isShow="isShow"  @goHome="goHome"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Next from "@/views/Next.vue";
import UpLoad from "@/views/UpLoad.vue";
export default {
  name: "Home",
  components: {
    Next,
    UpLoad
  },
  data() {
    return {
      isShow: true
    };
  },

  methods: {
    goNext(iconShow){
      this.isShow = iconShow
    },
    goHome(isUpload){
      this.isShow = !isUpload
    }
  }
};
</script>

<style scoped>
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
