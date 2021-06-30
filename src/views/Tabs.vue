<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar class="tab-bar" slot="bottom">

        <ion-tab-button tab="home" href="/tabs/home">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <ion-label>Статус</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <ion-label>Профиль</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
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
