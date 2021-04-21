<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="circle">
                <ion-grid>
                    <div class="step px-24">
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                                <p>Подача Документов</p>
                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate delectus
                                dignissimos
                                facilis illo nulla officia omnis vitae voluptatum. Aspernatur consequatur dolores eum id
                                modi officia
                                reprehenderit suscipit unde voluptas!
                            </li>
                        </ul>
                    </div>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid} from '@ionic/vue';

    export default {
        name: 'Home',
        components: {IonContent, IonPage, IonGrid}
    }
</script>
<style scoped>
    .step {
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
</style>