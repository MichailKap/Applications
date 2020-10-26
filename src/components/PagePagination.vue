<template>
  <div class="wrapper">
    <div class="left-side">
      <ul class="items">
        <li class="item" v-for="imoticon in imoticons" :key="imoticon.id">
          <img :src="imoticon.img">
        </li>
        <p class="text" v-if="filterImoticons.length === 0">No results</p>
      </ul>
      <div class="pagination">
        <button
          @click="prevPage()"
          class="button pagination-button"
          :class="{disabled: $store.state.currentPage === 0}"
          :disabled="$store.state.currentPage === 0"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <ul class="numbers">
          <li
            v-for="page in pages"
            :key="page"
            :class="{'active': $store.state.currentPage === page}"
            class="number"
            @click="$store.state.currentPage = page"
          >
            {{ page + 1 }}
          </li>
        </ul>
        <button
          @click="nextPage()"
          class="button pagination-button"
          :class="{disabled: $store.state.currentPage >= totalPages-1}"
          :disabled="$store.state.currentPage >= totalPages-1"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="right-side">
      <FilterImoticons
        @reset-filter="resetFilter()"
      />
    </div>
  </div>
</template>

<script>
import FilterImoticons from '../components/FilterImoticons'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    FilterImoticons
  },
  data() {
    return {
      pageRange: 2,
      width: null
    }
  },
  methods:{
    nextPage(){
      this.NEXT_PAGE()
    },
    prevPage(){
      this.PREV_PAGE()
    },
    resetFilter() {
      this.RESET_FILTER()
    },
    ...mapActions([
      'NEXT_PAGE',
      'PREV_PAGE',
      'RESET_FILTER'
    ]),
    updateWidth() {
      this.width = window.innerWidth;
    }
  },
  computed:{
    perPage() {
      var perPage = 0
      if (this.width > 768) {
        return perPage = 12
      }
      else if (this.width < 768 && this.width > 601) {
        return perPage = 9
      }
      else if (this.width < 601 && this.width > 480) {
        return perPage = 4
      }
      else {
        return perPage = 9
      }
    },
    pages() {
      var pages = []
      for(var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      return pages
    },
    rangeStart() {
      var start = this.$store.state.currentPage - this.pageRange
      return (start > 0) ? start : 0
    },
    rangeEnd() {
      var end = this.$store.state.currentPage + this.pageRange
      return (end < this.totalPages) ? end : this.totalPages - 1
    },
    totalPages(){
      return Math.ceil(this.filterImoticons.length/this.perPage)
    },
    imoticons(){
      const start = this.$store.state.currentPage * this.perPage,
            end = start + this.perPage

      return this.filterImoticons.slice(start, end)
    },
    ...mapGetters([
      'filterImoticons'
    ])
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
}
.left-side {
  width: 64%;
  @include _768 {
    width: 60%;
  }
  @include _480 {
    width: 100%;
    margin-top: 30px;
  }
}
.right-side {
  width: 32%;
  @include _768 {
    width: 36%;
  }
  @include _480 {
    width: 100%;
  }
}
.items {
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.item {
  padding: 15px;
  width: 25%;
  @include _768 {
    padding: 12px;
    width: 33.3%;
  }
  @include _600 {
    width: 50%;
  }
  @include _480 {
    width: 33.3%;
  }
}
.text {
  color: $blue;
  font-size: 25px;
  margin: 20px auto;
}
.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 40px;
}
.pagination-button {
  background-color: $blue;
  justify-content: center;
  width: 50px;
  &:hover {
    background-color: $darkblue;
  }
  @include _600 {
    width: 40px;
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
.numbers {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.number {
  background-color: #fff;
  border: 1px solid $blue;
  color: $blue;
  cursor: pointer;
  margin: 0 5px;
  padding: 3px 8px;
  transition: all .3s linear;
  &:hover {
    color: #fff;
    background-color: $blue;
  }
}
.active {
  background-color: $blue;
  color: #fff;
  transition: all .3s linear;
  &:hover {
    background-color: $darkblue;
  }
}
</style>