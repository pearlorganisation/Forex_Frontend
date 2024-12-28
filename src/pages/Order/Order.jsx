import React from 'react';
import { TabsBtn, TabsContent, TabsProvider } from '../../components/Tabs/Tabs';
import ExchangeCurrency from '../../components/ExchangeCurrency/ExchangeCurrency';
import TransferMoney from '../../components/TransferMoney/TransferMoney';
import ReloadUnloadForexCards from '../../components/ReloadUnloadForexCards/ReloadUnloadForexCards';
import InternationalSimCards from '../../components/InternationalSimCards/InternationalSimCards';
import TravelInsurance from '../../components/TravelInsurance/TravelInsurance';
// import { TabsBtn, TabsContent, TabsProvider } from '@/components/core/tab';
function Order() {
    return (
        <div className="border bg-white/10 dark:bg-black/40 backdrop-blur-sm rounded-md p-4  relative">
            <TabsProvider defaultValue={'transferNoney'}>
                <div className="flex justify-center mt-2 ">
                    <div className="flex items-center w-fit  dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-3xl border">
                        <TabsBtn value="exchangeCurrency">
                            <span className="relative z-[2] uppercase">Exchange Currency</span>
                        </TabsBtn>
                        <TabsBtn value="transferNoney">
                            <span className="relative z-[2] uppercase">Transfer Money</span>
                        </TabsBtn>

                        <TabsBtn value="reload/unloadForexCards">
                            <span className="relative z-[2] uppercase">Reload/Unload Forex Cards</span>
                        </TabsBtn>
                        <TabsBtn value="internationalSimCards">
                            <span className="relative z-[2] uppercase">International Sim Cards</span>
                        </TabsBtn>
                        <TabsBtn value="travelInsurance">
                            <span className="relative z-[2] uppercase">Travel Insurance</span>
                        </TabsBtn>
                    </div>
                </div>
                <TabsContent value="exchangeCurrency">
                    <div className="w-full">
                        <ExchangeCurrency />
                    </div>
                </TabsContent>
                <TabsContent value="transferNoney">
                    <div className="w-full">

                        <TransferMoney />
                    </div>
                </TabsContent>


                <TabsContent value="reload/unloadForexCards">
                    <div className="w-full">
                        <ReloadUnloadForexCards />
                    </div>
                </TabsContent>
                <TabsContent value="internationalSimCards">
                    <div className="w-full">
                        <InternationalSimCards />
                    </div>
                </TabsContent>
                <TabsContent value="travelInsurance">
                    <div className="w-full">
                        <TravelInsurance />
                    </div>
                </TabsContent>
            </TabsProvider>
        </div>
    );
}



export default Order