var background = browser.extension.getBackgroundPage();
user_agent_input = document.getElementById('uatext')

user_agent_input.value = background.current_user_agent;

document.getElementById('check_ua').checked = background.checked

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("check")) {
    return;
  }


  var chosen = user_agent_input.value;
  background.checked = !background.checked
  background.change_user_agent(chosen);
});
