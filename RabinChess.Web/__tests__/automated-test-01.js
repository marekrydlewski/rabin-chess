module.exports = {
  'Rewind last move' : function(browser) {
    browser
      .url('http://panowiczmichal.ddns.net/#/board')
      .waitForElementVisible('#board > div', 5000)
      .click('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > div > div > div > div._1d18-811aEiMA1jp085mwz > div._3HcaZSQ1zzfIuFHaGIFBt7 > button:nth-child(1)')
      .pause(1000)
      .assert.elementPresent('#f5-c426-59e5-8b47-f84e-5c01-a6aa-b233-abbe > img')
      .assert.elementNotPresent('#d3-4058-4f91-15c4-586a-8056-ba05-3960-30c8 > img')
      .end();
  }
}
