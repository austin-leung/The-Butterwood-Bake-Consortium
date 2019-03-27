function showDescription(descript) {
  $("#description").html("Description: " + descript);
}

function hideDescription() {
  $("#description").html("");
}

function validate() {

  var txtZipcode = $("#txtZipcode").val();
  if (isNaN(txtZipcode)) {
    alert("Zip code must be a number.");
    return false;
  }
  if (txtZipcode < 10000 || txtZipcode >= 100000) {
    alert("Zip code must be 5 digits.");
    return false;
  }
  return true;
}

function validatePickup() {

  var txtPhone = $("#phone").val();
  if (isNaN(txtPhone)) {
    alert("Phone number is not valid. Please only use digits.");
    return false;
  }
  if (txtPhone >= 10000000000 || txtPhone < 1000000000) {
    alert("Phone number is not valid. Please input your 10 digit phone number.");
    return false;
  }

  var txtPickup = $("#txtDate").val();
  var pickupDate = new Date(txtPickup);
  if(pickupDate <= new Date()) {
    alert("Pickup date is not valid. Date must be in the future.");
    return false;
  }
  return true;
}