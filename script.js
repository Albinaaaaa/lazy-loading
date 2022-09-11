const images = document.querySelectorAll(".item__photo");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

function handleImg(myImg, observer) {
  myImg.forEach((myImgSingle) => {
    if (myImgSingle.intersectionRatio > 0) {
      loadImage(myImgSingle.target);
    }
  });
}

function loadImage(image) {
  image.src = image.getAttribute("data-src");
}

// special object that helps catch the item when we see it (reactFunction, options)
const observer = new IntersectionObserver(handleImg, options);

images.forEach((img) => {
  observer.observe(img);
});
