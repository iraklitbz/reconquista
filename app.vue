<template>
  <div>
    <button @click="SendEmail">Send Email</button>
  </div>
</template>

<script setup>
const SendEmail = async () => {
 let msg = {
  "personalizations": [
   {
    to: [
     {
      email: "irakli@foodticket.nl",
      name: "irakli"
     }
    ] 
   }
  ],
  "from": {
   email: "iraklitbz@gmail.com",
   name: "Reconquista"
  },
  "subject": "Test message!",
  "content": [
   {
    type: "text/plain",
    value: "Test message"
   },
   {
    type: "text/html",
    value: "<h1>Test message!</h1>"
   }
  ]
 }
 const { data } = await useFetch("/api/sendgrid", {
  method: "POST",
  body: msg
 });
  console.log(data.value);
}
</script>
