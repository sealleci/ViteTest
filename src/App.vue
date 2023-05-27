<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const button_info_list: { name: string, path: string }[] = [
  {
    name: 'Hello',
    path: '/hello'
  },
  {
    name: 'Privet',
    path: '/privet'
  }
]

function changeRouting(path: string) {
  // const cur_routing_path: string[] = route.fullPath.split('/')
  // let prefix_index: number = 0

  // for (let i = 0; i < cur_routing_path.length; i++) {
  //   if (cur_routing_path[i] === 'dist') {
  //     prefix_index = i
  //     break
  //   }
  // }

  // const new_routing_path: string = cur_routing_path.slice(0, prefix_index + 1).join('/') + path

  // console.log(new_routing_path)
  // router.push(new_routing_path)

  router.push(path)
}
</script>

<template>
  <div class="button_row">
    <button v-for="(button_info, i) in button_info_list" :key="i" @click="changeRouting(button_info.path)">
      {{ button_info.name }}
    </button>
  </div>
  <main>
    <router-view />
  </main>
</template>

<style scoped lang="less">
.button_row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  button {
    margin: .5rem 0rem .5rem 1rem;
    padding: .25rem;
    font-size: 1rem;
    cursor: pointer;
  }
}

main {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
}
</style>
