<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h1 class="text-6xl text-gray-400 border-b-4 py-4">Chat</h1>
    <div class="mt-4">
      <label>input your name</label>
      <input class="border rounded-lg ml-2 px-2" v-model="name" />
      <label>input your message</label>
      <input @keydown.enter="chat" class="border rounded-lg ml-2 px-2" v-model="chatMessage" >
      <button class="ml-2 border rounded-lg px-2 py-1" @click="chat" :disabled="name.length < 1" >send</button>
    </div>
    <div class="mt-8 border rounded-lg border-indigo-100 p-4">
      <div class="text-gray-400 text-lg"  v-for="message in messages" :key="message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import useFirebaseChat from "@/compositions/firebase";

export default {
  setup(){
    const { sendMessage, getMessages } = useFirebaseChat();

    const name = ref<string>("")
    const chatMessage = ref<string>("")

    const chat = () => {
      sendMessage(`[${ name.value }]: ${chatMessage.value}`)
      chatMessage.value = ""
    }

    return {
      name,
      chatMessage,
      chat,
      messages:getMessages
    }
  }
}
</script>
