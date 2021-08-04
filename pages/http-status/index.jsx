import React from 'react'

const config = require('./config')

function HttpStatus() {
  return (
    <div>
      <div className="http-status">
        <h2 className="text-2xl mb-4 font-bold">HTTP状态代码概述</h2>

        {config.data.map((item, key) => (
          <div className="p-10 mb-10 shadow-xl rounded-md" key={key}>
            <h3 className="text-xl mb-4 font-bold">
              {key + 1}
              xx
              {config.title[key]}
            </h3>

            {item.map((el) => (
              <div className="leading-10" key={el.key}>
                <a
                  href={`https://www.abstractapi.com/http-status-codes/${el.key}`}
                  className="text-purple-500"
                >
                  <div className="w-embed">
                    <span className="px-2 py-1 bg-purple-500 rounded-md text-white text-sm">
                      {el.key}
                    </span>
                    <span className="px-2">-</span>
                    <span className="http-status-list-text">{el.value}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HttpStatus
