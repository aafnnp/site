import CanIUse from 'components/CanIUse'
import {GoLink} from 'react-icons/go'

const components = {
  CanIUse,
  a: (props) => {
    return (
      <a className="flex gap-2 items-center" href={props.href}>
        <GoLink />
        {props.children}
      </a>
    )
  }
}

export default components
