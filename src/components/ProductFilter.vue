<template>
  <div class="flex items-center">
    <div class="inset-x-auto w-full z-10">
      <div class="w-2/3 mx-auto shadow-md rounded-md p-4 bg-white">
        <div class="flex gap-2 flex-col md:flex-row center pt-3">
          <div class="relative flex-grow">
            <input
              id="name"
              name="name"
              type="text"
              v-model="form.query_string"
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
              placeholder="quelquechose"
            />
            <label
              for="name"
              class="
                absolute
                left-2
                px-1
                -top-2.5
                bg-white
                text-red-600 text-sm
                transition-all
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-900
                peer-placeholder-shown:top-2
                peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm
              "
              >Product name :</label
            >
          </div>
          <div class="relative flex-none w-80">
            <select
              name="price_order"
              id="price_order"
              v-model="form.order"
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
              <option value="desc">High to low</option>
              <option value="asc">Low to High</option>
            </select>
            <label
              for="departure"
              class="
                absolute
                left-2
                px-1
                -top-2.5
                bg-white
                text-red-600 text-sm
                transition-all
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-900
                peer-placeholder-shown:top-2
                peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm
              "
              >Price Order :</label
            >
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button
            @click="productSearch"
            class="
              bg-gray-900
              text-white
              font-extrabold
              text-lg
              rounded-full
              px-6
              py-3
            "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductFilter",
  data() {
    return {
      form: {
        query_string: "",
        order_col: "price",
        order: "asc",
      },
    };
  },
  methods: {
    productSearch() {
      this.$emit("search", this.form);
    },
  },
};
</script>

<style>
</style>