module.exports = {
  'Delete game' : function(browser) {
    browser
      .url('http://panowiczmichal.ddns.net/')
      .waitForElementVisible('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > header > button', 5000)
      .click('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > header > button')
      .waitForElementVisible('#root > div > div._1aMwaPywKbyD32nYQBTIgb._23CbosxkhhA3oAU_PvWHOx > div > aside > div > div > div:nth-child(2) > button', 2000)
      .click('#root > div > div._1aMwaPywKbyD32nYQBTIgb._23CbosxkhhA3oAU_PvWHOx > div > aside > div > div > div:nth-child(2) > button')
      .waitForElementVisible('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > div > div > div > div', 2000)
      .click('#root > div > div._3ZlvAtKLM-x2SK1Y8DVnQr > div > div > div > div > div > div > ul > li:nth-child(2) > span > span._2SC_RY3ZxUC0BwsUBhFRzR > span:nth-child(3) > button')
      .end();//needs finishing
  }
}
