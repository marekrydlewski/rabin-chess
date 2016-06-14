module.exports = {
  'Go to game view' : function(browser) {
    browser
      .url('http://panowiczmichal.ddns.net/')
      .waitForElementVisible('#_3bgQqyib4ypmfai5RzzxFu', 5000)
      .click('#_3bgQqyib4ypmfai5RzzxFu')
      .pause(5000)
      .assert.elementPresent('#board > div')
      .end();
  }
}
