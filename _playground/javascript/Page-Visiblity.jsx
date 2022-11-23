import CanIUse from 'components/CanIUse'
import React, {useState} from 'react'
import {FaCode, FaEye, FaFile} from 'react-icons/fa'

export default function FileSystem() {
  const [status, setStatus] = useState([])

  const handleClick = () => {
    window.open('https://manon.icu', '_blank')
    document.addEventListener('visibilitychange', (e) => {
      console.log(e)
      if (document.hidden) {
        setStatus((status) => status.concat({visible: false, time: Date.now()}))
      } else {
        setStatus((status) => status.concat({visible: true, time: Date.now()}))
      }
    })
  }

  const formatTime = (time) =>
    new Intl.DateTimeFormat('en-us', {
      dateStyle: 'full',
      timeStyle: 'long'
    }).format(time)

  return (
    <div className="battery">
      <h1 className="text-center mb-4 text-4xl">Page Visibility API</h1>

      <CanIUse tag="pagevisibility" />
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
          Get Page visible status
        </a>
      </div>

      <div className="visible-status">
        {status.map((item) => {
          return (
            <div className="flex gap-4 border-b py-2" key={item.time}>
              <p>
                Visible: <strong>{JSON.stringify(item.visible)}</strong>
              </p>
              <p>
                Change Time:<strong>{formatTime(item.time)}</strong>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
