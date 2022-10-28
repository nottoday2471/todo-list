<template>
    <div class="v-main-wrapper">
        <div class="v-main-wrapper_container">
            <div class="v-main-wrapper_container_content">
                <div class="v-main-wrapper_container_content_title">
                    <p>Todo App</p>
                </div>

                <v-add-todo
                    @addTodo="addTodo"
                />

                <v-filter-todos />

                <v-alert-for-empty-todo
                    v-if="isTodoEmpty"
                />

                <v-todo-list
                    :todos="todos"
                />

                <v-todo-statistics />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { onMounted, computed, ref } from "vue"
import VAddTodo from "@/components/v-add-todo"
import VTodoList from "@/components/v-todo-list"
import VTodoStatistics from "@/components/v-todo-statistics"
import VAlertForEmptyTodo from "@/components/v-alert-for-empty-todo"
import VFilterTodos from "@/components/v-filter-todos"

const store = useStore()

const todos = computed(() => store.getters.getTodos)

let isTodoEmpty = ref(false)

const addTodo = newTodo => {
    if(newTodo.text) {
        store.dispatch('addTodo', newTodo)
    } else{
        isTodoEmpty.value = true
    }
}

onMounted(() => {
    store.dispatch('getTodo')
})
</script>

<style lang="scss" scoped>
.v-main-wrapper {
    display: flex;
    justify-content: center;
    &_container {
        min-height: 20rem;
        width: 20rem;
        background: rgba(245, 245, 245, 1);
        border-radius: .25rem;
        padding: 1rem;
        display: flex;
        justify-content: center;
        &_content {
            width: 16rem;
            &_title {
                p {
                    margin: 0;
                    padding: 0;
                    font-size: 2rem;
                    font-weight: 600;
                }
            }
        }
    }
}

</style>


