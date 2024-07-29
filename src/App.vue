<template>
  <div id="app">
    <UserRegister />
    <UserLogin />
  </div>
</template>

<script>
import UserRegister from './components/UserRegister.vue';
import UserLogin from './components/UserLogin.vue';

export default {
  name: 'App',
  components: {
    UserRegister,
    UserLogin
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
