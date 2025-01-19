// Importa las funciones de Firebase
import { initializeApp } from "firebase/app"; 
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Configura tu conexión a Firebase (llenar con los datos de tu base)
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);  // Usamos la función `initializeApp`
const db = getDatabase(app);  // Usamos la función `getDatabase` para acceder a la Realtime Database

export { db };
export const auth = getAuth(app);
