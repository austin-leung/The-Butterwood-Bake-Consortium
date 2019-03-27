
/* validates contact form by zip code */
function validate() {

  var txtZipcode = $("#txtZipcode").val();
  if (isNaN(txtZipcode)) { /* alert if not digits */
    alert("Zip code must be a number.");
    return false;
  }
  if (txtZipcode < 10000 || txtZipcode >= 100000) { /* alert if not five digits */
    alert("Zip code must be 5 digits.");
    return false;
  }
  return true;
}

/* validates custom order form by phone and pickupdate */
function validatePickup() {

  var txtPhone = $("#phone").val();
  if (isNaN(txtPhone)) { /*alert if not digits */
    alert("Phone number is not valid. Please only use digits.");
    return false;
  }
  if (txtPhone >= 10000000000 || txtPhone < 1000000000) { /* alert if not 10 digits */
    alert("Phone number is not valid. Please input your 10 digit phone number.");
    return false;
  }

  var txtPickup = $("#txtDate").val();
  var pickupDate = new Date(txtPickup);
  if(pickupDate <= new Date()) { /* alert if pickup date is in past */
    alert("Pickup date is not valid. Date must be in the future.");
    return false;
  }
  return true;
}