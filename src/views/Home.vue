<template>
  <div>
    Test
    <primary-nav foo="gizmo" />
    <primary-nav foo="gremlin asdf" />
  </div>
</template>

<script>
import PrimaryNav from '../components/PrimaryNav/PrimaryNav'

export default {
  name: 'Home',
  components: {
    'primary-nav': PrimaryNav
  }
}
</script>
