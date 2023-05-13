const endpoint = {
  home: "/",
  products: "/products",
  orders: {
    root: "/orders",
    create: "create",
  },
  cart: "/cart",
  checkout: "/checkout",
  profile: "/profile",
  auth: {
    root: "/auth",
    login: "login",
    register: "register",
    admin: {
      root: "admin",
      create: "create",
    },
  },
  error: "*",
};
export default endpoint;
