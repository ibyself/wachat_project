<template>
    <div id="container">
        <ul class="list">
            <li class="item" v-for="(item,index) in dataList" :key="index">
                <div class="itemHeader">
                    <div class="headerImg">
                        <img :src="item.header" alt="">
                    </div>
                    <div class="text">
                        <div class="userName">{{item.name}}</div>
                        <div class="time">{{item.passtime}}</div>
                    </div>
                </div>
                <div class="itemContent">{{item.text}}</div>
                <div class="itemFooter">
                    <div class="forWard">
                        <img src="../../../static/images/forward.png" alt="">
                        <span>{{item.forward}}</span>
                    </div>
                    <div class="pl">
                        <img src="../../../static/images/pl.png" alt="">
                        <span>{{item.comment}}</span>
                    </div>
                    <div class="dz">
                        <img src="../../../static/images/dz.png" alt="">
                        <span>{{item.up}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {
        data(){
            return{
                dataList:[],
                page:1
            }
        },
        methods:{
            getData(page=1,type="text"){
                let that=this
                wx.cloud.callFunction({
                    name:"duanzi",
                    data:{
                        page,
                        count:10,
                        type
                    },
                    success(res){
                        let arr=that.dataList.concat(res.result.result)
                        that.dataList=arr
                    }
                })
            }
        },
        mounted(){
            this.getData(this.page)
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    #container
        .list
            .item
                border-bottom: 1px solid #ddd
                .itemHeader
                    display flex
                    align-items center
                    .headerImg
                        width 64rpx
                        height 64rpx
                        margin 24rpx  
                        img
                            width 100%
                            height 100%
                            border-radius 50rpx
                            
                    .text
                        .username
                            font-size 28rpx
                        .time
                            font-size 24rpx
                            color #aaa
                .itemContent
                    padding 0 24rpx 24rpx
                .itemFooter
                    display flex
                    padding 0 24rpx 24rpx
                    >div
                        display flex
                        align-items center
                        img
                            width 40rpx
                            height 40rpx
                        span
                            margin 0 20rpx
                    
</style>
