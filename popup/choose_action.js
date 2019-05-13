var background = browser.extension.getBackgroundPage();

var user_agent_input = document.getElementById('uatext');
user_agent_input.value = background.current_user_agent;

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("ua-choice")) {
    return;
  }

  var chosen = e.target.textContent;
  background.setUaString(chosenUa);
});
