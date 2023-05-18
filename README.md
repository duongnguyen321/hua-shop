HUA Shop - Introduction

# HUA Shop - Introduction

Hello! This is a simple e-commerce web project developed using ReactJS.

The purpose of this project is to help you create your own online store website with basic features such as:

- Product management
- Ordering and payment
- Order management
- User account management, etc.

## Installation

1.  Clone this repository to your machine: `git clone https://github.com/duongnguyen321/hua-shop.git`
2.  Install dependencies by running the command: `npm install`
3.  Start the project by running the command: `npm start`
4.  Open your browser and access the client address: [http://localhost:3000](http://localhost:3000)
5.  Open your browser and access the server address: [http://localhost:3001](http://localhost:3001)

- _Note 5.1:_ If you want to set up the server, clone the repository: `https://github.com/duongnguyen321/api-hua`
- _Note 5.2:_ Then repeat the installation steps mentioned above for the server

## Main Features

- Get products by type and price range
- Get product by ID
- Get all orders or filter orders by user ID or order ID
- Create a new order
- Get user information by ID
- Update user information
- Create a new admin user
- Get all products
- Delete a product
- Get all users
- Add a new user
- Delete a user
- Update user or admin information

## API

- Base URL: [http://localhost:3001](http://localhost:3001)
- Heroku API URL: [https://api-hua.herokuapp.com](https://api-hua.herokuapp.com)

### ENDPOINT

- **GET /products/type/all** - Get all products
- **GET /products/type/:type** - Get products by type
- **GET /products/:id** - Get product by ID
- **GET /orders** - Get all orders
- **GET /orders?user_id=:user_id** - Filter orders by user ID
- **GET /orders?order_id=:order_id** - Filter orders by order ID
- **GET /users/:user_id** - Get user information by ID
- **POST /orders/create** - Create a new order
- **POST /admins/create** - Create a new admin user
- **POST /login** - Authenticate user
- **POST /register** - Register a new user
- **PATCH /users/:user_id** - Update user information by ID

## Author

This project was developed by Nguyễn Dương.

---

# HUA Shop - Giới thiệu - Tiếng Việt

Xin chào! Đây là một dự án web bán hàng đơn giản, được phát triển bằng ReactJS.

Mục đích của dự án này là giúp bạn có thể tạo ra một website bán hàng online của riêng mình, với các tính năng cơ bản như:

- Quản lý sản phẩm
- Đặt hàng, thanh toán
- Quản lý đơn hàng
- Quản lý tài khoản người dùng, v.v.

## Cài đặt

1.  Clone repo này về máy của bạn: `git clone https://github.com/duongnguyen321/hua-shop.git`
2.  Cài đặt các dependencies bằng lệnh: `npm install`
3.  Chạy dự án bằng lệnh: `npm start`
4.  Mở trình duyệt và truy cập vào địa chỉ client: [http://localhost:3000](http://localhost:3000)
5.  Mở trình duyệt và truy cập vào địa chỉ server: [http://localhost:3001](http://localhost:3001)

- _5.1 Nếu bạn muốn cài đặt server, hãy clone repo:_ `https://github.com/duongnguyen321/api-hua`
- _5.2 Sau đó lặp lại các bước cài đặt trên ở phía server_

## Các tính năng chính

- Lấy sản phẩm theo loại và khoảng giá
- Lấy sản phẩm bằng ID
- Lấy tất cả đơn hàng hoặc lọc đơn hàng theo user_id hoặc order_id
- Tạo đơn hàng mới
- Lấy thông tin người dùng bằng ID
- Cập nhật thông tin người dùng
- Tạo người dùng quản trị mới
- Lấy tất cả sản phẩm
- Xóa sản phẩm
- Lấy tất cả người dùng
- Thêm người dùng mới
- Xóa người dùng
- Cập nhật thông tin người dùng hoặc quản trị viên

## API

- [http://localhost:3001](http://localhost:3001)
- [https://api-hua.herokuapp.com](https://api-hua.herokuapp.com)

### ENDPOINT

- **GET /products/type/all** - Lấy tất cả sản phẩm
- **GET /products/type/:type** - Lấy sản phẩm theo loại
- **GET /products/:id** - Lấy sản phẩm theo id
- **GET /orders** - Lấy tất cả đơn hàng
- **GET /orders?user_id=:user_id** - Lọc đơn hàng theo user_id
- **GET /orders?order_id=:order_id** - Lọc đơn hàng theo order_id
- **GET /users/:user_id** - Lấy thông tin người dùng bằng ID
- **POST /orders/create** - Tạo đơn hàng mới
- **POST /admins/create** - Tạo người dùng quản trị mới
- **POST /login** - Đăng nhập
- **POST /register** - Đăng ký
- **PATCH /users/:user_id** - Sửa thông tin người dùng bằng ID

## Tác giả

Dự án này được phát triển bởi Nguyễn Dương.
