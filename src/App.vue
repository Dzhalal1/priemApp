<template>
    <ion-app>
        <ion-router-outlet/>
    </ion-app>
</template>

<script>
    import {IonApp, IonRouterOutlet} from '@ionic/vue';
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'App',
        components: {
            IonApp,
            IonRouterOutlet
        },
        created() {
            const signIn = this.$store.getters.getToken === null
            if (signIn && this.$route.path !== '/login') {
                this.$router.push('/login')
            } else {
                if (signIn) {
                    delete this.axios.defaults.headers.common['Authorization']
                } else {
                    this.axios.defaults.headers.common['Authorization'] = 'Token ' + this.$store.getters.getToken
                }
            }
        }
    });
</script>