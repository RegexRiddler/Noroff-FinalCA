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
    <form class="card-search">
      <input class="card-search--input" type="text" placeholder="Search card by name" v-model="searchInput">
      <button class="card-search--button" @click.prevent="cardSearch"><i class="fas fa-search"></i></button>
    </form>
    <div class="card-container">
      <BaseCard v-for="card in searchResult" 
        :key="card.id"
        :name="card.name"
        :imageUrl="card.imageUrl"
        :id="card.id"
      />
    </div>
    <div class="no-result" v-show="isSearchResult">
      <h1>Sorry could not find your card, try a different name.</h1>
    </div>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';
export default {
  name: 'CardSearch',
  components: {
    BaseCard,
  },
  data() {
    return {
      isMenuToggled: false,
      searchInput: '',
      cards: [],
      isSearchResult: false,
      searchResult: [],
    };
  },
  methods: {
    toggleMenu: function() {
      if (!this.isMenuToggled) {
        document.querySelector('.header--navigation').style.display = 'block';
      } else {
        document.querySelector('.header--navigation').style.display = 'none';
      }
      this.isMenuToggled = !this.isMenuToggled;
    },
    cardSearch: function() {
      if (this.searchInput == '') {
        this.searchResult = this.cards;
      }
      this.searchResult = this.cards.filter(card => card.name.toLowerCase().includes(this.searchInput));
      if (this.searchResult.length === 0) {
        this.isSearchResult = true;
      } else if (this.searchResult.length > 0) {
        this.isSearchResult = false;
      };
    },
  },
  beforeCreate: function() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.$router.push('/');
    }
  },
  beforeMount: function() {
    const api = 'https://api.magicthegathering.io/v1/cards';
    const corsProxy = 'https://corsanywhereproxy.herokuapp.com/';
    fetch(corsProxy + api)
      .then(response => response.json())
      .then(data => this.cards = this.searchResult = data.cards)
      .catch(error => console.log(error));
  },
};
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
  .card-search
    width: 80vw
    max-width: 300px
    margin: 1rem auto
    display: flex
    &--input
      width: 100%
      max-width: 300px
      border: 1px solid #63DFCA
      border-radius: 5px
      background-color: transparent
      color: #1A2B3E
      padding: 0.4rem 0.8rem
      transition: border-color 400ms ease-out
    &--button
      border: 1px solid #63DFCA
      border-radius: 5px
      background-color: #63DFCA
      margin-left: 0.2rem
      padding: 0.4rem 0.8rem
      color: #374B66
      font-size: 12px
      font-weight: bold
      letter-spacing: 1px
      text-transform: uppercase
      cursor: pointer
      transition: all 100ms ease-in
      &:hover
        transform: scale(1.02)
      &:active
        transform: scale(0.96)
      &:focus
        outline:none
  .no-result
    width: 80%
    max-width: 300px
    margin: 0 auto
    display: block
    h1
      font-size: 1.2rem
      text-align: center
</style>
