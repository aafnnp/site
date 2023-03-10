import CanIUse from 'components/CanIUse'
import Link from 'next/link'
import {FiExternalLink} from 'react-icons/fi'

const components = {
  CanIUse,
  a: (props) => {
    return (
      <Link display="inline-flex" alignItems="center" href={props.href} gap={2}>
        {props.children}
        <FiExternalLink />
      </Link>
    )
  }
}

export default components
