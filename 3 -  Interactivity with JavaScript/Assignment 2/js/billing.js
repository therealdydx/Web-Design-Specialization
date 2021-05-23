function billingFunction(){
    if (document.getElementById('same').checked){
        // then we would just want to copy the values from the billing address right?
        document.getElementById('billingName').value = document.getElementById('shippingName').value;
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value;    
    }
    else{
        // then we would put it empty to do it
        document.getElementById('billingName').value = '';
        document.getElementById('billingZip').value = '';
    }
}