'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineSceneBasic() {
  return (
    <div className="w-full h-full relative overflow-hidden border-0 will-change-transform">
      <div className="h-full transform-gpu">
        <div className="w-full h-full flex items-center justify-center">
          <Suspense 
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <span className="loader"></span>
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
} 