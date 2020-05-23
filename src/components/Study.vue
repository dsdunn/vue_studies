<template>
  <table>
    <tr>
      <th>
        {{ study.id }}
      </th>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'Study',
    props: {
      study: Object
    }
  }
</script>