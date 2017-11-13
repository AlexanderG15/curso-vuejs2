<template>
  <div id="app">
    <transition name="scale">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
<style src="./assets/beeper.css"></style>