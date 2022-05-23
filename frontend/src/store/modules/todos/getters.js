export default {
    getTodos(state) {
        return state.todos
    },

    getNumberOfPendingTodos(state) {
        return state.todos.filter(todo => todo.status === 'new').length
    }
}