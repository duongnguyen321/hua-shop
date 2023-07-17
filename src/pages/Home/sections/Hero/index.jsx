import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import Button from "../../../../components/Button";
import videos from "../../../../assets/videos";
import VideoButton from "./components/VideoButton";
import VideoPlayer from "./components/VideoPlayer";
import heroStyles from "./styles/hero.module.scss";
export default function SectionHero() {
  const vidBtnRefs = useRef([]);
  const videoRef = useRef(null);
  const backgroundRef = useRef(null);
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const theme = useMemo(() => localStorage.getItem("theme"), []);
  const minOpacity = 0.1;
  const {
    home__background: background,
    home__content: content,
    home__controls: controls,
    "home__content--title": title,
    "home__content--subtitle": subtitle,
    "home__controls--vid-btn": vid_btn,
    "home__controls__vid-btn--active": active,
    "home__background--video": video,
  } = heroStyles;
  useLayoutEffect(() => {
    const savedActiveBtnIndex = localStorage.getItem("activeBtnIndex");
    if (savedActiveBtnIndex !== null) {
      const activeBtnIndex = parseInt(savedActiveBtnIndex);
      setActiveBtnIndex(activeBtnIndex);
    }
  }, []);

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

  const handleScroll = useCallback(() => {
    const { scrollY } = window;
    const { offsetHeight } = backgroundRef.current;
    const opacity =
      1 - scrollY / offsetHeight >= minOpacity
        ? 1 - scrollY / offsetHeight
        : minOpacity;
    setOpacity(opacity);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleBtnClick = useCallback((index) => {
    setActiveBtnIndex(index);
    localStorage.setItem("activeBtnIndex", index);
  }, []);

  const videoButtons = useMemo(() => {
    return videos.map((src, index) => (
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
    ));
  }, [activeBtnIndex, handleBtnClick, vidBtnRefs, vid_btn, active]);

  return (
    <>
      <div className={content}>
        <h1 className={title}>Mua và bán đồ điện tử Huawei</h1>
        <p className={subtitle}>
          Chọn lựa sản phẩm mới nhất và đồ cũ với giá ưu đãi
        </p>
        <p className={subtitle}>
          Khám phá bộ sưu tập đồ điện tử Huawei đa dạng
        </p>
        <Button>Khám phá ngay</Button>
      </div>
      <div className={controls}>{videoButtons}</div>
      <div
        className={background}
        ref={backgroundRef}
        style={{
          opacity: opacity,
          pointerEvents: opacity <= minOpacity && "none",
        }}
      >
        <VideoPlayer videoClass={video} videoRef={videoRef} />
      </div>
    </>
  );
}
