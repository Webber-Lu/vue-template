// src/firebase/config.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase 配置資訊（記得換成你自己的！）
const firebaseConfig = {
  apiKey: "AIzaSyDP_ByslsNz3AAizbn5hKYxjKWzd_i9zcw",
  authDomain: "webpage-final-b30e2.firebaseapp.com",
  projectId: "webpage-final-b30e2",
  storageBucket: "webpage-final-b30e2.firebasestorage.app",
  messagingSenderId: "365846194382",
  appId: "1:365846194382:web:09006c2af7bcaf1d1d489f",
  measurementId: "G-MF9WPD64LN"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig)

// 初始化 Firestore
const db = getFirestore(app)

export { db }
