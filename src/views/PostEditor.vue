<!-- src/views/PostEditor.vue -->
<template>
  <div class="editor-container">
    <h2>新增貼文</h2>

    <div class="form-group">
      <label for="title">標題</label>
      <InputText v-model="title" id="title" placeholder="輸入貼文標題" class="input" />
    </div>

    <div class="form-group">
      <label for="content">內容</label>
      <Textarea v-model="content" id="content" rows="8" placeholder="輸入貼文內容" class="textarea" autoResize />
    </div>

    <div class="button-group">
      <Button label="送出" icon="pi pi-check" class="submit-button" @click="submitPost" />
      <Button label="取消" icon="pi pi-times" class="cancel-button" @click="goBack" text />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'

const router = useRouter()
const title = ref('')
const content = ref('')

const submitPost = () => {
  if (!title.value || !content.value) {
    alert('請填寫標題與內容')
    return
  }

  console.log('✅ 發文成功：', { title: title.value, content: content.value })
  router.push('/posts') // 暫時回到貼文頁，未儲存
}

const goBack = () => {
  router.push('/posts')
}
</script>

<style scoped>
.editor-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input,
.textarea {
  width: 100%;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.submit-button {
  background-color: #4caf50;
  color: white;
  border: none;
}

.cancel-button {
  color: #999;
}
</style>
