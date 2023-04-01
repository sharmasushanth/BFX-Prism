import {
    
    initializeApp
} from 'firebase/app'

import {
    getFirestore, collection, getDocs
} from 'firebase/firestore' 

import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyATPr2SF0VPpcHRJDnLxJyl4BkTbINDVKk",
    authDomain: "canteen-live-status-8541b.firebaseapp.com",
    projectId: "canteen-live-status-8541b",
    storageBucket: "canteen-live-status-8541b.appspot.com",
    messagingSenderId: "487797726623",
    appId: "1:487797726623:web:5802ab5d75d214e9e0b1aa",
    measurementId: "G-4PL7XY2FKY"
  }

  initializeApp(firebaseConfig)


  const auth = getAuth()

  

  const signupForm = document.querySelector('.signup')
  signupForm.addEventListener('submit', function (e) {
          e.preventDefault()

          const email = signupForm.email.value
          const password = signupForm.password.value


          createUserWithEmailAndPassword(auth, email, password)
              .then((cred) => {
                  console.log('user created:', cred.user)
                  signupForm.requestFullscreen()
              })
              .catch((err) => {
                  console.log(err.message)
              })
      })