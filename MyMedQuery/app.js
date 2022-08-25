const addPic = () => {
  let screen = document.querySelector(".picContainer");

  let imgUrl =
    "https://terrigen-cdn-dev.marvel.com/content/prod/1x/smrr_online_6072x9000_tsr_02_opt.jpg";

  let picture = document.createElement("img");
  picture.setAttribute("src", imgUrl);
  picture.setAttribute("class", "tomPic");

  screen.append(picture);
};
