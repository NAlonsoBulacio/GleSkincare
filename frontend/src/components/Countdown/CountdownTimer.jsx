import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutos en segundos

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  // Calcula días, horas, minutos y segundos
  const days = Math.floor(timeRemaining / (60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="w-full flex flex-wrap justify-center py-4">
      <h1 className="w-full text-center px-6">
      ⚠️If you close this window, you will lose this offer; you won't find it in
        our store⚠️
      </h1>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col items-center mx-4 px-4 py-2 bg-gray-200 rounded-xl">
          <span className="text-2xl font-bold">{days}</span>
        </div>
        <h1 className="text-2xl font-bold">:</h1>
        <div className="flex flex-col items-center mx-4 px-4 py-2 bg-gray-200 rounded-xl">
          <span className="text-2xl font-bold">{hours}</span>
        </div>
        <h1 className="text-2xl font-bold">:</h1>
        <div className="flex flex-col items-center mx-4 px-4 py-2 bg-gray-200 rounded-xl">
          <span className="text-2xl font-bold">{minutes}</span>
        </div>
        <h1 className="text-2xl font-bold">:</h1>
        <div className="flex flex-col items-center mx-4 px-4 py-2 bg-gray-200 rounded-xl">
          <span className="text-2xl font-bold">{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
