<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="circle">
        <ion-grid>
          <div class="step px-24" style="height: 300px;">
            <el-steps direction="vertical" :active="1">
              <el-step title="Подача"></el-step>
              <el-step title="Подача"></el-step>
              <el-step title="Подача"></el-step>
              <el-step title="Подача"></el-step>
              <el-step title="Подача"></el-step>
              <el-step title="Подача"></el-step>
            </el-steps>
          </div>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';

export default {
  name: 'Tab1',
  components: {IonContent, IonPage}
}
</script>
<style scoped>
.step {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

ion-grid::before {
  content: '';
  position: absolute;
  top: -200px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#20b2aa, #C1FCF6);
  clip-path: circle(45% at right 50%);
}

.circle::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#20b2aa, #C1FCF6);
  clip-path: circle(30% at left 50%);
}

</style>