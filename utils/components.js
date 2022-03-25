import CanIUse from 'components/CanIUse'
import {GoLink} from "react-icons/all";

const components = {
  CanIUse,
  a:({children})=><a className='flex gap-2 items-center'><GoLink/>{children}</a>
}

export default components
