import CanIUse from 'components/CanIUse'
import {GoLink} from 'react-icons/go'

const components = {
  CanIUse,
  a: (props) => {
    return (
      <a className="flex items-center" href={props.href}>
        <GoLink className="mr-2"/>
        {props.children}
      </a>
    )
  }
}

export default components
