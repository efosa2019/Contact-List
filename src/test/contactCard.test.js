const assert = require("chai").assert;
const contactCard = require("../App").contactCard;

describe("Testing Card details", function () {
  it("it should return card details", function () {
    let result = contactCard();
    assert.equal(result, "avatar", "name");
  });
});
