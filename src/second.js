export default class CurrencyExchange {
  static async exchange() {
    console.log(process.env.API_KEY)
      fetch(
      `https://v6.exchangerate-api.com/v6/0b1cb3dd097b644cbf0a7166/latest/USD`
    )
    
      .then((response) => {
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
