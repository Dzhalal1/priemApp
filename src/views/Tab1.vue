<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
     <div class="flex justify-center">
       <button class="focus:outline-none hover:bg-indigo-400 bg-purple-400 shadow-2xl rounded-md text-xl p-4 text-indigo-50">
         Click Me
       </button>
     </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>