type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
  };
  
  function createCar(manufacturer: string, model: string, extras: Record<string, any>): Car {
    return { manufacturer, model, ...extras };
  }
  
  // Example usage
  const myCar: Car = createCar("Toyota", "Camry", { color: "blue", year: 2024 });
  console.log(myCar);
  
