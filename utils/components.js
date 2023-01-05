import CanIUse from 'components/CanIUse'
import {Link} from '@chakra-ui/react'
import {FiExternalLink} from 'react-icons/fi'

const components = {
  CanIUse,
  a: (props) => {
    return (
      <Link
        display="inline-flex"
        alignItems="center"
        href={props.href}
        gap={2}
        isExternal
      >
        {props.children}
        <FiExternalLink />
      </Link>
    )
  }
}

export default components
