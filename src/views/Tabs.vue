<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar class="tab-bar" slot="bottom">

        <ion-tab-button tab="home" href="/tabs/home">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <ion-label>Главная</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <ion-label>Профиль</ion-label>
        </ion-tab-button>
<!--        <lottie-animation-->
<!--            path="@assets/lottie-animation.json"-->
<!--        />-->
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage} from '@ionic/vue';
import {ellipse, square, triangle, personCircleOutline, homeOutline} from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: {IonTabs, IonTabBar, IonTabButton, IonLabel, IonPage,},
  setup() {
    return {
      ellipse,
      square,
      triangle,
    }
  }
}
</script>
