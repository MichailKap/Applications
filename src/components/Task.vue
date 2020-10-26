<template>
  <li class="task">
    <p
      class="text"
      :class="{'completed': task.completed}"
      @click="task.completed = !task.completed"
    >
      <strong>{{ index + 1 }}</strong>
      <span> {{ task.title }} </span>
    </p>
    <button
      class="button delete-task"
      @click="$emit('remove-task', index)"
    >
      <i class="fas fa-times"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @include _480 {
    height: 70px;
  }
}
.text {
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 10px;
  text-align: start;
  transition: all .3s linear;
  width: 100%;
  &:hover {
    background-color: #e7e7e7;
  }
  @include _768 {
    font-size: 20px;
  }
  strong {
    margin-right: 7px;
  }
}
.delete-task {
  @include _480 {
    padding: 25px 14px;
  }
}
.completed {
  background-color: #c9f2d4;
  border: 1px solid #6fa37e;
  text-decoration: line-through;
  transition: all .3s linear;
  &:hover {
    background-color:#a0deb1;
  }
}
</style>