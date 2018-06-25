module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = document.querySelectorAll('.conversation.hasLabels:not(.read)').length;
    const messageRequestsElement = document.querySelector('span.subject-text.ellipsis');
    if (messageRequestsElement) {
      count += parseInt(messageRequestsElement.innerHTML, 40);
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
