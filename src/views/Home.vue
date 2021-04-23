<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="circle">
                <ion-grid class="m-4">

                    <div class="step__bg shadow-xl text-lg">
<!--                        <div class="flex justify-center text-2xl">-->
<!--                            <p>Статус</p>-->
<!--                        </div>-->
                        <div class="flex justify-center pb-6">
                            <img :src="require('../assets/img/SetupWizardpana.svg')" alt="">
                        </div>

                        <div class="step">
                            <ul>
                                <li class="text-ksaa">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    </span>
                                    <div>
                                        Document
                                    </div>
                                </li>
                                <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </span>
                                    <div>
                                        Document
                                    </div>
                                </li>
                                <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </span>
                                    <div>
                                        Document
                                    </div>
                                </li>
                                <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </span>
                                    <div>
                                        Document
                                    </div>
                                </li>
                                <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </span>
                                    <div>
                                        Document
                                    </div>
                                </li>
                                <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </span>
                                    <div>
                                        Document
                                    </div>
                                </li>
                            </ul>
                        </div>

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
        padding: 10px 40px;
    }

    .step ul {
        list-style: none;
        position: relative;

    }

    .step ul::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        top: 0;
        left: 0;
        background: darkgrey;
    }

    .step ul li {
        padding: 20px;
    }

    .step ul li span {
        position: absolute;
        left: -9px;
        /*background: rgba(255, 255, 255, 0.02);*/
        background: white;
        /*background: rgba(255, 255, 255, 0.3);*/
    }

    .step ul li div {
        padding: 0 10px;

    }

    ion-grid::before {
        content: '';
        position: absolute;
        top: -380px;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        background: linear-gradient(#5375C5, #20b2aa);
    }

    .step__bg {
        backdrop-filter: blur(5px);
        background: rgba(255, 255, 255, 1);
        border: 2px solid rgba(255, 255, 255, 0.8);
        /*border-bottom-left-radius: 1.5rem;*/
        /*border-bottom-right-radius: 1.5rem;*/
        border-radius: 1.5rem;
    }

</style>