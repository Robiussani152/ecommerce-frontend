<template>
  <div class="pr-20 pl-20 overflow-x-auto">
    <div class="container mt-2 flex justify-between">
      <h3 class="text-gray-700 text-2xl font-medium">Products</h3>
      <form @submit.prevent="getAllProducts()">
        <input
          type="text"
          v-model="form.query_string"
          class="border-2 m-1"
          placeholder="Enter product"
        />
      </form>
      <router-link to="/admin/products/create">Create</router-link>
    </div>
    <hr />
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
              text-left text-sm
              leading-4
              text-gray-900
              tracking-wider
            "
          >
            Product name
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
            Price
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
            Quantity
          </th>
          <th class="px-6 py-3 border-b-2 border-gray-300"></th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr v-for="(product, index) in products.data" :key="index">
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div class="flex items-center">
              <div>
                <div class="text-sm leading-5 text-gray-800">
                  #{{ product.id }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div class="text-sm leading-5">{{ product.name }}</div>
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
            {{ product.price }}
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
              <span class="relative text-xs">{{ product.quantity }}</span>
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
              :to="`/admin/products/${product.id}/edit`"
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
            <button
              @click="deleteThisItem(product.id)"
              type="button"
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
              Delete
            </button>
            <button
              @click="openModal('mymodalcentered', product.id)"
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
              Update Quantity
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex self-center">
      <pagination :data="products" @pagination-change-page="getAllProducts">
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
              <form @submit.prevent="updateStock()">
                <input
                  type="number"
                  v-model="modalData.quantity"
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
                    p-3
                  "
                  required
                />
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
                  Update Stock
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
import { product, update_product_stock } from "@/api/urls";
export default {
  name: "ProductsList",
  data() {
    return {
      products: {},
      form: {
        query_string: "",
        order_col: "id",
        order: "asc",
      },
      modalData: {
        product_id: "",
        quantity: 0,
      },
    };
  },
  mounted() {
    this.getAllProducts();
  },
  methods: {
    openModal(key, pId) {
      document.getElementById(key).showModal();
      document.body.setAttribute("style", "overflow: hidden;");
      document.getElementById(key).children[0].scrollTop = 0;
      document.getElementById(key).children[0].classList.remove("opacity-0");
      document.getElementById(key).children[0].classList.add("opacity-100");
      this.modalData.product_id = pId;
    },
    modalClose(key) {
      document.getElementById(key).children[0].classList.remove("opacity-100");
      document.getElementById(key).children[0].classList.add("opacity-0");
      setTimeout(function () {
        document.getElementById(key).close();
        document.body.removeAttribute("style");
      }, 100);
    },
    getAllProducts(page = 1) {
      let self = this;
      self.$store.commit("set_is_loading", true);
      self.$axios
        .get(
          `${product}?page=${page}&query_string=${self.form.query_string}&order_col=${self.form.order_col}&order=${self.form.order}`
        )
        .then((res) => {
          self.products = res.data;
        })
        .finally((res) => {
          self.$store.commit("set_is_loading", false);
        });
    },
    updateStock() {
      let self = this;
      self.$store.commit("set_is_loading", true);
      self.$axios
        .post(update_product_stock, this.modalData)
        .then((res) => {
          self.$toastr.s("Successfully updated product stock!");
        })
        .finally((res) => {
          self.modalClose("mymodalcentered");
          self.getAllProducts();
        });
    },
    deleteThisItem(pId) {
      let self = this;
      self
        .$swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover it!",
          icon: "warning",
          buttons: true,
          showConfirmButton: true,
          confirmButtonText: "Yes, delete it!",
          showCancelButton: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            self.$store.commit("set_is_loading", true);
            self.$axios.delete(`${product}/${pId}`).finally((res) => {
              self.getAllProducts();
            });
          }
        });
    },
  },
};
</script>

<style>
.pagination {
  display: inline-block;
}

.pagination li {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
</style>