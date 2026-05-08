'use client'

const clients = [
  'JD Sports', 'Kroger', 'HubSpot', 'XBOX', 'Red Bull',
  'SIXT', 'Emirates', 'Dojo', 'Magnet', 'PrettyLittleThing',
]

export default function ClientsMarquee() {
  return (
    <section className="bg-site-bg py-10 lg:py-14 overflow-hidden">
      <div className="blur-edge-mask">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="flex-shrink-0 mx-8 sm:mx-12 lg:mx-16 text-dark/30 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight select-none"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
