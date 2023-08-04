//引入接口
import { Todo } from '../types/todo'



// //保存到瀏覽器緩存
export function saveTodos(todos: Todo[]) {

  localStorage.setItem('todos_key', JSON.stringify(todos))
}
// //保存到瀏覽器緩存
// export const saveTodos = (todos: Todo[]) => {

//   localStorage.setItem('todos_key', JSON.stringify(todos))
// }
//從瀏覽器緩存中讀取數據
export function readTodos(): Todo[] {
  return JSON.parse(localStorage.getItem('todos_key') || '[]')
  // localStorage.setItem('todos_key', JSON.stringify(todos))
}




