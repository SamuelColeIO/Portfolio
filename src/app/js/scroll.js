const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
const introPane = document.querySelector('.intro');
const aboutPane = document.querySelector('.about');
const projectsPane = document.querySelector('.projects');
const contactPane = document.querySelector('.contact');
var currentPane = 0;

//scroll listeners
introPane.addEventListener("wheel", function(e){
  if(currentPane == 0) {
    currentPane = 1;
    scrollToPane(aboutPane);
  }
event.preventDefault();
})

aboutPane.addEventListener("wheel", function(e){
  if(currentPane == 1) {
    if (e.deltaY < 0) {
      currentPane = 0;
      scrollToPane(introPane);

    }
    else if (e.deltaY > 0) {
      currentPane = 2;
      scrollToPane(projectsPane);
    }
  }
  event.preventDefault();
})

projectsPane.addEventListener("wheel", function(e){
  if(currentPane == 2) {
    if (e.deltaY < 0) {
      currentPane = 1;
      scrollToPane(aboutPane);
    }
    else if (e.deltaY > 0) {
      currentPane = 3;
      scrollToPane(contactPane);
    }
  }
  event.preventDefault();
})

contactPane.addEventListener("wheel", function(e){
  if(currentPane == 3) {
    if (e.deltaY < 0) {
      currentPane = 2;
      scrollToPane(projectsPane);
    }
    else if (e.deltaY > 0) {
      currentPane = 0;
      scrollToPane(introPane);
    }
  }
  event.preventDefault();
})

//hammer js swipe events
const introSwipe = new Hammer(introPane);

introSwipe.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

introSwipe.on('swipeup', function(ev) {
  scrollToPane(aboutPane);
});

const aboutSwipe = new Hammer(aboutPane);

aboutSwipe.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

aboutSwipe.on('swipeup', function(ev) {
  scrollToPane(projectsPane);
});

aboutSwipe.on('swipedown', function(ev) {
  scrollToPane(introPane);
});

const projectsSwipe = new Hammer(projectsPane);

projectsSwipe.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

projectsSwipe.on('swipeup', function(ev) {
  scrollToPane(contactPane);
});

projectsSwipe.on('swipedown', function(ev) {
  scrollToPane(aboutPane);
});

const contactSwipe = new Hammer(contactPane);

contactSwipe.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

contactSwipe.on('swipeup', function(ev) {
  scrollToPane(introPane);
});

contactSwipe.on('swipedown', function(ev) {
  scrollToPane(projectsPane);
});

const scrollToPane = (pane) => {
  //scroll to pane
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': pane.offsetTop
  });
}