export default {
  set_cart_item(state, data) {
    let findProduct = state.items.find(
      (item) => item.product_id == data.product_id
    );
    if (!findProduct) state.items.push(data);

    let total_amount = 0;
    state.items.forEach((item) => {
      total_amount += item.total_price;
    });
    state.total_amount = total_amount;
  },
  remove_cart_item(state, index) {
    state.items.splice(index, 1);
  },
  remove_all_cart_item(state) {
    state.items = [];
  },
  set_cart_instruction(state, data) {
    state.instruction = data;
  },
  set_total_amount(state, data) {
    state.total_amount = data;
  },
};
