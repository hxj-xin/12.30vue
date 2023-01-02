<template>
    <div class="hotTown">
        <ul>
            <li v-for="(item,index) in list">
                <div class="left">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="right">
                    <h4>{{ item.tittle }}</h4>
                    <p>成员：{{ item.txt1 }}</p>
                    <p>作品：{{ item.txt2 }}</p>
                </div>
            </li>
            
        </ul>
        <ul>
            
        </ul>

    </div>
</template>

<script>
export default {
    props: {
       list:'',
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

<style scoped lang="less">
   .hotTown{
    width: 60%;
    margin: 0 auto;
    border: 1px solid #999;
    padding: 10px 30px;
    box-sizing: border-box;
    h3{
        text-align: left;
    }
    ul{
        width: 100%;
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;
        // align-content: flex-start;
        flex-wrap: wrap;
        box-sizing: border-box;
        li{
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 32%;
            padding: 10px;
            box-sizing: border-box;
            img{
                width: 70px;
                margin-top: 5px;
            }
            .right{
                width: 60%;
                text-align: left;
                padding-left: 10px;
                h4{
                    color: rgb(6, 110, 151);
                    margin: 0;
                    padding-bottom: 10px;
                }
                p{
                    margin: 0;
                }
            }

        }
    }
   }

</style>
