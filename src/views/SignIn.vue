<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="circle_two">
            </div>
            <div class="circle_three">
                <img :src="require('./../assets/img/Wawestwo.svg')" alt="">
            </div>
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
                                <input :type="!showHidePassword? 'password': 'text'" v-model="form.password" placeholder="Пароль">
                               <span @click="showHidePassword = !showHidePassword">
                                    <svg v-if="showHidePassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                </svg>
                               </span>
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
                                <h5 class="m-0 text-lg">Приемная кампания</h5>
                                <h6 class="m-0 text-md">Костромской ГСХА</h6>
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
                },
                showHidePassword: false
            }

        },
        methods: {
            signIn() {
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
    /*ion-grid::before {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    top: -200px;*/
    /*    left: 0;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    background: linear-gradient(#5375C5, #20b2aa);*/
    /*    clip-path: circle(60% at right 50%);*/
    /*    @apply animate-bounce;*/
    /*}*/

    /*.circle::before {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    top: 50px;*/
    /*    left: 0;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    background: linear-gradient(#5375C5, #20b2aa);*/
    /*    clip-path: circle(37% at left 50%);*/
    /*    @apply animate-bounce-before;*/
    /*}*/
    /*.circle_two {*/
    /*    @apply absolute top-44 rounded-full -left-2 w-96 h-96 filter blur-2xl animate-bounce;*/
    /*    background: linear-gradient(#C1FCF6, rgba(32, 178, 170, 0.5));*/
    /*}*/
    .circle_three {
        @apply absolute top-0 w-full;
        /*rounded-full -right-2 w-96 h-96 filter blur-2xl animate-bounceBefore*/
        /*background: linear-gradient(#C1FCF6, rgba(32, 178, 170, 0.5));*/
    }

</style>