import Loader from "react-spinners/HashLoader";
import { motion } from "framer-motion"

const style = { 
    position: "fixed", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)", 
  };

  export const loaderAnimation = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
}

  const PageLoader = () => {
    return (
        <motion.div initial="initial" animate="animate" exit="exit"
        variants={loaderAnimation}
        transition={{ duration: 1}}
        >
            <div className="pageLoader" style={style}>
            <Loader className="loader" color={"black"} size={150} />
                <p>Loading...</p>
            </div>
        </motion.div>
    )
}

export default PageLoader