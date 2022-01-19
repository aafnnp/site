import Link from 'next/link';
import React from 'react';
import { data, title } from 'utils/config';

export default function HttpStatus() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">HTTP状态代码概述</h1>

      {data.map((item, key) => (
        <div className="mb-8" key={key}>
          <h2 className="text-xl font-bold mb-2">
            <span>{key + 1}xx</span>
            <span className="pl-4">{title[key]}</span>
          </h2>

          {item.map((el) => (
            <Link
              key={el.key}
              href={`https://www.abstractapi.com/http-status-codes/${el.key}`}
            >
              <a className="block py-2">
                <span
                  px={2}
                  py={1}
                  backgroundColor="purple.500"
                  rounded="md"
                  color="white"
                  fontSize="xs"
                >
                  {el.key}
                </span>
                <span className="px-2">-</span>
                <span className="text-purple-600">{el.value}</span>
              </a>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
