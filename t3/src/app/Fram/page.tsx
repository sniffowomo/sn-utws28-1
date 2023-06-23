'use client'
import { motion } from 'framer-motion'

export default function Fram() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[url('https://media4.giphy.com/media/m9ed5fyVIyCaaZuc43/giphy.gif')] bg-cover bg-center ">
      <motion.div
        animate={{ rotate: 720 }}
        transition={{ type: 'spring', duration: 20 }}
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}>
        <h1 className="text-8xl">Dance Dance</h1>
      </motion.div>
    </main>
  )
}
