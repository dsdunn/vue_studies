<template>
  <div id="app">
    <StudyList :studies="studies" />
    <button>+ Add Study</button>
  </div>
</template>

<script>
import StudyList from './components/StudyList.vue'

export default {
  name: 'app',
  components: {
    StudyList
  },
  data: function() {
    return {
      studies: []
    }
  },
  mounted() {
    this.fetchStudies();
  },
  methods: {
    fetchStudies: async function () {
      let response = await fetch('https://www.cxsurveys.com/devtest/getStudyData.php');
      let result = await response.json();
      
      if (result) {
        let { studyData } = result;

        this.studies = studyData;
      }

    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
