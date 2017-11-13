<template>
    <div id="dashWrap">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-md-offset-1 col-sm-5">
                    <sidebar></sidebar>
                </div>
                <div class="col-md-8 col-sm-8 mainView">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Sidebar from '@/components/dash/Sidebar.vue'
    export default {
        name: 'dashboard',
        components: {
            sidebar: Sidebar
        }
    }
</script>
<style scoped>
    #dashWrap {
        min-height: 100%;
        padding-top: 50px;
        background: #4227a;
    }
    .mainView {
        background: #fff;
        border-radius: 6px;
        padding: 20px;
    }
</style>