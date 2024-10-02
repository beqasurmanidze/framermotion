import React, { useState } from "react";
import { motion } from "framer-motion";
function App() {
  const [isNotVisible, setIsNotVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const menuVariants = {
    hidden: {
      x: "100%",
      Transition: { duration: 0.5 },
    },
    visible: {
      x: 0,
      Transition: { duration: 0.5 },
    },
  };
  // initial

  // const boxVariants = {
  //   lion: {
  //     x: 100,
  //     scale: 1.5,
  //     backgroundColor: "#9191f0",
  //   },

  //   // animate

  //   tiger: {
  //     x: 1000,
  //     scale: 1,
  //     backgroundColor: "#0000ff",
  //     transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
  //   },
  // };

  return (
    <>
      {/* <div className="flex flex-col">
        {/* <motion.div
          className="w-24 h-24 bg-blue-300 m-2"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 1200, opacity: 0 }}
          transition={{ duration: 2.5, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="w-24 h-24 bg-blue-300 m-2"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
        <motion.div
          className="w-24 h-24 bg-blue-300 m-2"
          initial={{ backgroundColor: "#ff0000" }}
          animate={{ backgroundColor: "#0000ff" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div> */}
      {/* <div>
          <motion.div
            className="w-24 h-24 bg-blue-300"
            initial={{ scale: 1 }}
            whileHover={{ scale: 3.0 }}
            transition={{ duration: 2 }}
          ></motion.div>
        </div>
        <div>
          <div className="w-24 h-24 bg-gray-500 flex items-center justify-center">
            this div is for hover
          </div>
          <motion.div
            className="w-24 h-24 bg-blue-300"
            initial={{ scale: 1 }}
            whileTap={{ rotate: 360 }}
            transition={{ duration: 2 }}
          ></motion.div>
        </div>
        <motion.input
          className="w-24 h-24 bg-indigo-700 my-6"
          initial={{ scale: 1 }}
          whileFocus={{ rotate: 360 }}
          transition={{ duration: 2 }}
          placeholder="input"
        ></motion.input>  */}
      {/* </div> */}
      {/* 
      <div className="flex flex-col justify-center w-full">
        <motion.div
          className="w-24 h-24 bg-black"
          drag
          dragElastic={0.5}
          dragMomentum={false}
          dragConstraints={{ left: 100, right: 500, top: 0, bottom: 500 }}
        ></motion.div>

        <div className="h-[120vh]"></div>

        <div className=" flex justify-center">
          <motion.div
            className=" w-[500px] h-24 bg-indigo-600 my-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          ></motion.div>
        </div> */}
      {/* </div> */}
      {/* <motion.div
        className="w-24 h-24 bg-indigo-400"
        variants={boxVariants}
        animate="lion"
        initial="tiger"
      /> */} 

      <div className="max-w-[1110px] w-full mx-auto ">
        <motion.div onClick className=" text-center w-[100px] h-12 bg-gray-800 flex items-center justify-center cursor-pointer rounded-lg shadow-md" >
        <span className="text-white">toggle navBar</span>
        </motion.div>
        <motion.div
          className="fixed top-0 right-0 w-64 h-full bg-gray-700 flex flex-col space-y-2 p-4 shadow-lg items-center"
          variants={menuVariants}
          initial="hidden"
          animate={isNotVisible ? "visible" : "hidden"}
        >
          <button>home</button> 
          <button>about</button>
          <button>support</button> 
          <button>help</button>
        </motion.div>
      </div>
    </>
  );
}

export default App;
