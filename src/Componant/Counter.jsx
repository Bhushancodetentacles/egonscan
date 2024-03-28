import React, { useState, useEffect } from "react";

function Counter({timestamp}) {
    const calculateTimeLeft = () => {
        const difference = timestamp - Date.now();
        return difference > 0 ? difference : 0;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        // Cleanup function to clear the timeout if the component is unmounted
        return () => clearTimeout(timer);
      });
    
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
<ul>
<li><span id="days">{days.toString().padStart(2, "0")}</span><span className="durationday" >days</span></li>
                      <li><span id="hours">{hours.toString().padStart(2, "0")}</span><span className="durationday">Hours</span></li>
                      <li><span id="minutes">{minutes.toString().padStart(2, "0")}</span><span className="durationday">Minutes</span></li>
                      <li><span id="seconds">{seconds.toString().padStart(2, "0")}</span><span className="durationday">Seconds</span></li>
                                  
                                </ul>
  );
}

export default Counter;
