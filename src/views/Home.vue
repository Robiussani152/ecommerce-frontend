<template>
  <div class="container">
    <ProductFilter @search="searchResult"></ProductFilter>
    <main class="my-8">
      <div class="container mx-auto px-6">
        <h3 class="text-gray-700 text-2xl font-medium">Products</h3>
        <div
          class="
            grid
            gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            mt-6
          "
        >
          <div
            class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
            v-for="(product, index) in products.data"
            :key="index"
          >
            <div
              class="flex items-end justify-end h-56 w-full bg-cover"
              v-bind:style="{ backgroundImage: 'url(' + product.image + ')' }"
            >
              <button
                @click="addToCart(product.id)"
                type="button"
                class="
                  p-2
                  rounded-full
                  bg-blue-600
                  text-white
                  mx-5
                  -mb-4
                  hover:bg-blue-500
                  focus:outline-none focus:bg-blue-500
                "
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="px-5 py-3">
              <h3 class="text-gray-700 uppercase">{{ product.name }}</h3>
              <span class="text-gray-500 mt-2">BDT {{ product.price }}</span>
            </div>
          </div>
        </div>
        <div class="flex self-center">
          <pagination :data="products" @pagination-change-page="getAllProducts">
          </pagination>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ProductFilter from "@/components/ProductFilter.vue";
import { product } from "@/api/urls";
export default {
  name: "Home",
  components: {
    ProductFilter,
  },
  data() {
    return {
      products: {},
      form: {
        query_string: "",
        order_col: "name",
        order: "asc",
      },
    };
  },
  mounted() {
    this.getAllProducts();
  },
  methods: {
    getAllProducts(page = 1) {
      let self = this;
      self.$store.commit("set_is_loading", true);
      self.form.page = page;
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
    searchResult(e) {
      this.form = e;
      this.getAllProducts();
    },
    addToCart(pId) {
      let product = this.products.data.find((item) => item.id == pId);
      let data = {
        product_id: product.id,
        price: product.price,
        quantity: 1,
        total_price: product.price,
        image: product.image,
        name: product.name,
      };
      this.$store.commit("set_cart_item", data);
      this.$toastr.s("Product added to the cart!");
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
