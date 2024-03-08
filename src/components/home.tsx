import React from 'react';
import { motion } from 'framer-motion';

const Main = () => {

  return (
    <div className='main'>

      <motion.div className='text-box'>
        {[
          'HTML',
          'CSS',
          'JavaScript',
          'REACT.js',
          'NEXT.js',
          'TypeScript',
          'SASS',
          'Tailwind',
          'Redux',
        ].map((item, index) => (
          <motion.div className='text-item'
            key={index}
            whileTap={{ scale: 10.85 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1.4, y: 0 }}
            transition={{ duration: .5, delay: .5 + index * 0.8 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
      {/* <motion.ul>
        {[
          'HTML',
          'CSS',
          'SASS',
          'JavaScript',
          'REACT.js',
          'NEXT.js',
          'Redux',
         
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.5 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.ul> */}
    </div>
  );
};

export default Main;
