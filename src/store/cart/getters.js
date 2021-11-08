export default {
  get_cart_items(state) {
    return state.items;
  },
  get_cart_total_amount(state) {
    return state.total_amount;
  },
  get_cart_instruction(state) {
    return state.instruction;
  },
};
