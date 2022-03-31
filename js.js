let myInterval;
let phut = $("#time").val();
$("#phut").text(phut);
$("#second").text("00");
let second = 59;

function start() {
  $("#start").attr("disabled", true);
  $("#phut").text(phut--);
  $("#second").text(second);
  $("#phut").text(phut--);
  myInterval = setInterval(myTimer, 1);
}

function myTimer() {
  $("#second").text(second--);
  if (second < 0) {
    $("#phut").text(phut--);
    second = 60;
  }
  if (phut < 0) {
    clearInterval(myInterval);
    let contentComplete = `<li>
    Hoàn Thành: ${$(
      "#tasker"
    ).val()} (time: ${new Date().getHours()}:${new Date().getMinutes()})
    </li>`;
    $("#start").attr("disabled", false);
    $("#Complete").append(contentComplete);
    phut = $("#time").val();
    second = 60;
  }
}
function stop() {
  clearInterval(myInterval);
  $("#start").attr("disabled", false);
}
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
