<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ foo }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PrimaryNav extends Vue {
  @Prop() private foo!: string

  data() {
    return {
      title: 'hello joe',
    }
  }
}
</script>
