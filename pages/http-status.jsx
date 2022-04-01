import Link from 'next/link'
import React from 'react'
import {data, title} from 'utils/http-status'

const HttpStatus = () => {
  return (
    <div className="http-status">
      <h1>HTTP状态代码概述</h1>

      {data.map((item, key) => (
        <div className="http-status-item" key={key}>
          <h2>
            <span>{key + 1}xx</span>
            <span>{title[key]}</span>
          </h2>

          {item.map((el) => (
            <Link
              key={el.key}
              href={`https://www.abstractapi.com/http-status-codes/${el.key}`}
            >
              <a>
                <span className="px-2 py-1 bg-purple-500 rounded-md text-white text-xs">
                  {el.key}
                </span>
                <span>-</span>
                <span className="text-purple-600">{el.value}</span>
              </a>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default HttpStatus
