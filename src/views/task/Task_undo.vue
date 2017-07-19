<template>
  <div class="app-container">
                task undo
  </div>
</template>



<script>
  import { taskList } from '@/api/task';

  export default {
    data() {
      return {
        listLoading: true
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        // this.listLoading = true;
        console.log('selected: ' + this.$route.query.selected);
      }
    }
  };
</script>
