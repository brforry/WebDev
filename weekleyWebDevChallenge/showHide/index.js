function toggleVisibility() {
    // get the emojis
    var emojis = document.getElementById('emojis');

    // get the current value of the clock's display property
    var displaySetting = emojis.style.display;

    // also get the clock button, so we can change what it says
    var showHideButton = document.getElementById('show-hide-button');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      emojis.style.display = 'none';
      // change button text
      showHideButton.innerHTML = 'Show';
    }
    else {
      // clock is hidden. show it
      emojis.style.display = 'block';
      // change button text
      showHideButton.innerHTML = 'Hide';
    }
  }