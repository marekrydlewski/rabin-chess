module.exports = {
  'Edit game tags' : function(browser) {
    browser
      .url('http://panowiczmichal.ddns.net/')
      .waitForElementVisible('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > header > button', 5000)
      .click('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > header > button')
      .waitForElementVisible('#root > div > div._1aMwaPywKbyD32nYQBTIgb._23CbosxkhhA3oAU_PvWHOx > div > aside > div > div > div:nth-child(2) > button', 2000)
      .click('#root > div > div._1aMwaPywKbyD32nYQBTIgb._23CbosxkhhA3oAU_PvWHOx > div > aside > div > div > div:nth-child(2) > button')
      .waitForElementVisible('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > div > div > div > div', 2000)
      .click('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > div > div > div > div > div > div > ul > li:nth-child(2) > span > span._2SC_RY3ZxUC0BwsUBhFRzR > span:nth-child(2) > button')
      .waitForElementVisible('body > div:nth-child(2) > div > div.FBGDlZPA0Vth_KBKYx9cJ._1ek2h0N2zwUPkFyAmg7z_z._2Yo5LBm79wkinn8UKMEOls > section > div > div > section > div:nth-child(1) > input', 500)
      .setValue('body > div:nth-child(2) > div > div.FBGDlZPA0Vth_KBKYx9cJ._1ek2h0N2zwUPkFyAmg7z_z._2Yo5LBm79wkinn8UKMEOls > section > div > div > section > div:nth-child(1) > input', 'Ogorek')
      .click('body > div:nth-child(2) > div > div.FBGDlZPA0Vth_KBKYx9cJ._1ek2h0N2zwUPkFyAmg7z_z._2Yo5LBm79wkinn8UKMEOls > section > div > div > section > div._29XjX9PJIUZbQiXFTaW15q > div > button')
      .pause(500)
      .assert.containsText('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > div > div > div > div > div > div > ul > li:nth-child(2) > span > span._1qnUzRcBk_McGHewb2N9PQ.G0XQk-Eyh_XJQU_suKSdY > span:nth-child(2)', 'Ogorek')
      .end();
  }
}
