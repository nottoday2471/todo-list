<template>
    <div class="v-todo-statistics">
        <div class="v-todo-statistics_text">
            <p>You have {{ numberOfPendingTodos }} pending tasks</p>
        </div>
        <button class="v-todo-statistics_clear-all-todos" @click="deleteAllTodos">
            Clear all
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

let numberOfPendingTodos = computed(() => store.getters.getNumberOfPendingTodos)

const deleteAllTodos = () => {
    store.dispatch('deleteAllTodos')
}

</script>

<style lang="scss" scoped>
.v-todo-statistics {
    margin: .8rem 0 0 0;
    display: flex;
    justify-content: space-between;
    &_text {
        display: flex;
        justify-content: center;
        flex-direction: column;

        p {
            margin: 0;
            padding: 0;
            display: inline-block;
        }
    }
    &_clear-all-todos {
        background: rgb(204, 15, 225);
        border: none;
        border-radius: 5px;
        padding: .5rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: rgb(255, 255, 255);

    }
}
</style>