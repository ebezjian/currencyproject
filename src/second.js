export default class CurrencyExchange {
  static async exchange() {
    console.log(process.env.API_KEY)
      fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
    )
    
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw Error(response.message);
        }
        return response.json();
      })
      .catch((error) => {
        return error.message;
      });
  }
}
