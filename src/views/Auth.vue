<!-- src/views/Auth.vue -->
<template>
  <div class="auth-container">
    <h1>登入 / 註冊</h1>

    <div class="auth-form">
      <FloatLabel>
        <InputText id="username" v-model="username" />
        <label for="username">使用者名稱</label>
      </FloatLabel>

      <FloatLabel class="mt-3">
        <Password id="password" v-model="password" toggleMask />
        <label for="password">密碼</label>
      </FloatLabel>

      <div class="form-actions">
        <Button label="登入" icon="pi pi-sign-in" class="p-button-success" @click="login" />
        <Button label="註冊" icon="pi pi-user-plus" class="p-button-outlined p-button-primary" @click="register" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'

const username = ref('')
const password = ref('')

const login = () => {
  console.log('登入', username.value, password.value)
}

const register = () => {
  console.log('註冊', username.value, password.value)
}
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

/* ⭐ 讓兩個欄位統一寬度 */
.auth-form :deep(.p-inputtext),
.auth-form :deep(.p-password) {
  width: 100%;
  box-sizing: border-box;
}
</style>
