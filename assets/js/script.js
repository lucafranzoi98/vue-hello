const { createApp } = Vue

  createApp({
    data() {
      return {
        title: "Vue Hello",
        img: "https://picsum.photos/200/300",
        orangeText: "orange"
      }
    }
   }).mount('#app')