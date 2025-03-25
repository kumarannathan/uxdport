import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 px-4 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-400 tracking-wide">
          made with love, react, and typescript © kumaran {new Date().getFullYear()}
        </p>
      </div>
    </motion.footer>
  );
} 