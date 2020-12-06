//user logic
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import CurrencyExchange from "./second.js";

// $(document).ready(function () {
//   CurrencyExchange.exchange().then((exchangeRes) => {
//     if (exchangeRes.conversion_rates) {
//       const rates = exchangeRes.conversion_rates;
//       if (isNaN(exchangeRes.conversion_rates)){
//         $('#showErrors').text('there was an error: this currency is not available');
//       }

      
//       $.each(rates, function (key, value) {
//         $("#otherCountry").append(
//           $("<option></option>").attr("value", value).text(key)
//         );
//       });
//     } else {
//       $(".showErrors").text(`There was an error:${exchangeRes.message}`);
//     }
//   });

//   $("#convertButton").click(function () {
//     const finalValue = $("select#otherCountry").val();

//     return $("#result").text(finalValue);
//   });
// });

function showingErrors(error) {
  $('.showErrors').text(`${error}`);
}

$(document).ready(function(){
  $('#convertButton').click(function(){
    const murica = $('#USD').val();
    const currency = $('#otherCountry :selected').val();

    CurrencyExchange.exchange()
    .then(function(response) {
      if (response instanceof Error || currency !== currency) {
        throw Error (`Woops : ${response.messsage}`);
      }

      const entry = response;
      const rates = entry.conversion_rates[currency];
      const ratesMath = rate * murica;
      const totalConversion = ratesMath.toFixed(2); //to delete all them pesky decimal spots
      $('#result').text(`You asked to convert those dolla dolla bills at ${rates} and now you've got ${totalConversion}`)
    })
    .catch(function(error) {
      showingErrors(error.message);
    })
  })
})