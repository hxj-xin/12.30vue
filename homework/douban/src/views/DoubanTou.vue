<template>
    <div class="tou">
        <div class="left">
            <input type="text" placeholder="请输入">
            <img :src="giveVal1[2].imgUrl" alt="" class="search">
            <img :src="giveVal1[1].imgUrl" alt="" class="scan">
        </div>
        <div class="right">
            <img :src="giveVal1[0].imgUrl" alt="" class="chat">
        </div>


    </div>
</template>

<script>
export default {
    props: {
        giveVal1:[]  
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
.tou{
    width: 100%;
    height: 100%;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        width: 85%;
        height: 100%;
        position: relative;
        input{
            width: 88%;
            height: 60%;
            margin-top: 0.5rem;
            text-indent: 3rem;
        }
        img{
            width: 2rem;
            position: absolute;
        }
        .search{
            left: 7%;
            top: 1rem;
        }
        .scan{
            right: 7%;
            top: 1rem;
        }
    }
    .right{
        width: 14%;
        height: 100%;
        img{
            width: 3rem;
            margin: 0.5rem;
            
        }
    }
}
</style>

<style scoped lang="less">

</style>
