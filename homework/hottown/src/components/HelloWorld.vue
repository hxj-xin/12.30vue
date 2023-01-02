<template>
  <div class="hello">
    <button @click="busChange">摄影社区热门小镇</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      photolist:[
        {imgUrl:require('@/assets/hotTownImg/pic_02.jpg'),tittle:'叙事感',txt1:17,txt2:260},
        {imgUrl:require('@/assets/hotTownImg/pic_03.jpg'),tittle:'定焦世界',txt1:122,txt2:70},
        {imgUrl:require('@/assets/hotTownImg/pic_04.jpg'),tittle:'中国福乐园',txt1:40,txt2:330},
        {imgUrl:require('@/assets/hotTownImg/pic_05.jpg'),tittle:'卡啪',txt1:190,txt2:980},
        {imgUrl:require('@/assets/hotTownImg/pic_06.jpg'),tittle:'植物园',txt1:111,txt2:388},
        {imgUrl:require('@/assets/hotTownImg/pic_01.jpg'),tittle:'风暴狙击手',txt1:10,txt2:80},
      ]      
    }
  },
  methods:{
    busChange(){
      this.bus.$emit('busData',this.photolist)
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
