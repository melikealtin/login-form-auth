<template>
  <main>
    <section class="flex min-h-screen">
      <form
        class="flex-1 pt-32 pb-4 px-4 flex flex-col items-center text-white bg-indigo-950 bg-gradient-to-br from-indigo-900 to-indigo-950"
        @submit.prevent="register"
      >
        <h2 class="text-3xl uppercase mb-8">Register</h2>
        <input
          class="input bg-transparent text-white opacity-80 transition focus:opacity-100 placeholder-text-current border-b-2 border-solid border-white"
          type="email"
          placeholder="Email address"
          v-model="register_form.email"
        />
        <input
          class="input bg-transparent text-white opacity-80 transition focus:opacity-100 placeholder-text-current border-b-2 border-solid border-white"
          type="password"
          placeholder="password"
          v-model="register_form.password"
        />
        <input
          class="input bg-white text-indigo-950 font-bold py-4 px-8 rounded-lg cursor-pointer uppercase"
          type="submit"
          value="Register"
        />
      </form>
      <form
        class="flex-1 pt-32 pb-4 px-4 flex flex-col items-center"
        @submit.prevent="login"
      >
        <h2 class="text-3xl uppercase mb-8">Login</h2>
        <input
          class="input bg-transparent text-black opacity-80 transition focus:opacity-100 placeholder-text-current text-indigo-950 border-b-2 border-solid border-indigo-950"
          type="email"
          placeholder="Email address"
          v-model="login_form.email"
        />
        <input
          class="input bg-transparent text-black opacity-80 transition focus:opacity-100 placeholder-text-current text-indigo-950 border-b-2 border-solid border-indigo-950"
          type="password"
          placeholder="password"
          v-model="login_form.password"
        />
        <input
          class="input bg-indigo-900 text-white font-bold py-4 px-8 rounded-lg cursor-pointer uppercase"
          type="submit"
          value="Login"
        />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };
    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>
