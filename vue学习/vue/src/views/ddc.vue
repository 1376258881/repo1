<template>
  <div>

      <div class='132 '>
         <p>{{count}}</p> 
        <div @click="add(1)">点我加一</div>
        <div @click="add(-1)">点我减一</div>
          <div>{{evenorOdd}}</div>
      </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
export default {
  name:"ddc",
  components: {},
  props: {},
  data() {
    return {
    };
  },
 
  methods: { 
     ...mapActions(['add']),
  },
  filter: {},
  computed: {
   ...mapState(['count']),
   ...mapGetters(['evenorOdd'])
  
  },
  watch: {},
};
</script>

<style>

</style>
