const API_URL = "https://4x7l2g-3001.csb.app";
const ENDPOINTS = {
  PRODUCTS: `${API_URL}/products`,
  GET: {
    IMAGES: (path) => `${API_URL}${path}`,
    USERID: (userid) => `${API_URL}/users/${userid}`,
    PRODUCTS: {
      ALL: `${API_URL}/products`,
      TYPE: (type) => `${API_URL}/products?type=${type}`,
      ID: (id) => `${API_URL}/products?id=${id}`,
      MIN_PRICE: (minprice) => `${API_URL}/products?minprice=${minprice}`,
      MAX_PRICE: (maxprice) => `${API_URL}/products?maxprice=${maxprice}`,
    },
    ORDERS: {
      ALL: `${API_URL}/orders`,
      USERID: (userid) => `${API_URL}/orders?userid=${userid}`,
      ORDERID: (orderid) => `${API_URL}/orders?orderid=${orderid}`,
    },
  },
  POST: {
    CREATE: {
      ORDER: `${API_URL}/orders/create`,
      ADMINS: `${API_URL}/admins/create`,
    },
    AUTH: {
      LOGIN: `${API_URL}/auth/login`,
      REGISTER: `${API_URL}/auth/register`,
      AUTH_TOKEN: `${API_URL}/auth/auth-token`,
      REFRESH_TOKEN: `${API_URL}/auth/refresh-token`,
    },
  },
};
// console.log(ENDPOINTS);

const API = {
  getUserId: ENDPOINTS.GET.USERID,
  getImages: ENDPOINTS.GET.IMAGES,
  getProductsAll: ENDPOINTS.GET.PRODUCTS.ALL,
  getProductsType: ENDPOINTS.GET.PRODUCTS.TYPE,
  getProductsId: ENDPOINTS.GET.PRODUCTS.ID,
  getOrdersAll: ENDPOINTS.GET.ORDERS.ALL,
  getOrdersUserId: ENDPOINTS.GET.ORDERS.USERID,
  getOrdersOrderId: ENDPOINTS.GET.ORDERS.ORDERID,
  postCreateOrder: ENDPOINTS.POST.CREATE.ORDER,
  postCreateAdmin: ENDPOINTS.POST.CREATE.ADMINS,
  postLogin: ENDPOINTS.POST.AUTH.LOGIN,
  postRegister: ENDPOINTS.POST.AUTH.REGISTER,
  postTokenLogin: ENDPOINTS.POST.AUTH.AUTH_TOKEN,
  postTokenRefresh: ENDPOINTS.POST.AUTH.REFRESH_TOKEN,
};
export default API;
