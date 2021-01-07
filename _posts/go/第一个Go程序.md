---
slug: "/posts/go/first-go-program"
date: "2020-05-21"
title: "Go-first-go-program"
path: "/posts/go/first-go-program"
tags: go
---

## 打印字符串

``` go
package main

import "fmt"

func main(){
    fmt.Println("hello");
    fmt.Println("world")
}
```

## 打印```go env```

``` shell
go env GOPATH
```