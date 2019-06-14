<template>
    <div>
        <scroll-view scroll-y class="scrollPage">
            <img src='/static/images/BasicsBg.png' mode='widthFix' class='png'>
            <view class='nav-list'>
                <navigator
                        v-for="(item, index) in elements"
                        :class="'nav-li bg-'+item.color"
                        open-type="navigate"
                        hover-class='none'
                        :key="index">
                    <div class="nav-title">{{item.title}}</div>
                    <div class="nav-name">{{item.name}}</div>
                </navigator>
            </view>
            <view class='cu-tabbar-height'></view>

        </scroll-view>

<!--        <cu-custom bgColor="bg-gradual-blue" :isBack="true">-->
<!--            <div slot="backText">返回</div>-->
<!--            <div slot="content">首页</div>-->
<!--        </cu-custom>-->
    </div>
</template>

<script>
    import apis from '@/apis/apis'

    export default {
        data() {
            return {
                elements: [{
                    title: '布局',
                    name: 'layout',
                    color: 'cyan',
                    icon: 'newsfill'
                },
                    {
                        title: '背景',
                        name: 'background',
                        color: 'blue',
                        icon: 'colorlens'
                    },
                    {
                        title: '文本',
                        name: 'text',
                        color: 'purple',
                        icon: 'font'
                    },
                    {
                        title: '图标 ',
                        name: 'icon',
                        color: 'mauve',
                        icon: 'icon'
                    },
                    {
                        title: '按钮',
                        name: 'button',
                        color: 'pink',
                        icon: 'btn'
                    },
                    {
                        title: '标签',
                        name: 'tag',
                        color: 'brown',
                        icon: 'tagfill'
                    },
                    {
                        title: '头像',
                        name: 'avatar',
                        color: 'red',
                        icon: 'myfill'
                    },
                    {
                        title: '进度条',
                        name: 'progress',
                        color: 'orange',
                        icon: 'icloading'
                    },
                    {
                        title: '边框阴影',
                        name: 'shadow',
                        color: 'olive',
                        icon: 'copy'
                    },
                    {
                        title: '加载',
                        name: 'loading',
                        color: 'green',
                        icon: 'loading2'
                    },
                ]
            }
        },
        components: {},
        methods: {},
        async onLoad () {
            const conditons = await apis.getConditions({name:'name'})
            console.log(conditons)
            const res = await apis.getIndexData()
            console.log(res)
        },
        created() {
        }
    }
</script>

<style lang="scss" scoped>
    .scrollPage{
        img{
            width: 100%;
            height: 243px;
        }
    }


</style>
