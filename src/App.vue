<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">hello</RouterLink>
    <RouterLink to="/combo">Combo</RouterLink>
  </nav>

  <RouterView/>
</template>

<style>

</style>
