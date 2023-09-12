<template>
  <div class="flex items-center justify-center" v-if="$store.state.user">
    <RouterLink class="bg-indigo-900 btn" to="/">Home</RouterLink>
    <RouterLink class="bg-indigo-900 btn" to="/about">About</RouterLink>
    <button class="bg-gray-800 btn" @click="$store.dispatch('logout')">
      Logout
    </button>
  </div>

  <RouterView />
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
};
</script>
