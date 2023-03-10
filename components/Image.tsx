import {FC, useEffect, useRef, useState} from 'react'

interface Props {
  title: string
  description: string
  tags: string[]
}

const Image: FC<Props> = ({title, description, tags}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (!ctx) {
      return
    }

    // 设置画布大小和背景颜色
    canvas.width = 400
    canvas.height = 300
    ctx.fillStyle = '#f8f8f8'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // 绘制标题
    ctx.font = 'bold 24px Arial'
    ctx.textAlign = 'center'
    ctx.fillStyle = '#333'
    ctx.fillText(title, canvas.width / 2, 80)

    // 绘制描述
    ctx.font = '12px Arial'
    ctx.textAlign = 'center'
    ctx.fillStyle = '#555'
    wrapText(ctx, description, canvas.width / 2, 130, canvas.width - 100, 30)

    // 绘制标签
    ctx.font = 'bold 12px Arial'
    ctx.textAlign = 'center'
    ctx.fillStyle = '#555'
    const tagsText = tags.join('  ·  ')
    ctx.fillText(tagsText, canvas.width / 2, 200)

    // 生成图片
    const dataUrl = canvas.toDataURL()
    setImageUrl(dataUrl)
  }, [title, description, tags])

  const wrapText = (
    context: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) => {
    const words = text.split(' ')
    let line = ''

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' '
      const metrics = context.measureText(testLine)
      const testWidth = metrics.width

      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y)
        line = words[n] + ' '
        y += lineHeight
      } else {
        line = testLine
      }
    }

    context.fillText(line, x, y)
  }

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <img src={imageUrl} alt="Generated Image" />
    </div>
  )
}

export default Image
