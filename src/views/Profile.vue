<template>
    <ion-page>
        <ion-content>
            <ion-grid class="m-4">
                <div class="bcdrp-bg shadow-xl rounded-3xl">
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
                                <p>Имя</p>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="flex justify-center text-xl text-white">
                                <p>№ 1101</p>
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
                                <input type="number" v-model="user.phone_number" disabled placeholder="Телефон"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="number" v-model="user.snils" placeholder="Снилс"/>
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
    import {IonPage, IonGrid, IonContent, IonRow, IonCol,} from '@ionic/vue';
    import {} from 'ionicons/icons';

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
                this.$store.commit('setStation', {
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
                this.axios.patch('user/me/', this.user).then(response => {
                    this.user = response.data
                })
            }
        },
        created() {
            this.getUserInfo()
        }
    }
</script>

<style scoped>
    ion-grid::before {
        content: '';
        position: absolute;
        top: -330px;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;
        background: linear-gradient(#5375C5, #20b2aa);
    }

    .bcdrp-bg {
        backdrop-filter: blur(5px);
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.3);
    }

</style>