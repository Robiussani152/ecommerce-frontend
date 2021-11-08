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
            <li>
              <router-link
                to="/admin/delivered-order"
                class="hover:text-gray-200"
                >Delivered Orders</router-link
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
                  <li>Test notification 1</li>
                  <li>Test notification 2</li>
                  <li>Test notification 3</li>
                  <li>Test notification 4</li>
                </ul>
              </li>
              <li><a href="">Logout</a></li>
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