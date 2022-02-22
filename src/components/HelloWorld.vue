<script setup lang="ts">
import { ref } from 'vue'
import '../assets/styles/hello-world.less'

defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>
