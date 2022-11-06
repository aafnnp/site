import Link from 'next/link'
import React from 'react'
import styles from 'styles/http-status.module.scss'
import {data, title} from 'utils/http-status'

const HttpStatus = () => {
  return (
    <div className={styles['http-status']}>
      <h1 className={styles.h1}>HTTP状态代码概述</h1>

      {data.map((item, key) => (
        <div className={styles['http-status-item']} key={key}>
          <h2 className={styles.h2}>
            <span>{key + 1}xx</span>
            <span>{title[key]}</span>
          </h2>

          {item.map((el) => (
            <Link
              key={el.key}
              href={`https://www.abstractapi.com/http-status-codes/${el.key}`}
            >
              <span className={styles.key}>{el.key}</span>
              <span>-</span>
              <span className={styles.value}>{el.value}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default HttpStatus
