<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
});

const aHref = computed(() => {
  return `https://modrinth.com/${props.path}`;
});

const ImageAlt = computed(() => {
  return `${props.name} Modrinth Badge`;
});
</script>

<template>
  <a :href="aHref" class="custom-badge"><img src="https://img.shields.io/badge/Modrinth-313338?style=for-the-badge&logo=Modrinth" :alt="ImageAlt" /></a>
</template>
