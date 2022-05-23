import axios from 'axios'

export default {
    async addTodo({ commit }, newTodo) {
        try {
            const res = await axios.post('http://localhost:5000/todos', newTodo)
            commit('ADD_TODO', res.data)
        } catch(err) {
            console.log(err)
        }
    },

    async getTodo({ commit }) {
        try {
            const res = await axios.get('http://localhost:5000/todos/all')
            commit('SET_TODOS_TO_STATE', res.data)
        } catch(err) {
            console.log(err)
        }
    },

    async getNewTodo({ commit }) {
        try {
            const res = await axios.get('http://localhost:5000/todos/new')
            commit('SET_TODOS_TO_STATE', res.data)
        } catch(err) {
            console.log(err)
        }
    },

    async getFinishedTodo({ commit }) {
        try {
            const res = await axios.get('http://localhost:5000/todos/finished')
            commit('SET_TODOS_TO_STATE', res.data)
        } catch(err) {
            console.log(err)
        }
    },

    async deleteTodo({ commit }, id) {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`)
            commit('DELETE_TODO', id)
        } catch(err) {
            console.log(err)
        }
    },

    async deleteAllTodos({ commit }) {
        try {
            await axios.delete('http://localhost:5000/todos')
            commit('DELETE_ALL_TODOS')
        } catch(err) {
            console.log(err)
        }
    },

    async changeTodoStatus({ commit }, changedTodo) {
        try {
            const res = await axios.patch('http://localhost:5000/todos', changedTodo)
            commit('CHANGE_TODO_STATUS', res.data)
        } catch(err) {
            console.log(err)
        }
    },

    async changeTodoText({ commit }, changedTodo) {
        try {
            const res = await axios.patch('http://localhost:5000/todos', changedTodo)
            commit('CHANGE_TODO_TEXT', res.data)
        } catch(err) {
            console.log(err)
        }
    }
}