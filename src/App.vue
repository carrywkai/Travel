<template>
  <div id="app">
    <!-- 利用keep-alive来优化浏览器性能，通过缓存来减少ajax请求 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
