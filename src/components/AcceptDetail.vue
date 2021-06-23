<template>
    <div>
        <div v-for="(i,ind) in info" :key="ind">
            <transition name="fade">
                <p v-if="hide" class="transform transition-x-1 " style="color: #9CA3AF; font-size: 14px;">{{i.full_name}}
                    {{i.level_learn}} {{i.budget_type}}</p>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AcceptDetail",
        props: {
            info: {type: Array, require: true},
            hide: {type: Boolean, default: () => false}
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