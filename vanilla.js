// vanilla.js

function updateTabMessage(tab) {
  var tabMessages = {
    tavern: 'I need to check the Tavern.',
    showcase: 'Hmm.. I wanna check the Indie Games.',
    mailman: 'I must talk to the Developer.',
    devquill: 'I will checkout the updates from the Developer.'
  };

  var tabMessageElement = document.getElementById('tabMessage');
  
  if (tabMessages[tab]) {
    tabMessageElement.textContent = tabMessages[tab];
  } else {
    tabMessageElement.textContent = '';
  }
}

function clearTabMessage() {
  var tabMessageElement = document.getElementById('tabMessage');
  tabMessageElement.textContent = '';
}