<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
            <!-- side bar  -->
        <div class="sidebar-wrapper">
            <sidebar class="sidebar-container"></sidebar>
        </div>
        <div class="main-container">
            <!--nav bar  -->
            <navbar></navbar>
            <!--app min  -->
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain } from '@/views/layout';

    export default {
      name: 'layout',
      components: {
        Navbar,
        Sidebar,
        AppMain
      },
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.hideSidebar {
            .sidebar-wrapper {
                transform: translate(-140px, 0);
                .sidebar-container {
                    transform: translate(132px, 0);
                }
                &:hover {
                    transform: translate(0, 0);
                    .sidebar-container {
                        transform: translate(0, 0);
                    }
                }
            }
            .main-container {
                margin-left: 40px;
            }
        }
        // .sidebar-wrapper {
        //     width: 180px;
        //     position: fixed;
        //     left: 0;
        //     // right: 0;
        //     top: 0;
        //     bottom: 0;
        //     z-index: 1001;
        //     overflow: hidden;
        //     transition: all .28s ease-out;
        // }
        .sidebar-wrapper {
            width: 100%;
            height: 60px;
            position: fixed;
            left: 0;
            right: 0;
            // top: 0;
            bottom: 0;
            z-index: 1001;
            overflow: hidden;
            transition: all .28s ease-out;
        }
        .sidebar-container {
            transition: all .28s ease-out;
            position: absolute;
            left: 0;
            // right:0;
            top: 0;
            bottom: 0;
            right: -17px;
            overflow-y: scroll;
        }
        .main-container {
            min-height: 100%;
            transition: all .28s ease-out;
            // margin-left: 180px;
        }
    }
</style>
