import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import AddBookingForm from "../booking/addBookingForm";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:3002/api/booking');
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateBookingStatus = async (bookingId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:3002/api/booking/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (!response.ok) {
        throw new Error('Failed to update booking status');
      }
      // Update the status of the booking in the local state
      setBookings(prevBookings => {
        return prevBookings.map(booking => {
          if (booking.id === bookingId) {
            return { ...booking, status: 'Approved' }; // Change status to 'Approved'
          } else {
            return booking;
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addBooking = async (newBooking) => {
    try {
      const response = await fetch('http://localhost:3002/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBooking)
      });
      if (!response.ok) {
        throw new Error('Failed to add booking');
      }
      fetchBookings(); // Fetch updated booking data after adding a new booking
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AddBookingForm onAddBooking={addBooking} />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Pickup Location</th>
            <th>Delivery Location</th>
            <th>Truck Type</th> {/* New column for Truck Type */}
            <th>Truck Quantity</th> {/* New column for Truck Quantity */}
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.customerName}</td>
              <td>{booking.pickupLocation}</td>
              <td>{booking.deliveryLocation}</td>
              <td>{booking.truckType}</td> {/* Display Truck Type */}
              <td>{booking.truckQuantity}</td> {/* Display Truck Quantity */}
              <td>{booking.status}</td>
              <td>
                <Button color="dark" onClick={() => updateBookingStatus(booking.id, 'Completed')}>Mark as Completed</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookingManagement;
