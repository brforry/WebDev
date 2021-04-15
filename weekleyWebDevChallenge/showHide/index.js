function toggleVisibility() {
    // get the emojis
    const emojis = document.getElementById('emojis');

    // also get the button, so we can change what it says
    var showHideButton = document.getElementById('show-hide-button');

    // now toggle the emoji and the button text, depending on current state
    if (emojis.style.display == 'flex') {
      // clock is visible. hide it
      emojis.style.display = 'none';
      // change button text
      showHideButton.innerHTML = 'Show';
    }
    else {
      // emoji is hidden. show it
      emojis.style.display = 'flex';
      // change button text
      showHideButton.innerHTML = 'Hide';
    }
  }