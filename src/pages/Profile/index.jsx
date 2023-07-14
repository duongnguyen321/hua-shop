import React from "react";
import Links from "../../helper/Link";

export default function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <>
      <h1 className="title">Thông tin tài khoản</h1>
      <div className="profile">
        <div className="profile__item">
          <span className="profile__item--title">Tên đăng nhập:</span>
          <span className="profile__item--content">{userInfo.username}</span>
        </div>
        <div className="profile__item">
          <span className="profile__item--title">Họ và tên:</span>
          {userInfo.name ? (
            <span className="profile__item--content">{userInfo.name}</span>
          ) : (
            <span className="profile__item--content">Chưa cập nhật</span>
          )}
        </div>
        <div className="profile__item">
          <span className="profile__item--title">Email:</span>
          {userInfo.email ? (
            <span className="profile__item--content">{userInfo.email}</span>
          ) : (
            <span className="profile__item--content">Chưa cập nhật</span>
          )}
        </div>
        <div className="profile__item">
          <span className="profile__item--title">Số điện thoại:</span>
          {userInfo.phone ? (
            <span className="profile__item--content">{userInfo.phone}</span>
          ) : (
            <span className="profile__item--content">Chưa cập nhật</span>
          )}
        </div>
        <div className="profile__item">
          <span className="profile__item--title">Địa chỉ:</span>
          {userInfo.address ? (
            <span className="profile__item--content">{userInfo.address}</span>
          ) : (
            <span className="profile__item--content">Chưa cập nhật</span>
          )}
        </div>
        {userInfo.role === "admin" && (
          <div className="profile__item">
            <span className="profile__item--title">Quyền:</span>
            <span className="profile__item--content">
              <Links to="/">Quản trị viên</Links>
            </span>
          </div>
        )}
      </div>
    </>
  );
}
