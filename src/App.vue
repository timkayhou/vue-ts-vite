<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import json from '../public/app.json'
import './assets/styles/app.less'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/images/logo.png" />
  <HelloWorld :msg="json.msg" />
</template>
