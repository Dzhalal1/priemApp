<template>
    <ion-page>
        <ion-content>
            <ion-grid class="m-4">
                <div class="bcdrp-bg shadow-md rounded-xl">
                    <ion-row>
                        <ion-col>
                            <div class="flex justify-end m-2 text-white" @click="signOut">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                                </svg>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="flex justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="flex justify-center text-xl text-white">
                                <p>{{user.first_name}}</p>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="flex justify-center text-xl text-white">
                                <p>{{$store.getters.getApplicantId}}</p>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="text" v-model="user.last_name" placeholder="Фамилия"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="text" v-model="user.first_name" placeholder="Имя"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="text" v-model="user.father_name" placeholder="Отчество"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="email" v-model="user.email" disabled placeholder="Почта"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input v-model="user.phone_number" disabled placeholder="Телефон"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input v-model="user.snils" placeholder="Снилс"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="check_box">
                                <input type="checkbox" id="scales" name="scales"
                                       class="mr-2" v-model="user.has_not_snils">
                                <label for="scales">СНИЛС отсутствует</label>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col>
                            <div class="sign__submit">
                                <button @click="saveUserInfo">Сохранить</button>
                            </div>
                        </ion-col>
                    </ion-row>
                </div>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonGrid, IonContent, IonRow, IonCol, toastController,} from '@ionic/vue';
    import { mapState } from 'vuex';

    export default {
        name: "Profile",
        components: {IonPage, IonGrid, IonContent, IonCol, IonRow},
        data() {
            return {
                user: {
                    father_name: "",
                    first_name: "",
                    email: "",
                    last_name: "",
                    snils: "",
                    img: "",
                    phone_number: "",
                    has_not_snils: false
                }
            }
        },
        methods: {
            signOut() {
                this.$store.commit('setStations', {
                    applicant_id: null,
                    auth_token: null,
                    user_id: null
                })
                this.$router.push('/login')
            },
            getUserInfo() {
                this.axios.get('user/me/').then(response => {
                    this.user = response.data
                })
            },
            saveUserInfo() {
                if (typeof (this.user.img) === 'string') {
                    delete this.user.img
                }
                this.axios.patch('user/me/', this.user).then(async response => {
                    this.user = response.data
                    const toast = await toastController
                        .create({
                            message: 'Данные успешно сохраненны',
                            position: 'top',
                            translucent: true,
                            cssClass: 'success-message',
                            animated: true,
                            duration: 2000
                        })
                    return toast.present();
                })
            }
        },
        created() {
            this.getUserInfo()
        },
        computed: mapState(['applicantId']),
        watch: {
            applicantId(newValue, oldValue) {
                console.log(`Updating from ${oldValue} to ${newValue}`);

                if (newValue !== null ) {
                    this.getUserInfo()
                }
            },
        },
    }
</script>

<style scoped>
    ion-content {
        --background: linear-gradient(to bottom, #20b2aa 54%, transparent 50%);
    }

    .bcdrp-bg {
        backdrop-filter: blur(50px);
        background:  rgba(255, 255, 255, 0);
        border: 2px solid rgba(255, 255, 255, 0.3);
    }
</style>