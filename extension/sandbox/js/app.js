/**
 * 完善本扩展的初衷，获取知识
 * 靡不有初，鲜克有终
 * @type {string[]}
 */
let preview_url = [
  "https://stackoverflow.com/tags/socat/hot?filter=all",
  "https://patrickhlauke.github.io/recaptcha/",
  "https://pub.dev/",
  "https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js",
  "https://developers.google.com/",
  "https://releases.jquery.com/",
  "https://source.chromium.org/",
  "https://cs.opensource.google/",
  "https://www.chromium.org/chromium-projects/",
  "https://summerofcode.withgoogle.com/programs/2022/organizations",
  "https://webrtc.org/",
  "https://chromium.googlesource.com/external/webrtc",
];

let is_iframe = self !== top;
let list_box = document.querySelector(".box");
let list = "";
preview_url.map((value, index) => {
  if (is_iframe) {
    list += `<li data-href="${value}" ><pre>${value}</pre></li>`;
  } else {
    list += `<li data-href="${value}" >
            <a
              target="_blank" 
              rel="noopener noreferrer"
              href="${value}"
            >${value}</a></li>`;
  }
});
list_box.innerHTML = list;

list_box.addEventListener("click", (event) => {
  //console.log(event.target);
  //console.log(event.target.nodeName);
  if (event.target.nodeName === "PRE") {
    let url = event.target.innerText;
    //console.log(self, top);
    if (is_iframe) {
      //'在iframe中'
      console.log("在iframe中");
      window.parent.postMessage(
        JSON.stringify({
          url: url,
        }),
        location.origin + "/options_ui/index.html"
      );
    } else {
      top.open(url, "_blank");
    }
  }
});
