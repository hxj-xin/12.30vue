<template>
  <div class="hello">
    <toubuImg :header="toubuUrl2" :footer="toubuUrl1" :msg="pl"></toubuImg>
  </div>
</template>

<script>
import toubuImg from './toubuImg.vue';
export default {
  name: 'Toubu',
  props: {
    // txt:String
  },
  data(){
    return {
      pl:'请输入搜索内容',
      toubuUrl1:[
        {imgUrl:require('@/assets/toubuImg/1.png'),txt:'首页'},
        {imgUrl:require('@/assets/toubuImg/2.png'),txt:'搜索'},
        {imgUrl:require('@/assets/toubuImg/3.png'),txt:'热点'},
        {imgUrl:require('@/assets/toubuImg/4.png'),txt:'购物车'}
      ],
      toubuUrl2:[
        {imgUrl:require('@/assets/toubuImg/ic_chat_white.png')},
        {imgUr2:require('@/assets/toubuImg/ic_scan_gray.png')},
        {imgUr3:require('@/assets/toubuImg/ic_search_gray.png')}
      ]
    }
  },
  components:{
    toubuImg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  height: 500px;
}

</style>
