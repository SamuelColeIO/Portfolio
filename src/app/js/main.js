document.addEventListener("DOMContentLoaded", (event) => { 
    // get viewer

  // call to populate project viewer
  populateViewer(0, 0);
  // call to set up onclick listeners
  addClickListeners();
  // start emphasis of first arrow
  const navigateArrows = document.getElementsByClassName('navigate-arrow');
  // convert nodelist to array
  const navigateArrowsList = Array.prototype.slice.call(navigateArrows);
  navigateArrowEmphasis(navigateArrowsList, 3);
});

const addClickListeners = () => {
  const carets = document.getElementsByClassName('projects__caret');
  const leftCaret = carets[0];
  const rightCaret = carets[1];
  const navigateArrows = document.getElementsByClassName('navigate-arrow');
  // convert nodelist to array
  const navigateArrowsList = Array.prototype.slice.call(navigateArrows);
  // add click listener to each arrow
  navigateArrowsList.forEach((navigateArrow, index) => {
    navigateArrow.onclick = function() {
      navigateArrowEmphasis(navigateArrowsList, index);
      let pane;
      if(index == 1) {
        // if projects pane, emphasise right caret
        emphasiseCaret(rightCaret);
        pane = document.querySelector('.' + panes[index+1]);
        currentPane = 2;
      }
      else if(index == 0) {
        // if down arrow
        pane = document.querySelector('.' + panes[index+1]);
        currentPane = 1;
      }
      else if(index == 2) {
        // if down arrow
        pane = document.querySelector('.' + panes[index+1]);
        currentPane = 3;
      }
      else if(index == 3) {
        //if up arrow
        pane = document.querySelector('.intro');
        currentPane = 0;
      }
      scrollToPane(pane);
    };
  })
  // add click listener to each caret
  leftCaret.onclick = function() {
    switchViewer("left");
  }
  rightCaret.onclick = function() {
    switchViewer("right");
  }
  // hide left caret
  leftCaret.style.display = "none";
};

//get viewer
const projectViewer = document.querySelector('.projects__projects-inner-container');
const projectImage = document.querySelector('.projects__project-image');
const projectImageLink = document.querySelector('.projects__project-link');
const projectTitle = document.querySelector('.projects__project-title');
const projectDescription1 = document.querySelector('.projects__project-description-1');
const projectDescription2 = document.querySelector('.projects__project-description-2');
const projectLink = document.querySelector('.projects__external-link');
const projectGithub = document.querySelector('.projects__github');