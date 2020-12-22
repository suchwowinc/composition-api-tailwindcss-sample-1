import firebase from 'firebase';
import { ref,computed } from 'vue';

const firebaseConfig = {
  apiKey: "AIzaSyAIHPeYoDUjmCJNfTrfmZ9HiHJVN-svuh4",
  authDomain: "composition-api-fd250.firebaseapp.com",
  projectId: "composition-api-fd250",
  storageBucket: "composition-api-fd250.appspot.com",
  messagingSenderId: "757199895082",
  appId: "1:757199895082:web:2163cf2f5af5e967f4a153",
  measurementId: "G-CSPDVJQBC0"
};

firebase.initializeApp(firebaseConfig);

const useFirebaseChat = () => {
  const firestore = firebase.firestore();
  const messages = ref<string[]>([])

  const sendMessage = (message: string) => {
    firestore.collection("messages").doc().set({
      message,
      created_at: Date.now()
    });
  }
  
  firestore.collection("messages")
    .orderBy("created_at", 'desc')
    .limit(10)
    .onSnapshot( (querySnapshot) => {
    const tempDocs:string[] = []
    querySnapshot.forEach(doc=>{
      tempDocs.push(doc.data().message as string);
    })
    messages.value = tempDocs;
  })
  
  const getMessages = computed(()=>{
    return messages.value.reverse()
  })
  
  return {
    sendMessage,
    getMessages
  }
}

export default useFirebaseChat;
