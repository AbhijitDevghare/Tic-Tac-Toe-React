import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';
import "./Icon.css"
function Icon({name})
{
      if(name=="circle")
      {
        return <FaRegCircle className='Icon' />
      }
      else if(name=="cross")
      {
        return <FaTimes className='Icon'/>
      }
      else{
        return <FaPen className='Icon'/>
      }
        
}

export default Icon
