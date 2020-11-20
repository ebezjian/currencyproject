//user logic
//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$('#convertButton').click(function() {
  const baseCurrency = $('#usCurrency').val();
  $('#usCurrency').val("");

  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/{process.env.API_KEY}/latest/USD`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  }
  function getElements(response) {
    $('.showCurrency1').text(`This is how much you would have in Korea is ${res[]}`)
  }
})