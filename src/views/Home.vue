<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="circle">
                <ion-grid class="m-4">
                    <steps :current-status="currentStatus"></steps>
<!--                    <div class="bcdrp-bg shadow-md text-lg  rounded-xl">-->
<!--                        <div class="flex justify-center pb-6">-->
<!--                            <img :src="require('../assets/img/WaitingMonochromatic.svg')" alt="">-->
<!--                        </div>-->

<!--                        <div class="step">-->
<!--                            <ul v-if="currentStatus.status_id !== 0">-->
<!--                                <li :key="status.id" v-for="status in statuses.filter(s=> !s.hide)"-->
<!--                                    :class="{'text-ksaa': status.id <= currentStatus.status_id  && status.id < 6,'text-red-400':status.id===6,'items-center':true,'grid':true,'flex':true,'grid-cols-1':true}">-->
<!--                                    <div class="flex justify-between items-center">-->
<!--                                        <span v-if="status.id<6">-->
<!--                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"-->
<!--                                         fill="currentColor">-->
<!--                                        <path fill-rule="evenodd"-->
<!--                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"-->
<!--                                              clip-rule="evenodd"/>-->
<!--                                    </svg>-->
<!--                                    </span>-->
<!--                                        <span v-else>-->
<!--                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"-->
<!--                                           fill="currentColor">-->
<!--  <path fill-rule="evenodd"-->
<!--        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"-->
<!--        clip-rule="evenodd"/>-->
<!--</svg>-->
<!--                                   </span>-->
<!--                                        <div>-->
<!--                                            {{status.title}}-->
<!--                                        </div>-->
<!--                                        <div>-->
<!--                                            <svg @click="status.show_description=!status.show_description"-->
<!--                                                 xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"-->
<!--                                                 viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                                                      d="M19 9l-7 7-7-7"/>-->
<!--                                            </svg>-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                    <div v-if="getstatusDiscriptions(status.id)!=={}">-->
<!--                                        <accept-detail v-if="status.id===2" :hide="status.show_description"-->
<!--                                                       :info="getstatusDiscriptions(status.id).detail"></accept-detail>-->
<!--                                        <exam-detail v-if="status.id===3"-->
<!--                                                     :info="getstatusDiscriptions(status.id).detail"></exam-detail>-->
<!--                                        <result-p-k v-if="status.id===4"-->
<!--                                                    :info="getstatusDiscriptions(status.id).detail"></result-p-k>-->
<!--                                    </div>-->

<!--                                </li>-->
<!--                            </ul>-->
<!--                            <div v-else><p>Процесс подачи заявления не начат. Если у Вас есть трудности, Вы можете обратится в службу поддержки-->
<!--                                <a href="tel:+7(4942)629-123">+7(4942)629-123</a> или отправить пакет документов на почту-->
<!--                                <a href="mailto:pk@ksaa.edu.ru">pk@ksaa.edu.ru</a> </p></div>-->
<!--                        </div>-->

<!--                    </div>-->
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid} from '@ionic/vue';
    // import AcceptDetail from "@/components/AcceptDetail";
    // import ExamDetail from "@/components/ExamDetail";
    // import ResultPK from "@/components/ResultPK";
    // import Steps from "@/components/Steps";
    import Steps from "@/components/Steps";

    export default {
        name: 'Home',
        components: {
            Steps,
            IonContent, IonPage, IonGrid,
            // AcceptDetail, ExamDetail, ResultPK
        },
        data() {
            return {
                currentStatus: {
                    status_id: 0,
                    is_ege: false
                },
                statuses: [
                    {
                        id: 1,
                        title: 'В процессе подачи',
                        hide: false,
                        show_description: false,
                    },
                    {
                        id: 2,
                        title: 'Одобренно секретаром',
                        hide: false,
                        show_description: false,
                    },
                    {
                        id: 3,
                        title: 'Ожидание вступительных испытаний',
                        hide: false,
                        show_description: false,
                    },
                    {
                        id: 4,
                        title: 'Ожидние результатов приемной компании',
                        hide: false,
                        show_description: false
                    },
                    {
                        id: 5,
                        title: 'Зачислен на обучение',
                        hide: false,
                        show_description: false
                    },
                    {
                        id: 6,
                        title: 'Не зачислен на обучение',
                        hide: false,
                        show_description: false
                    },
                ],
                statusDiscriptions: []
            }
        },
        methods: {
            getStatus() {
                this.axios.get('/api/status/' + this.$store.getters.getApplicantId + '/').then(response => {
                    this.currentStatus = response.data
                    this.statusDiscriptions = response.data.detail
                    this.statuses[2].hide = response.data.is_ege
                    console.log(response.data)
                    this.statuses[4].hide = response.data.order_complete && !response.data.in_order
                    this.statuses[5].hide = (response.data.order_complete && response.data.in_order) || (!response.data.order_complete && !response.data.in_order)
                })
            },
            getstatusDiscriptions(status_id) {
                if (this.statusDiscriptions.length !== 0)
                    return this.statusDiscriptions[status_id - 1]
                else return []
            }
        },
        created() {
            this.getStatus()
        }
    }
</script>
<style scoped>
    .step {
        padding: 10px 10px 10px 30px;
    }

    .step ul {
        list-style: none;
        position: relative;
    }


    /*.step ul ::before {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    width: 2px;*/
    /*    height: 100%;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*background: #a9a9a9;*/
    /*    z-index: -1;*/
    /*}*/

    .step ul li {
        padding: 10px 0;
    }

    .step ul li span  {
        vertical-align: center;
        position: absolute;
        left: -9px;
        /*background: white;*/
        /*background: rgba(255, 255, 255, 0);*/
    }

    .step ul li div {
        padding: 0 10px;

    }

    .step__bg {
        /*backdrop-filter: blur(5px);*/
        /*background: rgba(255, 255, 255, 1);*/
        /*border: 2px solid rgba(255, 255, 255, 0.8);*/
        /*!*border-bottom-left-radius: 1.5rem;*!*/
        /*!*border-bottom-right-radius: 1.5rem;*!*/
        /*border-radius: 0.5rem;*/
    }

    .bcdrp-bg {
        backdrop-filter: blur(25px);
        background:  rgba(255, 255, 255, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.3);
    }

    ion-content {
        /*--background: linear-gradient(to bottom, #20b2aa 20%, transparent 20%);*/
        @apply rounded-b-2xl;
    }

</style>