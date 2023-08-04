
<template>
  <div class="todo-header">
    <!-- <input type="text" placeholder="请输入你的任务名称，按回车键确认" /> -->
    <input type="text" placeholder="請輸入todo，按下enter確認" @keyup.enter="add" v-model="title" />
    <button class="btn btn-danger" v-show="isShowAddButton" @click="add" style="margin-right: 10px;">新增</button>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'


export default defineComponent({
  name: 'Header',
  //註冊組件
  components: {

  },
  props: {
    addTodo: {
      type: Function,
      required: true    //必須
    }
  },
  setup(props) {
    //input綁定值
    const title = ref("");
    //是否顯示按鈕
    const isShowAddButton = ref(true)


    //回車的事件的回調函數,用來添加數據
    const add = () => {
      //獲取文本框中輸入的數據，判斷不為空
      const text = title.value
      if (!text.trim()) {
        return
      }
      //此時有數據，創建一個todo物件
      const todo = {
        userId: 1,
        id: Date.now(),
        title: text,
        isCompleted: false
      }
      //調用addTodo方法
      props.addTodo(todo)
      //清空文本框
      title.value = ''
    }

    return {
      add,
      title,
      isShowAddButton
    }
  }
})
</script>
  
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
  