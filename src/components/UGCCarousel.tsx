'use client'

// Placeholder images in 9:16 format (1080x1920 aspect ratio)
// Replace these with your actual GIF files: /gifs/ugc-1.gif, etc.
const UGC_GIFS = [
  'https://placehold.co/270x480/1a1a2e/ffffff?text=UGC+1',
  'https://placehold.co/270x480/16213e/ffffff?text=UGC+2',
  'https://placehold.co/270x480/1a1a2e/ffffff?text=UGC+3',
  'https://placehold.co/270x480/16213e/ffffff?text=UGC+4',
  'https://placehold.co/270x480/1a1a2e/ffffff?text=UGC+5',
  'https://placehold.co/270x480/16213e/ffffff?text=UGC+6',
  'https://placehold.co/270x480/1a1a2e/ffffff?text=UGC+7',
  'https://placehold.co/270x480/16213e/ffffff?text=UGC+8',
  'https://placehold.co/270x480/1a1a2e/ffffff?text=UGC+9',
  'https://placehold.co/270x480/16213e/ffffff?text=UGC+10',
]

export default function UGCCarousel() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedGifs = [...UGC_GIFS, ...UGC_GIFS]

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      {/* CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .carousel-track {
          animation: scroll 60s linear infinite;
        }
      `}</style>

      {/* Carousel Container - Full width overflow */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="carousel-track flex gap-4 sm:gap-6 w-fit">
          {duplicatedGifs.map((gif, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[180px] sm:w-[220px] lg:w-[260px]"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] shadow-xl">
                {/* Phone frame effect */}
                <div className="absolute inset-0 rounded-2xl border-4 border-black/20 pointer-events-none z-10" />

                {/* GIF */}
                <img
                  src={gif}
                  alt={`UGC Video Example ${(index % 10) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
