<template>
  <div class="component-wrapper">
    <NavigationMenu />
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
import NavigationMenu from '@/components/NavigationMenu.vue';
import BaseCard from '@/components/BaseCard.vue';
export default {
  name: 'CardSearch',
  components: {
    NavigationMenu,
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
    cardSearch: function () {
      if (this.searchInput === '') {
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
  beforeCreate: function () {
    if (!sessionStorage.getItem('AuthToken')) {
      this.$router.push('/');
    }
  },
  beforeMount: function () {
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
