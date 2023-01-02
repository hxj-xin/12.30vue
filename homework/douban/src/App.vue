<template>
  <div id="app">
    <Douban class="douban"
      :giveVal1="headerList"
      :giveVal2="footerList"
    ></Douban>
  </div>
</template>

<script>
// @ is an alias to /src
import Douban from '@/views/Douban.vue'
export default {
  components: {
    Douban
  },
  data(){
    return {
      footerList:[
        {imgUrl:require('@/assets/toubuImg/1.png'),txt:'首页'},
        {imgUrl:require('@/assets/toubuImg/2.png'),txt:'搜索'},
        {imgUrl:require('@/assets/toubuImg/3.png'),txt:'热点'},
        {imgUrl:require('@/assets/toubuImg/4.png'),txt:'购物车'}
      ],
      headerList:[
        {imgUrl:require('@/assets/toubuImg/ic_chat_white.png')},
        {imgUrl:require('@/assets/toubuImg/ic_scan_gray.png')},
        {imgUrl:require('@/assets/toubuImg/ic_search_gray.png')}
      ]
    }
  }
}
</script>
<style lang="less">
*{
  padding: 0;
  margin: 0;
}
html,
body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  .douban{
    width: 100%;
    height: 100%;
  }

}
</style>
