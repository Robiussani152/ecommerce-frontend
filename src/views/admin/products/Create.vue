<template>
  <div class="pr-20 pl-20 overflow-x-auto">
    <div class="container mt-2 flex justify-between">
      <h3 class="text-gray-700 text-2xl font-medium">Create new products</h3>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-full max-w-lg">
        <form
          @submit.prevent="submitForm()"
          class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-normal mb-2">
              Product name
            </label>
            <input
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              name="name"
              type="text"
              v-model="form.name"
              required
              autofocus
              placeholder="Product name"
            />
            <HasError :form="form" field="name" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-normal mb-2">
              Price
            </label>
            <input
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              name="price"
              type="text"
              required
              autofocus
              placeholder="Product price"
              v-model="form.price"
            />
            <HasError :form="form" field="price" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-normal mb-2">
              Quantity
            </label>
            <input
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              name="quantity"
              type="number"
              required
              autofocus
              placeholder="Product quantity"
              v-model="form.quantity"
            />
            <HasError :form="form" field="quantity" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-normal mb-2">
              Description
            </label>
            <textarea
              v-model="form.description"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              name="description"
              id="description"
              cols="30"
              placeholder="Enter description...."
              rows="5"
            ></textarea>
            <HasError :form="form" field="description" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-normal mb-2">
              Image
            </label>
            <input
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              type="file"
              name="image"
              @change="handleFileUpload"
            />
            <HasError :form="form" field="image" />
          </div>

          <div class="flex items-center justify-between">
            <button
              class="
                px-4
                py-2
                rounded
                text-white
                inline-block
                shadow-lg
                bg-blue-500
                hover:bg-blue-600
                focus:bg-blue-700
              "
              type="submit"
            >
              Save
            </button>
            <router-link
              class="
                inline-block
                align-baseline
                font-normal
                text-sm text-blue-500
                hover:text-blue-800
              "
              to="/admin/products"
              >Back</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { product } from "@/api/urls.js";
import Form from "vform";
export default {
  name: "CreateProduct",
  data() {
    return {
      form: new Form({
        name: "",
        description: "",
        quantity: "",
        price: "",
        image: "",
      }),
    };
  },

  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.form.image = file;
    },
    submitForm() {
      let self = this;
      self.$store.commit("set_is_loading", true);
      self.form
        .post(product)
        .then((res) => {})
        .finally((res) => {
          self.$store.commit("set_is_loading", false);
          self.$router.push({ name: "ProductsList" });
        });
    },
  },
};
</script>

<style>
</style>