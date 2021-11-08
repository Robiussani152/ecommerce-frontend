<template>
  <div class="flex justify-center my-6">
    <div
      class="
        flex flex-col
        w-full
        p-8
        text-gray-800
        bg-white
        shadow-lg
        pin-r pin-y
        md:w-4/5
        lg:w-4/5
      "
    >
      <div class="flex-1">
        <table class="w-full text-sm lg:text-base" cellspacing="0">
          <thead>
            <tr class="h-12 uppercase">
              <th class="hidden md:table-cell"></th>
              <th class="text-left">Product</th>
              <th class="lg:text-right text-left pl-5 lg:pl-0">
                <span class="lg:hidden" title="Quantity">Qtd</span>
                <span class="hidden lg:inline">Quantity</span>
              </th>
              <th class="hidden text-right md:table-cell">Unit price</th>
              <th class="text-right">Total price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in form.items" :key="index">
              <td class="hidden pb-4 md:table-cell">
                <a href="#">
                  <img :src="item.image" class="w-20 rounded" alt="Thumbnail" />
                </a>
              </td>
              <td>
                <p class="mb-2 md:ml-4">{{ item.name }}</p>
                <button
                  @click="removeItem(index)"
                  type="button"
                  class="text-gray-700 md:ml-4"
                >
                  <small>(Remove item)</small>
                </button>
              </td>
              <td class="justify-center md:justify-end md:flex mt-6">
                <div class="w-20 h-10">
                  <div class="relative flex flex-row w-full h-8">
                    <input
                      type="number"
                      v-model="item.quantity"
                      @keyup="calculateTotalAmount()"
                      @change="calculateTotalAmount()"
                      class="
                        w-full
                        font-semibold
                        text-center text-gray-700
                        bg-gray-200
                        outline-none
                        focus:outline-none
                        hover:text-black
                        focus:text-black
                      "
                    />
                  </div>
                </div>
              </td>
              <td class="hidden text-right md:table-cell">
                <span class="text-sm lg:text-base font-medium">
                  {{ item.price }}
                </span>
              </td>
              <td class="text-right">
                <span class="text-sm lg:text-base font-medium">
                  {{ item.total_price }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <hr class="pb-6 mt-6" />
        <div class="my-4 mt-6 -mx-2 lg:flex">
          <div class="lg:px-2 lg:w-1/2">
            <div class="p-4 bg-gray-100 rounded-full">
              <h1 class="ml-2 font-bold uppercase">Instruction for seller</h1>
            </div>
            <div class="p-4">
              <p class="mb-4 italic">
                If you have some information for the seller you can leave them
                in the box below
              </p>
              <textarea
                v-model="form.instruction"
                class="w-full h-24 p-2 bg-gray-100 rounded"
              ></textarea>
            </div>
          </div>
          <div class="lg:px-2 lg:w-1/2">
            <div class="p-4 bg-gray-100 rounded-full">
              <h1 class="ml-2 font-bold uppercase">Order Details</h1>
            </div>
            <div class="p-4">
              <div class="flex justify-between pt-4 border-b">
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    text-lg
                    lg:text-xl
                    font-bold
                    text-center text-gray-800
                  "
                >
                  Total
                </div>
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    lg:text-lg
                    font-bold
                    text-center text-gray-900
                  "
                >
                  {{ form.total_amount }}
                </div>
              </div>
              <button
                v-if="is_auth"
                type="button"
                class="
                  flex
                  justify-center
                  w-full
                  px-10
                  py-3
                  mt-6
                  font-medium
                  text-white
                  uppercase
                  bg-gray-800
                  rounded-full
                  shadow
                  item-center
                  hover:bg-gray-700
                  focus:shadow-outline focus:outline-none
                "
              >
                <svg
                  aria-hidden="true"
                  data-prefix="far"
                  data-icon="credit-card"
                  class="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                  />
                </svg>
                <span class="ml-2 mt-5px">Place Order</span>
              </button>
              <router-link
                to="/login"
                v-else
                class="
                  flex
                  justify-center
                  w-full
                  px-10
                  py-3
                  mt-6
                  font-medium
                  text-white
                  uppercase
                  bg-gray-800
                  rounded-full
                  shadow
                  item-center
                  hover:bg-gray-700
                  focus:shadow-outline focus:outline-none
                "
              >
                <svg
                  aria-hidden="true"
                  data-prefix="far"
                  data-icon="credit-card"
                  class="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                  />
                </svg>
                <span class="ml-2 mt-5px">Login/Register</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      form: {
        items: [],
        total_amount: 0,
        instruction: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      user: "get_user_info",
      is_auth: "get_autheticated",
    }),
  },
  mounted() {
    this.form.items = this.$store.getters["get_cart_items"];
    this.form.total_amount = this.$store.getters["get_cart_total_amount"];
    this.form.instruction = this.$store.getters["get_cart_instruction"];
  },
  methods: {
    removeItem(index) {
      this.form.items.splice(index, 1);
      this.calculateTotalAmount();
    },
    calculateTotalAmount() {
      let total_amount = 0;
      this.$store.commit("remove_all_cart_item");
      this.form.items.forEach((item, index) => {
        let item_total = item.quantity * item.price;
        this.form.items[index].total_price = item_total;
        total_amount += item_total;
        this.$store.commit("set_cart_item", this.form.items[index]);
      });
      this.form.total_amount = total_amount;
      this.$store.commit("set_total_amount", total_amount);
    },
  },
  watch: {
    "form.instruction": function (newVal, oldVal) {
      this.$store.commit("set_cart_instruction", newVal);
    },
  },
};
</script>

<style>
</style>