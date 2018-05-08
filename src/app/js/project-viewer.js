const switchViewer = (direction) => {
  if (direction == "left") {
    if (screenshotCounter > 0) {
    //if looping through screenshots
    projectImage.style.opacity = 0;
    setTimeout(() => {
      // populate viewer
      projectImage.src = "/images/screenshots/" + projects[projectCounter].screenshot[screenshotCounter - 1];
      screenshotCounter -= 1;
      projectImage.style.opacity = 1;
    }, 500);
  } else {
    //if looping through projects
    let newProjectCounterValue = projectCounter - 1
    screenshotCounter = (projects[projectCounter - 1].screenshot.length - 1);
    populateViewer(newProjectCounterValue, screenshotCounter);
    projectCounter = newProjectCounterValue;
  }
    hideCarets(direction);
  }
  else if (direction == "right") {
    if (projectCounter < projects.length - 1) {
      if(screenshotCounter <= (projects[projectCounter].screenshot.length - 2)) {
        //if looping through screenshots
        projectImage.style.opacity = 0;
        setTimeout(() => {
          // populate viewer
          projectImage.src = "/images/screenshots/" + projects[projectCounter].screenshot[screenshotCounter + 1];
          screenshotCounter += 1;
          projectImage.style.opacity = 1;
        }, 500);
      } else {
        //if looping through projects
        let newProjectCounterValue = projectCounter + 1
        screenshotCounter = 0;
        populateViewer(newProjectCounterValue, screenshotCounter);
        projectCounter = newProjectCounterValue;
      }
      hideCarets(direction);
    }
  }
}

const hideCarets = (direction) => {
  // get both carets
  const carets = document.getElementsByClassName('projects__caret');
  const leftCaret = carets[0];
  const rightCaret = carets[1];
  if (projectCounter < 1 && screenshotCounter == 1 && direction == "left") {
    // if no more left
    leftCaret.style.display = "none";
    rightCaret.style.display = "block";
  }
  else if ((projectCounter >= projects.length - 1) && (screenshotCounter >= projects[projectCounter].screenshot.length - 1)) {
    // if no more right
    leftCaret.style.display = "block";
    rightCaret.style.display = "none";
  }
  else {
    // reset both carets
    leftCaret.style.display = "block";
    rightCaret.style.display = "block";
  }
}

const populateViewer = (projectID, screenshotId) => {
  //set project
  let project = projects[projectID];
  //fade viewer out
  fadeOutViewer();
  // dehighlight dev languages
  dehighlightDevLanguages();
  //fade viewer in
  setTimeout(() => {
    // populate viewer
    projectImage.src = "/images/screenshots/" + project.screenshot[screenshotId];
    projectTitle.innerHTML = project.name;
    projectDescription1.innerHTML = project['description-1'];
    projectDescription2.innerHTML = project['description-2'];
    projectImageLink.href = project.link;
    projectLink.href = project.link;
    projectGithub.href = project.github;
    highlightDevLanguages(project);
    fadeInViewer();
  }, 500);
}

const fadeOutViewer = () => {
  //fade viewer out
  projectImage.style.opacity = 0;
  projectTitle.style.opacity = 0;
  projectDescription1.style.opacity = 0;
  projectDescription2.style.opacity = 0;
}

const fadeInViewer = () => {
  //fade viewer out
  projectImage.style.opacity = 1;
  projectTitle.style.opacity = 1;
  projectDescription1.style.opacity = 1;
  projectDescription2.style.opacity = 1;
}

const dehighlightDevLanguages = () => {
  let allDevLanguages = document.getElementsByClassName('devlanguage');
  // convert nodelist to array
  let allDevLanguagesList = Array.prototype.slice.call(allDevLanguages);
  allDevLanguagesList.forEach(language => {
    language.style.color = "#d6d6d6";
  });
}

const highlightDevLanguages = (project) => {
  let projectLanguages = project.languages;
  projectLanguages.forEach(language => {
    let devLanguage = document.getElementsByClassName('devlanguage--' + language);
    // convert nodelist to array
    let devLanguageList = Array.prototype.slice.call(devLanguage);
    devLanguageList.forEach(language => {
      language.style.color = "#A3E7FC";
    })
  });

}