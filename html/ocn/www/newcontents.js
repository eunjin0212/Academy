const contents = {
  title: [
    "게임덱후들(유민상,김준현)",
    "44층 지하던전",
    "켠왕켜놩(켠김에왕까지-허준)",
    "핑거게임(신동엽, 장도연)",
    "플레이어2(이수근,이진호, 이용진, 이이경, 이진호, 정혁, 황치열, 김동현)",
  ],
  color: [
    "../www/contents/mini1-color.png",
    "../www/contents/mini2-color.png",
    "../www/contents/mini3-color.png",
    "../www/contents/mini4-color.png",
    "../www/contents/mini5-color.png",
  ],
  black: [
    "../www/contents/mini1-black.png",
    "../www/contents/mini2-black.png",
    "../www/contents/mini3-black.png",
    "../www/contents/mini4-black.png",
    "../www/contents/mini5-black.png",
  ],
};

const cBox = document.getElementById("contentsBox");
let imgs = cBox.getElementsByTagName("img");
for (let i in contents.title) {
  imgs[i].setAttribute("title", contents.title[i]);
  imgs[i].addEventListener("mouseover", function () {
    imgs[i].src = contents.color[i];
  });
  imgs[i].addEventListener("mouseout", function () {
    imgs[i].src = contents.black[i];
  });
}
