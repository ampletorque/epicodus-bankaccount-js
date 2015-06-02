describe('AccountHolder', function () {
  it("creates a new account with the given specifications", function() {
    var testAccountHolder = new AccountHolder("Rita", "Moreno");
    expect(testAccountHolder.firstName).to.equal("Rita");
    expect(testAccountHolder.lastName).to.equal("Moreno");
    expect(testAccountHolder.accounts).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testAccountHolder = new AccountHolder("Sherlock", "Holmes");
    expect(testAccountHolder.fullName()).to.equal("Sherlock Holmes");
  });
});

describe('Account', function() {
  it("creates a new account with the given specifications", function() {
    var testAccount = new Account("Savings", "3.54");
    expect(testAccount.accountType).to.equal("Savings");
    expect(testAccount.balance).to.equal(3.54);
  });

  it("adds the fullAccount method to all accounts", function() {
    var testAccount = new Account("Checking", "42.00");
    expect(testAccount.readableAccount()).to.equal("Checking: $42.00");
  });
});
