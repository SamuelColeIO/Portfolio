const emphasiseCaret = (rightCaret) => {
  customTimeout(1000).then(() => {
    scaleUp(rightCaret);
    return customTimeout(250);
  }).then(() => {
    scaleDown(rightCaret);
    return customTimeout(600);
  }).then(() => {
    scaleUp(rightCaret);
    return customTimeout(250);
  }).then(() => {
    scaleDown(rightCaret);
  })
}

const navigateArrowEmphasis = (allArrows, currentArrow) => {
  let nextArrow;
  if(currentArrow < 3) {
    nextArrow = currentArrow + 1;
  } else if(currentArrow == 3) {
    //if restarting from top pane
    nextArrow = 0;
  }
  //shake navigation arrow
  customTimeout(5000).then(() => {
    allArrows[nextArrow].classList.add("navigate-arrow--active");
    return customTimeout(1000);
  }).then(() => {
    allArrows[nextArrow].classList.remove("navigate-arrow--active");
  })
}

const customTimeout = (timeout) => {
  return new Promise((resolve) => {
      setTimeout(resolve, timeout);
  });
}

const scaleUp = (rightCaret) => {
  // scale up right caret
  rightCaret.style.transform = "scale(1.1)";
}

const scaleDown = (rightCaret) => {
  // scale down right caret
  rightCaret.style.transform = "scale(0.9)";
}