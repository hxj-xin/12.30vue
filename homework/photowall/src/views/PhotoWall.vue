<template>
  <div class="home">
    <Photo v-on="$listeners"></Photo>
  </div>
</template>

<script>
// @ is an alias to /src
import Photo from '@/components/Photo.vue'

export default {
  name: 'PhotoWall',
  components: {
    Photo
  }
}
</script>
