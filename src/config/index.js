const API_URL = "https://kmlqxg-3001.csb.app";
const ENDPOINTS = {
  GET: {
    PRODUCTS: {
      ALL: `${API_URL}/products/type/all`,
      TYPE: (type) => `${API_URL}/products/type/${type}`,
      ID: (id) => `${API_URL}/products/${id}`,
    },
    ORDERS: {
      ALL: `${API_URL}/orders`,
      USER_ID: (user_id) => `${API_URL}/orders?user_id=${user_id}`,
      ORDER_ID: (order_id) => `${API_URL}/orders?order_id=${order_id}`,
    },
    AUTH: {
      TOKEN_LOGIN: `${API_URL}/auth/auth-token`,
    },
    IMAGES: (url) => `${API_URL}${url}`,
    USER_ID: (user_id) => `${API_URL}/users/${user_id}`,
  },
  POST: {
    CREATE: {
      ORDER: `${API_URL}/orders/create`,
      ADMINS: `${API_URL}/admins/create`,
    },
    AUTH: {
      LOGIN: `${API_URL}/auth/login`,
      REGISTER: `${API_URL}/auth/register`,
    },
  },
};
const API = {
  getProductsAll: ENDPOINTS.GET.PRODUCTS.ALL,
  getProductsType: ENDPOINTS.GET.PRODUCTS.TYPE,
  getProductsId: ENDPOINTS.GET.PRODUCTS.ID,
  getOrdersAll: ENDPOINTS.GET.ORDERS.ALL,
  getOrdersUserId: ENDPOINTS.GET.ORDERS.USER_ID,
  getOrdersOrderId: ENDPOINTS.GET.ORDERS.ORDER_ID,
  getTokenLogin: ENDPOINTS.GET.AUTH.TOKEN_LOGIN,
  getImages: ENDPOINTS.GET.IMAGES,
  getUserId: ENDPOINTS.GET.USER_ID,
  postCreateOrder: ENDPOINTS.POST.CREATE.ORDER,
  postCreateAdmin: ENDPOINTS.POST.CREATE.ADMINS,
  postLogin: ENDPOINTS.POST.AUTH.LOGIN,
  postRegister: ENDPOINTS.POST.AUTH.REGISTER,
};
export default API;
