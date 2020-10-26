<template>
  <form class="wrapper">
    <input
      class="input-text"
      type="text"
      v-model="$store.state.tasks.title"
      placeholder="Add task"
      maxlength="30"
    >
    <button
      class="button add-button"
      type="submit"
      @click.prevent="$emit('add-task')"
    >
      <i class="fas fa-plus"></i>
      <span>Add</span>
    </button>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.input-text {
  border: 1px solid #ccc;
  padding: 11px;
  margin-right: 10px;
  width: 100%;
}
.add-button {
  background-color: $orange;
  &:hover {
    background-color: $darkorange;
  }
}
</style>