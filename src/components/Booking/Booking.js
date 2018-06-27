import React from 'react';
import BookingForm from './BookingForm';

const Booking = () => (
  <section className="section-booking">
    <div className="row">
      <div className="book">
        <div className="book__form">
          <BookingForm />
        </div>
      </div>
    </div>
  </section>
);

export default Booking;
