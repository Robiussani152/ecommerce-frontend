export default {
  get_token(state) {
    return state.access_token;
  },
  get_user_info(state) {
    return state.user_info;
  },
  get_autheticated(state) {
    return state.authenticated;
  },
};
