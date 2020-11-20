//user logic
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import CurrencyExchange from "./second.js";

function clearFields() {
  $("#usCurrency").val("");
  $(".showErrors").text("");
  $(".showCurrency1").text("");
  $(".showCurrency2").text("");
}
$(document).ready(function () {
  $("#convertButton").click(function () {
    let usBase = $("#usCurrency").val();
    clearFields();
    let promise = new Promise(function(resolve, reject) {
    const value = Math.floor(Math.random() * Math.floor(2))
    if (value === 1) {
      resolve("the value is 1");
    } else {
      reject("the value is 0");
    }
    console.log(Promise)
    CurrencyExchange.exchange()
      .then((exchangeRes) => {
        console.log(exchangeRes)
      })
      //  (response) {
      //   console.log(response)
      //   const body = JSON.parse(response);
      //   $(".showCurrency1").text(
      //     `This is how much you would have in Korea is ${body.conversion_rates.KRW} from ${usBase}`
      //   );
      //   $(".showErrors").text("");
      // },
      function (error) {
        $(".showErrors").text(
          `There was an error processing your request:${error}`
        );
      }
    );
  });
});
