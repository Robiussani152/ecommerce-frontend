<template>
  <div class="pr-20 pl-20 overflow-x-auto">
    <div class="container mt-2 flex justify-between">
      <h3 class="text-gray-700 text-2xl font-medium">Products</h3>
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
            <router-link
              to="/admin/products/1/edit"
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
              @click="openModal('mymodalcentered')"
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
        <div class="bg-white flex rounded-lg w-1/2 relative">
          <div class="flex flex-col items-start">
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
              <p>First Line</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div class="p-7 flex justify-end items-center w-full">
              <button
                type="button"
                class="
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  mr-3
                "
              >
                Ok
              </button>
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
export default {
  name: "ProductsList",
  methods: {
    openModal(key) {
      document.getElementById(key).showModal();
      document.body.setAttribute("style", "overflow: hidden;");
      document.getElementById(key).children[0].scrollTop = 0;
      document.getElementById(key).children[0].classList.remove("opacity-0");
      document.getElementById(key).children[0].classList.add("opacity-100");
    },
    modalClose(key) {
      document.getElementById(key).children[0].classList.remove("opacity-100");
      document.getElementById(key).children[0].classList.add("opacity-0");
      setTimeout(function () {
        document.getElementById(key).close();
        document.body.removeAttribute("style");
      }, 100);
    },
  },
};
</script>

<style>
</style>