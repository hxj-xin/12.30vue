<template>
  <div id="app">
    <nav>
      <router-link to="/">多彩照片墙</router-link> |
      <router-link to="/hotTown">摄影社区热门小镇</router-link> |
      <router-link to="/toubu">封装头部</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  props: {

  },
  data() {
      return {

      };
  },
  methods: {

  },
  components: {

  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
