import { FaTimes, FaRegCircle, FaPenAlt } from "react-icons/fa";

const Icon = ({user_icon}) =>{
      switch(user_icon){
        case "circle": 
              return <FaRegCircle />
        case "cross":
                return <FaTimes />
        default: 
                return <FaPenAlt />
      }
}


export default Icon