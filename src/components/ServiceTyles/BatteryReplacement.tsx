import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const BatteryReplacement = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.3 1"],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const xValues = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  return (
    <motion.div
      style={{
        scale: scaleValues,
        opacity: opacityValues,
        x: xValues,
      }}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
