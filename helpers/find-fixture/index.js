"use strict";

const findUp = require("find-up");
const path = require("path");

module.exports = findFixture;

function findFixture(cwd, fixtureName) {
  return findUp(path.join("__fixtures__", fixtureName), { cwd, type: "directory" }).then(fixturePath => {
    if (!fixturePath) {
      throw new Error(`Could not find fixture with name "${fixtureName}"`);
    }

    return fixturePath;
  });
}
