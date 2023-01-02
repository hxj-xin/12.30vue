<template>
  <div class="hello">
    <button @click="giveV">多彩照片墙</button>
    
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {},
  data(){
    return {
      imgList:[
        {imgUrl:require('@/assets/photoWallImg/1.jpg')},
        {imgUrl:require('@/assets/photoWallImg/3.jpg')},
        {imgUrl:require('@/assets/photoWallImg/2.jpg')},
        {imgUrl:require('@/assets/photoWallImg/5.jpg')},
        {imgUrl:require('@/assets/photoWallImg/4.jpg')},
        {imgUrl:require('@/assets/photoWallImg/7.png')},
        {imgUrl:require('@/assets/photoWallImg/8.png')},       
        {imgUrl:require('@/assets/photoWallImg/6.jpg')},
      ]
    }
  },
  methods:{
    giveV(){
      this.$emit('sondata',this.imgList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
