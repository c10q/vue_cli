import firebase from "firebase";

let firebaseConfig = { // 파이어베이스 설정 정보
    apiKey: "AIzaSyA_wdrEhnY9ioj4qD9buaPOOMY4W1gedXk",
    authDomain: "fwtalk.firebaseapp.com",
    projectId: "fwtalk",
    storageBucket: "fwtalk.appspot.com",
    messagingSenderId: "753398946190",
    appId: "1:753398946190:web:79d34bd13b789194e82cdf",
    measurementId: "G-E9D3MJEG4T"
}

firebase.initializeApp(firebaseConfig) // 파이어베이스 init
firebase.analytics() // analytics 사용하겠다는 뜻

const db = firebase.firestore()

export default db