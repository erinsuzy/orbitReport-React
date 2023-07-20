import satData from "./satData";

const Buttons = (filterByType, setSat, displaySats) => {
  return (
    <div>
      {displaySats?.map((sat) => {
        return (
          <div>
          <button onClick={() => filterByType(sat)} key={sat.id}>
            {sat} Orbit
          </button>
          </div>
        );
          
      })}
    
        <button> onClick={() => setSat(satData)}
          All Orbits</button>
    </div>  
  );

  }
export default Buttons;