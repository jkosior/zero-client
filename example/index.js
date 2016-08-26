
window.addEventListener('load', web3Detect)

function web3Detect() {
  if (global.web3) {
    document.body.innerHTML += 'web3 detected!'
  } else {
    document.body.innerHTML += 'no web3 detected!'
  }
  startApp()
}

function startApp(){
  document.querySelector('.action-button').addEventListener('click', function(){
    web3.eth.getAccounts(function(err, addresses){
      if (err) throw err
      web3.eth.sendTransaction({
        from: addresses[0],
        value: 0,
      }, function(err, txHash){
        if (err) throw err
        console.log('sendTransaction result:', err || txHash)
      })
    })
  })

}
