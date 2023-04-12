const {createApp} = Vue;

createApp({
  data() {
    return {
      message: 'Hello World!!',
      image: './img/helloworld.png'
    };
  }
}).mount('#app');