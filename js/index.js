document.addEventListener("touchstart", function () {}, true);

// Place raw HTML of each version into appropriate containers
function updateHtmlSigRaw() {
  get_html_signature = $("#standard-target").clone(true);
  $(get_html_signature).find('*[style*="display: none"]').remove();
  $(get_html_signature).html();
  $("#html code").text($(get_html_signature).html());
}

// LAST NAME
$("input.lastname").on("change keyup paste", function () {
  var lastname = $(this).val();
  if (lastname) {
    $(".fullname-container").show();
    $(".lastname-container").show();
    $(".lastname-container").html(lastname);
  } else {

  }

  updateHtmlSigRaw()
});

// FULL NAME
$("input.firstname").on("change keyup paste", function () {
  var firstname = $(this).val();
  if (firstname) {
    $(".fullname-container").show();
    $(".firstname-container").show();
    $(".firstname-container").html(firstname);
  } else {}

  updateHtmlSigRaw()
});

// JOB TITLE
$("input.position").on("change keyup paste", function () {
  var fullname = $(this).val();
  if (fullname) {
    $(".position-container").show();
    $(".position-container .position").html(fullname);
  } else {
    $(".position-container").hide();
  }

  updateHtmlSigRaw()
});

$.fn.inputFilter = function(inputFilter) {
  return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
    if (inputFilter(this.value)) {
      this.oldValue = this.value;
      this.oldSelectionStart = this.selectionStart;
      this.oldSelectionEnd = this.selectionEnd;
    } else if (this.hasOwnProperty("oldValue")) {
      this.value = this.oldValue;
      this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
    }
  });
};

$("input.telephone, input.mobile, input.fax").inputFilter(function(value) {
  return /^\d*$/.test(value); });

// OFFICE PHONE
$(".telephone-container").hide();

$("input.telephone").on("change keyup paste", function () {
  var telephone = $(this).val().replace(/\D/g,'').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  if (telephone) {
    $(".contact-container").show();
    $(".telephone-container").show();
    $(".telephone-container a").html(telephone)
    $(".telephone-container a").attr("href", "tel:" + telephone);


  } else {
    $(".telephone-container").hide();
  }

  updateHtmlSigRaw()
});

// MOBILE PHONE
$("input.mobile").on("change keyup paste", function () {
  var mobile = $(this).val().replace(/\D/g,'').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  if (mobile) {
    $(".mobile-container").show();
    $(".contact-container").show();
    $(".mobile-container a").html(mobile);
    $(".mobile-container a").attr("href", "tel:" + mobile);
  } else {
    $(".mobile-container").hide();
  }

  updateHtmlSigRaw()
});

// FAX
$(".fax-container").hide();

$("input.fax").on("change keyup paste", function () {
  var fax = $(this).val().replace(/\D/g,'').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  if (fax) {
    $(".fax-container").show();
    $(".contact-container").show();
    $(".fax-container a").html(fax);
    $(".fax-container a").attr("href", "tel:" + fax);

  } else {
    $(".fax-container").hide();
  }

  updateHtmlSigRaw()
});

// ADDRESS
$(".address-container").hide();
$("input.address").on("change keyup paste", function () {
  var address = $(this).val();
  if (address) {
    $(".address-container").show();
    $(".address-container").html(address);
  } else {
    $(".address-container").hide();
  }

  updateHtmlSigRaw()
});

$(".contact-container").hide();

// SOCIAL
$(".social").hide();
$(".social-selector input[type=radio]").on("change", function () {
  if (document.getElementById('social-1').checked) {
    $(".social").show();
    $(".social-1").show();
    $(".social-2").hide();
    $(".social-3").hide();
  }
  if (document.getElementById('social-2').checked) {
    $(".social").show();
    $(".social-2").show();
    $(".social-1").hide();
    $(".social-3").hide();
  }
  if (document.getElementById('social-3').checked) {
    $(".social").show();
    $(".social-3").show();
    $(".social-1").hide();
    $(".social-2").hide();
  }
  if (document.getElementById('nosocial').checked) {
    $(".social").hide();
    $(".social-1").hide();
    $(".social-2").hide();
    $(".social-3").hide();
  }

  updateHtmlSigRaw()
});


//// CLIPBOARD
new Clipboard('.btn', {
  text: function (trigger) {

    var targetId = trigger.getAttribute('standard-target');
    $(get_html_signature).find('*[style*="display: none"]').remove();
    $(get_html_signature).html();

    var signature = document.querySelector(targetId).innerHTML;
    signature = signature.replace(/class="[^"]*"/g, '')
      .replace(/id="[^"]*"/g, '');
    return signature;
  }
});