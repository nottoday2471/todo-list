export default {
    ADD_TODO(state, newTodo) {
        state.todos.push(newTodo)
    },

    SET_TODOS_TO_STATE(state, todos) {
      state.todos = todos
    },

    DELETE_TODO(state, id) {
        state.todos.splice(state.todos.findIndex(todo => todo._id === id), 1)
    },

    CHANGE_TODO_STATUS(state, { id, status }) {
        state.todos.forEach(todo => {
            if(todo._id === id) {
                todo.status = status
            }
        })
    },

    DELETE_ALL_TODOS(state) {
        state.todos.length = 0
    },

    CHANGE_TODO_TEXT(state, { id, text }) {
        state.todos.forEach(todo => {
            if(todo._id === id) {
                todo.text = text
            }
        })
    }
}