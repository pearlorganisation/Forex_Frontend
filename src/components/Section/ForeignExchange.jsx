import React from 'react'

const cardData = [
  { color: "#05FF00", border: "#05FF00", text: "$ Billion +", subtitle: "Exchange so far" },
  { color: "#FAFF00", border: "#FAFF00", text: "$ Billion +", subtitle: "Exchange so far" },
  { color: "#B85EFF", border: "#B85EFF", text: "$ Billion +", subtitle: "Exchange so far" },
  { color: "#76DFFF", border: "#76DFFF", text: "$ Billion +", subtitle: "Exchange so far" },
];
function ForeignExchange() {
  return (
    <div className='px-20 items-center justify-center mx-auto mt-10 max-w-7xl'>
      <h1 
        className="text-[40px] text-[#012F76] font-normal leading-[50px] mx-auto text-center decoration-none underline-from-font decoration-skip-ink-none w-[80%] tracking-wide" 
        style={{ fontFamily: 'Stoke' }}
      >
        The World's First & Largest Online Foreign Exchange Marketplace
      </h1>

      <div className="flex flex-col gap-10 py-10 items-center justify-center">
        {/** Group cards in rows dynamically */}
        {[0, 2].map((startIndex) => (
          <div key={startIndex} className="flex flex-row gap-10">
            {cardData.slice(startIndex, startIndex + 2).map((card, index) => (
              <div
                key={index}
                className={`bg-[#011536] h-30 w-60 px-4 py-4 border-2 items-center text-center rounded-md`}
                style={{
                  borderColor: card.border,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div className="text-[#05FF00]">{card.text}</div>
                <div className="text-white">{card.subtitle}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForeignExchange;