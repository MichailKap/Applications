<template>
  <div class="background-menu">
    <div class="container">
      <button v-if="showOpenMenu" class="open-menu" @click="openMenu()">
        <i class="fas fa-bars"></i>
      </button>
      <button v-else class="close-menu" @click="closeMenu()">
        <i class="fas fa-times"></i>
      </button>
      <ul class="menu" :class="{'show-menu' : showMenu}">
        <li @click="closeMenu()"><router-link to="/" exact class="menu_link">Home</router-link></li>
        <li @click="closeMenu()"><router-link to="/tasks" class="menu_link">TasksList</router-link></li>
        <li @click="closeMenu()"><router-link to="/calculator" class="menu_link">Calculator</router-link></li>
        <li @click="closeMenu()"><router-link to="/pagination" class="menu_link">Pagination</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      showOpenMenu: true,
      showCloseMenu: false
    }
  },
  methods: {
    openMenu() {
      this.showMenu = true,
      this.showOpenMenu = false,
      this.showCloseMenu = true
    },
    closeMenu() {
      this.showMenu = false,
      this.showOpenMenu = true,
      this.showCloseMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: flex-start;
  @include _600 {
    display: none;
    position: absolute;
    max-width: 200px;
    background-color: $orange;
  }
  &_link {
    color: #fff;
    cursor: pointer;
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    transition: all .3s linear;
    &:hover {
      background-color: $darkblue;
    }
    @include _768 {
      font-size: 20px;
    }
    @include _600 {
      &:hover {
        background-color: $darkorange;
      }
    }
  }
}
.show-menu {
  @include _600 {
    display: block;
  }
}
.open-menu,
.close-menu {
  display: none;
  @include _600 {
    background-color: $orange;
    color: #fff;
    display: block;
    padding: 10px;
    width: 40px;
  }
}
.background-menu {
  background-color: $blue;
}
.router-link-active {
  background-color: $darkblue;
  @include _600 {
    background-color: $darkorange;
  }
}
</style>