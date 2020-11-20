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
    console.log(Promise)
    CurrencyExchange.exchange()
      .then((exchangeRes) => {
        console.log(exchangeRes)
      })
  });
});
