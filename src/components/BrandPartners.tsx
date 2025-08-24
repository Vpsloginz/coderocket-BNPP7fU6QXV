const BrandPartners = () => {
  const brands = [
    { src: "https://spartanox.com/assets/img/brand/brand-8.svg", alt: "MetaTrader" },
    { src: "https://spartanox.com/assets/img/brand/brand-9.svg", alt: "TradingView" },
    { src: "https://spartanox.com/assets/img/brand/brand-10.svg", alt: "cTrader" },
    { src: "https://spartanox.com/assets/img/brand/brand-6.svg", alt: "FCA Regulated" },
    { src: "https://spartanox.com/assets/img/brand/brand-7.svg", alt: "CySEC" }
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-500 font-medium text-lg">Trusted by leading financial institutions worldwide</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={brand.src} 
                alt={brand.alt} 
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandPartners