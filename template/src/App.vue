<template>
    <div id="app" v-loading.fullscreen.lock="$store.getters.getLoding"></div>
    <!-- ID: app id  -->
    <x-tree :tabList="tabList" v-on:handerTab="handerTab" :index="index" :id="<%_ options.AppID _%>"></x-tree>
    <!--ID: app id -->
    <router-view class="flex-right" :title="title" @popup="popup" />
    <div class="mark" v-show="markStatus"></div>
    </div>
</template>
<script>
import { getLanguage, getSideModules } from "@/api/module/common"
export default {
    data() {
        return {
            tabList: [],
            title: "",
            index: 0,
            markStatus: false,
        };
    },
    methods: {
        handerTab({ index, item }) {
            this.title = item.name;
            this.index = index;
            sessionStorage.setItem("index", index);
            this.$router.push(item.path);
        },
        popup(e) {
            this.markStatus = e;
        },
        async loadingLang() { // app Language
            await getLanguage(<%_ options.AppID _%>).then(res => {
                const global = { global: JSON.parse(localStorage.getItem("lang")) }; // 获取系统global语言
                this.$store.commit("setLang", Object.assign(res.data.data.lng, global));
            })
        },
        loadingMenu() { // app sidebar
            getSideModules(<%_ options.AppID _%>).then(res => {
                this.index = sessionStorage.getItem("index") || this.index;
                this.tabList = res.data.data;
                this.$router.push(this.tabList[this.index].path);
                this.title = res.data.data[this.index].name;
            })
        },
    },
    async mounted() {
        await this.loadingLang();
        this.loadingMenu();
    },
};
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    display: flex;

    .flex-right {
        flex: 1;
        display: flex;
        padding-left: 24px;
        margin-top: 48px;
        flex-direction: column;
        overflow: hidden;
    }

    .mark {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        z-index: 99;
    }
}
</style>
