import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Success.css'

const Success = () => {
  return (
    <motion.div className='success-container'  initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 0.8}}>
        <div className="success-content">
            <h4>THANK YOU FOR CONTACTING ME. YOU WILL GET FEEDBACK IN LESS THAN 24HOURS</h4>
            <Link to='/'>BACK HOME</Link>
        </div>
    </motion.div>
  )
}

export default Success