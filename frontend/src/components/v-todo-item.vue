<template>
    <div class="v-todo-item"
         @mouseover="isDeleteActivated = true"
         @mouseleave="isDeleteActivated = false"
    >
        <div class="v-todo-item_body">
            <p :style="[props.todo.status === 'finished' ? 'text-decoration: line-through;': 'text-decoration: none;']"
                @click="onClick"
                v-if="!isTodoEditorOpen"
            >
                {{ props.todo.text }}
            </p>

            <input type="text"
                   v-model="newTodoText"
                   @keyup.enter="editTodo"
                   v-else
            >
        </div>

        <input type="checkbox"
               v-if="props.todo.status === 'finished'"
               v-model="isTodoDone"
               @change="changeTodoStatus('new')"
        >
        <button class="v-todo-item_delete-button"
                v-if="isDeleteActivated"
                @click="deleteTodo"
        >
            <img src="../assets/icons8-trash-18.png" alt="add-todo-icon">
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {useStore} from "vuex"

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    todo: {
        type: Object,
        default() {
            return {}
        }
    }
})
// eslint-disable-next-line no-undef,no-unused-vars
const emit = defineEmits(['deleteTodo'])

const store = useStore()

let isDeleteActivated = ref(false)
let isTodoDone = ref(true)
let isTodoEditorOpen = ref(false)

let newTodoText = ref(props.todo.text)



let counter = ref(0)
let timer = ref(null)

const changeTodoStatus = status => {
    store.dispatch('changeTodoStatus', { id: props.todo._id, status })
    isTodoDone.value = true
}

const deleteTodo = () => {
    emit('deleteTodo', props.todo._id)
}

const editTodo = () => {
    store.dispatch('changeTodoText', { id: props.todo._id, text: newTodoText.value })
    isTodoEditorOpen.value = false
}

const onClick = () => {
    counter.value++

    if(counter.value === 1) {
        timer.value = setTimeout(() => {
            counter.value = 0
            changeTodoStatus('finished')
        }, 300)
    } else {
        clearTimeout(timer.value)
        counter.value = 0
        isTodoEditorOpen.value = true
    }

}


</script>

<style lang="scss" scoped>

</style>

<style lang="scss" scoped>
.v-todo-item {
    margin: .8rem 0 0 0;
    background: #e8e8e8;
    border-radius: 5px;
    position: relative;
    &_body {
        margin: 0;
        max-width: 12rem;
        display: inline-block;
        padding: .5rem;
        p {
            margin: 0;
            padding: 0;
            overflow-wrap: break-word;

        }
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
    &_delete-button {
        position: absolute;
        right: 0;
        height: 100%;
        background: rgb(225, 15, 46);
        border: none;
        border-radius: 0 5px 5px 0;
        padding: .5rem;

        &:hover {
            background: rgba(225, 15, 46, .8);
        }
    }
}
</style>