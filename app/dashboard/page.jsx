'use client';

const flights = [
  {
    flight_number: 'EK202',
    departure: 'JFK',
    arrival: 'DXB',
    aircraft: 'A380',
    time: '22:15',
    status: 'On Time',
  },
  {
    flight_number: 'EK318',
    departure: 'LAX',
    arrival: 'DXB',
    aircraft: 'B777',
    time: '01:30',
    status: 'Delayed',
  },
];

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'on time': return 'green';
    case 'delayed': return 'orange';
    case 'boarding': return 'blue';
    case 'cancelled': return 'red';
    default: return 'black';
  }
};

const thStyle = {
  padding: '12px',
  border: '1px solid #ddd',
  textAlign: 'left',
  backgroundColor: '#004080',
  color: 'white',
};

const tdStyle = {
  padding: '12px',
  border: '1px solid #ddd',
};

export default function Page() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Live Flight Dashboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Flight</th>
            <th style={thStyle}>Departure</th>
            <th style={thStyle}>Arrival</th>
            <th style={thStyle}>Aircraft</th>
            <th style={thStyle}>Time</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, idx) => (
            <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#f9f9f9' : 'white' }}>
              <td style={tdStyle}>{flight.flight_number}</td>
              <td style={tdStyle}>{flight.departure}</td>
              <td style={tdStyle}>{flight.arrival}</td>
              <td style={tdStyle}>{flight.aircraft}</td>
              <td style={tdStyle}>{flight.time}</td>
              <td style={{ ...tdStyle, color: getStatusColor(flight.status) }}>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
