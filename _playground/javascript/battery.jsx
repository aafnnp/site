import CanIUse from 'components/CanIUse';
import React, { useState } from 'react';
import { FaCode, FaEye, FaFile } from 'react-icons/fa';

export default function FileSystem() {
  const [status, setStatus] = useState({});

  const handleClick = () => {
    navigator.getBattery().then((battery) => {
      console.log(battery);
      setStatus(battery);

      console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'));
      console.log('Battery level: ' + battery.level * 100 + '%');
      console.log(
        'Battery charging time: ' + battery.chargingTime + ' seconds'
      );
      console.log(
        'Battery discharging time: ' + battery.dischargingTime + ' seconds'
      );

      battery.addEventListener('chargingchange', function () {
        console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'));
      });

      battery.addEventListener('levelchange', function () {
        console.log('Battery level: ' + battery.level * 100 + '%');
      });

      battery.addEventListener('chargingtimechange', function () {
        console.log(
          'Battery charging time: ' + battery.chargingTime + ' seconds'
        );
      });

      battery.addEventListener('dischargingtimechange', function () {
        console.log(
          'Battery discharging time: ' + battery.dischargingTime + ' seconds'
        );
      });
    });
  };
  return (
    <div className="battery">
      <h3 className="text-center mb-4">Battery</h3>

      <CanIUse tag="battery-status" />
      <div className="text-gray-500">
        The Battery Status API, more often referred to as the Battery API,
        provides information about the systems battery charge level
      </div>
      <div className="flex flex-row items-center gap-4 py-12 text-sm">
        <a className="flex items-center p-2 bg-sky-500 text-white rounded">
          <FaCode className="mr-2" />
          Source Code
        </a>
        <a className="flex items-center p-2 bg-sky-500 text-white rounded">
          <FaFile className="mr-2" />
          Documents
        </a>
        <a
          className="flex items-center p-2 bg-sky-500 text-white rounded"
          onClick={handleClick}
        >
          <FaEye className="mr-2" />
          Get Battery Status
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
                Property
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Charging
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {status.charging ? 'Yes' : 'No'}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Level
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {status.level * 100 + '%'}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Charging Time
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {status.chargingTime + ' seconds'}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                discharging Time
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {status.dischargingTime || 0 + 'seconds'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
