<template>
  <div class="pr-20 pl-20 overflow-x-auto">
    <OrderFilter @search="orderFilter" />
    <table class="min-w-full">
      <thead>
        <tr>
          <th
            class="
              px-6
              py-3
              border-b-2 border-gray-300
              text-left
              leading-4
              text-gray-900
              tracking-wider
            "
          >
            ID
          </th>
          <th
            class="
              px-6
              py-3
              border-b-2 border-gray-300
              text-left
              leading-4
              text-gray-900
              tracking-wider
            "
          >
            customer
          </th>
          <th
            class="
              px-6
              py-3
              border-b-2 border-gray-300
              text-left text-sm
              leading-4
              text-gray-900
              tracking-wider
            "
          >
            Amount
          </th>
          <th
            class="
              px-6
              py-3
              border-b-2 border-gray-300
              text-left text-sm
              leading-4
              text-gray-900
              tracking-wider
            "
          >
            Date
          </th>
          <th
            class="
              px-6
              py-3
              border-b-2 border-gray-300
              text-left text-sm
              leading-4
              text-gray-900
              tracking-wider
            "
          >
            Status
          </th>
          <th class="px-6 py-3 border-b-2 border-gray-300"></th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr v-for="(order, index) in orders.data" :key="index">
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div class="flex items-center">
              <div>
                <div class="text-sm leading-5 text-gray-800">
                  #{{ order.invoice_no }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div class="text-sm leading-5">
              {{ order.customer ? order.customer.name : "" }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div class="text-sm leading-5">
              {{ order.total_amount }}
            </div>
          </td>
          <td
            class="
              px-6
              py-4
              whitespace-no-wrap
              border-b border-gray-500
              text-sm
              leading-5
            "
          >
            {{
              new Date(order.created_at)
                .toJSON()
                .slice(0, 10)
                .replace(/-/g, "/")
            }}
          </td>
          <td
            class="
              px-6
              py-4
              whitespace-no-wrap
              border-b border-gray-500
              text-sm
              leading-5
            "
          >
            <span
              class="
                relative
                inline-block
                px-3
                py-1
                font-semibold
                text-green-900
                leading-tight
              "
            >
              <span
                aria-hidden
                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span class="relative text-xs">{{ order.status }}</span>
            </span>
          </td>
          <td
            class="
              px-6
              py-4
              whitespace-no-wrap
              text-right
              border-b border-gray-500
              text-sm
              leading-5
            "
          >
            <router-link
              v-if="order.status == 'pending'"
              :to="`/order-edit/${order.id}`"
              class="
                px-5
                py-2
                border-blue-500 border
                text-gray-900
                rounded
                transition
                duration-300
                hover:bg-blue-700 hover:text-white
                focus:outline-none
              "
            >
              Edit
            </router-link>
            <router-link
              :to="`/orders-details/${order.id}`"
              class="
                ml-1
                px-5
                py-2
                border-blue-500 border
                text-gray-900
                rounded
                transition
                duration-300
                hover:bg-blue-700 hover:text-white
                focus:outline-none
              "
            >
              View Details
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex self-center">
      <pagination :data="orders" @pagination-change-page="getAllOrders">
      </pagination>
    </div>
  </div>
</template>

<script>
import OrderFilter from "@/components/OrderFilter.vue";
import { orders } from "@/api/urls";
export default {
  name: "MyOrders",
  components: {
    OrderFilter,
  },
  data() {
    return {
      form: {
        invoice_no: "",
        status: "",
      },
      orders: [],
    };
  },
  mounted() {
    this.getAllOrders();
  },
  methods: {
    getAllOrders(page = 1) {
      let self = this;
      self.$store.commit("set_is_loading", true);
      self.form.page = page;
      self.$axios
        .get(
          `${orders}?page=${page}&invoice_no=${self.form.invoice_no}&status=${self.form.status}`
        )
        .then((res) => {
          self.orders = res.data.data;
        })
        .finally((res) => {
          self.$store.commit("set_is_loading", false);
        });
    },
    orderFilter(e) {
      this.form = e;
      this.getAllOrders();
    },
  },
};
</script>

<style>
</style>