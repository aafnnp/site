import CanIUse from 'components/CanIUse'
import React from 'react'
import {FaEye, FaFile} from 'react-icons/fa'

export default function NetworkInformation() {
  const [netinfo, setNetinfo] = React.useState({})
  const getNetinfo = () => {
    if (navigator.connection) {
      setNetinfo(navigator.connection)
    } else {
      alert('Current browser does’t support Network information API')
    }
  }

  React.useEffect(() => {
    getNetinfo()
  }, [])

  return (
    <div className="battery">
      <h1 className="text-center mb-4 text-4xl">Network Information API</h1>

      <CanIUse tag="netinfo" />
      <div className="text-gray-500">
        <p>
          The Network Information API provides information about the system's
          connection in terms of general connection type (e.g., 'wifi,
          'cellular', etc.). This can be used to select high definition content
          or low definition content based on the user's connection.
        </p>
        <p>
          网络状态 API 可以获取到系统的网络连接信息，比如说连接方式是 WiFi
          还是蜂窝。应用程序可以根据此信息为用户展现不同清晰度的内容。该 API
          是由 NetworkInformation 接口和 Navigator 接口上新增的一个 connection
          属性组成的。
        </p>
      </div>
      <div className="flex flex-row items-center gap-4 py-12 text-sm">
        {/* <a className="flex items-center p-2 bg-twitter text-white rounded"> */}
        {/*   <FaCode className="mr-2" /> */}
        {/*   Source Code */}
        {/* </a> */}
        <a
          className="flex items-center p-2 bg-twitter text-white rounded"
          href="https://developer.mozilla.org/zh-CN/docs/Web/API/Network_Information_API"
        >
          <FaFile className="mr-2" />
          Documents
        </a>
        <a
          className="flex items-center p-2 bg-twitter text-white rounded"
          onClick={getNetinfo}
        >
          <FaEye className="mr-2" />
          Check Network information
        </a>
      </div>
      <div className="text-slate-600 dark:text-white">
        {`设备的网络下载速度:${netinfo.downlink}，连接方式:${netinfo.effectiveType}，单次往返时间:${netinfo.rtt}`}
      </div>
    </div>
  )
}
