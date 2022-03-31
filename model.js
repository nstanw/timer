$(document).ready(function () {
  //dowm time
  let phut = parseInt($("#time").val());
  $("#phut").text(phut);
  $("#second").text("00");

  $("#start").click(() => {
    $("#start").attr("disabled", true);
    let phut = parseInt($("#time").val());
    $("#phut").text(phut--);
    $("#second").text("00");
    let second = 59;
    $("#phut").text(phut--);

    let run = setInterval(() => {
      let isStop = false;
      isStop ? $("#stop").click(clearInterval(run)) : (isStop = false);
      isStop;
      $("#second").text(second--);
      if (second < 0) {
        $("#phut").text(phut--);
        second = 60;
      }
      if (phut < 0) {
        clearInterval(run);
        let contentComplete = `<li> Hoàn Thành: ${$("#tasker").val()} </li>`;
        // alert(contentComplete);
        $("#start").attr("disabled", false);
        $("#task-content").append(contentComplete);
      }
    }, 1);
  });
});
