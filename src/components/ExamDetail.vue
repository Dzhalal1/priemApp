<template>
    <div>
<!--        <p v-if="info.length===0">Нет вступительных испытаний</p>-->
        <div v-for="(i,ind) in info" :key="ind">
            <p style="color: #9CA3AF; font-size: 14px;">{{i.title}} <span v-if="i.scores!==0">({{i.scores}})</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExamDetail",
        props: {
            info: {type: Array, require: true}
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