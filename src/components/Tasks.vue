<template>
  <div>
    <ul>
      <FilterAndDeleteTask
        @remove-tasks="removeTasks()"
        @remove-completed-tasks="removeCompletedTasks()"
      />
      <AddTask
        @add-task="addTask()"
      />
      <Task
        v-for="(task, index) of tasks"
        :index="index"
        :task="task"
        :key="task.id"
        @remove-task="removeTask(index)"
      />
      <p
        class="text"
        v-if="tasks.length === 0"
      >
        No tasks
      </p>
    </ul>
  </div>
</template>

<script>
import Task from '../components/Task'
import AddTask from '../components/AddTask'
import FilterAndDeleteTask from '../components/FilterAndDeleteTask'
import { mapActions } from 'vuex'
export default {
  name: 'TaskList',
  components: {
    Task,
    AddTask,
    FilterAndDeleteTask
  },
  methods: {
    removeTask(index) {
      this.REMOVE_FROM_LIST(index)
    },
    addTask() {
      this.ADD_TO_LIST()
    },
    removeTasks() {
      this.REMOVE_TASKS()
    },
    removeCompletedTasks() {
      this.REMOVE_COMPLETED_TASKS()
    },
    ...mapActions([
      'REMOVE_FROM_LIST',
      'ADD_TO_LIST',
      'REMOVE_TASKS',
      'REMOVE_COMPLETED_TASKS'
    ])
  },
  computed: {
    tasks() {
      if (this.$store.state.filterTasks === 'all') {
        return this.$store.state.tasks;
      }
      if (this.$store.state.filterTasks === 'completed') {
        return this.$store.state.tasks.filter(item => item.completed)
      }
      if (this.$store.state.filterTasks === 'not-completed') {
        return this.$store.state.tasks.filter(item => !item.completed)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  font-size: 16px;
  text-align: center;
}
</style>