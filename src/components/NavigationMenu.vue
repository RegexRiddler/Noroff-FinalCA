<template>
  <div class="component-wrapper">
    <header class="header">
      <img class="header--logo" src="./../assets/mtg-logo.svg" alt="magic the gathering card search logo">
      <i class="[ fas fa-bars ] header--menu-icon" @click="toggleMenu"></i>
      <nav class="header--navigation">
        <i class="[ fas fa-times ]" @click="toggleMenu"></i>
        <h1>Menu</h1>
        <ul>
          <li><router-link to="CardSearch">Card Search</router-link></li>
          <li><router-link to="About">About</router-link></li>
          <li><router-link to="Contact">Contact</router-link></li>
          <li><router-link to="Home">Sign Out</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenu',
  methods: {
    toggleMenu: function() {
      if (!this.isMenuToggled) {
        document.querySelector('.header--navigation').style.display = 'block';
      } else {
        document.querySelector('.header--navigation').style.display = 'none';
      }
      this.isMenuToggled = !this.isMenuToggled;
    },
  },
}
</script>

<style lang="sass" scoped>
  .header
    width: 100%
    padding: 1rem
    background-color: #1A2B3E
    display: flex
    align-items: center
    justify-content: space-between
    &--logo
      height: 12vh
    &--menu-icon
      font-size: 2.5rem
      color: #EAEAEA
    &--navigation
      height: 100vh
      width: 60vw
      max-width: 180px
      position: absolute
      top: 0
      right: 0
      background-color: #374B66
      color: #63DFCA
      text-align: right
      padding: 1.8rem 1rem
      display: none
      transition: all 0.3s ease-in-out
      i
        font-size: 2.5rem
        margin-bottom: 1rem
        color: #EAEAEA
        cursor: pointer
      h1
        font-weight: bold
        margin-bottom: 1rem
        color: #EAEAEA
      li
        margin-bottom: 0.8rem
        &:last-of-type
          color: #FF5300
      a
        text-decoration: none
        color: inherit
        transition: color 0.1s ease
        font-size: 1.2rem
        &:hover
          color: #EAEAEA
</style>
