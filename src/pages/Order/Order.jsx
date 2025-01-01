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
        <div className="border-2 relative bg-white/10 dark:bg-black/40 backdrop-blur-sm rounded-md p-4 h-screen"

        >
            <div className='grid grid-cols-3 size-full absolute right-0 bottom-[-70vh] opacity-70  '>
                <div
                    className='h-[30vh]'
                    style={{
                        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/cc4e/fd5c/a20cc72cdf63c3a1390d65187aed847f?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kg09cZgR9kL7WAm-F2eQP6t-63Z0FuX0bbXrochKgmvDZEYumN93byYw5X4nmzNRUttRIKKMK09UApC7iuny7~DECpmaF1dBzMbqLlvB1EJLgh36mTeS9DGWuGJ9l7Hq9Y6mDPU~e4V0AaLMoGpFgWBIem5R1U0ufJQZ1qNpBuDQxqEdRxKeuu~335B0TzXoBKzOHxLtrEcpX0k9h-sSLvpQBXffL6iuGOHSwYrGrCrRFSFKZcEat6CmNLsjPRZ9STCndfHtvgxEJumTcq~ZKmsSOsJUqzFfPqvdA3yhaT2dZyExF8bVStib3UEh3OZ~kNIiZGcn41qni4a3sOv7KQ__')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat'
                    }}
                />
                <div
                    className='h-[30vh]'
                    style={{
                        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/cc4e/fd5c/a20cc72cdf63c3a1390d65187aed847f?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kg09cZgR9kL7WAm-F2eQP6t-63Z0FuX0bbXrochKgmvDZEYumN93byYw5X4nmzNRUttRIKKMK09UApC7iuny7~DECpmaF1dBzMbqLlvB1EJLgh36mTeS9DGWuGJ9l7Hq9Y6mDPU~e4V0AaLMoGpFgWBIem5R1U0ufJQZ1qNpBuDQxqEdRxKeuu~335B0TzXoBKzOHxLtrEcpX0k9h-sSLvpQBXffL6iuGOHSwYrGrCrRFSFKZcEat6CmNLsjPRZ9STCndfHtvgxEJumTcq~ZKmsSOsJUqzFfPqvdA3yhaT2dZyExF8bVStib3UEh3OZ~kNIiZGcn41qni4a3sOv7KQ__')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat'
                    }}
                />
                <div
                    className='h-[30vh]'
                    style={{
                        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/cc4e/fd5c/a20cc72cdf63c3a1390d65187aed847f?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kg09cZgR9kL7WAm-F2eQP6t-63Z0FuX0bbXrochKgmvDZEYumN93byYw5X4nmzNRUttRIKKMK09UApC7iuny7~DECpmaF1dBzMbqLlvB1EJLgh36mTeS9DGWuGJ9l7Hq9Y6mDPU~e4V0AaLMoGpFgWBIem5R1U0ufJQZ1qNpBuDQxqEdRxKeuu~335B0TzXoBKzOHxLtrEcpX0k9h-sSLvpQBXffL6iuGOHSwYrGrCrRFSFKZcEat6CmNLsjPRZ9STCndfHtvgxEJumTcq~ZKmsSOsJUqzFfPqvdA3yhaT2dZyExF8bVStib3UEh3OZ~kNIiZGcn41qni4a3sOv7KQ__')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat'
                    }}
                />
            </div>
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