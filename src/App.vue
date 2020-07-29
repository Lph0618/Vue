<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
  // 在script中引入css初始化的内容
  import "./assets/css/base.css"

  export default {
    
  }
</script>

<style>
/* 设置标签中带有v-cloak的属性,先隐藏  目的:防止用户短暂看到{{}} */
[v-cloak]{display: none;}
</style>
