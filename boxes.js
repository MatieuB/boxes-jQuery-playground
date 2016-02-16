// Exercise 1
// Longhand
// $(document).ready(function(){
//   alert("ready for manipulation!");
// })

// Shorthand
// $(function(){
//   alert('ready to manipulate!')
// })
// Exercise 2

// $(document).ready(function(){
// $('#secretBox').css('background','white');
// $('#secretBox').append("<h1>i'm the secret box</h1>"); // how do you make it <h1>?
// $('#row1').children().addClass('boxType3');
// $('#row4').children().last().hide();
// $('.boxType1').css('background','white');
// $('#row1').children(':nth-child(1),:nth-child(2)').removeClass();
// $('.box:not(#secretBox)').css('width','2px');
// })

// Exercise 3
$(function(){
$('#container').on('click',function(){
  console.log(event.pageX,event.pageY);
})
// $('.boxType1').wrap("<a href = 'http://www.galvanize.com' </a>").on('click',function(){
//   alert("You really shouldn't leave the page");
//   alert("are you sure you want to leave??");
//   alert("Really really sure?");
// });
// });
// $('.box').append("<img src='http://img01.deviantart.net/29d7/i/2010/112/0/5/random_puppy_by_flora_the_awesome.jpg' alt='puppy' width='100%'>")
//    $('.box').children().hide();
//
//     $('.box').on('click', function(){
//     $(this).children().toggle();
//   });
// });

$('#container').on('click', function(event){
  if(event.target.id === 'container'){
    $(this).css({'background-color':'#32CD32'})
  }else {
    $(this).css({'background-color':'black'})
    $(event.target).css({'background-color':'white'})
  }
});
})
