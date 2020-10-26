<template>
  <div class="container">
    <p class="title">Tasks</p>
    <div class="tasks">
      <p class="text">Remaining tasks:
        <span>{{ remainingTasks }}</span>
      </p>
      <Tasks />
    </div>
  </div>
</template>

<script>
import Tasks from '../components/Tasks'
export default {
  name: 'TasksList',
  components: {
    Tasks
  },
  computed: {
    remainingTasks() {
      return this.$store.state.tasks.filter(item => !item.completed).length 
    }
  }
}
</script>

<style lang="scss" scoped>
.tasks {
  max-width: 600px;
  margin: 0 auto;
}
.text {
  font-size: 25px;
  margin-bottom: 40px;
  text-align: center;
  @include _979 {
    margin-bottom: 35px;
  }
  @include _768 {
    margin-bottom: 30px;
  }
  @include _600 {
    margin-bottom: 25px;
  }
  span {
    font-size: 30px;
    font-weight: 500;
    color: $blue;
  }
}
</style>