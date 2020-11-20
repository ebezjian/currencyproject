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
    CurrencyExchange.exchange()
      .then((exchangeRes) => {
        const valueKorea = exchangeRes.conversion_rates.KRW
        console.log(usBase * valueKorea)
        let finalValue = usBase * valueKorea
        return $(".showCurrency1").text(finalValue);       
      })
  });
});
