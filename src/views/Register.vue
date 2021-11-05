<template>
  <div class="container">
    <div class="flex items-center justify-center mt-2">
      <div class="w-full max-w-md">
        <form class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <!-- @csrf -->
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
            Ecommerce Register
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-normal mb-2"
              for="name"
            >
              Name
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
              name="name"
              v-model="form.name"
              type="text"
              required
              autofocus
              placeholder="name"
            />
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
          </div>
          <div class="mb-4">
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
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-normal mb-2"
              for="password_confirm"
            >
              Password Confirmation
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
              placeholder="Password Confirmation"
              name="password_confirmation"
              required
              autocomplete="current-password"
            />
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
              to="/login"
              >Already have an account?</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
};
</script>

<style>
</style>