<template>
    <div>
        <div class="p-2">
            <p class="text-center">{{currentStatusTitle}}</p>
        </div>
        <div class="flex items-center justify-between p-8">
            <div v-for="step in stepList" :key="step.id">{{step.id}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Steps",
        data() {
            return {
                stepList: [
                    {
                        id: 1,
                        title: 'В процессе подачи',
                        hide: false,
                        icon: ''
                    },
                    {
                        id: 2,
                        title: 'Одобренно секретаром',
                        hide: false,
                        icon: ''
                    },
                    {
                        id: 3,
                        title: 'Ожидание вступительных испытаний',
                        hide: false,
                        icon: ''
                    },
                    {
                        id: 4,
                        title: 'Ожидние результатов приемной компании',
                        hide: false,
                        icon: ''
                    },
                    {
                        id: 5,
                        title: 'Зачислен на обучение',
                        hide: false,
                        icon: ''
                    },
                    {
                        id: 6,
                        title: 'Не зачислен на обучение',
                        hide: false,
                        icon: ''
                    },
                ]
            }
        },
        computed: {
          currentStatusTitle() {
              const step = this.stepList.find(steps => steps.id === this.currentStatus.status_id)
              if (step === undefined) {
                  return 'Статус неопределен'
              } else {
                  return step.title
              }
          }
        },
        props: {
            currentStatus: Object,
        }
    }
</script>

<style scoped>

</style>