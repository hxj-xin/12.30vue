<template>
    <div class="fengzhuang">
        <div class="top">
            <div class="left">
                <input type="text" :placeholder="msg" class="ipt">
                <img :src="header[2].imgUrl" alt="" class="search">
                <img :src="header[1].imgUrl" alt="" class="scan">
            </div>
            <div class="right">
                <img :src="header[0].imgUrl" alt="" class="chat">
            </div>
        </div>
        <div class="content"></div>
        <div class="bottom">
            <ul>
                <li v-for="(item,index) in footer">
                    <img :src="item.imgUrl" alt="">
                    <span>{{ item.txt }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header:[],
        footer:[],
        msg:''
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
.fengzhuang{
    width: 50%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #999;
    .top{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        background-color: green;
        .left{
            width: 85%;
            position: relative;
            .ipt{
            width: 90%;
            height: 30px;
            text-indent: 10%;
           }
           img{
            width: 20px;
            position: absolute;
           }
           .search{
            left: 7%;
            top: 20%;
           }
           .scan{
            right: 7%;
            top:20%;
           }

        }
        .right{
            width: 14%;
            height: 100%;
            position: relative;
            img{
                width: 30px;
                position: absolute;
                left: 40%;
                top: 15%;
            }
        }

    }
    .content{
        flex: 1;
    }
    .bottom{
        width: 100%;
        height: 80px;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style: none;
            padding: 40px;
            box-sizing: border-box;
            li{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                margin-top: -15px;
                img{
                    width: 40px;
                }
                span{
                    color: #999;
                }
            }
        }
    }
}

</style>
