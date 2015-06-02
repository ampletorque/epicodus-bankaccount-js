"use strict";

function AccountHolder(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.accounts = [];
}

AccountHolder.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Account(accountType, balance) {
  this.accountType = accountType;
  this.balance = parseFloat(balance);
}

Account.prototype.readableAccount = function() {
  return this.accountType + ": $" + this.balance.toFixed(2);
}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-account-type").val("");
  $("input.new-balance").val("");
}

function addFields() {
  $("#new-accounts").append('<div class="new-account">' +
  '<div class="form-group">' +
  '<label for="new-account-type">Account Type</label>' +
  '<select class="new-account-type" name="new-account-type" type="text">' +
  '<option value="Checking">Checking</option>' +
  '<option value="Savings">Savings</option>' +
  '</select>' +
  '</div>' +
  '<div class="form-group">' +
  '<label for="new-balance">Balance</label>' +
  '<input type="text" class="form-control new-balance">' +
  '</div>' +
  '</div>');
}

function displayAccountHolder(newAccountHolder) {
  $("#show-account-holder").fadeIn("slow");
  $("#show-account-holder h2").text(newAccountHolder.firstName);
  $(".first-name").text(newAccountHolder.firstName);
  $(".last-name").text(newAccountHolder.lastName);
  $("ul#accounts").text("");
  // counter = 0;
  alert("hi");
  newAccountHolder.accounts.forEach(function(account) {
    // counter++;
    // console.log("first: ");
    $("ul#accounts").append('<li>' + account.accountType + ': $' + account.balance.toFixed(2) + '</li>').click(function(){
      alert(account.balance);
    });
    // $("ul#accounts").append('<div class="transaction"></div>');
    // $(".transaction").hide();

    // $("#accounts").last().click(function() {
    //   $(".transaction").html('<button type="submit" id="deposit">Deposit' + account.balance + '</button>' +
    //     '<button type="submit" id="withdrawal">Withdrawal</button>');
    //   $(".transaction").last().show();

    //   // console.log("second: " + counter);
    // });
  });

  // $(".transaction").show();
}

function hideAccountHolder() {
  $("#show-account-holder").fadeOut("slow");
}


$(document).ready(function() {

  $("#add-account").click(function(){
    addFields();
  });

  $("form#new-account-holder").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val(),
    inputtedLastName = $("input#new-last-name").val(),

    newAccountHolder = new AccountHolder(inputtedFirstName, inputtedLastName);

    $("ul#account-holders").append("<li><span class='account-holder'>" + newAccountHolder.fullName() + "</span></li>");

    $(".new-account").each(function(){
      var inputtedAccountType = $(this).find("select.new-account-type").val(),
      inputtedBalance = $(this).find("input.new-balance").val();
      if (inputtedBalance) {
        var newAccount = new Account(inputtedAccountType, inputtedBalance);
        newAccountHolder.accounts.push(newAccount);
      };


      $(".account-holder").last().click(function() {
        displayAccountHolder(newAccountHolder);
        alert("yoyo");
      });

      


    });
          // $("ul#account-holders").hide();
      // $("ul#account-holders").append("<li><span class='account-holder'>" + newAccountHolder.fullName() + "</span></li>");
      // $("ul#account-holders").fadeIn("slow");
      //
      // $(".account-holder").last().click(function() {
      //   displayAccountHolder(newAccountHolder);
      // });

      resetFields();

      $("div.new-account").not("#first").hide();

    });
  });
