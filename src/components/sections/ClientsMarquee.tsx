'use client'

const clients = [
  'SIXT', 'Dojo', 'Magnet Trade', 'PrettyLittleThing', 'JD Sports',
  'New Look', 'Boohoo', 'Very', 'Moonpig', 'Currys', 'Costa Coffee',
  'Wickes', 'Ronseal', 'Air France', 'Thomas Cook', 'TUI',
]

export default function ClientsMarquee() {
  return (
    <section className="w-full bg-grey-100 py-10 overflow-hidden border-y border-grey-200">
      <div className="text-center mb-6 px-4">
        <p className="text-grey-300 text-sm font-medium tracking-widest uppercase">
          Trusted by world-class brands
        </p>
      </div>

      {/* Row 1 - left */}
      <div className="relative mb-4">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8 text-grey-900 font-semibold text-lg lg:text-xl whitespace-nowrap flex-shrink-0"
            >
              {client}
              <span className="w-1.5 h-1.5 rounded-full bg-mint flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 - right */}
      <div className="relative">
        <div className="flex animate-[marqueeReverse_35s_linear_infinite] whitespace-nowrap">
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8 text-grey-300 font-medium text-base lg:text-lg whitespace-nowrap flex-shrink-0"
            >
              {client}
              <span className="w-1 h-1 rounded-full bg-grey-200 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
