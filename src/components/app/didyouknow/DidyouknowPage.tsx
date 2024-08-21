import { motion } from 'framer-motion';
import React from 'react';
import BackButtonPage from 'utils/BackButtonPage';
import { fadeInTransition, fadeInVariants } from 'utils/pageTransition';

const DidyouknowPage: React.FC = () => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={fadeInVariants}
        transition={fadeInTransition}
      >
        <BackButtonPage label="รู้หรือไม่ ?" />
      </motion.div>
    </>
  );
};

export default DidyouknowPage;
