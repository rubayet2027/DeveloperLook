'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const brands = ['XBOX', 'Red Bull', 'SIXT', 'Emirates', 'Dojo', 'Magnet', 'Lebara', 'JD Sports']

export default function ClientsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const track = trackRef.current
    if (!track) return

    const children = track.children
    if (!children.length) return

    // Measure one set width
    const singleSetWidth = (children[0] as HTMLElement).offsetWidth

    gsap.to(track, {
      x: -singleSetWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => parseFloat(String(x)) % singleSetWidth),
      },
    })
  }, { scope: trackRef })

  return (
    <section className="bg-site-bg py-6 lg:py-8 overflow-hidden blur-edge-mask">
      <div ref={trackRef} className="flex whitespace-nowrap">
        {/* Render 3 sets for seamless loop */}
        {[0, 1, 2].map((set) => (
          <div key={set} className="flex-shrink-0 flex items-center">
            {brands.map((brand) => (
              <span
                key={`${set}-${brand}`}
                className="inline-flex items-center mx-6 sm:mx-10 text-dark/30 font-bold tracking-tight select-none"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
              >
                {brand}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
