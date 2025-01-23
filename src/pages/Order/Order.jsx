import React from 'react';
import { TabsBtn, TabsContent, TabsProvider } from '../../components/Tabs/Tabs';
import ExchangeCurrency from '../../components/ExchangeCurrency/ExchangeCurrency';
import TransferMoney from '../../components/TransferMoney/TransferMoney';
import ReloadUnloadForexCards from '../../components/ReloadUnloadForexCards/ReloadUnloadForexCards';
import InternationalSimCards from '../../components/InternationalSimCards/InternationalSimCards';
import TravelInsurance from '../../components/TravelInsurance/TravelInsurance';
import { useSearchParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import UserDetail from '../../components/UserDetail/UserDetail';
// import { TabsBtn, TabsContent, TabsProvider } from '@/components/core/tab';
function Order() {
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('tab'), "dtab")
    return (
        <div className=" relative bg-white/10 dark:bg-black/40 backdrop-blur-sm rounded-md p-4 min-h-screen "

        >

            <TabsProvider defaultValue={searchParams.get('tab') || 'exchangeCurrency'}>
                <div className="flex justify-center mt-2 ">
                    <div className="flex items-center text-xs text-center md:text-base md:text-justify w-fit  dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-3xl border">
                        <TabsBtn value="exchangeCurrency">
                            <span className="relative z-[2] ">Exchange Currency</span>
                        </TabsBtn>
                        <TabsBtn value="transferNoney">
                            <span className="relative z-[2] ">Transfer Money</span>
                        </TabsBtn>

                        <TabsBtn value="reloadUnloadForexCards">
                            <span className="relative z-[2] ">Reload/Unload Forex Cards</span>
                        </TabsBtn>
                        <TabsBtn value="internationalSimCards">
                            <span className="relative z-[2] ">International Sim Cards</span>
                        </TabsBtn>
                        <TabsBtn value="travelInsurance">
                            <span className="relative z-[2] ">Travel Insurance</span>
                        </TabsBtn>
                    </div>
                </div>
                <TabsContent value="exchangeCurrency">
                    <div className="w-full">
                        <ExchangeCurrency />
                    </div>
                </TabsContent>
                <TabsContent value="transferNoney">
                    <div className="w-full ">

                        <TransferMoney />
                    </div>
                </TabsContent>


                <TabsContent value="reloadUnloadForexCards">
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
            <div className='relative'>
                <div className='grid grid-cols-3 size-full  absolute right-0 bottom-0 opacity-70  '>
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
            </div>
            {
                true && createPortal(<UserDetail />, document.body)
            }
        </div>
    );
}



export default Order