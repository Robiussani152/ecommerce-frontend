export default function guest({ next, store, router }) {
  if (!store.getters.get_autheticated) {
    return next();
  }
  next("/");
}
