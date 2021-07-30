<template>
  <section class="links">
    <div class="table-wrapper">
      <table>
        <tr v-for="(link, i) in links" :key="i">
          <td>{{ link.long }}</td>
          <td>{{ link.short }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Links',
    props: {
      links: {
        type: Object,
      },
    },
  };
</script>

<style scoped>
  .table-wrapper {
    margin-top: 20px;
  }
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    color: white;
    text-align: center;
    margin: auto;
    font-size: 1.2rem;
  }

  td,
  th {
    font-weight: 600;
    padding: 10px;
  }

  tr:nth-child(even) {
    background-color: #161f27;
    color: #ddd;
  }
  tr:nth-child(odd) {
    background-color: #0c1218;
    color: #ddd;
  }

  tr:hover {
    background-color: #292b2c;
    cursor: pointer;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #1e1e1e;
    color: white;
  }
</style>
