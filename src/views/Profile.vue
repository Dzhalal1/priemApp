<template>
    <ion-page>
        <ion-content>
            <ion-grid class="m-4">
                <div class="bcdrp-bg shadow-2xl rounded-3xl">
                    <ion-row>
                        <ion-col>
                            <div class="flex justify-end m-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none"
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
                                <p>Name</p>
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
                                <input type="text" placeholder="Фамилия"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="text" placeholder="Имя"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="text" placeholder="Отчество"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="email" placeholder="Почта"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="number" placeholder="Снилс"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="number" placeholder="Телефон"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__input">
                                <input type="password" placeholder="Пароль"/>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class="sign__submit">
                                <button>Сохранить</button>
                            </div>
                        </ion-col>
                    </ion-row>
                </div>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonGrid, IonContent, IonRow, IonCol, IonFooter} from '@ionic/vue';
    import {} from 'ionicons/icons';

    export default {
        name: "Profile",
        components: {IonPage, IonGrid, IonContent, IonCol, IonRow},
        setup() {
            return {}
        }
    }
</script>

<style scoped>
    ion-grid::before {
        content: '';
        position: absolute;
        top: -400px;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#5375C5, #20b2aa);
    }

    .bcdrp-bg {
        backdrop-filter: blur(5px);
        background: rgba(255,255,255,0.15);
        border: 2px solid rgba(255,255,255,0.3);
    }


</style>