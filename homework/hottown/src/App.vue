<template>
   <div id="app">
    <!--<nav>
      <router-link to="/">Home</router-link> 
    </nav>
    <router-view/> -->
    <HomeView></HomeView>
    <ul class="list">
      <li v-for="(item,index) in list">
        <div class="left">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="right">
          <h4>{{ item.tittle }}</h4>
          <span>成员：{{ item.txt1 }}</span>
          <span>作品：{{ item.txt2 }}</span>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .list{
    width: 100%;
    padding: 20px 240px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    li{
      
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 120px;
      .left{
        img{
          width: 100px;
          margin-right: 20px;
        }
      }
      .right{
        width: 120px;
        text-align: left;
        h4{
          color: rgb(34, 168, 92);
          margin-top: -10px;
          
        }
        span{
          display: block;
        }
      }
    }
  }
}

</style>

<script>
// @ is an alias to /src
import HomeView from '@/views/HomeView.vue'

export default {
  name: 'Apps',
  components: {
    HomeView
  },
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    this.bus.$on('busData', (v)=>{
      this.list=v;
    })
  }

}
</script>
