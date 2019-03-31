<template>
  <div class="component-wrapper">
    <NavigationMenu />
    <div class="about" @click="toggleAbout">
      <h2 class="about--header">Defeat your opponent</h2>
      <i class="[ fas fa-chevron-down ] about--arrow"></i>
    </div>
    <div class="about--copy">
      <p>A player wins the game by eliminating all opponents. Players begin the game with 20 life; if a player's life total is reduced to zero or less, he or she loses the game. Additionally, if a player is required to draw a card but has no cards left in his or her library, he or she loses. If a player has 10 or more poison counters, he or she loses the game. Specific cards, like Felidar Sovereign or Door to Nothingness, may dictate other ways of winning or losing. </p>
    </div>
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';

export default {
  name: 'About',
  data() {
    return {
      isAboutToggled: true,
    }
  },
  components: {
    NavigationMenu,
  },
  methods: {
    toggleAbout: function () {
      if (this.isAboutToggled) {
        document.querySelector('.about--copy').style.display = 'block';
        this.isAboutToggled = !this.isAboutToggled;
      } else {
        document.querySelector('.about--copy').style.display = 'none';
        this.isAboutToggled = !this.isAboutToggled;
      };
    },
  },
};
</script>

<style lang="sass" scoped>
  .about
    background-color: #63DFCA
    width: 80%
    max-width: 300px
    margin: 1rem auto 0 auto
    padding: 0.4rem 0.8rem
    color: #374B66
    display: flex
    justify-content: space-between
    align-items: center
    cursor: pointer
    &--header
      font-weight: normal
      font-size: 1.2rem
    &--copy
      width: 80%
      max-width: 300px
      border: 1px solid #63DFCA
      padding: 0.8rem
      margin: 0 auto
      margin-bottom: 1.2rem
      display: block

</style>
