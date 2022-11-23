import CanIUse from 'components/CanIUse'
import React from 'react'
import {FaCode, FaEye, FaFile} from 'react-icons/fa'

export default function FileSystem() {
  const handleClick = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Web Share API',
        url: 'https://manon.icu'
      })
    } else {
      alert('Current browser does’t support Web Share API')
    }
  }

  return (
    <div className="battery">
      <h1 className="text-center mb-4 text-4xl">Web Share API</h1>

      <CanIUse tag="web-share" />
      <div className="text-gray-500">
        The Page Visibility API provides events you can watch for to know when a
        document becomes visible or hidden, as well as features to look at the
        current visibility state of the page.
      </div>
      <div className="flex flex-row items-center gap-4 py-12 text-sm">
        <a className="flex items-center p-2 bg-twitter text-white rounded">
          <FaCode className="mr-2" />
          Source Code
        </a>
        <a className="flex items-center p-2 bg-twitter text-white rounded">
          <FaFile className="mr-2" />
          Documents
        </a>
        <a
          className="flex items-center p-2 bg-twitter text-white rounded"
          onClick={handleClick}
        >
          <FaEye className="mr-2" />
          Test Web Share
        </a>
      </div>
    </div>
  )
}
