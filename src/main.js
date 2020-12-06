//user logic
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import CurrencyExchange from "./second.js";

$(document).ready(function () {
  CurrencyExchange.exchange().then((response) => {
    if (response.conversion_rates) {
      const rates = response.conversion_rates;

      $.each(rates, function (key, value) {
        $("#otherCountry").append(
          $("<option></option>").attr("value", value).text(key)
        );
      });
    } else {
      $(".showErrors").text(`There was an error:${response.message}`);
    }
  });

  $("#convertButton").click(function () {
    const finalValue = $("select#otherCountry").val();
    const murica = $("#USD").val();
    const totalValue = finalValue * murica;
    if (isNaN(totalValue)) {
      $(".showErrors").text(
        "there was an error: this currency is not available"
      );
    }
    else{
    return $("#result").text(totalValue);
    }
    
  });
});

