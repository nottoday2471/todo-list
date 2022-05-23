<template>
    <div class="v-filter-todos">
        <button @click="getAllTodo">All</button>
        <button @click="getNewTodo">New</button>
        <button @click="getFinishedTodo">Finished</button>
    </div>
</template>

<script setup>
import { useStore } from "vuex"

const store = useStore()

const getAllTodo = () => {
    store.dispatch('getTodo')
}

const getNewTodo = () => {
    store.dispatch('getNewTodo')
}

const getFinishedTodo = () => {
    store.dispatch('getFinishedTodo')
}

</script>

<style lang="scss" scoped>
.v-filter-todos {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0 0;
    button {
        background: rgb(204, 15, 225);
        border: none;
        border-radius: 5px;
        padding: .5rem;
        width: 70px;
        height: 35px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: rgb(255, 255, 255);
        &:hover {
            background: rgba(204, 15, 225, .8);
        }
    }
}
</style>