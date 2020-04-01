<template>
  <div>

      <div class='container'>
          <p>我是路由b</p> 
        <router-link to="/bbb/ccc">cc</router-link>
        <router-link to="/bbb/ddc">dd</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
         
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {

    };
  },
  methods: {

  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style>

</style>
