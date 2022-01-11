import { motion } from "framer-motion";
import React from "react";

export default function Skill({ skill }) {
  return (
    <motion.li
      initial="hidden"
      animate="visible"
      whileHover={{
        position: "relative",
        zIndex: 1,
        // background: "white",
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: 0.2,
        },
      }}
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className=" bg-gray-800 text-3xl rounded-md p-5 my-1 mr-3 inline-block cursor-pointer transition-colors hover:bg-white hover:text-black"
    >
      {skill}
    </motion.li>
  );
}
