import Link from "next/link";
import React from "react";
import { data, title } from "utils/http-status";

const HttpStatus = () => {
  return (
    <div className={'p-4'}>
      <h1 className={'text-4xl'}>HTTP状态代码概述</h1>

      {data.map((item, key) => (
        <div className={'mt-8'} key={key}>
          <h2
            className={'mb-2 flex gap-4 text-xl'}
          >
            <p>{key + 1}xx</p>
            <p>{title[key]}</p>
          </h2>

          {item.map((el) => (
            <Link
              className={'flex gap-2 py-2'}
              href={`https://www.abstractapi.com/http-status-codes/${el.key}`}
              key={el.key}
            >
                <p className={'bg-purple-500 px-2 py-1 rounded-md text-xs text-white'}>
                  {el.key}
                </p>
                <p>-</p>
                <p className={'text-purple-500'}>{el.value}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default HttpStatus
