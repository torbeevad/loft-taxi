var cleave = new Cleave('.input-element', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
    }
});