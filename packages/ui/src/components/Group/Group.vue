<template>
  <GroupContainer>
    <slot />
  </GroupContainer>
</template>

<script setup lang="ts">
import GroupContainer from "./GroupContainer.vue";
import type { GroupProps } from "./types";

defineProps<GroupProps>();
</script>

<style scoped></style>
