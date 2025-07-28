'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    const { data, error } = await supabase.from('flights').select('*');
    if (!error) setFlights(data);
  };

  return (
    <main>
      <h1>Emirates PTFS Flight Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Aircraft</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flight_number}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>{flight.aircraft}</td>
              <td>{flight.time}</td>
              <td>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
