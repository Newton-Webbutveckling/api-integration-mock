<template>
  <div id="app">
    <button @click="flag = !flag">Click</button>
    <transition name="fade">
      <section v-if="loading">
        <h1>Loading</h1>
      </section>
      <section v-else>
        <ul>
          <li v-for="character in characters" :key="character.name">
            {{character.name}}
          </li>
        </ul>
      </section>
    </transition>
  </div>
</template>
<script>
import * as API from '@/api'

export default {
  data(){ return {
    loading: true,
    characters: []
  }},

  async mounted(){
    this.characters = await API.fetchCharacters()
    this.loading = false
  }

}
</script>

<style lang="scss">
.fade-enter{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity 2s;
}

.fade-leave{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: opacity 2s;
}
</style>
