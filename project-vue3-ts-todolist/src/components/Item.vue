
<template>
  <li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)"
    :style="{ backgroundColor: bgColor, color: myColor }">
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <!-- todo.isCompleted -->
      <span>{{ todo.title }}</span>
      <!-- <input type="text" v-model="handleNewTitle" /> -->
    </label>
    <div>
      <button class="btn btn-danger" v-show="isShow" @click="delTodo">删除</button>
      <button class="btn btn-danger" v-show="isShow" @click="updateTodo" style="margin-right: 10px;">編輯</button>
    </div>

    <!-- style="display:none" -->
  </li>
</template>
  
<script lang="ts">
import { defineComponent, reactive, toRefs, ref, computed } from 'vue'
//引入接口
import { Todo } from '../types/todo'

export default defineComponent({
  name: 'Item',
  //註冊組件
  components: {
  },
  // props: {
  //   todo: Object as () => Todo,//函數返回的是Todo類型
  // },
  props: {
    todo: {
      type: Object as () => Todo,//函數返回的是Todo類型
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    updateTodoIsCompleted: {
      type: Function,
      required: true
    },
    updateTodoTitle: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    //背景色
    const bgColor = ref('white')
    //前景色
    const myColor = ref('black')
    //是否顯示按鈕
    const isShow = ref(false)




    //鼠標進入和離開的回調函數
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        //鼠標進入
        bgColor.value = 'pink'
        myColor.value = 'green'
        isShow.value = true
      } else {
        //鼠標離開
        bgColor.value = 'white'
        myColor.value = 'black'
        isShow.value = false
      }
    }

    //刪除數據的方法
    const delTodo = () => {
      //提示
      if (window.confirm('確定要刪除嗎?')) {

      }
      props.deleteTodo(props.index)
    }
    //計算屬性
    //計算屬性的方式，來決定當前是否勾選
    const isCompleted = computed({
      // getter
      get() {
        return props.todo.isCompleted
      },
      // setter
      set(val) {
        //對於對象中的isCompleted屬性進行操作
        props.updateTodoIsCompleted(props.todo, val)
      }
    })
    //計算屬性的方式，來決定當前是否勾選
    const handleNewTitle = computed({
      // getter
      get() {
        return props.todo.title
      },
      // setter
      set(val) {
        //對於對象中的title屬性進行操作
        props.updateTodoTitle(props.todo, val)
      }
    })
    //計算屬性 end

    const updateTodo = function () {
      var x;
      var value = prompt("请输入新的名字", "新標題");
      if (value != null && value != "") {
        // x = "你好 " + person + "! 今天感觉如何?";
        // document.getElementById("demo").innerHTML = x;
        //對於對象中的title屬性進行操作
        props.updateTodoTitle(props.todo, value)
      }
    }


    return {
      mouseHandler,
      bgColor,
      myColor,
      isShow,
      delTodo,
      isCompleted,
      handleNewTitle,
      updateTodo
    }
  }
})
</script>
  
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;

  margin-top: 3px;
}

/* display: none; */

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
  