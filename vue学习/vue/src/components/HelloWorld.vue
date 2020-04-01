<template>
  <div class="hello">
   
      <router-link to="/aaa">aa</router-link>
      <router-link to="/bbb">bb</router-link>
      <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
