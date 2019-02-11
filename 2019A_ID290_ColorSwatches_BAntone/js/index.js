//JSON 101

/*var student = {
  height: 72,
  weight: 150,
  enrolled: true,
  first: "Fred",
  last: "Fredrickson",
  courses:[
    {
      courseName:"Math",
      courseStartTime:"1:00",
      courseStartDay:"Friday",
      credits: 4
    },
    {
      courseName:"Physics",
      courseStartTime:"1:00",
      courseStartDay:"Monday",
      credits: 4
    },
    {
      courseName:"Art",
      courseStartTime:"5:00",
      courseStartDay:"Wednesday",
      credits: 4
    }      
  ]
};*/

$('#genrateBtn').click(function(){
  $.getJSON('js/main.json',function(result){
    var random = Math.floor(Math.random() * result.length);
    $('#text').html(result[random].name);
    $('#color1').css("background-color",result[random].swatches.color1);
    $('#color2').css("background-color",result[random].swatches.color2);
    $('#color3').css("background-color",result[random].swatches.color3);
    $('#color4').css("background-color",result[random].swatches.color4);
    $('#color5').css("background-color",result[random].swatches.color5);
    //console.log(d[0].swatches.color1)
  });
});

  /*course1:{
    courseName:"Math",
    courseStartTime:"1:00",
    courseStartDay:"Friday",
    credits: 4
  }*/