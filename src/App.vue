<template>
  <div id="app">
    <img src="./assets/logo.png">
    <tabs></tabs>
    <div class="content">
      <!-- 用router-view渲染视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Tabs from './components/tabs.vue'
import './assets/less/site.less'
export default {
  components: {Tabs}
}
</script>
