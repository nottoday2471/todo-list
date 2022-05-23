<template>
    <div class="v-add-todo">
        <div class="v-add-todo_todo-input">
            <input type="text" placeholder="Add your new todo" maxlength="255" v-model="todoText">
        </div>
        <div class="v-add-todo_add-button">
            <button @click="addTodo">
                <img src="../assets/icons8-plus-18.png" alt="add-todo-icon">
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
// eslint-disable-next-line no-undef
const emit = defineEmits(['addTodo'])

let todoText = ref('')

const addTodo = () => {
    emit('addTodo', {text: todoText.value})
    todoText.value = ''
}
</script>

<style lang="scss" scoped>
.v-add-todo {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0 0;
    &_todo-input {
        input {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 1rem;
            padding: .5rem;
            border: none;
            outline: 1px solid silver;
            border-radius: 5px;
        }
    }
    &_add-button {
        button {
            background: rgb(204, 15, 225);
            border: none;
            border-radius: 5px;
            padding: .5rem;
            width: 35px;
            height: 35px;
            &:hover {
                background: rgba(204, 15, 225, .8);
            }
        }
    }
}
</style>