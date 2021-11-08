export default function auth({ next, store, router }) {
  let user = store.getters.get_user_info;
  if (store.getters.get_autheticated && user.is_admin == 0) {
    return next();
  }
  next("/");
}
