import fff from "../img/fff.png";

function Reservation() {
  return (
    <div className="reserve">
      <img className="zdj1" src={fff}></img>
      <img className="zdj2" src={fff}></img>
      <div className="container">
        <h1>Reserve your table</h1>
        <div className="split2">
          <div>
            <input type="text" placeholder="Name"></input>
            <br></br>
            <input type="time" placeholder="Time"></input>
            <br></br>
            <input type="text" placeholder="Guests"></input>
            <br></br>
          </div>
          <div>
            <input type="email" placeholder="Email address"></input>
            <br></br>
            <input type="date" placeholder="Date"></input>
            <br></br>
            <input type="phone" placeholder="Phone"></input>
            <br></br>
            <div className="wrapper2">
              <button> MAKE RESERVATION</button>
              <div className="np">
                <span className="napisr">
                  <a> YOU CAN ALSO CALL </a>
                  <br />
                  <span className="napisr2">FOR A RESERVATION</span>
                </span>
              </div>
            </div>
            <p>1-007 000 005</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reservation;
