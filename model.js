//dowm time
let phut = parseInt($("#time").val());
$("#phut").text(phut);
$("#second").text("00");
let run;
console.log("chua vao click");
$("#start").click(() => {
  console.log("sau khi bấm click");
  $("#start").attr("disabled", true);
  let phut = parseInt($("#time").val());
  $("#phut").text(phut--);
  $("#second").text("00");
  let second = 59;
  $("#phut").text(phut--);
  console.log("chuẩn bị vào interval");
  run = setInterval(() => {
    console.log("vào interval");
    $("#second").text(second--);
    if (second < 0) {
      $("#phut").text(phut--);
      second = 60;
    }
    if (phut < 0) {
      clearInterval(run);
      let contentComplete = `<li> Hoàn Thành: ${$("#tasker").val()}</li>`;
      // alert(contentComplete);
      // cần fix
      $("#start").attr("disabled", false);
      $("#Complete").append(contentComplete);
    }
  }, 1);
  console.log("out");
});
console.log("thoát hẳn");
$("#stop").click(stop());
function stop() {
  clearInterval(run);
}
/**
 * add nhiem vu
 *
 */
$("#up-task").click(() => {
  let contentComplete = `<li> ${$("#seHoc").val()} </li>`;
  $("#plan-content").append(contentComplete);
  $("#seHoc").val("");
});
$("#up-result").click(() => {
  let contentComplete = `<li> ${$("#ketQua").val()} </li>`;
  $("#Complete").append(contentComplete);
  $("#ketQua").val("");
});
