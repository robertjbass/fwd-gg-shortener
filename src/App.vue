<template>
  <section class="app">
    <div id="nav">
      <a
        class="link"
        :style="
          path === '/home' || path === '/' ? 'color: #42b983' : 'color: #2c3e50'
        "
        @click="setPath('home')"
        >Home</a
      >
      |
      <a
        class="link"
        :style="path === '/links' ? 'color: #42b983' : 'color: #2c3e50'"
        @click="setPath('links')"
        >Links</a
      >
    </div>
    <img class="image" src="./assets/weiner.png" alt="weiner-dog" />
    <div v-show="path === '/home' || path === '/'">
      <Main @newDBEntryHandler="newDBEntryHandler" />
    </div>
    <div v-show="path === '/links'">
      <Links :links="links" />
    </div>
  </section>
</template>

<script>
  import Main from './components/Main.vue';
  import Links from './components/Links.vue';
  import { db } from '@/firebase.js';
  export default {
    name: 'App',
    data() {
      return {
        path: '/',
        viewInput: true,
        links: [],
        companyName: 'demo',
        goToLocation: '/',
      };
    },
    created() {
      this.getLinks();
    },
    mounted() {
      setTimeout(() => {
        this.checkPath();
      }, 1000);
    },
    methods: {
      cleanLong(value) {
        let returnVal = value
          .split('https://')
          .join('')
          .split('http://')
          .join('');
        const lastChar = returnVal[returnVal.length - 1];
        if (lastChar === '/') {
          returnVal = returnVal.substr(0, returnVal.length - 1);
        }
        console.log(returnVal);
        return returnVal;
      },
      async newDBEntryHandler({ long, short }) {
        this.links.push({
          long: this.cleanLong(long),
          short: short,
        });
        await db
          .collection('users')
          .doc(this.companyName)
          .set({ links: this.links });
        this.getLinks();
        alert(`Saved ${long} as ${short}`);
      },
      checkPath() {
        const windowPath = window.location.pathname;
        if (windowPath.includes('/to')) {
          let shortQuery = windowPath.split('/to/')[1];
          console.log({ shortQuery });
          this.links.forEach((link) => {
            console.log({ link });
            if (link.short === shortQuery) {
              console.log({ long: link.long, short: link.short });
              let goToLocation = 'https://' + link.long;
              console.log({ goToLocation: this.goToLocation });
              window.location = goToLocation;
            }
          });
        }
      },
      setPath(value) {
        this.path = '/' + value;
      },

      async getLinks() {
        this.links = [];
        db.collection('users')
          .get()
          .then((data) => {
            data.forEach((doc) => {
              console.log(doc.id, this.companyName);
              if (doc.id === this.companyName) {
                const links = doc.data().links;
                this.links = links;
              }
            });
          });
      },
    },
    components: {
      Main,
      Links,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px 0;
  }

  .link {
    cursor: pointer;
    font-weight: 600;
  }

  .image {
    width: 25%;
  }
</style>
