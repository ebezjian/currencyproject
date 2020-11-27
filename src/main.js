//user logic
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import CurrencyExchange from "./second.js";

$(document).ready(function () {
  CurrencyExchange.exchange().then((exchangeRes) => {
    console.log(typeof exchangeRes.conversion_rates);
    const rates = exchangeRes.conversion_rates;

    $.each(rates, function (key, value) {
      $("#otherCountry").append(
        $("<option></option>").attr("value", value).text(key)
      );
    });
  });

  $("#convertButton").click(function () {
    const finalValue = $("select#otherCountry").val();

    return $("#result").text(finalValue);
  });
});
