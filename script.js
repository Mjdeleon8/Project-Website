const bar = document.getElementById("bar");
const navContent = document.getElementById("nav-content");
const showContent = document.getElementById("show-content");
const animateBar = document.getElementById("animate_bar");

bar.addEventListener("click", () => {
  navContent.classList.toggle("content");
  console.log(`${navContent}dasdsa`);
  // If the content is now hidden, remove the "content" class
  if (navContent.classList.contains("content")) {
    navContent.classList.remove("hide");
  } else {
    // If the content is now shown, add the "hide" class to hide the content.
    navContent.classList.add("hide");
  }
});

const maxImageValue = 455;
const triggerScrollValue = 189;
const maxMoveDistance = 455; // Additional movement distance

// HOME PAGE CONTAINER THRESHOLD

const HomePageContainer = document.getElementById("homepage-container"); // Home page container
const threshold = 1194; // Execute the condition
const stickyValue = 3000; // Freely can scroll again with this value // cons because the other container may affect by the scrolling.

// HOME PAGE IMAGE

// Playground moving images

const firstImage = document.getElementById("first-img");
const secondImage = document.getElementById("second-img");
const thirdImage = document.getElementById("third-img");
const fourthImage = document.getElementById("fourth-img");

const positionExecuteOne = 1800; // First Image Value to Execute
const positionExecuteTwoValue = 2100; // Second Image Value to Execute
const positionExecuteThreeValue = 2400; // Third Image Value to Execute
const positionExecuteFourValue = 2800; // Four Image Value to Execute

const playGroundMoveDistance = 760; // DISTANCE WHERE THE IMAGE STAY
const playGroundCurrentPosition = 150; // CURRENT POSITION
const PlaygroundDecreasePosition = 50; // DECREASE BECAUSE THE IMAGE IS SUMOSOBRA SA MISMONG MOVE DISTANCE.

// Husky moving image

const scrollExecute = 400;
const moveDistance = 870;
const currentPosition = 430;
const decreasePosition = 350;

// END

// PRODUCT SLIDE TITLE

const firstLetter = document.getElementById("firstLetterTitle");
const secondLetter = document.getElementById("secondLetterTitle");
const thirdLetter = document.getElementById("thirdLetterTitle");
const fourthLetter = document.getElementById("fourthLetterTitle");
const fifthLetter = document.getElementById("fifthLetterTitle");
const sixthLetter = document.getElementById("sixthLetterTitle");
const seventhLetter = document.getElementById("seventhLetterTitle");
const eightLetter = document.getElementById("eightLetterTitle");

// FIRST LETTER

const firstMinValue = 5030; // THIS IS THE SCROLL VALUE IF IT'S REACH BY SCROLL THEN IT WILL EXECUTE THE CONDITION
// const
const firstLetterPosition = 1321;

// SECOND LETTER

const secondMinValue = 6330; // THIS IS THE SCROLL VALUE IF IT'S REACH BY SCROLL THEN IT WILL EXECUTE THE CONDITION
// const
const secondLetterPosition = 1145.5;

// THIRD LETTER

const thirdMinValue = 7630;
const thirdLetterPosition = 943;

// FOUR LETTER

const fourthMinValue = 8930;
const fourthLetterPosition = 780;

// FIFTH LETTER

const fifthMinValue = 10230;
const fifthLetterPosition = 623.8;

// SIXTH LETTER

const sixthMinValue = 11530;
const sixthLetterPosition = 432;

// SEVENTH LETTER

const seventhMinValue = 12830;
const seventhLetterPosition = 266;

// EIGHT LETTER

const eightMinValue = 14130;
const eightLetterPosition = 114;

//END

// TITLE TWO

const titleTwoMinValue = 17500;
const titleTwoLettersPosition = 230;

// END

// PRODUCT SLIDE CONTAINER WRAPPER

const productSlideContainer = document.getElementById("slide-container");
const maxValue = 2932;
const minValue = 20000;
const sliderContainerDistance = 1540;
const MaxSliderContainerDistance = 15780;
const containerScrollMax = 1000;
const wrapperMoveContainer = 1540;
const sliderCurrentPosition = 0;

const productContainer = document.getElementById("product-container");
const dummyContainer = document.getElementById("dummyContainer");
const titleOne = document.getElementById("title-one"); // TEXT ANIMATE TITLE 1
const titleTwo = document.getElementById("title-two"); // TEXT ANIMATE TITLE 2
const footerContainer = document.getElementById("footer-container");

// END

window.addEventListener("scroll", () => {
  var scrollValue = Math.round(window.scrollY);

  console.log(scrollValue);
  const imageOne = document.getElementById("image-one"); // image
  const homePageImage = document.getElementById("huskyImage"); // home page image
  // const HomePageContainer = document.getElementById("homepage-container"); // Home page container

  if (scrollValue >= triggerScrollValue) {
    // if the value of scrollValue is less than equal to 189, so when  the scrollValue reach 189 then the move style is gonna execute.

    let distanceFromTrigger = scrollValue - triggerScrollValue; // here the value already execute, the value of scrollValue is 189 and minus to triggerScrollValue has 189 value as well, now the value of scrollValue is back to 0.

    // Limit the distance to maxMoveDistance
    distanceFromTrigger = Math.min(distanceFromTrigger, maxMoveDistance); //distanceFromTrigger have a value of 455 got it from maxMoveDistance value 'cause the distanceFromTrigger value has 0, what I said earlier the value of scrollValue minus to triggerScrollValue.

    // Move image to the left based on distance from trigger value
    // In this case, the imageOne is going to move to the left from 0 to -455 as well as the imageTwo, but the imageTwo is going to right.

    imageOne.style.left = -distanceFromTrigger + "px";
    // imageTwo.style.right = -distanceFromTrigger + "px";
  }

  // HOME PAGE MAIN CONTAINER SCROLL STICKY ANIMATE

  if (scrollValue >= threshold) {
    let stickyOffset = scrollValue - threshold;
    if (stickyOffset > stickyValue) {
      stickyOffset = stickyValue; // Limit the sticky offset to stickyValue
    }
    HomePageContainer.style.top = stickyOffset + "px";
    HomePageContainer.classList.add("sticky");
    HomePageContainer.classList.add("moveC");

    // console.log(`Reach ${scrollValue}`);
  } else {
    HomePageContainer.classList.remove("sticky");
    HomePageContainer.style.top = "0"; // Reset top offset when not sticky
  }

  // HOME PAGE PLAYGROUND MOVING IMAGES

  if (scrollValue >= positionExecuteOne) {
    let positionMove = scrollValue - positionExecuteOne;
    positionMove = Math.min(positionMove, playGroundMoveDistance);
    fourthImage.style.right =
      playGroundCurrentPosition +
      positionMove -
      PlaygroundDecreasePosition +
      "px";
    // console.log(`${positionMove}Reach`);
  } else {
    fourthImage.style.right = 150;
  }
  150;
  if (scrollValue >= positionExecuteTwoValue) {
    let positionMove = scrollValue - positionExecuteTwoValue;
    positionMove = Math.min(positionMove, playGroundMoveDistance);
    thirdImage.style.right =
      playGroundCurrentPosition +
      positionMove -
      PlaygroundDecreasePosition +
      "px";
    // console.log(`${positionMove}Reach`);
  } else {
    thirdImage.style.right = 150;
  }

  if (scrollValue >= positionExecuteThreeValue) {
    let positionMove = scrollValue - positionExecuteThreeValue;
    positionMove = Math.min(positionMove, playGroundMoveDistance);
    secondImage.style.right =
      playGroundCurrentPosition +
      positionMove -
      PlaygroundDecreasePosition +
      "px";
    // console.log(`${positionMove}Reach`);
  } else {
    secondImage.style.right = 150;
  }

  if (scrollValue >= positionExecuteFourValue) {
    let positionMove = scrollValue - positionExecuteFourValue;
    positionMove = Math.min(positionMove, playGroundMoveDistance);
    firstImage.style.right =
      playGroundCurrentPosition +
      positionMove -
      PlaygroundDecreasePosition +
      "px";
    // console.log(`${positionMove}Reach`);
  } else {
    firstImage.style.right = 150;
  }

  // HOME PAGE CONTAINER IMAGE ANIMATE HUSKY

  if (scrollValue >= scrollExecute) {
    let executeValue = scrollValue - scrollExecute;

    executeValue = Math.min(executeValue, moveDistance);

    homePageImage.style.right =
      currentPosition + executeValue - decreasePosition + "px";
    // console.log(`${executeValue} Reach`);
  } else {
    homePageImage.style.right = 0;
  }

  // PRODUCT SLIDE CONTAINER WRAPPER

  if (scrollValue > maxValue) {
    let getWrapperValue = scrollValue - maxValue;
    if (getWrapperValue > MaxSliderContainerDistance) {
      getWrapperValue = MaxSliderContainerDistance;
      // titleOne.classList.add("title-one-animate");
    }
    productSlideContainer.classList.add("slider-wrapper");
    productContainer.classList.add("wrapper-sticky");
    footerContainer.classList.add("wrapper-move");
  } else {
    productContainer.style.top = "0";
    productContainer.classList.remove("wrapper-sticky");
    productSlideContainer.classList.remove("slider-wrapper");
  }

  if (scrollValue > minValue) {
    let sliderValue = scrollValue - minValue;
    sliderValue = Math.min(sliderValue, sliderContainerDistance);
    productSlideContainer.style.right = -sliderValue + "px";
    dummyContainer.style.right = -sliderValue + "px";
  } else {
    productSlideContainer.style.right = 0;
    dummyContainer.style.right = 0;
  }

  if (scrollValue > firstMinValue) {
    let firstLetterMove = scrollValue - firstMinValue;
    firstLetterMove = Math.min(firstLetterMove, firstLetterPosition);
    firstLetter.style.right = firstLetterMove + "px";
  } else {
    firstLetter.style.right = 0;
  }

  if (scrollValue > secondMinValue) {
    let secondLetterMove = scrollValue - secondMinValue;
    secondLetterMove = Math.min(secondLetterMove, secondLetterPosition);
    secondLetter.style.right = secondLetterMove + "px";
  } else {
    secondLetter.style.right = 0;
  }

  if (scrollValue > thirdMinValue) {
    let thirdLetterMove = scrollValue - thirdMinValue;
    thirdLetterMove = Math.min(thirdLetterMove, thirdLetterPosition);
    thirdLetter.style.right = thirdLetterMove + "px";
  } else {
    thirdLetter.style.right = 0;
  }

  if (scrollValue >= fourthMinValue) {
    let fourthLetterMove = scrollValue - fourthMinValue;
    fourthLetterMove = Math.min(fourthLetterMove, fourthLetterPosition);
    fourthLetter.style.right = fourthLetterMove + "px";
  } else {
    fourthLetter.style.right = 0;
  }

  if (scrollValue >= fifthMinValue) {
    let fifthLetterMove = scrollValue - fifthMinValue;
    fifthLetterMove = Math.min(fifthLetterMove, fifthLetterPosition);
    fifthLetter.style.right = fifthLetterMove + "px";
  } else {
    fifthLetter.style.right = 0;
  }

  if (scrollValue >= sixthMinValue) {
    let sixthLetterMove = scrollValue - sixthMinValue;
    sixthLetterMove = Math.min(sixthLetterMove, sixthLetterPosition);
    sixthLetter.style.right = sixthLetterMove + "px";
  } else {
    sixthLetter.style.right = 0;
  }

  if (scrollValue >= seventhMinValue) {
    let seventhLetterMove = scrollValue - seventhMinValue;
    seventhLetterMove = Math.min(seventhLetterMove, seventhLetterPosition);
    seventhLetter.style.right = seventhLetterMove + "px";
  } else {
    seventhLetter.style.right = 0;
  }

  if (scrollValue >= eightMinValue) {
    let eightLetterMove = scrollValue - eightMinValue;
    eightLetterMove = Math.min(eightLetterMove, eightLetterPosition);
    eightLetter.style.right = eightLetterMove + "px";
  } else {
    eightLetter.style.right = 0;
  }

  // TITLE TWO WRAPPER

  if (scrollValue >= titleTwoMinValue) {
    let titleTwoContainerMove = scrollValue - titleTwoMinValue;
    console.log(`${titleTwoContainerMove}Reach`);
    titleTwoContainerMove = Math.min(
      titleTwoContainerMove,
      titleTwoLettersPosition
    );
    titleTwo.style.top = titleTwoContainerMove + "px";
    titleTwo.classList.add("titleTwoAnimate");
  } else {
    titleTwo.style.top = 0;
    titleTwo.classList.remove("titleTwoAnimate");
  }
});
