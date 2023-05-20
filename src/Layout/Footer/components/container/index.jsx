import React from "react";
import Box from "./component/Box";
export default function Container({
  box_container,
  box: boxClass,
  title: titleClass,
  text: textClass,
  link: linkClass,
  home,
  products,
  cart,
  profile,
}) {
  const data = [
    {
      title: "HUAShop",
      text: "Trải qua 17 năm phát triển bền vững, HUAShop đã ghi dấu ấn của mình với thông điệp 'Khách hàng là trên hết'.",
      links: [],
      className: boxClass,
    },
    {
      title: "Chi nhánh chính",
      links: [
        {
          label: "Hà Nội",
          to: home,
        },
        {
          label: "Đà Nẵng",
          to: home,
        },
        {
          label: "Tp.Hồ Chí Minh",
          to: home,
        },
        {
          label: "Ấn Độ",
          to: home,
        },
        {
          label: "Mỹ",
          to: home,
        },
        {
          label: "Nhật Bản",
          to: home,
        },
        {
          label: "Pháp",
          to: home,
        },
      ],
      className: boxClass,
    },
    {
      title: "Chuyển Hướng",
      links: [
        {
          label: "Trang chủ",
          to: home,
        },
        {
          label: "Tất cả sản phẩm",
          to: products.root,
        },
        {
          label: "Sản phẩm Mới",
          to: `${products.root}/type/${products.new}`,
        },
        {
          label: "Sản phẩm Cũ",
          to: `${products.root}/type/${products.used}`,
        },
        {
          label: "Giỏ hàng",
          to: cart,
        },
        {
          label: "Tài khoản",
          to: profile,
        },
        {
          label: "Về chúng tôi",
          to: "https://duong.vercel.app",
          external: true,
        },
      ],
      className: boxClass,
    },
    {
      title: "Tương tác",
      links: [
        {
          label: "Facebook",
          to: "https://facebook.com",
          external: true,
        },
        {
          label: "Instagram",
          to: "https://instagram.com",
          external: true,
        },
        {
          label: "Twitter",
          to: "https://twitter.com",
          external: true,
        },
        {
          label: "Youtube",
          to: "https://youtube.com",
          external: true,
        },
        {
          label: "Tiktok",
          to: "https://tiktok.com",
          external: true,
        },
        {
          label: "Zalo",
          to: "https://zalo.me",
          external: true,
        },
        {
          label: "Pinterest",
          to: "https://pinterest.com",
          external: true,
        },
      ],
      className: boxClass,
    },
  ];

  return (
    <div className={box_container}>
      {data &&
        data?.map(({ title, text, links, className }, i) => {
          const boxProps = {
            key: i,
            title,
            text,
            links,
            className,
            classNameTitle: titleClass,
            classNameText: textClass,
            classNameLink: linkClass,
          };
          return <Box {...boxProps} />;
        })}
    </div>
  );
}
