var current_reward = 0;

function DisplayReward(value) {
  var screen_width = $(document).width();
  if (screen_width <= 600) screen_width *= 70 / 100;
  else screen_width *= 50 / 100;
  var len = $("#reward-collection .item").length;
  current_reward += value;
  if (current_reward < 0) {
    current_reward = len - 1;
  } else if (current_reward >= len) {
    current_reward = 0;
  }
  console.log(len);
  document.getElementById("reward-collection").scrollLeft =
    current_reward * screen_width;
}
