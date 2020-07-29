<template>
  <!-- 主体部分 -->
    <div class="container">
      <!-- banner -->
      <div class="mt-3">
        <img src="img/index//index_guild.png" alt="">
      </div>
      <!-- banner结束 -->

      <!-- 内容部分 -->
      <div class="row no-gutters mt-3">

        <!-- 左边 -->
        <div class="col-lg-9 col-sm-12">
          <!-- 标题 -->
          <div class="mb-0 p-2 mt-2 my_bg text-muted">
            笔记本电脑
          </div>  
          <!-- 标题结束 -->

          <!-- 商品 -->
          <div class="row no-gutters bg-white pt-3 px-2">
            <!-- 循环生成商品 -->

            <div v-for="(p,i) of products" :key="i" class="col-xl-4 col-lg-4 col-md-2 col-sm-12 px-2">
              <div class="card border box-s">
                <!-- 图片 -->
                <router-link :to="`/details/${p.lid}`">
                  <img class="w-100 imgs" :src="p.md" alt="">
                </router-link>
                <!-- 价格及标题 -->
                <p class="text-primary mb-0 h5 font-weight-normal" v-cloak>￥{{p.price.toFixed(2)}}</p>
                <router-link :to="`/details/${p.lid}`" class="text-muted text_small mb-0" v-text="p.title"></router-link>
                <!-- 按钮 -->
                <div class="mb-1 d-flex justify-content-around align-items-center">
                  <button class="my_btn">-</button>
                  <input type="text" value="1" class="border-0 w-15 text-center">
                  <button class="my_btn">+</button>
                  <a href="JavaScript:;" class="btn btn-sm btn-primary ml-1 w-50">加入购物车</a>
                </div>
              </div>
            </div>
            <!-- 循环生成商品结束 -->

            
          </div>
          <!-- 商品结束 -->

          <!-- 分页条 -->
          <div class="p-2 mt-2 my_bg text-muted">
            <ul class="pagination mb-0 justify-content-end">
              <li class="page-item pr-2" :class="{disabled:pno==0}" @click="change(-1,$event)">
                <a href="JavaScript:;" class="page-link rounded-right">上一页</a>
              </li>
              <!-- 分页的用v-for循环 -->
              <li v-for="i of pcount" :key="i" class="page-item pr-2" @click="changepage(i-1)" :class="{active:i-1==pno}">
                <a href="JavaScript:;" class="page-link rounded" v-text="i"></a>
              </li>
              <li class="page-item" :class="{disabled:pno==pcount-1}" @click="change(+1,$event)">
                <a href="JavaScript:;" class="page-link rounded-left">下一页</a>
              </li>
            </ul>
          </div>
          <!-- 分页条结束 -->
        </div>
        <!-- 左边结束 -->


        <!-- 右边 -->
        <div class="col-lg-3 col-sm-12">
          <!-- 商家通告 -->
          <p class="mb-0 p-2 mt-2 ml-md-0 ml-lg-3 my_bg text-muted">
            <img src="img/foodstore/foodstore_icon2.png" alt="">
            商家通告
          </p>
          <div class="bg-white ml-md-0 ml-lg-3">
            <div class="text-muted text_small pt-lg-3 mx-4">
              <p class="mb-2">本店推出全网最低价套餐，保证比其他平台的价格要低！</p>
              <p class="mb-2">不要葱、姜、蒜等这些忌口暂时无法坐不了，敬请谅解！</p>
              <p class="mb-0 pb-2">晚上10点以后订餐需另加送餐费2元！谢谢合作！</p>
            </div>
          </div>
          <!-- 商家通告结束 -->

          <!-- 购物车 -->
          <ul class="list-group ml-md-0 ml-lg-3 mt-3">
            <li class="list-group-item d-flex my_bg py-2 px-2 justify-content-between">
              <span class="text-muted">购物车</span>
              <a href="JavaScript:;" class="text-muted">清空</a>
            </li>

            <!-- 第一个商品 -->
            <li class="list-group-item d-flex justify-content-around text_small text-muted bg_white p-2 py-0 border-top align-items-center">
              <span class="text-truncate d-block w-25">戴尔DELL灵越燃7000 R1725G 14.0英寸轻薄窄边框笔记本电脑</span>
              <button class="my_btn1">-</button>
              <input type="text" value="1" class="my_input">
              <button class="my_btn1">+</button>
              <p class="text_small text-muted my-0">￥:6599.00</p>
            </li>
            <!-- 第一个商品结束 -->

            <!-- 多加价格商品 -->
            <li class="list-group-item d-flex justify-content-around text_small text-muted bg_white p-2 py-0 border-top align-items-center">
              <span class="text-truncate d-block w-25">Apple MacBook Air 13.3英寸笔记本 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)</span>
              <button class="my_btn1">-</button>
              <input type="text" value="1" class="my_input">
              <button class="my_btn1">+</button>
              <p class="text_small text-muted my-0">￥:8268.00</p>
            </li>
            <li class="list-group-item d-flex justify-content-around text_small text-muted bg_white p-2 py-0 border-top align-items-center">
              <span class="text-truncate d-block w-25">神舟(HASEE)战神Z6-KP7GT 15.6英寸游戏本笔记本电脑(i7-7700HQ 8G 1T+128G SSD</span>
              <button class="my_btn1">-</button>
              <input type="text" value="1" class="my_input">
              <button class="my_btn1">+</button>
              <p class="text_small text-muted my-0">￥:5699.00</p>
            </li>
            <li class="list-group-item d-flex justify-content-around text_small text-muted bg_white p-2 py-0 border-top align-items-center">
              <span class="text-truncate d-block w-25">联想(ThinkPad)轻薄系列E480c(20H3A00GCD)14英寸笔记本(i3-6006U 4G 500G 2G独显 Win10)黑色</span>
              <button class="my_btn1">-</button>
              <input type="text" value="1" class="my_input">
              <button class="my_btn1">+</button>
              <p class="text_small text-muted my-0">￥:3499.00</p>
            </li>
            <!-- 多加几个商品结束 -->

            <!-- 结算 -->
            <li class="list-group-item d-flex justify-content-between p-2 bg-dark align-items-center border-top">
              <div>
                <img class="my_img4" src="img/foodstore/foodstore_car_2.png" alt="">
              </div>
              <span class="text-white font-weight-bold">￥:24056.00</span>
              <button class="btn btn-primary h-100">去结算</button>
            </li>
            <!-- 结算结束 -->
          </ul>
          <!-- 购物车结束 -->
        </div>
        <!-- 右边结束 -->

      </div>
      <!-- 内容部分结束 -->
    </div>
    <!-- 主体部分结束 -->
</template>

<script>
// 引入全局组件对象
export default {
  //接住搜索框传递过来的值
  props:["kw"],
  data(){
    return {
      pno:0,  // axios请求回来的页码数
      products:[], //axios请求回来的商品
      pcount:0  // 记入当前商品用多少页
    }
  },
  methods:{
    //封装axios函数 参数是当前页码
    load(pno=0){
      //发送axios请求
      this.axios.get("/products",{params:{kw:this.kw,pno}}).then(result=>{
        console.log(result.data)
        //将返回到的内容存储到变量中
        this.pno = result.data.pno;
        this.products = result.data.data;
        this.pcount = result.data.pageCount
      })
    },
    //当点击页码时,发送请求,跳转值当前页码
    changepage(i){
      this.load(i)
    },
    //点击上 下 页时
    change(n,e){
      //只有在当前元素上有disabled属性是否为-1时
      if(e.target.className.indexOf("disabled")==-1){
        //才能调用函数,发送请求,响应默认pno页面 + 上一页(-1)或下一页(+1)
        this.changepage(parseInt(this.pno)+parseInt(n));
      }
    }
  },
  //data对象创建后
  created(){
    this.load()
  },
  //监控
  watch:{
    //如果kw变量发生变化了,就发送axios请求
    kw(){
      this.load()
    }
  }
}

</script>

<style scoped>
  /* 内容标题的背景 */
  .my_bg{
      background: linear-gradient(to top, #f0f0f0 0%, #e0e0e0 100%);;
  }
  /* 每个商品中的+ - 按钮 */
  .my_btn{
      width: 1.5rem;height: 1.5rem;
      border: 0;outline: 0;
      color: #fff;
      font-weight: bolder;
      text-align: center;
      border-radius: 0.15rem;
  }
  /* 购物车中的商品 + - 按钮 */
  .my_btn1{
      width: 1.2rem;height: 1.2rem;
      border: 0;outline: 0;
      color: #fff;
      font-size: 12px;
      text-align: center;
      border-radius: 0.15rem;
  }
  /* 每个商品input的宽度 */
  .w-15{
      width: 15%;
  }
  /* 每个商品的input */
  .my_input{
      width: 10%;
      border: 0;outline: 0;
      font-size: 0.8rem;
      text-align: center;
  }

  .border-top{
      border-top:1px dashed #666 !important;
  }
  input:focus,input:hover{
      box-shadow: 0;
      outline: 0;
  }
  .my_btn:focus,.my_btn:hover{
      box-shadow: 0;
      outline: 0;
  }
  .imgs{
      transition: all 1s;
  }
  .imgs:hover{
      transform: scale(1.05);
  }
  .box-s:hover{
      box-shadow: 2px 2px 5px 2px #e8e8e8;
  }
  .page-link{
      background-color: transparent;
      border-color: #ddd;
  }
  .page-link:hover{
      border-color: #0aa1ed;
  }
  .my_img4{
      vertical-align: bottom;
      padding-left: 10px;
  }
</style>