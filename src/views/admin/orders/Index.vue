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
            <button
              @click="openModal('mymodalcentered', order.id, order.status)"
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
              Update Status
            </button>
            <router-link
              :to="`/admin/orders/${order.id}`"
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
    <dialog
      id="mymodalcentered"
      class="bg-transparent z-0 relative w-screen h-screen"
    >
      <div
        class="
          p-7
          flex
          justify-center
          items-center
          fixed
          left-0
          top-0
          w-full
          h-full
          bg-gray-900 bg-opacity-50
          z-50
          transition-opacity
          duration-300
          opacity-0
        "
      >
        <div class="bg-white rounded-lg w-1/2 relative">
          <div class="flex-col items-start">
            <div class="p-7 flex items-center w-full">
              <div class="text-gray-900 font-bold text-lg">Modal Centered</div>
              <svg
                @click="modalClose('mymodalcentered')"
                class="
                  ml-auto
                  fill-current
                  text-gray-700
                  w-5
                  h-5
                  cursor-pointer
                "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>

            <div
              class="px-7 overflow-x-hidden overflow-y-auto"
              style="max-height: 40vh"
            >
              <form @submit.prevent="updateOrderStatus()">
                <select
                  name="status"
                  id="status"
                  v-model="modalData.status"
                  class="
                    peer
                    h-10
                    w-full
                    border border-1.5
                    rounded-md
                    border-gray-300
                    text-gray-900
                    placeholder-transparent
                    focus:outline-none focus:border-red-600 focus:border-2
                  "
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
                <button
                  type="submit"
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                    mr-3
                    mt-2
                  "
                >
                  Update Order status
                </button>
              </form>
            </div>

            <div class="p-7 flex justify-end items-center w-full">
              <button
                type="button"
                @click="modalClose('mymodalcentered')"
                class="
                  bg-transparent
                  hover:bg-gray-500
                  text-blue-700
                  font-semibold
                  hover:text-white
                  py-2
                  px-4
                  border border-blue-500
                  hover:border-transparent
                  rounded
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
import OrderFilter from "@/components/OrderFilter.vue";
import { orders, update_order_status } from "@/api/urls";
export default {
  name: "AdminOrders",
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
      modalData: {
        order_id: "",
        status: "",
      },
    };
  },
  mounted() {
    this.getAllOrders();
  },
  methods: {
    openModal(key, pId, status) {
      document.getElementById(key).showModal();
      document.body.setAttribute("style", "overflow: hidden;");
      document.getElementById(key).children[0].scrollTop = 0;
      document.getElementById(key).children[0].classList.remove("opacity-0");
      document.getElementById(key).children[0].classList.add("opacity-100");
      this.modalData.order_id = pId;
      this.modalData.status = status;
    },
    modalClose(key) {
      document.getElementById(key).children[0].classList.remove("opacity-100");
      document.getElementById(key).children[0].classList.add("opacity-0");
      setTimeout(function () {
        document.getElementById(key).close();
        document.body.removeAttribute("style");
      }, 100);
    },
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
    updateOrderStatus() {
      let self = this;
      self.$store.commit("set_is_loading", true);
      self.$axios
        .post(`${update_order_status}/${self.modalData.order_id}`, {
          status: self.modalData.status,
        })
        .then((res) => {
          self.modalClose("mymodalcentered");
        })
        .finally((res) => {
          self.getAllOrders();
        });
    },
  },
};
</script>

<style>
</style>