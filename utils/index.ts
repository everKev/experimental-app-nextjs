export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "5463d0c9d6msh43e34d409ece16bp10b538jsndef9a819ed75",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}
