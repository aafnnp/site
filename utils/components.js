import CanIUse from 'components/CanIUse'
import Link from 'next/link'
import {FiExternalLink} from 'react-icons/fi'

const components = {
  CanIUse,
  a: (props) => {
    return (
      <Link className="inline-flex items-center gap-2" href={props.href}>
        {props.children}
        <FiExternalLink />
      </Link>
    )
  }
}

export default components
