<template>
  <div class="wrapper">
    <select
      class="select"
      v-model="$store.state.filterTasks"
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <button
      class="button remove-all"
      @click="$emit('remove-tasks')"
      :class="{disabled: $store.state.tasks.length === 0}"
      :disabled="$store.state.tasks.length === 0"
    >
      <i class="fas fa-trash-alt"></i>
      <span>Delete all</span>
    </button>
    <button
      class="button remove-completed"
      @click="$emit('remove-completed-tasks')"
      :class="{disabled: disabled}"
      :disabled="disabled"
    >
      <i class="fas fa-check"></i>
      <span>Delete completed</span>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    disabled() {
      if (this.$store.state.tasks.filter(item => item.completed).length === 0) {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  @include _600 {
    flex-wrap: wrap;
  }
}
.select {
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 11px;
  width: 150px;
  @include _600 {
    margin-bottom: 10px;
  }
  @include _480 {
    width: 145px;
    flex: 1 3 50%;
  }
}
.remove-all {
  margin-right: 10px;
  margin-left: auto;
  @include _600 {
    margin-bottom: 10px;
    margin-right: 0;
  }
  @include _480 {
    margin-left: 10px;
  }
}
.remove-completed {
  @include _600 {
    margin-left: 120px;
  }
  @include _480 {
    margin-left: 40px;
  }
}
.disabled {
  background-color: #e7e7e7;
  color: #ccc;
  cursor: auto;
  &:hover {
    background-color: #e7e7e7;
  }
}
</style>