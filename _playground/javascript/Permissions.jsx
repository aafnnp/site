import CanIUse from 'components/CanIUse'
import React, {useState} from 'react'
import {FaEye, FaFile} from 'react-icons/fa'

export default function WebShare() {
  const [result, setResult] = useState([])
  const permissions = [
    'geolocation',
    'camera',
    'clipboard-read',
    'clipboard-write',
    'microphone'
  ].map((el) => navigator.permissions.query({name: el}))

  const handleClick = async () => {
    // eslint-disable-next-line no-undef
    const res = await Promise.all(permissions)
    setResult(res)
    console.log(res, result)
  }

  return (
    <div className="battery">
      <h1 className="text-center mb-4 text-4xl">Permissions API</h1>

      <CanIUse tag="permissions-api" />
      <div className="text-gray-500">
        The Permissions API provides a consistent programmatic way to query the
        status of API permissions attributed to the current context. For
        example, the Permissions API can be used to determine if permission to
        access a particular API has been granted or denied.
      </div>
      <div className="flex flex-row items-center gap-4 py-12 text-sm">
        <a
          className="flex items-center p-2 bg-twitter text-white rounded"
          href="https://developer.mozilla.org/zh-CN/docs/Web/API/Permissions_API"
        >
          <FaFile className="mr-2" />
          Documents
        </a>
        <a
          className="flex items-center p-2 bg-twitter text-white rounded"
          onClick={handleClick}
        >
          <FaEye className="mr-2" />
          Query Permissions
        </a>
      </div>

      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Permission name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Permission state
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {result.map((item) => {
              return (
                <tr key={item.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.state}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
