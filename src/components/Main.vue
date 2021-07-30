<template>
  <section class="main">
    <h2>Please enter a URL to create a link</h2>
    <input type="text" v-model="longURL" />
    <h2>Please enter a URL suffix</h2>
    <input type="text" v-model="shortURL" />
    <br />
    <button class="btn_success" @click="newDBEntryHandler">Add</button>
  </section>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        longURL: '',
        shortURL: '',
      };
    },
    methods: {
      async newDBEntryHandler() {
        this.$emit('newDBEntryHandler', {
          long: this.longURL,
          short: this.shortURL,
        });

        this.longURL = '';
        this.shortURL = '';
      },
    },
  };
</script>

<style scoped>
  input {
    margin: auto;
    width: 80%;
    font-size: 2rem;
    text-align: center;
  }
  button {
    width: 200px;
  }
  .btn_success {
    background-color: #5cb85c;
    color: black;
    font-weight: 600;
  }
  .btn_neutral {
    background-color: #0275d8;
    color: white;
    font-weight: 600;
  }
  .links {
    justify-content: left;
  }
  .link {
    color: white;
    list-style-type: none;
  }
</style>
