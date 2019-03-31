Vue.component('BaseCard', {
  <template>
    <div class="card">
      <h1 class="card--name">{{ name }}</h1>
      <img :src="imageUrl" alt="card image">
      <button class="card--button">View more</button>
    </div>
  </template>

  <script>
  export default {
    props: [
      'name', 'imageUrl'
    ],
  }
  </script>

  <style lang="sass" scoped>
    .card
      width: 80%
      max-width: 300px
      margin: 0 auto
      text-align: center
      margin-bottom: 1.2rem
      &--name
        font-size: 1.5rem
        font-weight: bold
        color: #374B66
      &--button
        border: 1px solid #63DFCA
        border-radius: 5px
        background-color: #63DFCA
        margin: 0 auto
        padding: 0.4rem 0.8rem
        color: #374B66
        font-size: 12px
        font-weight: bold
        letter-spacing: 1px
        text-transform: uppercase
        cursor: pointer
        display: block
        transition: all 100ms ease-in
        &:hover
          transform: scale(1.02)
        &:active
          transform: scale(0.96)
        &:focus
          outline:none

  </style>
})
