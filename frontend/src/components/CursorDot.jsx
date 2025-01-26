import React, { useState, useEffect, useRef } from "react";

const CursorDot = ({ hoveredItem }) => {
  const dotRef = useRef(null);
  const cursorPosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });

  const [isDissolving, setIsDissolving] = useState(false);

  useEffect(() => {
    if (hoveredItem) {
      setIsDissolving(true);
    } else {
      setIsDissolving(false);
    }
  }, [hoveredItem]);

  const handleMouseMove = (e) => {
    cursorPosition.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const speed = 0.1;
    const animate = () => {
      const dx = cursorPosition.current.x - dotPosition.current.x;
      const dy = cursorPosition.current.y - dotPosition.current.y;

      dotPosition.current.x += dx * speed;
      dotPosition.current.y += dy * speed;

      if (dotRef.current) {
        const dotSize = 20;
        dotRef.current.style.transform = `translate(${
          dotPosition.current.x - dotSize / 2
        }px, ${dotPosition.current.y - dotSize / 2}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const dotStyle = {
    position: "fixed",
    width: "20px",
    height: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9999,
    opacity: isDissolving ? 0 : 1,
    transition: "opacity 0.3s ease-out",
  };

  return <div ref={dotRef} style={dotStyle}></div>;
};

export default CursorDot;
