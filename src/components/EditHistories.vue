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
            <tr v-for="(item, index) in order.details" :key="index">
              <td class="hidden pb-4 md:table-cell">
                <a href="#">
                  <img
                    :src="item.product.image"
                    class="w-20 rounded"
                    alt="Thumbnail"
                  />
                </a>
              </td>
              <td>
                <p class="mb-2 md:ml-4">{{ item.product.name }}</p>
              </td>
              <td class="hidden text-right md:table-cell">
                <span class="text-sm lg:text-base font-medium">
                  {{ item.quantity }}
                </span>
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
                {{ order.instruction }}
              </p>
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
                  {{ order.total_amount }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditHistories",
  props: ["order"],
};
</script>

<style>
</style>