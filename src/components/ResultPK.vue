<template>
    <div>
        <div v-for="(i,ind) in info" :key="ind" class="grid grid-cols-1 flex">
            <p style="color: #9CA3AF; font-size: 14px;">{{i.title}}</p>
            <p style="color: #9CA3AF; font-size: 14px;">{{i.number}} {{i.register_date}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResultPK",
        props: {
            info: {type: Array, require: true, default: () => []}
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }
</style>