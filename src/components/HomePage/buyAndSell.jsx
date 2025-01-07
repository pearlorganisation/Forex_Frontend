import React from 'react'

function buyAndSell() {

    
  return (
    <div>
      
        {/* Render "Buy & Sell" Section */}
        {cardData.map((item, index) =>
          item.buysell ? (
            <div key={index} className="py-10">
              <h2 className="text-2xl text-center text-[#012F76] font-semibold mb-6">
                Start Buying & Selling Forex in Few Steps
              </h2>
              <div className="flex flex-row gap-10 justify-center">
                {item.buysell.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="bg-[#011536] h-30 w-72 px-2 py-2 border-2 items-center text-center rounded-md"
                    style={{
                      borderColor: step.border,
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <div className="flex flex-row gap-2 text-start justify-start items-center">
                      <div>
                        <img
                          src={step.image}
                          alt={step.account}
                          className="w-20 h-10 mx-auto "
                        />
                      </div>
                      <div>
                        <h3
                          className="text-base font-semibold text-start text-[#012F76]"
                          style={{ color: step.color }}
                        >
                          {step.account}
                        </h3>
                        <p
                          className="text-base text-start"
                          style={{ color: "rgba(255, 255, 255, 0.65)" }}
                        >
                          {step.accountStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
    </div>
  )
}

export default buyAndSell
