<template>
  <div class="filter">
    <p class="text">Filter emoticons</p>
    <select
      class="select"
      v-model="$store.state.filterByEmotion"
      @change="$store.state.currentPage = 0"
    >
      <option value="all">All emotions</option>
      <option value="anger">Anger</option>
      <option value="cry">Cry</option>
      <option value="indifference">Indifference</option>
      <option value="joy">Joy</option>
      <option value="laughter">Laughter</option>
      <option value="love">Love</option>
      <option value="others">Others</option>
      <option value="sadness">Sadness</option>
      <option value="sleeping">Sleeping</option>
      <option value="surprise">Surprise</option>
    </select>
    <select
      class="select"
      v-model="$store.state.filterByColor"
      @change="$store.state.currentPage = 0"
    >
      <option value="all">All colors</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
      <option value="white">White</option>
      <option value="yellow">Yellow</option>
    </select>
    <select
      class="select"
      v-model="$store.state.filterByHands"
      @change="$store.state.currentPage = 0"
    >
      <option value="all">All types</option>
      <option value="hands">With hands</option>
      <option value="not-hands">Not hands</option>
    </select>
    <button
      class="button reset-button"
      @click="$emit('reset-filter')"
      :class="{disabled: disabled}"
      :disabled="disabled"
    >
      <i class="fas fa-filter"></i>
      <span>Reset</span>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    disabled() {
      if (this.$store.state.filterByEmotion === 'all' &&
          this.$store.state.filterByColor === 'all' &&
          this.$store.state.filterByHands === 'all') {
            return true
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  padding: 20px;
  border: 1px solid #ccc;
  min-height: 286px;
  max-height: 310px;
}
.text {
  color: $blue;
  font-size: 16px;
  text-align: center;
  margin-bottom: 15px;
}
.select {
  border: 1px solid #ccc;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  &:nth-child(4) {
    margin-bottom: 20px;
  }
}
.reset-button {
  width: 100%;
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