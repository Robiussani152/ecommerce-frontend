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
              v-model="form.invoice_no"
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
              placeholder="Invoice No"
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
              >Invoice No :</label
            >
          </div>
          <div class="relative flex-none w-80">
            <select
              name="status"
              id="status"
              v-model="form.status"
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
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
            <label
              for="status"
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
              >Status :</label
            >
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button
            @click="orderSearch"
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
  name: "OrderFilter",
  data() {
    return {
      form: {
        invoice_no: "",
        status: "",
      },
    };
  },
  methods: {
    orderSearch() {
      this.$emit("search", this.form);
    },
  },
};
</script>

<style>
</style>