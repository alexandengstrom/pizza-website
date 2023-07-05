import Calender from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { useState } from "react"
import ContactForm from "../Components/ContactForm"
import image from "../Images/pizzas.jpg"
import BookingPolicy from "../Components/BookingPolicy"

interface BookingSlot {
    time: string,
    slots: number
}

interface Day {
    date: string,
    slots: BookingSlot[]
}

function getAvailableTimes(): Day[] {
    const values: Day[] = [];

    for (let VAR = 0; VAR <= 60; VAR++) {
        const currentDate = new Date()
        const date = new Date(currentDate.setDate(currentDate.getDate() + VAR));
        const formattedDate = date.toISOString().split('T')[0];
        values.push(generateDay(formattedDate));
    }
    return values
}

function generateDay(date: string): Day {
    return {
        date: date,
        slots: [
            { time: "15:00", slots: Math.floor(Math.random() * 4) },
            { time: "16:00", slots: Math.floor(Math.random() * 4) },
            { time: "17:00", slots: Math.floor(Math.random() * 4) },
            { time: "18:00", slots: Math.floor(Math.random() * 4) },
            { time: "19:00", slots: Math.floor(Math.random() * 4) },
            { time: "20:00", slots: Math.floor(Math.random() * 4) },
            { time: "21:00", slots: Math.floor(Math.random() * 4) },
            { time: "22:00", slots: Math.floor(Math.random() * 4) },
            { time: "23:00", slots: Math.floor(Math.random() * 4) },
        ],
    };
}

const availableTimes: Day[] = getAvailableTimes()

function Book() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [selectedTime, setSelectedTime] = useState<string>("");

    const handleDateChange = (date: Date) => {
        setSelectedDate(date)
        setSelectedTime("")
    }


    
    const getAvailableSlots = (selectedDate: Date): BookingSlot[] => {
        const formattedDate = selectedDate.toISOString().split("T")[0];
        const selectedDay = availableTimes.find(
          (day) => day.date === formattedDate
        );
        return selectedDay ? selectedDay.slots : [];
      };
    
    const availableSlots = getAvailableSlots(selectedDate);
    
    return (
        <>
        <div className="bookings">
            <div className="bookings-container">
                <Calender onChange={handleDateChange} value={selectedDate}/>
                    <div className="available-times-container">
                        <h2>Available Times:</h2>
                            <div className="available-times">
                                {availableSlots.length > 0 ? (
                                    availableSlots.map((slot) => (
                                        <button 
                                            key={slot.time}
                                            onClick={() => setSelectedTime(slot.time)}
                                            disabled={slot.slots === 0}
                                            style={{
                                                backgroundColor:
                                                    selectedTime === slot.time ? "#1a7f36" : slot.slots === 0 ? "gray" : "#28a745",
                                                cursor: slot.slots === 0 ? "not-allowed" : "pointer",
                                            }}
                                            >
                                            {slot.time}
                                        </button>
                                    )
                                )
                                ) : (
                                        <p>No available times for the selected date.</p>
                                    )
                                }
                            </div>
        </div>
            </div>
            {selectedTime != "" && (
                <>
                <div className="reservation">
                <h3>Reservation details:</h3>
                <p>
                    <b>Date:</b> {selectedDate.toISOString().split('T')[0]}
                </p>
                <p>
                    <b>Time:</b> {selectedTime}
                </p>
                <ContactForm 
                message="Important information(optional):"
                buttonText="Reserve table"
                confirmation={() => {confirm("Your reservation is confirmed!")}}
                />
                </div>
                </>
        )}
        <BookingPolicy /> 
        </div>
        </>
    )
}

export default Book