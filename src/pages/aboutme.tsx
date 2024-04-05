import React from 'react'
import { motion } from "framer-motion";

const aboutme = () => {
  const text = "Assalamu alaykum, my name is Abdullah and I am 19 years old. I started Frontend Programming in Salvation Education Summer 2023 and finished in March 2024.During my studies, I made an e-shop site called 'Paragaraf'. And now I am working on the real project 'Kitob_ol' e-book store".split(" ");
  return (
    <div className='main'>
        <div className="about-me-box">
       <div className="about-me-text">
       {text.map((el, i) => (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i / 4
          }}
          key={i}
        >
          {el}{" "}
        </motion.div>
      ))}
       </div>
       <img src="" alt="" />
        </div>
    </div>
  )
}

export default aboutme
