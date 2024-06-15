export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "5463d0c9d6msh43e34d409ece16bp10b538jsndef9a819ed75",
    "x-rapidapi-host": "booking-com.p.rapidapi.com",
  };

  const response = await fetch(
    "https://booking-com.p.rapidapi.com/v1/hotels/reviews?customer_type=solo_traveller%2Creview_category_group_of_friends&locale=en-gb&sort_type=SORT_MOST_RELEVANT&language_filter=en-gb%2Cde%2Cfr&hotel_id=1676161&page_number=0",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}
