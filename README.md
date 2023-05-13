# HUA Shop - Giới thiệu

Xin chào! Đây là một dự án web bán hàng đơn giản, được phát triển bằng ReactJS và NodeJS. Mục đích của dự án này là giúp bạn có thể tạo ra một website bán hàng online của riêng mình, với các tính năng cơ bản như: quản lý sản phẩm, đặt hàng, thanh toán, quản lý đơn hàng, quản lý tài khoản người dùng, v.v.

## Cài đặt

1.  Clone repo này về máy của bạn: `git clone https://github.com/duongnguyen321/hua-shop.git`
2.  Cài đặt các dependencies cho client và server bằng lệnh: `npm install` trong thư mục client và server
3.  Chạy server và client đồng thời bằng lệnh: `npm start` trong thư mục client
    - \*Lưu ý rằng bạn đã cài thư viện `npm install -g concurrently`
4.  Mở trình duyệt và truy cập vào địa chỉ client: `http://localhost:3000`
5.  Mở trình duyệt và truy cập vào địa chỉ server: `http://localhost:3001`

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

    http://localhost:3001/
    https://api-hua.herokuapp.com/

### ENDPOINT
    GET /products/type/all - Lấy tất cả sản phẩm
    GET /products/type/:type - Lấy sản phẩm theo loại
    GET /products/:id - Lấy sản phẩm theo id
    GET /orders - Lấy tất cả đơn hàng
    GET /orders?user_id=:user_id - Lọc đơn hàng theo user_id
    GET /orders?order_id=:order_id - Lọc đơn hàng theo order_id
    GET /users/:user_id - Lấy thông tin người dùng bằng ID
    POST /orders/create - Tạo đơn hàng mới
    POST /admins/create - Tạo người dùng quản trị mới
    POST /login - Đăng nhập
    POST /register - Đăng ký
    PATCH /users/:user_id - Sửa thông tin người dùng bằng ID

## Tác giả

Dự án này được phát triển bởi Nguyễn Dương
