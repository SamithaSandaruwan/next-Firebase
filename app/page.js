'use client'

import {db} from "./firebaseConfig"
import {collection, addDocs } from 'firebase/firestore/lite';
import react,{useState} from 'react';

async function addingDataInToFirestore(name,email,message){
  try{
    const docRef = await addDocs(collection(db,"messages"),
    {
      name:name,
      email:email,
      message:message,
    })
    console.log("Data Add Successfully. ID-> ",docRef.id);
    return true;
    
  }catch(error){
    console.error("Error Happened")
    console.error("xxxx Adding Data xxxx" ,error)
    return false;
  }
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1
      className="text-3xl font-bold m-10">Sending Data to Firebase(Firestore)</h1>
    </main>
  );
}
