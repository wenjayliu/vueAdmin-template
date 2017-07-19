
<template>
  <div class="dashboard-container">
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                待启动的任务
                <el-badge :value="20" :max="99" class="item">
                    <el-span size="small"></el-span>
                </el-badge>
                </template>
                <div v-for="(tkey, tval) in task.start" class="infobtn_div" @click="toNext(tkey.id)">
                    <el-button type="info" class="infobtn">{{tkey.taskname}}</el-button>

                </div>

            </el-collapse-item>

            <el-collapse-item >
                <template slot="title">
                进行中的任务<i class="header-icon el-icon-information"></i>
                </template>

                <el-button v-for="(tkey, tval) in task.run" type="info" class="infobtn">{{tkey.taskname}}</el-button>
            </el-collapse-item>

            <el-collapse-item >
                <template slot="title">
                暂停中的任务<i class="header-icon el-icon-information"></i>
                </template>
                <el-button v-for="(tkey, tval) in task.stop" type="info" class="infobtn">{{tkey.taskname}}</el-button>
            </el-collapse-item>

            <el-collapse-item >
                <template slot="title">
                已完成的任务<i class="header-icon el-icon-information"></i>
                </template>
                <el-button v-for="(tkey, tval) in task.finish" type="info" class="infobtn">{{tkey.taskname}}</el-button>
            </el-collapse-item>
        </el-collapse>
        <!--  -->

  </div>
</template>
<script>
  import { taskList } from '@/api/task';

  export default {
     props: ['message'],
    data() {
      return {
        task: {
            start:null,
            run:null,
            stop: null,
            finish:null,
        },
        listLoading: true
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        // this.listLoading = true;
        taskList().then(response => {
          console.log(response)
          this.task = response.data;
          console.log("task",this.task)
          this.listLoading = false;
        })
      },
      toNext(index) {
          console.log("toNext",index);
                      sessionStorage.ticketName =index;
                      this.$router.push({path: '/task/task_undo', query: {selected: index}});
            // this.$router.push('/task/task_undo');  $route.params
      }

    }
  };
</script>


<style rel="stylesheet/scss" lang="scss" scoped>

    .infobtn_div {
        margin:0 10px;

        .infobtn {
            width:100%;
            margin:10px 0px;
        }

    }

    // item
    .item{
        // float:right;
        margin-left:20px;
    }

</style>
