<template>
  <div class="home">
    <!-- <hotTownImg :list="hotTownUrl"></hotTownImg> -->
    <photoWall :list="photoWallUrl"></photoWall>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <nav>
      <!-- <router-link to="/Toubu">Toubu</router-link> |
      <router-link to="/phonoWall">phonoWall</router-link> |
      <router-link to="/hotTown">hotTown</router-link>  -->
    </nav>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import photoWall from '@/components/phonoWallImg.vue'
export default {
  name: 'photoImg',
  data(){
    return {
      photoWallUrl:[
               {imgUrl:require('@/assets/photoWallImg/1.jpg')},
               {imgUrl:require('@/assets/photoWallImg/2.jpg')},
               {imgUrl:require('@/assets/photoWallImg/3.jpg')},
               {imgUrl:require('@/assets/photoWallImg/4.jpg')},
               {imgUrl:require('@/assets/photoWallImg/5.jpg')},
               {imgUrl:require('@/assets/photoWallImg/6.jpg')},
               {imgUrl:require('@/assets/photoWallImg/7.png')},
               {imgUrl:require('@/assets/photoWallImg/8.png')},
            ]
    }
  },
  components: {
    photoWall
  }
}
</script>
<style lang="less" scoped>
nav{
  a{
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
