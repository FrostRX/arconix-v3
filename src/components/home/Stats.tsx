import { useState } from "react";
import { motion } from "framer-motion";

export default function Stats() {
  const [users, setUsers] = useState("100k");
  const [tournaments, setTournaments] = useState("20");
  const [events, setEvents] = useState("170");

  return (
    <div className="w-full min-h-[200px] flex flex-col md:flex-row justify-center items-center gap-10 p-10 md:p-5">
      <div className="w-[60%] flex justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <motion.span
            className="text-5xl font-bold text-center text-white uppercase"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {users}+
          </motion.span>
          <p className="text-center text-white text-opacity-80 mt-5">Users</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center text-white uppercase"
          >
            {tournaments}+
          </motion.span>
          <p className="text-center text-white text-opacity-80 mt-5">
            Tournaments
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center text-white uppercase"
          >
            {events}+
          </motion.span>
          <p className="text-center text-white text-opacity-80 mt-5">Events</p>
        </div>
      </div>
    </div>
  );
}
