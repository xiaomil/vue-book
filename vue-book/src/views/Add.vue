<template>
  <div id="app">
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from '../components/Tab.vue'
export default {
  name: 'Add',
  components: {
    Tab
  }
}
</script>

<style lang="">

</style>
