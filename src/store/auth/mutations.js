export default {
  insert_access_token(state, token) {
    state.access_token = token;
    state.authenticated = true;
    localStorage.setItem("access_token", token);
  },
  remove_auth_state(state, data) {
    state.access_token = null;
    state.authenticated = false;
    state.user_info = {};
    localStorage.removeItem("access_token");
  },
  add_user_info(state, info) {
    state.user_info = info;
  },
};
