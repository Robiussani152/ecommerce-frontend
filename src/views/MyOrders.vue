<template>
  <div class="pr-20 pl-20 overflow-x-auto">
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
            Status
          </th>
          <th class="px-6 py-3 border-b-2 border-gray-300"></th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div class="flex items-center">
              <div>
                <div class="text-sm leading-5 text-gray-800">#1</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div class="text-sm leading-5">Damilare Anjorin</div>
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
            damilareanjorin1@gmail.com
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
              <span class="relative text-xs">active</span>
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
              View Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyOrders",
};
</script>

<style>
</style>