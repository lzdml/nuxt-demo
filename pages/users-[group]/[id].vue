<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>


<script setup lang="ts">
const route = useRoute();

console.log('route :>> ', route);
</script>