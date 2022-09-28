import { initializeApp } from "firebase/app";
import { getFirestore,doc,getDoc,setDoc,collection,query,getDocs,writeBatch} from "firebase/firestore";
import { getStorage, ref, } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,sendPasswordResetEmail, ProviderId} from "firebase/auth";
import { usePopper } from 'react-popper';


const firebaseConfig = {
    apiKey: "AIzaSyCjeqZsGQZKapslSFA4rHEgid_Si9YS3GY",
    authDomain: "sit314final.firebaseapp.com",
    databaseURL: "https://sit314final-default-rtdb.firebaseio.com",
    projectId: "sit314final",
    storageBucket: "sit314final.appspot.com",
    messagingSenderId: "721413771606",
    appId: "1:721413771606:web:2909d18a0eb972545dc6f7",
    measurementId: "G-6FHFEW2KBR"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const firebasepp = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db =getFirestore();
export const db2 = getDatabase(app);
export const storage=getStorage(firebasepp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt:"select_account"
    }
)
export const SignInwithGooglePopup=()=>signInWithPopup(auth,provider);

export const createUserDocFromAuth=async(userAuth,additionalInformation={})=>{
    if(!userAuth.email)return;
    const userDocRef= doc(db,'users',userAuth.uid);
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if(!userSnapshot.exists())
    {
        const {displayName, email}=userAuth;
        const createdAt=new Date();
        const level=0;
    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            level,
            ...additionalInformation
        })
        console.log( displayName+" "+email)
    }
    catch(error){
        console.log('error in creating',error.message)
    } 
}
    return userDocRef;
}

export const createAuthUserWitEmailandnameandpassword=async(email,password)=>{
    if(!email||!password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}
export const signinWithEmailAndPassword=async(email,password)=>{
    if(!email||!password) return;
    return await signInWithEmailAndPassword(auth,email,password)
}

export const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };