import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./App.css";

export default function CardUser({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
         
          <motion.div className="avatar" layout><span>{user.name.charAt(0)}</span> </motion.div>
          <h3>{user.name}</h3>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h5>{user.email}</h5>
                <br/>
                <h5>{user.address.city}</h5>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      </motion.ul>
    </AnimateSharedLayout>
  );
}
