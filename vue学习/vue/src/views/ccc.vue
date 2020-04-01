<template>
  <div>
      <div class='container'>
          我是路由c
      <div>
        <router-link :to="`/bbb/ccc/eee/`+mas">eee</router-link>
        <router-link :to="'/bbb/ccc/fff/123'">fff</router-link>
      </div>
      <div>
        <router-view :msg='mas'></router-view>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"ccc",
  components: {},
  props: {},
  data() {
    return {
      mas:'hhh'
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
