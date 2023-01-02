<template>
    <div>
        <hotTownImg :list="photoWallUrl"></hotTownImg>
    </div>
</template>

<script>
import hotTownImg from '@/components/hotTownImg.vue';
export default {
    props: {

    },
    data() {
        return {
          photoWallUrl:[
               {imgUrl:require('@/assets/hotTownImg/pic_01.jpg'),tittle:'风暴狙击手',txt1:10,txt2:80},
               {imgUrl:require('@/assets/hotTownImg/pic_02.jpg'),tittle:'叙事感',txt1:17,txt2:260},
               {imgUrl:require('@/assets/hotTownImg/pic_03.jpg'),tittle:'定焦世界',txt1:122,txt2:70},
               {imgUrl:require('@/assets/hotTownImg/pic_04.jpg'),tittle:'中国福乐园',txt1:40,txt2:330},
               {imgUrl:require('@/assets/hotTownImg/pic_05.jpg'),tittle:'卡啪',txt1:190,txt2:980},
               {imgUrl:require('@/assets/hotTownImg/pic_06.jpg'),tittle:'植物园',txt1:111,txt2:388}
            ]
        };
    },
    methods: {

    },
    components: {
        hotTownImg
    },
};
</script>

<style scoped lang="less">

</style>
