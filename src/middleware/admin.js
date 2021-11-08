export default function admin({ next, store, router }) {
  let user = store.getters.get_user_info;
  if (store.getters.get_autheticated && user.is_admin == 1) {
    return next();
  }
  next("/");
}
