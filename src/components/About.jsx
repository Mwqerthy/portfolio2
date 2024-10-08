import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, slideIn, textVariant } from '../utils/motion'
import { SectionWrapper } from './hoc'




const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 2)
      } className="w-full   rounded-[20px]  ">
        <div options={{
          max: 45, scale: 1, speed: 450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 m-[4px] min-h-[280px] flex justify-evenly items-center flex-col shadow-card border-2 border-teal-400">
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>


        </div>


      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>
      <motion.p variants={fadeIn("left", "spring", 0.3, 2)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Full-stack developer with expertise in JavaScript, TypeScript, and React. I build dynamic, scalable apps with smooth Three.js visuals and efficient Node.js backends. Experienced with VPS and server management for seamless deployment.

      </motion.p>
      <motion.div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </motion.div>

    </>
  )
}

export default SectionWrapper(About, "about")