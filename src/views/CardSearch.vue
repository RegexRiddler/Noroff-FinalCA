<template>
  <div class="outer-container">
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel">
          <h1>New User?</h1>
          <h3>Register now and join the fun!</h3>
          <span class="overlay-panel-register-button" @click="formToggle()">Create Account</span>
        </div>
        <div class="overlay-panel">
          <h1>Registered User?</h1>
          <h3>Sign in with your username and password</h3>
          <span class="overlay-panel-sign-in-button" @click="formToggle()">Sign in</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSearch',
  components: {
  },
  data() {
    return {
      isSignInFormToggeled: true,
    };
  },
  methods: {
    formToggle() {
      const overlayContainer = document.querySelector('.overlay-container');
      const overlay = document.querySelector('.overlay');
      if (this.isSignInFormToggeled) {
        overlayContainer.classList.add('overlay-container-active');
        overlay.classList.add('overlay-active');
        document.querySelector('.register-form').style.opacity = 0;
        document.querySelector('.sign-in-form').style.opacity = 1;
      } else {
        overlayContainer.classList.remove('overlay-container-active');
        overlay.classList.remove('overlay-active');
        document.querySelector('.register-form').style.opacity = 1;
        document.querySelector('.sign-in-form').style.opacity = 0;
      }
      this.isSignInFormToggeled = !this.isSignInFormToggeled;
    },
  },
  beforeCreate: () => {
    if (!sessionStorage.getItem('AuthToken')) {
      this.$router.push('/')
    }
  },
};
</script>

<style lang="sass" scoped>
  .outer-container
    background-color: #EAEAEA
    width: 750px
    height: 400px
    border-radius: 20px
    overflow: hidden
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)
    display: flex

  .overlay-container
    width: 50%
    height: 100%
    overflow: hidden
    transition: all 0.4s ease-in-out
    display: block
    position: absolute
    top: 0
    left: 0

    &.overlay-container-active
      transform: translateX(100%)

  .overlay
    background: linear-gradient(to bottom right, #ff4b2b, #ff416c)
    display: flex
    width: 200%
    height: 100%
    transition: all 0.5s ease-in-out

    &.overlay-active
      transform: translateX(-50%)

  .overlay-panel
    width: 50%
    height: 100%
    text-align: center
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

  .overlay-panel-register-button, .overlay-panel-sign-in-button
    background-color: #EAEAEA
    padding: 10px 16px
    border-radius: 5px
    color: #FF274A
    text-transform: uppercase
    font-family: sans-serif
    cursor: pointer
    transition: 0.2s ease-in-out

    &:hover
      transform: scale(1.05)

    &:active
      transform: scale(0.95)

    &:focus
      outline: none

</style>
