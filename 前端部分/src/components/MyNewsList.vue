<template>
        <h3>图书</h3>
        <ul>
            <li v-for="item in newsList" :key="item.id">
                {{ item.id }}.<router-link :to="'/newslist/detail/'+item.id" class="link" active-class="active">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    <router-view></router-view>
</template>
<script>
    export default{
        name:'MyNewsList',
        data(){
            return{
            newsList:[
                {id:0,title:"《高效能人士的七个习惯》"},
                {id:1,title:"《影响力》"},
                {id:2,title:"《把时间当做朋友》"},
                {id:3,title:"《平凡的世界》"},
                {id:4,title:"《简爱》"},
                {id:5,title:"《黄金时代》"},
                {id:6,title:"《穷爸爸，富爸爸》"},
                {id:7,title:"《小狗钱钱》"},
                {id:8,title:"《管道的故事》"},
                {id:9,title:"《投资的重要性》"},
                {id:10,title:"《如何读一本书》"},
                {id:11,title:"《阅读的力量》"},
                {id:12,title:"《学会写作》"},
                {id:13,title:"《刻意练习》"},
                {id:14,title:"《精进》"},
                {id:15,title:"《好好学习》"},
                {id:16,title:"《奇特的一生》"},
                {id:17,title:"《吃掉那只青蛙》"},
            ]
            }
        }
    }
</script>
<style scoped>
    .link{color:aqua}
    .link:hover{
        color:aquamarine
    }
    .acyive{color:azure}
    li{
        color:aliceblue;
        list-style-type:none;
    }
</style>