<template>
  <div>
    <h2>สมัครสมาชิก</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">ชื่อผู้ใช้งานระบบ :</label>
        <input type="text" v-model="username" required>
      </div>
      <div>
        <label for="email">อีเมลผู้ใช้งานระบบ :</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label for="password">รหัสผ่านเข้าสู่ระบบ :</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">สมัครสมาชิก</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:3000/register', {
          username: this.username,
          email: this.email,
          password: this.password
        });
        alert(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
