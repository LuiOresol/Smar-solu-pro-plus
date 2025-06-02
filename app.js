import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBTX2IwYeejyu9Jtto2p6qczXBFK5wcz1A",
    authDomain: "smart-solutions-ad868.firebaseapp.com",
    databaseURL: "https://smart-solutions-ad868-default-rtdb.firebaseio.com/",
    projectId: "smart-solutions-ad868",
    storageBucket: "smart-solutions-ad868.appspot.com",
    messagingSenderId: "1026347493206",
    appId: "1:1026347493206:web:9a14cca2cc315e388dd8f7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

window.login = function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then(() => alert('Inicio de sesión exitoso'))
        .catch(error => alert(error.message));
};

window.register = function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert('Registro exitoso'))
        .catch(error => alert(error.message));
};

window.logout = function() {
    signOut(auth).then(() => alert('Sesión cerrada'));
};

window.showSection = function(section) {
    document.getElementById('content').innerHTML = `<h2 class="text-xl font-bold">${section.toUpperCase()}</h2><p>Contenido en construcción...</p>`;
};