<script setup lang="ts"></script>
<template lang="pug">
div
  pre.label app.vue ==> {{ $route.fullPath }}
  NuxtLayout
    NuxtPage
</template>
