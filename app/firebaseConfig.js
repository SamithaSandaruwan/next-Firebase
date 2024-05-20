import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "",
  authDomain: "data-adding-57090.firebaseapp.com",
  projectId: "data-adding-57090",
  storageBucket: "data-adding-57090.appspot.com",
  messagingSenderId: "683756934981",
  appId: "1:683756934981:web:9b148b188dc3d69646102c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};