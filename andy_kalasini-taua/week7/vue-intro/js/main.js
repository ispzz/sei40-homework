// console.log('main.js loaded');
// console.log( Vue );
const myApp = new Vue({

  // Where does this Vue app attach to on the DOM?
  el: '#app',

  data: {
    message: 'Hello Vuorld!',
    secretGreeting: 'You loaded this page on ' + new Date().toLocaleString()
  },

  methods: {
    changeMessage: function(){
      console.log('Button clicked!');
      this.message = this.message.toUpperCase();
    }, // changeMessage

    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('');
    } //reverseMessage

  }, // methods


});
