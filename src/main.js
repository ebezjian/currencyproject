//user logic
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import CurrencyExchange from "./second.js";

$(document).ready(function () {
  CurrencyExchange.exchange().then((exchangeRes) => {
    if (exchangeRes.conversion_rates) {
      const rates = exchangeRes.conversion_rates;
      
      $.each(rates, function (key, value) {
        $("#otherCountry").append(
          $("<option></option>").attr("value", value).text(key)
        );
      });
    } else {
      $(".showErrors").text(`There was an error:${exchangeRes.message}`);
    }
  });

  $("#convertButton").click(function () {
    const finalValue = $("select#otherCountry").val();

    return $("#result").text(finalValue);
  });
});
