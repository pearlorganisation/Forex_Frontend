

import React, { useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

const Day = ({ day, price, isSelected, onClick }) => (
    <button
        className={`w-12 h-16 flex flex-col items-center justify-between p-1 rounded-lg font-medium ${isSelected
            ? 'bg-[#012F76] text-white font-bold'
            : 'hover:bg-gray-100 text-[#012F76] bg-white'
            }`}
        onClick={onClick}
    >
        <span className="text-sm">{day}</span>
        <span className="text-xs">${price}</span>
    </button>
)

export default function CalendarPopUp() {
    const [currentDate, setCurrentDate] = useState(new Date(2021, 3, 1)) // April 2021
    const [selectedDate, setSelectedDate] = useState(new Date(2021, 3, 2)) // April 2, 2021

    const getDaysInMonth = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const firstDayOfMonth = new Date(year, month, 1).getDay()

        const days = []
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                day: i,
                price: ((i % 5) + 5).toFixed(2), // Static price based on the day
            })
        }

        return { days, firstDayOfMonth }
    }

    const { days, firstDayOfMonth } = useMemo(() => getDaysInMonth(currentDate), [currentDate])

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    return (
        <div className='min-h-screen grid place-items-center'>
            <div className="w-full max-w-md mx-auto p-6 bg-[#F5F5F5] border rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">
                        {months[currentDate.getMonth()]}, {currentDate.getFullYear()}
                    </h2>
                    <div className="flex space-x-2">
                        <button
                            onClick={prevMonth}
                            className="p-2 rounded-full border hover:bg-gray-100"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextMonth}
                            className="p-2 rounded-full border hover:bg-gray-100"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2 mb-2">
                    {daysOfWeek.map((day) => (
                        <div
                            key={day}
                            className="text-center text-sm font-medium text-gray-500"
                        >
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: firstDayOfMonth - 1 }).map((_, index) => (
                        <div key={`empty-${index}`} />
                    ))}
                    {days.map(({ day, price }) => (
                        <Day
                            key={day}
                            day={day}
                            price={price}
                            isSelected={
                                selectedDate?.getDate() === day &&
                                selectedDate?.getMonth() === currentDate.getMonth()
                            }
                            onClick={() =>
                                setSelectedDate(
                                    new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                                )
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
