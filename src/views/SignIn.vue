<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="circle">
                <ion-grid class="py-48 ion-justify-content-center">
                    <ion-row>
                        <ion-col>
                            <div class="flex justify-center text-white text-2xl mb-4">
                                <p>Авторизация</p>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <input type="text" v-model="form.email" placeholder="Почта">
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <input type="password" v-model="form.password" placeholder="Пароль">
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__submit">
                                <button @click="signIn">
                                    Вход
                                </button>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-footer>
                    <ion-row>
                        <ion-col>
                            <div class="flex flex-col items-center m-2 text-ksaa">
                                <h5 class="m-0 text-xl">Приемная кампания</h5>
                                <h6 class="m-0 text-lg">Костромской ГСХА</h6>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-footer>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonGrid, IonContent, IonRow, IonCol, IonFooter} from '@ionic/vue';
    import {} from 'ionicons/icons';

    export default {
        name: "SignIn",
        components: {IonFooter, IonPage, IonGrid, IonContent, IonRow, IonCol},
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            async signIn() {
                this.axios.post('user/auth/token/login', this.form).then(response => {
                    this.$store.commit('setStations', response.data)
                    this.axios.defaults.headers.common['Authorization'] = 'Token ' + response.data.auth_token
                    this.$router.push('/home')
                }).catch(error => {
                    console.log(error.response)
                })
            }
        }
    }
</script>
<style scoped>
    ion-grid::before {
        content: '';
        position: absolute;
        top: -200px;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#5375C5, #20b2aa);
        clip-path: circle(60% at right 50%);
        @apply animate-bounce;
    }

    .circle::before {
        content: '';
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#5375C5, #20b2aa);
        clip-path: circle(37% at left 50%);
        @apply animate-bounce-before;
    }

</style>