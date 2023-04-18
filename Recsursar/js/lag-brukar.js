const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtgjwFD29kTzsdj3LB5G_oIB_AkbXacCI",
    authDomain: "chat-f6f11.firebaseapp.com",
    projectId: "chat-f6f11",
    storageBucket: "chat-f6f11.appspot.com",
    messagingSenderId: "889741826707",
    appId: "1:889741826707:web:275896dd29b4b1c5ae4b66",
    measurementId: "G-4GSCNEEY0B"
  });

/* Firebase config */
const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); 




// Henter info frå input-feltet name, og oppretter bruker i collection "users" 
function createUser() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const adresse = document.getElementById("adresse").value;
    firebase.firestore().collection("bruker").doc().set({
            name: name,
            password: password,
            adresse: adresse
        })
        .then(function () {
           console.log("bruker opprettet");
        })
    .catch((e) => {
        alert(e.message)
        console.log(e.code); 
        console.log(e.message);
    });
    
}