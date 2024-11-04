
function App() {


  return (
    <>
    <form id="clientForm">
      <h3>A-Leg</h3>
      <label for="name">Name:</label>
      <input type="text" id="name" required></input>

      <label for="phone">Phone Number:</label>
      <input typer="tel" id="phone" required></input>

      <label for="pickupAddress">Pick Up Address:</label>
      <input type="text" id="pickupAddress" required></input>

      <label for="pickupTime">Pick Up Time:</label>
      <input type="datetime-local" id="pickupTime" required></input>

      <label for="appointmentAddress">Appoinment Address:</label>
      <input type="text" id="appionmentAddress" required></input>

      <label for="appointmentTime">Appoinment Time</label>
      <input type="datetime-local" id="appiontmentTime" required></input>

      <label for="numPassengers">Number of Passengers</label>
      <input type="number" id="numPassengers" required min="1"></input>

      <h3>B-Leg</h3>
      <label for="dropOffAddress">Drop Off Address</label>
      <input type="text" id="dropOffAddress" required></input>

      <label for="returnPickTime">Return Pick Up</label>
      <input type="datetime-local" id="returnPickTime" required></input>

      <button type="submit">Submit</button>
    </form>
    
    </>
  )
}

export default App
