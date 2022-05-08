class FinalPage {


get CountryTextBox(){

    return $("#country");
}

get CountryLoader(){

    return $(".lds-ellipsis");
}

get PurchaseBtn(){

    return  $("[type='submit']");
}

get FinalSuccessMessage(){

    return  $(".alert-success");
}

get countryOptions(){

    return  $$(".suggestions ul li a");
}

chooseCountry(country){    
    let filteredOptions = this.countryOptions.filter(option => option.getText() === country)
    filteredOptions[0].click();
}

}
module.exports = new FinalPage()