<template>
  <div class="flex flex-wrap">
    <section class="relative mx-auto">
      <!-- navbar -->
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <router-link
            to="/admin/products"
            class="text-3xl font-bold font-heading"
            >Talamus</router-link
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
            <li>
              <router-link to="/admin/products" class="hover:text-gray-200"
                >Products</router-link
              >
            </li>
            <li>
              <router-link to="/admin/orders" class="hover:text-gray-200"
                >Orders</router-link
              >
            </li>
          </ul>
          <!-- Header Icons -->
          <div>
            <ul class="flex items-center space-x-5 items-center">
              <li class="dropdown">
                <a class="flex items-center hover:text-gray-200" href="#">
                  Notifications
                </a>

                <ul class="dropdown-content bg-gray-900">
                  <li
                    v-for="(notification, index) in notifications"
                    :key="index"
                  >
                    {{ notification.message }}
                  </li>
                </ul>
              </li>
              <li>
                <a href="@" @click.prevent="$emit('logoutUser')">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: "AdminNavBar",
  data() {
    return {
      notifications: [],
    };
  },
  mounted() {
    this.listenForNotification();
  },
  methods: {
    listenForNotification() {
      let self = this;
      let pusher = new Pusher("16f5560676e67a8ddb31", {
        cluster: "ap2",
        encrypted: false,
      });
      let channel = pusher.subscribe("order-placed");
      channel.bind("new-order-received", function (data) {
        self.notifications.push(data);
      });
    },
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