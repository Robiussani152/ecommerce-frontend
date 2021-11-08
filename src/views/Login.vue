<template>
  <div class="container">
    <div class="flex items-center justify-center">
      <div class="w-full max-w-md">
        <form
          @submit.prevent="submitForm()"
          class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
        >
          <div
            class="
              text-gray-800 text-2xl
              flex
              justify-center
              border-b-2
              py-2
              mb-4
            "
          >
            Ecommerce Login
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-normal mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              name="email"
              v-model="form.email"
              type="email"
              required
              autofocus
              placeholder="Email"
            />
            <HasError :form="form" field="email" />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-normal mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                mb-3
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="form.password"
              type="password"
              placeholder="Password"
              name="password"
              required
              autocomplete="current-password"
            />
            <HasError :form="form" field="password" />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="
                px-4
                py-2
                rounded
                text-white
                inline-block
                shadow-lg
                bg-blue-500
                hover:bg-blue-600
                focus:bg-blue-700
              "
              type="submit"
            >
              Sign In
            </button>
            <router-link
              class="
                inline-block
                align-baseline
                font-normal
                text-sm text-blue-500
                hover:text-blue-800
              "
              to="/register"
              >Create Account</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/urls.js";
import Form from "vform";
export default {
  name: "Login",
  data() {
    return {
      form: new Form({
        email: "",
        password: "",
      }),
    };
  },
  methods: {
    submitForm() {
      let self = this;
      self.$store.commit("set_is_loading", true);
      self.form
        .post(login)
        .then((res) => {
          if (res.data.status == "success") {
            self.$store.commit(
              "insert_access_token",
              res.data.data.access_token
            );
            self.$store.commit("add_user_info", res.data.data.user);
            self.$router.push({ name: "Home" });
          }
        })
        .finally((res) => self.$store.commit("set_is_loading", false));
    },
  },
};
</script>

<style>
</style>