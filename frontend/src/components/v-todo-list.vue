<template>
    <div class="v-todo-list">
        <div class="v-todo-list_item">
            <v-todo-item
                v-for="todo in todos"
                :key="todo._id"
                :todo="todo"
                @deleteTodo="deleteTodo"
            />
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import VTodoItem from "@/components/v-todo-item"

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    todos: {
        type: Array,
        default() {
            return []
        }
    }
})

const store = useStore()

const deleteTodo = id => {
    store.dispatch('deleteTodo', id)
}


</script>

<style lang="scss" scoped>
.v-todo-list {
    max-height: 40rem;
    overflow: auto;
}
</style>


