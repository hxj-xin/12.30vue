<template>
  <div class="home">
    <div class="top">
      <DoubanTou v-bind="$attrs"></DoubanTou>
    </div>
    <div class="middle">
     
    </div>
    <ul class="bottom">
      <li v-for="(item,index) in giveVal2">
        <img :src="item.imgUrl" alt="">
        <span>{{ item.txt }}</span>
      </li>
      
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import DoubanTou from '@/views/DoubanTou.vue'
export default {
  name: 'Douban',
  components: {
    DoubanTou
  },
  props:{
    giveVal2:[]
  }
}
</script>
<style scoped lang="less">

.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .top{
    width: 100%;
    height: 4rem;
  }
  .middle{
    flex: 1;
  }
  .bottom{
    width: 100%;
    height: 7rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 0 10px;
    box-sizing: border-box;
    border-top: 1px solid #999;
    li{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img{
        width: 3.5rem;
      }
    }

  }
}

</style>
