
<template>
  <!-- 這是list.vue -->
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo" :index="index"
      :updateTodoIsCompleted="updateTodoIsCompleted" :updateTodoTitle="updateTodoTitle" />


  </ul>
</template>
  
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
//引入直接的子級組件
import Item from './Item.vue'

export default defineComponent({
  name: 'List',
  //註冊組件
  components: {
    Item
  },
  props: ['todos', 'deleteTodo', 'updateTodoIsCompleted', 'updateTodoTitle'],
  setup() {

    return {}
  }
})
</script>
  
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
  