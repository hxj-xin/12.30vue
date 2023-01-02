<template>
  <div id="app">
    <PhotoWall @sondata="getSon"></PhotoWall>
    <ul>
      <li v-for="(item,index) in list">
        <img :src="item.imgUrl" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoWall from '@/views/PhotoWall.vue'

export default {
  data(){
    return {
      list:[]
    }
  },
  components: {
    PhotoWall
  },
  methods:{
    getSon(v){
      this.list=v;
    }
  },

}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  ul{
    width: 100%;
    height: 300px;
    padding: 50px 200px 0;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    li{
      list-style: none;
      padding: 10px;
      border: 1px solid #999;
      border-radius: 10px;
      margin-bottom: 10px;
      img{
        width: 180px;
      }
    }
  }
}

</style>
