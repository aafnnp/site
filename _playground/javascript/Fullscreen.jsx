import CanIUse from 'components/CanIUse'
import React from 'react'
import {FaCode, FaEye, FaFile} from 'react-icons/fa'

export default function WebShare() {
  const handleClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  return (
    <div className="battery">
      <h1 className="text-center mb-4 text-4xl">Fullscreen API</h1>

      <CanIUse tag="fullscreen" />
      <div className="text-gray-500">
        The Fullscreen API adds methods to present a specific Element (and its
        descendants) in fullscreen mode, and to exit fullscreen mode once it is
        no longer needed. This makes it possible to present desired content—such
        as an online game—using the user's entire screen, removing all browser
        user interface elements and other applications from the screen until
        fullscreen mode is shut off.
      </div>
      <div className="flex flex-row items-center gap-4 py-12 text-sm">
        <a className="flex items-center p-2 bg-twitter text-white rounded">
          <FaCode className="mr-2" />
          Source Code
        </a>
        <a
          className="flex items-center p-2 bg-twitter text-white rounded"
          href="https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/share"
        >
          <FaFile className="mr-2" />
          Documents
        </a>
        <a
          className="flex items-center p-2 bg-twitter text-white rounded cursor-pointer"
          onClick={handleClick}
        >
          <FaEye className="mr-2" />
          Toggle Fullscreen
        </a>
      </div>
    </div>
  )
}
