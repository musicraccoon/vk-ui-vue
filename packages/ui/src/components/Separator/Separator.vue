<template>
  <RootComponent
    :class="[modeClassNames[mode], !wide && styles['Separator--padded']]"
  >
    <hr :class="styles['Separator__in']" />
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";
import type { SeparatorProps } from "./types";
import styles from "./Separator.module.css";

withDefaults(defineProps<SeparatorProps>(), {
  mode: "primary",
});

const modeClassNames = {
  primary: styles["Separator--mode-primary"],
  secondary: styles["Separator--mode-secondary"],
  "primary-alpha": styles["Separator--mode-primaryAlpha"],
};
</script>
