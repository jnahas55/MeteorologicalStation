<template>
  <div id="app">
    <station-header></station-header>
    <dashboard id="content"></dashboard>
    
  </div> 
  
</template>

<script>
import Header from './components/Header.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    'dashboard': Dashboard,
    'station-header': Header
  }
}
</script>

<style>

#content{
    margin-top: 9.5%

}

</style>
