<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="circle">
        <ion-grid>
          <!--                    <div class="step flex flex-col">-->
          <!--                        <div class="text-white text-md">-->
          <!--                            &lt;!&ndash;                            <div class="flex justify-center ml-8">&ndash;&gt;-->
          <!--                            &lt;!&ndash;                                <p>Подача Документов</p>&ndash;&gt;-->
          <!--                            &lt;!&ndash;                            </div>&ndash;&gt;-->
          <!--                            &lt;!&ndash;                            <div class="flex justify-between items-center">&ndash;&gt;-->
          <!--                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"-->
          <!--                                 stroke="currentColor">-->
          <!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
          <!--                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>-->
          <!--                            </svg>-->
          <!--                            &lt;!&ndash;                            </div>&ndash;&gt;-->
          <!--                        </div>-->
          <!--                        <div>-->
          <!--                            <hr class="arrow"/>-->
          <!--                        </div>-->
          <!--                    </div>-->
          <!--                    <div class="step__bg">-->
          <!--                        <div class="step">-->
          <!--                            <ul>-->
          <!--                                <li><p>Document</p></li>-->
          <!--                                <li><p>Document</p></li>-->
          <!--                                <li><p>Document</p></li>-->
          <!--                                <li><p>Document</p></li>-->
          <!--                                <li><p>Document</p></li>-->
          <!--                                <li><p>Document</p></li>-->
          <!--                            </ul>-->
          <!--                        </div>-->
          <!--                    </div>-->
          <div class=" flex ml-24 h-60">
            <el-steps direction="vertical" :active="1">
              <el-step title="Step 1"></el-step>
              <el-step title="Step 2"></el-step>
              <el-step title="Step 3"></el-step>
            </el-steps>
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
/*ion-grid::before {*/
/*    content: '';*/
/*    position: absolute;*/
/*    top: -380px;*/
/*    left: 0;*/
/*    width: 100%;*/
/*    height: 100%;*/
/*    border-radius: 2rem;*/
/*    background: linear-gradient(#5375C5, #20b2aa);*/
/*}*/

/*.step {*/
/*    position: absolute;*/
/*    top: 50%;*/
/*    transform: translate(-50%);*/
/*}*/

/*.step ul {*/
/*    padding-left: 150px;*/
/*    position: relative;*/
/*}*/

/*.step ul::after {*/
/*    content: '';*/
/*    position: absolute;*/
/*    width: 3px;*/
/*    height: calc(100% - 50%);*/
/*    background: black !important;*/
/*    left: 140px;*/
/*    top: 14px;*/
/*    z-index: -1;*/
/*}*/

/*.step ul li {*/
/*    padding: 10px 0;*/
/*    padding-left: 20px;*/
/*}*/

/*.step ul li p {*/
/*    color: black;*/

/*}*/

/*.step ul li p::after {*/
/*    content: '';*/
/*    position: absolute;*/
/*    background: black;*/
/*    width: 18px;*/
/*    height: 18px;*/
/*    left: 142px;*/
/*    top: 50%;*/
/*    transform: translate(-50%);*/
/*    border-radius: 50px;*/
/*    border: 4px solid black;*/
/*}*/

/*.step__bg {*/
/*    backdrop-filter: blur(5px);*/
/*    background: rgba(255, 255, 255, 0.2);*/
/*    border: 2px solid rgba(255, 255, 255, 0.3);*/
/*    border-radius: 10px;*/
/*}*/

</style>