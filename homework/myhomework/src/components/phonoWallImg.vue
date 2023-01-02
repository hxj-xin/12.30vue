<template>
    <div class="photo_">
        <!-- <button @click="getParent">获取</button> -->
        <ul>
            <li v-for="(item,index) in list">
                <img :src="item.imgUrl" alt="">
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    props: {
        list:[]
    },
    methods:{
        // getParent(){
        //     console.log(this);
        //     this.list=this.$parent.photoWallUrl;
        // }

    },
    data() {
        return {
            // list:[]
        };
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.photo_{
    width: 60%;
    padding: 10px;
    box-sizing: border-box;
    margin: 0 auto;
    ul{
        list-style: none;
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        li{
            width: 24%;
            padding: 10px;
            box-sizing: border-box;
            margin-bottom: 10px;
            border: 1px solid #999;
            border-radius: 10px;
            img{
                width: 120px;
            }

        }
    }
}


</style>
