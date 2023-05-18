import React, { useEffect, useRef, useState } from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import VideoButton from "./components/VideoButton";
import VideoPlayer from "./components/VideoPlayer";
import homeStyle from "./assets/styles/home.module.scss";
import videos from "../../assets/videos";

export default function Home() {
  const vidBtnRefs = useRef([]);
  const videoRef = useRef(null);
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

  const {
    home,
    background,
    content,
    title,
    subtitle,
    controls,
    vid_btn,
    active,
    video,
  } = homeStyle;

  useEffect(() => {
    const videoElement = videoRef.current;
    const activeBtn = vidBtnRefs.current[activeBtnIndex];

    videoElement.src = activeBtn.dataset.src;
    activeBtn.classList.add(active);

    vidBtnRefs.current.forEach((btnRef, index) => {
      if (index !== activeBtnIndex) {
        btnRef.classList.remove(active);
      }
    });
  }, [activeBtnIndex]);

  const handleBtnClick = (index) => {
    setActiveBtnIndex(index);
  };

  return (
    <>
      <Section className={home}>
        <div className={content}>
          <h3 className={title}>Mua và bán đồ điện tử Huawei</h3>
          <p className={subtitle}>
            Chọn lựa sản phẩm mới nhất và đồ cũ với giá ưu đãi
          </p>
          <p className={subtitle}>
            Khám phá bộ sưu tập đồ điện tử Huawei đa dạng
          </p>
          <Button>Khám phá ngay</Button>
        </div>
        <div className={controls}>
          {videos.map((src, index) => (
            <VideoButton
              key={index}
              index={index}
              active={activeBtnIndex === index}
              src={src}
              onClick={handleBtnClick}
              vidBtnRefs={vidBtnRefs}
              className={vid_btn}
              classNameActive={active}
            />
          ))}
        </div>
        <div className={background}>
          <VideoPlayer videoClass={video} videoRef={videoRef} />
        </div>
      </Section>

      <Section className="home">
        <h1 className="title">Hello world!</h1>
      </Section>
    </>
  );
}