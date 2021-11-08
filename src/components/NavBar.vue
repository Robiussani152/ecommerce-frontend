<template>
  <div class="flex flex-wrap">
    <section class="relative mx-auto">
      <!-- navbar -->
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <router-link to="/" class="text-3xl font-bold font-heading"
            >E-Commerce</router-link
          >
          <!-- Nav Links -->
          <ul
            class="
              hidden
              md:flex
              px-4
              mx-auto
              font-semibold font-heading
              space-x-12
            "
          >
            <li v-if="!is_auth">
              <router-link to="/login" class="hover:text-gray-200"
                >Login</router-link
              >
            </li>
            <li v-if="!is_auth">
              <router-link to="/register" class="hover:text-gray-200"
                >Register</router-link
              >
            </li>
          </ul>
          <!-- Header Icons -->
          <div>
            <ul class="flex items-center space-x-5 items-center">
              <li>
                <router-link
                  class="flex items-center hover:text-gray-200"
                  to="/cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </router-link>
              </li>
              <li class="dropdown" v-if="is_auth">
                <a class="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
                <ul class="dropdown-content bg-gray-900">
                  <li><router-link to="/my-orders">My Orders</router-link></li>
                </ul>
              </li>

              <li v-if="is_auth">
                <a href="#" @click.prevent="$emit('logoutUser')">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "get_user_info",
      is_auth: "get_autheticated",
    }),
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  left: -130px;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>