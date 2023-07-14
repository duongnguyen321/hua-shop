# HUA Shop - Introduction - Giới thiệu

## HUA Shop - Introduction - English

Hello! This is a simple e-commerce web project, developed with ReactJS.

The purpose of this project is to help you create your own online store website, with basic features such as:

- Product management (CRUD)
- Order, payment
- Order management (CRUD)
- User management (CRUD), etc.

---

## Installation

1.  Clone this repo: `git clone https://github.com/duongnguyen321/hua-shop.git`
2.  Install dependencies: `npm install`
3.  Start the project: `npm start`
4.  Open your browser and go to client: [http://localhost:3000](http://localhost:3000)
5.  Open your browser and go to server: [http://localhost:3001](http://localhost:3001)

- _5.1 If you want to install the server, please clone this repo:_ `https://github.com/duongnguyen321/api-hua`
- _5.2 Then repeat the installation steps above on the server side_

---

## Main features

- Get all products
- Get products by type and price range
- Get product by ID
- Add new product and can upload image
- Edit product information and image
- Delete product
- Get all orders of **logged in user**
- Get an order of **logged in user** by ID
- Create new order of **logged in user**
- Get user information by ID
- Update user information
- Create new admin user
- Hard-reset database action under admin privileges
- Login with username and password
- Register new account and add user information
- Auto login with access token
- Get new access token with refresh token

---

## API

- [https://4x7l2g-3001.csb.app](https://4x7l2g-3001.csb.app/)

### ENDPOINT

- **GET /products?type=:type** - Get all products or by type

- **GET /products?id=:id** - Get product by ID

- **GET /products?minprice=:minprice&maxprice=:maxprice** - Get product by price range

- **GET /products** - Get all products

- **POST /products** - Add new product

- **PUT /products?id=:id** - Edit product information by ID

- **DELETE /products?id=:id** - Delete product by ID

  ***

- **GET /orders?userid=:userid** - Get all orders of **logged in user**

- **GET /orders?orderid=:orderid** - Get an order of **logged in user** by ID

- **POST /orders** - Create new order of **logged in user**

  ***

- **GET /users/:userid** - Get user information by ID

- **PATCH /users/:userid** - Update user information

  ***

- **POST /admins/create** - Create new admin user

- **POST /admins/hard-reset** - Hard-reset database action under admin privileges

  ***

- **POST /auth/login** - Login with username and password

- **POST /auth/register** - Register new account and add user information

- **POST /auth/auth-token** - Auto login with access token

- **POST /auth/refresh-token** - Get new access token with refresh token

**_For more details about APIS, please visit [github.com/duongnguyen321/api-hua](https://github.com/duongnguyen321/api-hua)_**

---

## Author

This project is developed by Nguyen Duong.

---

## HUA Shop - Giới thiệu - Tiếng Việt

Xin chào! Đây là một dự án web bán hàng đơn giản, được phát triển bằng ReactJS.

Mục đích của dự án này là giúp bạn có thể tạo ra một website bán hàng online của riêng mình, với các tính năng cơ bản như:

- Quản lý sản phẩm
- Đặt hàng, thanh toán
- Quản lý đơn hàng
- Quản lý tài khoản người dùng, v.v.

---

## Cài đặt

1.  Clone repo này về máy của bạn: `git clone https://github.com/duongnguyen321/hua-shop.git`
2.  Cài đặt các dependencies bằng lệnh: `npm install`
3.  Chạy dự án bằng lệnh: `npm start`
4.  Mở trình duyệt và truy cập vào địa chỉ client: [http://localhost:3000](http://localhost:3000)
5.  Mở trình duyệt và truy cập vào địa chỉ server: [http://localhost:3001](http://localhost:3001)

- _5.1 Nếu bạn muốn cài đặt server, hãy clone repo:_ `https://github.com/duongnguyen321/api-hua`
- _5.2 Sau đó lặp lại các bước cài đặt trên ở phía server_

---

## Các tính năng chính

- Lấy tất cả sản phẩm
- Lấy sản phẩm theo loại và khoảng giá
- Lấy sản phẩm bằng ID
- Thêm sản phẩm mới và có thể upload hình ảnh
- Chỉnh sửa thông tin sản phẩm và hình ảnh
- Xóa sản phẩm
- Lấy tất cả đơn hàng của **người dùng đã đăng nhập**
- Lấy một đơn hàng của **người dùng đã đăng nhập** theo ID
- Tạo đơn hàng mới của **người dùng đã đăng nhập**
- Lấy thông tin người dùng bằng ID
- Cập nhật thông tin người dùng
- Tạo người dùng quản trị mới
- Hành động hard-reset database dưới quyền admin
- Đăng nhập bằng username và password
- Đăng ký tài khoản mới và thêm thông tin người dùng
- Đang nhập tự động với access token
- Lấy access token mới bằng refresh token

---

## API

- [https://4x7l2g-3001.csb.app](https://4x7l2g-3001.csb.app/)

### ENDPOINT

- **GET /products?type=:type** - Lấy tất cả sản phẩm hoặc theo loại

- **GET /products?id=:id** - Lấy sản phẩm theo ID

- **GET /products?minprice=:minprice&maxprice=:maxprice** - Lấy sản phẩm theo khoảng giá

- **GET /products** - Lấy tất cả sản phẩm

- **POST /products** - Thêm sản phẩm mới

- **PUT /products?id=:id** - Chỉnh sửa thông tin sản phẩm theo ID

- **DELETE /products?id=:id** - Xóa sản phẩm theo ID

  ***

- **GET /orders?userid=:userid** - Lấy tất cả đơn hàng của **người dùng đã đăng nhập**

- **GET /orders?orderid=:orderid** - Lấy một đơn hàng của **người dùng đã đăng nhập** theo ID

- **POST /orders** - Tạo đơn hàng mới của **người dùng đã đăng nhập**

  ***

- **GET /users/:userid** - Lấy thông tin người dùng bằng ID

- **PATCH /users/:userid** - Cập nhật thông tin người dùng

  ***

- **POST /admins/create** - Tạo người dùng quản trị mới

- **POST /admins/hard-reset** - Hành động hard-reset database dưới quyền admin

  ***

- **POST /auth/login** - Đăng nhập bằng username và password

- **POST /auth/register** - Đăng ký tài khoản mới và thêm thông tin người dùng

- **POST /auth/auth-token** - Đang nhập tự động với access token

- **POST /auth/refresh-token** - Lấy access token mới bằng refresh token

**_Mọi chi tiết thêm về APIS có thể xem tại [github.com/duongnguyen321/api-hua](https://github.com/duongnguyen321/api-hua)_**

---

## Tác giả

Dự án này được phát triển bởi Nguyễn Dương.
