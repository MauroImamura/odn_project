// import React, {useRef,useEffect} from "react";
// import { useEffect } from "react/cjs/react.production.min";

// const Canvas = props => {
    
//     const canvasRef = useRef(null)

//     const draw = ctx => {
//         ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
//         ctx.fillStyle = '#000000'
//         ctx.beginPath()
//         ctx.arc(50,100,20*Math.sin(frameCount*0.05)**2,0,2*Math.PI)
//         ctx.fill()
//     }

//     useEffect(() => {
//         const canvas = canvasRef.current
//         const context = canvas.getContext('2d')
//         let frameCount = 0
//         let animationFrameId

//         const render = () => {
//             frameCount++
//             draw(context,frameCount)
//             animationFrameId = window.requestAnimationFrame(render)
//         }
//         render()

//         return () => {
//             window.cancelAnimationFrame(animationFrameId)            
//         }

//     }, [draw])
    
//     return <canvas ref={canvasRef} {...props}/>

//     }

// export default Canvas