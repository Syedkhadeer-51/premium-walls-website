import React, { useState } from 'react';
import './BookingDateTime.css';

const TIME_SLOTS = [
    { id: 1, time: "09:00 AM - 11:00 AM" },
    { id: 2, time: "11:00 AM - 01:00 PM" },
    { id: 3, time: "02:00 PM - 04:00 PM" },
    { id: 4, time: "04:00 PM - 06:00 PM" }
];

const BookingDateTime = ({ onConfirm, onBack }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30); // Allow booking up to 30 days in advance

    const handleConfirm = () => {
        if (selectedDate && selectedSlot) {
            onConfirm({
                date: selectedDate,
                timeSlot: selectedSlot.time
            });
        }
    };

    return (
        <div className="booking-datetime">
            <h3 className="datetime-title">Select Date & Time</h3>
            
            <div className="date-section">
                <label>Select Date</label>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={today.toISOString().split('T')[0]}
                    max={maxDate.toISOString().split('T')[0]}
                    required
                />
            </div>

            {selectedDate && (
                <div className="time-slots">
                    <label>Select Time Slot</label>
                    <div className="slots-grid">
                        {TIME_SLOTS.map((slot) => (
                            <div
                                key={slot.id}
                                className={`time-slot ${selectedSlot?.id === slot.id ? 'selected' : ''}`}
                                onClick={() => setSelectedSlot(slot)}
                            >
                                {slot.time}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="datetime-actions">
                <button className="back-button" onClick={onBack}>
                    Back
                </button>
                <button
                    className="confirm-button"
                    onClick={handleConfirm}
                    disabled={!selectedDate || !selectedSlot}
                >
                    Confirm Booking
                </button>
            </div>
        </div>
    );
};

export default BookingDateTime; 