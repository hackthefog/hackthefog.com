$(function() {
  $(".question").click(function() {
    var styles = [];
    console.log(
      $(this)
        .siblings(".answer")
        .css("height")
    );
    if (
      $(this)
        .siblings(".answer")
        .css("height") == "0px"
    ) {
      styles[0] = $(this)
        .siblings(".answer")
        .children("span")
        .height();
      styles[1] = "0.5rem";
      $(this)
        .children("ion-icon")
        .rotate({
          animateTo: 90,
          duration: 400
        });
    } else {
      styles[0] = "0px";
      styles[1] = "0px";
      $(this)
        .children("ion-icon")
        .rotate({
          animateTo: 0,
          duration: 400
        });
    }
    $(this)
      .siblings(".answer")
      .animate(
        {
          height: styles[0],
          "padding-top": styles[1]
        },
        400
      ); //Animate dropdown
  });
});
