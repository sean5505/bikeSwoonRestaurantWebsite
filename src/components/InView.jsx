import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function InView({ children }) {
  const { inView, ref } = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default InView;
