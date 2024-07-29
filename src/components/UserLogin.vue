<template>
  <div>
    <h2>ล็อกอินเข้าสู่ระบบ</h2>
    <form @submit.prevent="login">
      <div>
        <label for="login">ชื่อผู้ใช้งานระบบ หรือ อีเมล :</label>
        <input type="text" v-model="loginInput" required>
      </div>
      <div>
        <label for="password">รหัสผ่านเข้าสู่ระบบ :</label>
        <input type="password" v-model="passwordInput" required>
      </div>
      <button type="submit">ล็อกอิน</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loginInput: '',
      passwordInput: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          login: this.loginInput, // สมมติว่านี่เป็นชื่อคีย์ที่ถูกต้องใน API ของคุณ
          password: this.passwordInput
        });
        alert(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
