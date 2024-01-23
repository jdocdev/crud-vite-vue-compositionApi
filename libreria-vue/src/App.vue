<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>   
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/createbook">Nuevo Libro</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
