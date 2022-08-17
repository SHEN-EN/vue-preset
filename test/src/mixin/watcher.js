import { mapMutations } from "vuex";
export const watcher = {
  data() {
    return {
      watcherChange: false, // 是否更改
      isRecursion: false,
    };
  },
  watch: {
    "$store.getters.GET_WATCHER": {
      handler(newVal) {
        this.watchObject(newVal, this.$store.getters.GET_OLDE);
      },
      deep: true,
    },
  },
  methods: {
    ...mapMutations(["setWatcher", "setOldobject"]),
    watcher(obj) {
      this.setWatcher(obj);
      this.setOldobject(obj);
    },
    watchArray(newArray, oldArray) {
      // 监听数组变化 return true | false
      if (newArray.length !== oldArray.length) {
        this.watcherChange = true;
        return true;
      }
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] != oldArray[i]) {
          this.watcherChange = true;
          return true;
        }
      }
      return false;
    },
    watchObject(newData, oldData) {
      //监听对象的变化且对比 新数据 旧数据
      for (const key in newData) {
        if (newData[key] instanceof Array) {
          // 如果key是数组
          if (!this.watchArray(newData[key], oldData[key])) {
            continue;
          }
          break;
        }
        if (newData[key] instanceof Object) {
          // 如果是深层嵌套对象
          this.isRecursion = true;
          this.watchObject(newData[key], oldData[key]); // 递归处理
          if (!this.isRecursion) break;
          continue;
        }
        if (newData[key] != oldData[key]) {
          this.watcherChange = true;
          this.isRecursion = false;
          break;
        } else {
          this.watcherChange = false;
        }
      }
    },
  },
};
