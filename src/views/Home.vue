<template>
  <div class="component-wrapper">
    <div class="overflow-container">
      <!-- Register form panel -->
      <div class="register-panel">
        <button class="back-button button button__ghosted" @click="showStartPanel"><i class="[ fas fa-chevron-left ]"></i>go back</button>
        <h1>Create account using</h1>
        <a href="#" class="social-icon"><i class="fab fa-google"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
        <h2>or use your email for registration</h2>
        <form action="#" @submit.prevent="validateRegisterForm">
          <input type="text" placeholder="First name" v-model="newUser.firstName" required>
          <input type="text" placeholder="Username" v-model="newUser.username" required>
          <input type="password" placeholder="Password (at least 6 characters)" v-model="newUser.password" required>
          <input type="password" placeholder="Repeat your password" v-model="newUser.repeatedPassword" required>
          <button class="button button__submit" type="submit">register</button>
        </form>
      </div>
      <!-- Start panel -->
      <div class="start-panel">
        <img class="start-panel--logo" src="@/assets/mtg-logo.svg" alt="magic the gathering card search logo">
        <div class="start-panel--button-container">
          <button class="start-panel--button button button__ghosted button__wide" @click="showRegisterPanel">register</button>
          <button class="start-panel--button button button__wide" @click="showSignInPanel">sign in</button>
        </div>
      </div>
      <!-- Sign in panel -->
      <div class="sign-in-panel">
        <button class="back-button button button__ghosted" @click="showStartPanel"><i class="[ fas fa-chevron-left ]"></i>go back</button>
        <h1>Sign in using</h1>
        <a href="#" class="social-icon"><i class="fab fa-google"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
        <h2>or use your credentials</h2>
        <form action="#" @submit.prevent="validateSignInForm">
          <input type="text" placeholder="Username" v-model="returningUser.username" required>
          <input type="password" placeholder="Password" v-model="returningUser.password" required>
          <span class="sign-in-panel--password-reset">forgot password?</span>
          <button class="button button__submit" type="submit">sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      newUser: {
        firstName: '',
        username: '',
        password: '',
        repeatedPassword: '',
      },
      returningUser: {
        firstName: '',
        username: '',
        password: '',
      },
    };
  },
  beforeCreate: () => {
    if (!localStorage.getItem('Username') && !localStorage.getItem('Password')) {
      localStorage.setItem('Firstname', 'demo user');
      localStorage.setItem('Username', 'demo');
      localStorage.setItem('Password', '1234');
    }
  },
  methods: {
    showStartPanel() {
      document.querySelector('.overflow-container').style.top = '-100vh';
      document.querySelector('.register-panel').style.opacity = '0';
      document.querySelector('.sign-in-panel').style.opacity = '0';
    },
    showRegisterPanel() {
      document.querySelector('.overflow-container').style.top = '0';
      document.querySelector('.register-panel').style.opacity = '1';
    },
    showSignInPanel() {
      document.querySelector('.overflow-container').style.top = '-200vh';
      document.querySelector('.sign-in-panel').style.opacity = '1';
    },
    validateRegisterForm() {
      if (this.newUser.password.length < 6) {
        console.log('Password is to short');
      } else if (this.newUser.password !== this.newUser.repeatedPassword) {
        console.log('Passwords do not match');
      } else {
        localStorage.setItem('FirstName', this.newUser.firstName);
        localStorage.setItem('Username', this.newUser.username);
        localStorage.setItem('Password', this.newUser.password);
        sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
        this.$router.push('cardSearch');
      }
    },
    validateSignInForm() {
      if (this.returningUser.username !== localStorage.getItem('Username')) {
        console.log('Username is incorrect');
      } else if (this.returningUser.password !== localStorage.getItem('Password')) {
        console.log('Password is incorrect');
      } else {
        sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
        this.$router.push('cardSearch');
      }
    },
  },
};
</script>

<style scoped lang='sass'>
  // Global styles //
  h1
    font-weight: bold
    font-size: 28px
    margin: 0.6rem 0
  h2
    font-size: 16px
    margin: 0.6rem 0
  .button
    border: 1px solid #63DFCA
    border-radius: 100px
    background-color: #63DFCA
    margin: 0
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
    &__ghosted
      background-color: transparent
      border-color: #63DFCA
      color: #63DFCA
    &__submit
      padding: 0.6rem 1.8rem
      margin-top: 0.6rem
      color: #EAEAEA
  .back-button
    margin: 0
    display: block
    i
      margin-right: 0.4rem
  form
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    text-align: center
    input
      width: 80%
      max-width: 300px
      border: 1px solid #63DFCA
      border-radius: 5px
      background-color: transparent
      color: #1A2B3E
      padding: 12px 15px
      margin: 0.4rem 0
      transition: border-color 400ms ease-out
      &:required
        border-left: 3px solid #63DFCA
        box-shadow: none
      &:invalid
        box-shadow: none
        border-left-color: #FF5300
  .social-icon
    font-size: 1.8rem
    color: #374B66
    cursor: pointer
    &:first-of-type
      margin-right: 0.6rem
  // Component wrapper / root container //
  .component-wrapper
    height: 100vh
    widht: 100vw
    overflow: hidden
    text-align: center
  // Overflow container //
  .overflow-container
      height: 300vh
      widht: 100vw
      position: relative
      top: -100vh
      transition: all 0.4s ease
  // Start panel //
  .start-panel
    height: 100vh
    width: 100vw
    background: url(../assets/landart.jpg)
    background-repeat: no-repeat
    background-size: cover
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    &--logo
      height: 75%
      width: 40vw
      max-width: 180px
      display: block
    &--button-container
      width: 100%
      height: 25%
    &--button
      width: 80%
      max-width: 300px
      padding-top: 0.6rem
      margin: 0 auto
      margin-bottom: 1rem
      display: block
  // Sign in and register panel common traits //
  .sign-in-panel, .register-panel
    height: 100vh
    width: 100vw
    padding: 1rem
    background: #EAEAEA
    color: #374B66
    opacity: 0
    transition: all 1500ms ease
  // Sign in panel //
  .sign-in-panel--password-reset
    font-size: 14px
    color: #374B66
    cursor: pointer
</style>
