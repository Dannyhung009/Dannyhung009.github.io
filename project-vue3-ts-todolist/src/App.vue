<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <!-- <List :todos="state.todos" /> -->
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodoIsCompleted="updateTodoIsCompleted"
        :updateTodoTitle="updateTodoTitle" />
      <Footer :todos="todos" :checkAll="checkAll" :clearAllCompletedTodos="clearAllCompletedTodos" />


    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
//引入直接的子級組件
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
//引入接口
import { Todo } from './types/todo'
import { saveTodos, readTodos } from './utils/localStroageUtils'
//引入axios
import axios from 'axios';


export default defineComponent({
  name: 'App',
  //註冊組件
  components: {
    Header,
    List,
    Footer
  },

  //數據應該使用數組做儲存，數組中每一個數據都是對象，對象中應該有3個屬性(id,title,isCompleted)
  //把數組暫時放在App.vue父級組件
  setup() {
    //定義一個數組數據
    // const state = reactive<{ todos: Todo[] }>({
    //   todos: [
    //     { id: 1, title: '買菜', isCompleted: false },
    //     { id: 2, title: '買書', isCompleted: true },
    //     { id: 3, title: '買電腦', isCompleted: false },


    //   ]
    // })
    //定義一個數組數據
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    })
    //介面加載完畢後過了一會兒再讀取數據
    onMounted(() => {
      //從localhost瀏覽器緩存中讀取數據
      // setTimeout(() => {
      //   state.todos = readTodos()
      // }, 1000)

      getTodosApi
        .then(function (response) {
          // handle success
          console.log(response);
          state.todos = response.data
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    })

    //添加數據方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }

    //刪除數據方法
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }
    //更新數據方法
    const updateTodoTitle = (todo: Todo, newTitle: string) => {
      todo.title = newTitle
      console.log(`todo`, todo);
    }
    //修改todo的isCompleted屬性的狀態方法
    const updateTodoIsCompleted = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted
      console.log(`todo`, todo);

    }
    //全部選擇或全不選的方法
    const checkAll = (isCompleted: boolean) => {
      //遍歷數組
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted
      })
    }
    //清理所有選中數據的方法
    function clearAllCompletedTodos() {
      state.todos = state.todos.filter((todo) => {
        return !todo.isCompleted
      })
    }

    //監視操作：如果todos數據變化了，直接儲存到瀏覽器緩存中
    // watch(() =>
    //   state.todos,
    //   (value) => {
    //     //保存到瀏覽器緩存
    //     localStorage.setItem('todos_key', JSON.stringify(value))
    //   },
    //   { deep: true }
    // )

    //監視操作：如果todos數據變化了，直接儲存到瀏覽器緩存中
    // watch(() =>
    //   state.todos,
    //   (value) => {
    //     //保存到瀏覽器緩存
    //     saveTodos(value)
    //   },
    //   { deep: true }
    // )

    //監視操作：如果todos數據變化了，直接儲存到瀏覽器緩存中
    watch(() =>
      state.todos,
      saveTodos,
      { deep: true }
    )

    //api
    const getTodosApi = axios.get('https://jsonplaceholder.typicode.com/todos')
    //axios
    // import axios from 'axios';
    //const axios = require('axios'); // legacy way

    // // Make a request for a user with a given ID
    // const getTodos = axios.get('https://jsonplaceholder.typicode.com/todos')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });

    // Make a request for a user with a given ID
    // const getTodosApi = axios.get('https://jsonplaceholder.typicode.com/todos')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
    // Make a request for a user with a given ID
    // const getTodosApi = axios.get('https://jsonplaceholder.typicode.com/todos')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
    // 向给定ID的用户发起请求
    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     // 处理成功情况
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // 处理错误情况
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // 总是会执行
    //   });

    // // Optionally the request above could also be done as
    // axios.get('/user', {
    //   params: {
    //     ID: 12345
    //   }
    // })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });

    // // Want to use async/await? Add the `async` keyword to your outer function/method.
    // async function getUser() {
    //   try {
    //     const response = await axios.get('/user?ID=12345');
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }



    //暴露setup方法中屬性
    return {
      // state,
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodoIsCompleted,
      updateTodoTitle,
      checkAll,
      clearAllCompletedTodos,
      getTodosApi,
    }
  }
})



</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>