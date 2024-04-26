<template>
    <div>
        <h3>作品简介</h3>
        <p>{{ detailList[$route.params.id].content }}</p>
        <img :src="detailList[$route.params.id].tupian" >
    </div>
</template>
<script>
    export default{
        name:'',
        data(){
            return{
                detailList:[
                    {content:"该书讲述了品行修养，为人处事的技巧。人的品德是由习惯组成的，思想决定行动，行动决定习惯，习惯决定品德，品德决定命运，习惯对人们的生活有影响。因为习惯是一贯的，在不知不觉中，长年累月影响人们的品德，暴露人们的本性，左右人们的成败。",
                    tupian:'https://img2.doubanio.com/view/subject/l/public/s33939683.jpg'},
                    {content:"自出版以来，《影响力》就一直是畅销佳作。由于它的影响，劝说得以成为一门科学。无论你是普通人还是为某一产品或事业观点游说的人，这都是一本最基本的书，是你理解人们心理的基石。",
                    tupian:'https://img2.baidu.com/it/u=3992300921,1551041076&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1136'},
                    {content:"为什么你总是说“没有时间了”，勤奋而又懒惰？最节省时间的方式是学习，为什么你砍柴而不肯磨刀？基于过程的记录，为什么迥异于基于结果的记录？一个人对时间的精确感知能力真的能训练得像特异功能？都是平凡人，为什么若干年后彼此已成天壤之别？时间这条船，为什么只送心智成熟的人去往梦想的彼岸？绝大多数的成功根本与智商没有任何关系，所有的失败都与且只与时间限制有关。当你把时间花费到一个人身上的时候，相当于在他的身上倾注了你生命的一段，哪管最终的结果如何，反正，那个人那件事都成了你生命中的一部分，不管最后你喜欢还是不喜欢。",
                    tupian:'https://booklibimg.kfzimg.com/data/book_lib_img_v2/isbn/0/799b/799b2768957fd872ee29afa74fbd3294_0_0_0_0_water.jpg'},
                    {content:"该书以中国70年代中期到80年代中期十年间为背景，通过复杂的矛盾纠葛，以孙少安和孙少平两兄弟为中心，刻画了当时社会各阶层众多普通人的形象；劳动与爱情、挫折与追求、痛苦与欢乐、日常生活与巨大社会冲突纷繁地交织在一起，深刻地展示了普通人在大时代历史进程中所走过的艰难曲折的道路。",
                    tupian:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fa083d65b-ec51-4f1d-8111-d33e6ec8fa84%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695868361&t=007abb9ada351b3c30388366602af813'},
                    {content:"该小说讲述孤女简·爱自幼父母双亡，寄养于舅母家，备受虐待，后被舅母打发到洛伍德义塾（洛伍德学校）去。 [18] 洛伍德义塾环境恶劣， [18] 但她顽强地活了下来。毕业两年后，简应聘去当家庭教师谋生。主人罗切斯特性格忧郁、喜怒无常，但经过较长时间接触，简发现罗切斯特心地善良，为人正直、刚毅，渐渐对他产生了感情。当他们在教堂举行婚礼时，简痛苦地发现，原来罗切斯特有一个疯妻伯莎·安托瓦妮特·梅森。简悲伤地离去。后来，与她离散多年的叔父约翰·爱病故，遗赠给她巨额财产。因不能忘情于罗切斯特，她重回故地，才知数月前疯女人纵火而死，罗切斯特为救她一只眼睛被砸了出来，另一只眼睛发炎也看不见了 。简立刻去向他倾诉衷情，两人终缔良缘。 后来，罗切斯特在伦敦医好了一只眼睛，和简·爱生下了一个男孩。",
                    tupian:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb325d56d-4e32-4314-962b-e56343fbe725%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695868446&t=a35ff4639933cac90bfc1f7b2b75c433'},
                    {content:"上世纪二十至四十年代的中国，那是一个民气十足、海阔天空的时代，一群年轻人经历了一段放任自流的时光，自由地追求梦想与爱情，有人在流离中刻骨求爱，有人在抗争中企盼家国未来……萧红，一个特立独行的女子，一路流亡，从北方到南方，从哈尔滨到香港，一边躲避战乱，一边经历着令人唏嘘又痛彻心扉的爱情与人生。对生的坚强对死的挣扎在她笔下穿透纸背，她的人生亦是如此。",
                    tupian:'https://img31.mtime.cn/pi/2014/09/22/113924.59928507_1000X1000.jpg'},
                    {content:"该书讲述了陈宝国饰演的出租车司机王富贵受老战友之托，远赴澳洲给战友的女儿露露做冒牌“陪读爸爸”，从 而引发了一系列令人啼笑皆非的故事",
                    tupian:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F57c37c5b-d814-4e87-a1d3-16c0a271db80%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695868574&t=ced9f9493a1d1690c999a625a41ca7c0'},
                    {content:"该书讲述的是一个离奇的童话故事：有一天，小女孩吉娅发现一只受伤的白色拉布拉多猎犬，并把它带回了家。可是，有谁会想到，这只普通的小狗却是一个真正的理财天才呢？吉娅和小狗成为了朋友，并从它那里得知，原来所有的愿望都是可以实现的。",
                    tupian:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F3254d016-5007-41fc-a611-2e8b5a651153%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695868625&t=6ab48ecd6353c919e839d3151537c56c'},
                    {content:"我们都生活在一个”提桶”的世界里：干一天的活儿拿一天的工钱，干一个月的工作领一个月的薪水。无论你是年收入不到1万元的洗碗工．还是年薪过百万的白领，你都是用一份时间去换一份金钱。如果你被解雇，或因患病、受伤无法继续工作，你的收入就会马上停止。不提桶，就没有收入！",
                    tupian:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fd30c4311-e4b1-4540-81df-e55a68f7bf52%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695868671&t=2a5ba44fe889f0d39dd6907f8d267b36'},
                    {content:"该书反映了20世纪30 年代经济大危机时期充分暴露出来的某些实际情况，如失业严重、资本产品大量过剩等，并提出了缓解这些矛盾的对策，为当时束手无策的资本主义世界指出了一条摆脱困境的出路。",
                    tupian:'https://img14.360buyimg.com/pop/jfs/t1/168848/14/14875/57004/605d73c2Eb45c23bd/cef9cb051837d1c5.jpg'},
                    {content:"该书强调阅读是一种主动的活动。 阅读一般分做三种目的：娱乐消遺、获取资讯、增进理解力。 只有最后一种目的的阅读能帮助阅读者增长心智，不断成长。 该书主要论述指导如何通过阅读增进理解力。 它将阅读分做四个层次基础阅读、检视阅读、分析阅读、主题阅读",
                    tupian:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6ca93aff-2e0b-4ef9-b800-c59ab4fe4a5e%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695868762&t=f821fe4e31cc9a432fe8d4f4bf44dfa5'},
                    {content:"富里迪通过全面梳理苏格拉底时代至当代的数百位西方重要思想家有关阅读和读写能力（literacy）的经典论述，从中提炼出一系列极具代表性和影响力的观点，并在具体分析它们各自的文化根源、理论特征及其内在张力和分歧焦点的同时，系统考察了阅读与读写能力之间的关系，阅读对不同文化处境中的读者和社会的影响，以及不同时代的主流文化观念和技术变革对阅读之地位和读写能力之意义的影响等",
                    tupian:'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/c585/c58515732d1080a40dd13b743b369f76_0_1_300_300.jpg'},
                    {content:"写作是通向未来影响力的决定性因素。 7步方法，18种模板，50个写作问答，让你成为真正会表达的人。 7步方法，让你从提笔就怕、无从下笔到能够持续写下去：快速热身、积累素材、掌握叙述方法、把握逻辑、锤炼语言、写作套路、适应新媒体写作。",
                    tupian:'https://pic.rmb.bdstatic.com/bjh/news/9ba1fdd1b66c703c2a5dfa9130b3f163.jpeg@s_0,w_1242%7Cwm_2,t_55m+5a625Y+3L+S4jeiJr+mYv+S/ig=='},
                    {content:"本书首次提出“刻意练习”这个概念，并讲述了心理学家艾利克森在研究过程中发现的一种提高技能与能力的最有效方法。",
                    tupian:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fa417a6f8-7e66-4ab5-a59d-fd83c5d2e2a1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695868956&t=9c77c92d6f16338d554180acc318b1ce'},
                    {content:"这本书为大家提供了时间、选择、行动、学习、思维、才能、成功七个方面的精进路径，只要依循书中的方法反复磨练，便可以日益精进，成为一个很厉害的人，找到实现自我的那条成功之道。",
                    tupian:'https://image12.bookschina.com/2021/20210826/2/8545735.jpg'},
                    {content:"2017年2月1日中信出版社出版的图书，作者是成甲。总页数267页，是一本分享学习方法的书籍。",
                    tupian:'https://bpic.588ku.com/element_origin_min_pic/19/03/06/0eadbaf64ba1ed2aaf363f5381a2255d.jpg'},
                    {content:"描述了一个真正和时间成为朋友的人，一个将自己的一生用时间来计划的人",
                    tupian:'https://pic1.zhimg.com/v2-7b1a2dbdddaca38724b2d50e48ce7b9b_1440w.jpg?source=172ae18b'},
                    {content:"面对*艰巨、*重要的任务，不要拖延，立刻采取行动，吃掉那只青蛙每天吃掉3只青蛙，让你进入前10%的精英行列。 《吃掉那只青蛙》中提出21条时间管理法则，让千万人受益。",
                    tupian:'https://www.taoshudang.com/wp-content/uploads/2019/03/88f39ed4ly1fxuqnm5pe1j209i0eadmw-200x300.jpg'}

                ]
            }
        } ,
        
    }
</script>
<style scoped>
img{
    width: 200px;
    height: 250px;
}
</style>
