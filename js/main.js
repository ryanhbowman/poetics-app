var quill = new Quill('#editor', {
  theme: 'bubble'
});

var quill = new Quill('#researchEditor', {
  theme: 'bubble'
});
// var testText = document.getElementById('testText');



function closeAll() {
  $('#characterOverlay').removeClass('active');
  $('#characterOverlay').siblings().each(function(){
    $(this).removeClass('active');
  })
  $('#researchOverlay').removeClass('active');
  $('#researchOverlay').siblings().each(function(){
    $(this).removeClass('active');
  })
  $('#locationOverlay').removeClass('active');
  $('#locationOverlay').siblings().each(function(){
    $(this).removeClass('active');
  })
  $('#eventsOverlay').removeClass('active');
  $('#eventsOverlay').siblings().each(function(){
    $(this).removeClass('active');
  })
}

function closeMenuAll() {
  $('#characterOverlay').removeClass('active');
  $('#characterOverlay').siblings().each(function(){
    $(this).removeClass('active');
  })
  $('#researchOverlay').removeClass('active');
  $('#researchOverlay').siblings().each(function(){
    
    $(this).removeClass('active');
  })
  $('#locationOverlay').removeClass('active');
  $('#locationOverlay').siblings().each(function(){
    $(this).removeClass('active');
  })
  $('#eventsOverlay').removeClass('active');
  $('#eventsOverlay').siblings().each(function(){
    $(this).removeClass('active');
  })
  $('#critic').css('transform', 'translate3d(-45em,0,0)');
  $('#theeditor').css('transform', 'translate3d(-45em,0,0)');
  $('#criticOverlay').css('transform', 'translate3d(-1000px,0,0)');
  $('#criticNav').css('transform', 'translate3d(200px,0,0)');
  $('#library').css('transform', 'translate3d(-45em,0,0)');
  

  if(event.target.id != 'blueDot'){
    $('#blueDotQuestion').css('opacity', 0).css('left', -2000).css('top', -2000);
    $('#blueDotContainer').removeClass('actived');
  }
  // $('#blueDotQuestion').css('opacity', 0).css('left', -2000).css('top', -2000);
  // $('#blueDotContainer').removeClass('actived');
}

$('#sendInterview').click(function(){
  var theText = $('#textInterview').val();
  $('#toReplace').text(theText);
  $('#toReplace').slideDown();
});

$('.main').click(function(){
  closeMenuAll();
  console.log('reset');
});

$('#sendQuestion').click(function(){
  $('#blueDotQuestion').css('opacity', 1).css('left', -2000).css('top', -2000);
  $('#blueDotContainer').removeClass('actived');
  $('#blueDotContainer').css('opacity', 0);
});
$('#blueDotContainer').click(function(){
  var position = $('#blueDotContainer').position();
  var eLeft = $('#blueDotContainer').offset().left; //get the offset top of the element
  // log(eTop - $(window).scrollTop()); //position of the ele w.r.t window

  // $(window).scroll(function() { //when window is scrolled
  eLeft = eLeft - $(window).scrollLeft();
  // console.log(position.left, position.top);
  $('#blueDotQuestion').css('opacity', 1).css('left', eLeft - 200).css('top', position.top + 20);
  $(this).addClass('actived');
  $('#dotEditor').focus();
});

//menu
  $('.handle').mouseenter(function(){
    $('.menu-container').addClass('active');
  })
  $('.menu').mouseleave(function(){
    $('.menu-container').removeClass('active');
  })

  $('.handle-right').mouseenter(function(){
    $('.menu-container-right').addClass('active');
  })
  $('.menu-right').mouseleave(function(){
    $('.menu-container-right').removeClass('active');
  })

$('#libraryMenu').click(function(){
  $('.menu-container').removeClass('active');
  $('#library').css('transform', 'translate3d(3em,0,0)');
  $('#critic').css('transform', 'translate3d(-45em,0,0)');
  $('#theeditor').css('transform', 'translate3d(-45em,0,0)');
  $('#criticOverlay').css('transform', 'translate3d(-1000px,0,0)');
  $('#criticNav').css('transform', 'translate3d(200px,0,0)');
  closeAll();
});

$('#criticMenu').click(function(){
  $('.menu-container').removeClass('active');
  $('#critic').css('transform', 'translate3d(3em,0,0)');
  $('#theeditor').css('transform', 'translate3d(-45em,0,0)');
  $('#criticNav').css('transform', 'translate3d(0,0,0)');
  $('#criticOverlay').css('transform', 'translate3d(calc(1335px + 6em),0,0)');
  $('#library').css('transform', 'translate3d(-45em,0,0)');
  closeAll();
});


$('#theeditorMenu').click(function(){
  $('.menu-container').removeClass('active');
  $('#theeditor').css('transform', 'translate3d(3em,0,0)');
  $('#critic').css('transform', 'translate3d(-45em,0,0)');
  $('#library').css('transform', 'translate3d(-45em,0,0)');
  $('#criticOverlay').css('transform', 'translate3d(-1000px,0,0)');
  $('#criticNav').css('transform', 'translate3d(200px,0,0)');
  closeAll();
});


$('#researchOpen').click(function(){
  $('#researchOverlay').addClass('open');
  // $('#researchOverlay .second').css('display','block');
});
$('#characterOpen').click(function(){
  $('#characterOverlay').addClass('open');
  // $('#researchOverlay .second').css('display','block');
});

$('#interviewActivate').click(function(){
  $('#interview').addClass('open');
  // $('#researchOverlay .second').css('display','block');
});

$('#characters').click(function(){
  if ($('#characterOverlay').hasClass('active')) {  
    $('#characterOverlay').removeClass('active');
    $(this).removeClass('active');
    $('#characterOverlay').siblings().each(function(){
      $(this).removeClass('active');
    })
  }
  else {
    $('#characterOverlay').addClass('active');
    $(this).addClass('active');
    $(this).siblings().each(function(){
      $(this).removeClass('active');
    })
    $('#characterOverlay').siblings().each(function(){
      $(this).removeClass('active');
    })
  }
});
$('#research').click(function(){
  if ($('#researchOverlay').hasClass('active')) {  
    $('#researchOverlay').removeClass('active');
    $(this).removeClass('active');
    $('#researchOverlay').siblings().each(function(){
      $(this).removeClass('active');
    })
    
  }
  else {
    $('#researchOverlay').addClass('active');
    $('#researchOverlay').siblings().each(function(){
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    $(this).siblings().each(function(){
      $(this).removeClass('active');
    })
  }
});
$('#locations').click(function(){
  if ($('#locationsOverlay').hasClass('active')) {  
    $('#locationsOverlay').removeClass('active');
    $(this).removeClass('active');
    $('#locationsOverlay').siblings().each(function(){
      $(this).removeClass('active');
    })
  }
  else {
    $('#locationsOverlay').addClass('active');
    $('#locationsOverlay').siblings().each(function(){
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    $(this).siblings().each(function(){
      $(this).removeClass('active');
    })
  }
});

$('#events').click(function(){
  if ($('#eventsOverlay').hasClass('active')) {  
    $('#eventsOverlay').removeClass('active');
    $(this).removeClass('active');
    $('#eventsOverlay').siblings().each(function(){
      $(this).removeClass('active');
    })
  }
  else {
    $('#eventsOverlay').addClass('active');
    $('#eventsOverlay').siblings().each(function(){
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    $(this).siblings().each(function(){
      $(this).removeClass('active');
    })
  }
});


// testText.innerHTML = testText.innerHTML.replace(/\B\/\w+/gm, "<span class='red'>$&</span>");

function modalActivate(includeText) {
  // checks if editor includes the special activation text
  const editor = document.getElementById('editor');
  const editorText = editor.textContent;
  const modalTime = editorText.includes(includeText);
  return modalTime;
}

function tagActivate(element, includeText) {
  // checks if editor includes the special activation text
  const editor = document.getElementById(element);
  const editorText = editor.textContent;
  const modalTime = editorText.includes(includeText);
  return modalTime;
}

const editor = document.getElementById('editor');

const editorQuill = document.getElementsByClassName('ql-editor');
var editorText = editor.textContent;


editor.addEventListener('keyup', function(){
  var describeModal = document.getElementById("describeModal");
  var describeActivate = modalActivate("/de");
  var describeInput = document.getElementById("describeInput");
  var describeLoader = document.getElementById("describeLoader");

  var dialogueModal = document.getElementById("dialogueModal");
  var dialogueActivate = modalActivate("/di");
  var dialogueInput = document.getElementById("dialogueInput");
  var dialogueLoader = document.getElementById("describeLoader");
  // returns rect for coordinates of cursor
  var selection = window.getSelection(),
      range = selection.getRangeAt(0),
      rect = range.getClientRects()[0];
  // var editorQuillText = editorQuill[0].textContent;
  
 

  if (describeActivate) {
    describeInput.innerHTML = "/describe ";
    showSelectionPosition();
    describeModal.style.top = rect.y + 64;
    describeModal.style.left = rect.x - 22;
    describeLoader.style.top = rect.y - 4;
    describeLoader.style.left = rect.x - 22;
    describeModal.style.opacity = 1;
    editor.innerHTML = editor.innerHTML.replace(/ \B\/\w+/gm, "");
  }
  if (dialogueActivate) {
    dialogueInput.innerHTML = "/dialogue ";
    
    showSelectionPositionDis();
    dialogueModal.style.top = rect.y + 64;
    dialogueModal.style.left = rect.x - 22;
    dialogueLoader.style.top = rect.y -4;
    dialogueLoader.style.left = rect.x - 22;
    dialogueModal.style.opacity = 1;
    editor.innerHTML = editor.innerHTML.replace(/ \B\/\w+/gm, "");
   
    // editor.textContent = editorQuillText.replace(/\B\/\w+/gm, "<span class='red'>$1</span>");
  }
  if (!describeActivate){
    describeModal.style.opacity = 0;
  }
  if (!dialogueActivate){
    dialogueModal.style.opacity = 0;
  }
});

var fakeGeneration = " <span class='fading' id='fading'>The stalk was as thick as a redwood tree and as tall as a twelve-story building. At the top of the stalk was a big round ball of white flesh, as white as a toadstool, as round as a big pumpkin, swelling visibly as the creature fed. The skin of the ball was smooth and translucent, pulsing with slow and powerful throbs. Within this great ball were veins and arteries, and within them were things that writhed and shifted and tore at one another; the ball was full of monstrous life.</span>";
var fakeGenerationChrist = "The stalk was as thick as a redwood tree and as tall as a twelve-story building. At the top of the stalk was a big round ball of white flesh, as white as a toadstool, as round as a big pumpkin, swelling visibly as the creature fed. The skin of the ball was smooth and translucent, pulsing with slow and powerful throbs. Within this great ball were veins and arteries, and within them were things that writhed and shifted and tore at one another; the ball was full of monstrous life.";
var fakeGenerationDia = "<span  class='fading' id='fading2'></span>";
var fakeGenerationDiaChrist = "&ldquo;This is the best thing that I have ever heard.&rdquo;";
var noMore = false;
var noMore2 = false;
var noMore3 = false;
var noMore4 = false;
var noMore5 = false;

$('#describeInput').on('keypress', function(e) {
  tagActive = tagActivate('describeInput', 'Vic');
  if (tagActive && !noMore){
    describeInput.innerHTML = describeInput.innerHTML.replace("Vic", "<span class='tag'>Vic</span>&nbsp;");
    showSelectionPosition();
    noMore = true;
  }
  tagActive2 = tagActivate('describeInput', 'Olida');
  if (tagActive2 && !noMore2){
    describeInput.innerHTML = describeInput.innerHTML.replace("Olida", "<span class='tag'>Olida</span>&nbsp;");
    showSelectionPosition();
    noMore2 = true;
  }
  tagActive3 = tagActivate('describeInput', 'funghi');
  if (tagActive3 && !noMore3){
    describeInput.innerHTML = describeInput.innerHTML.replace("funghi", "<span class='tag'>funghi</span>&nbsp;");
    showSelectionPosition();
    noMore3 = true;
  }
  tagActive4 = tagActivate('describeInput', '2');
  if (tagActive4 && !noMore4){
    describeInput.innerHTML = describeInput.innerHTML.replace("6", "<span class='tag'>6</span>&nbsp;");
    showSelectionPosition();
    noMore4 = true;
  }
  tagActive5 = tagActivate('describeInput', 'corn');
  if (tagActive5 && !noMore5){
    describeInput.innerHTML = describeInput.innerHTML.replace("corn", "<span class='tag'>corn</span>&nbsp;");
    showSelectionPosition();
    noMore5 = true;
  }
  
  if(e.which == 13) { 
    describeModal.style.opacity = 0;
    describeModal.style.left= -2000;
    $('#describeLoader').fadeIn(200).delay(1800).fadeOut(200);
    setTimeout(
      function() 
      {     
        $('.ql-editor p:last').append(fakeGeneration).delay(7000);      
        new TypeIt("#fading", {
          speed: 3
        }).go();  
        
          
          setTimeout(
            function() 
            {   
                $('#fading').replaceWith(fakeGenerationChrist);
                $('.ql-editor').focus();
            }, 7000);
          
      }, 2000);
  }        
});

$('#dialogueInput').on('keypress', function(e) {
  tagActive = tagActivate('dialogueInput', 'Vic');
  if (tagActive && !noMore){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("Vic", "<span class='tag'>Vic</span>&nbsp;");
    showSelectionPositionDis();
    noMore = true;
  }
  tagActive2 = tagActivate('dialogueInput', 'Olida');
  if (tagActive2 && !noMore2){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("Olida", "<span class='tag'>Olida</span>&nbsp;");
    showSelectionPositionDis();
    noMore2 = true;
  }
  tagActive3 = tagActivate('dialogueInput', 'funghi');
  if (tagActive3 && !noMore3){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("funghi", "<span class='tag'>funghi</span>&nbsp;");
    showSelectionPositionDis();
    noMore3 = true;
  }
  tagActive4 = tagActivate('dialogueInput', '4');
  if (tagActive4 && !noMore4){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("4", "<span class='tag'>4</span>&nbsp;");
    showSelectionPositionDis();
    noMore4 = true;
  }
  tagActive5 = tagActivate('dialogueInput', 'corn');
  if (tagActive5 && !noMore5){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("corn", "<span class='tag'>corn</span>&nbsp;");
    showSelectionPositionDis();
    noMore5 = true;
  }

  if(e.which == 13) { 
    dialogueModal.style.opacity = 0;
    dialogueModal.style.left= -2000;
    $('#describeLoader').fadeIn(200).delay(1800).fadeOut(200);
    setTimeout(
      function() 
      {         
          $('.ql-editor p:last').append(fakeGenerationDia).delay(5000);
             
          new TypeIt("#fading2", {
           speed: 2,
           html: true,
           strings: ["<p>&ldquo;It lives inside fungi, in a dormant state, spreading throughout underground. It’s been around for millions of years, carried by the wind, or soil, or water. Never in our lifetime have we had a big enough genetic change in the crops that the virus would see it as a target. But the corn you grew, and your research team, and the tobacco plants, and the bio farms, you were developing the plants that would be susceptible. And it woke up. It woke up in your field, and it’s been spreading since.&rdquo; says Olida.</p> <p>&ldquo;How do I stop it?&rdquo; says Vic.</p> <p>&ldquo;You don’t. The best I can imagine, is getting everyone off your land. You need to abandon your farm. You need to burn it all to the ground.&rdquo;</p> <p>&ldquo;That’s not an option. I have a family and a lot of history there.&rdquo;</p> <p>&ldquo;I wish I had better news.&rdquo;</p>"]
          }).go();  

          setTimeout(
            function() 
            {   
                $('#fading2').removeClass('fading');
                $('.ql-editor').focus();
            }, 5000);
          
      }, 2000);
  }        
});



//OLD

// node_walk: walk the element tree, stop when func(node) returns false
function node_walk(node, func) {
var result = func(node);
for(node = node.firstChild; result !== false && node; node = node.nextSibling)
result = node_walk(node, func);
return result;
};

// getCaretPosition: return [start, end] as offsets to elem.textContent that
//   correspond to the selected portion of text
//   (if start == end, caret is at given position and no text is selected)
function getCaretPosition(elem) {
var sel = window.getSelection();
var cum_length = [0, 0];

if(sel.anchorNode == elem)
cum_length = [sel.anchorOffset, sel.extentOffset];
else {
var nodes_to_find = [sel.anchorNode, sel.extentNode];
if(!elem.contains(sel.anchorNode) || !elem.contains(sel.extentNode))
return undefined;
else {
var found = [0,0];
var i;
node_walk(elem, function(node) {
  for(i = 0; i < 2; i++) {
    if(node == nodes_to_find[i]) {
      found[i] = true;
      if(found[i == 0 ? 1 : 0])
        return false; // all done
    }
  }

  if(node.textContent && !node.firstChild) {
    for(i = 0; i < 2; i++) {
      if(!found[i])
        cum_length[i] += node.textContent.length;
    }
  }
});
cum_length[0] += sel.anchorOffset;
cum_length[1] += sel.extentOffset;
}
}
if(cum_length[0] <= cum_length[1])
return cum_length;
return [cum_length[1], cum_length[0]];
}

function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}

showSelectionPosition = function () {
    elem = document.getElementById('describeInput');//This is the element that you want to move the caret to the end of
    setEndOfContenteditable(elem);
}

showSelectionPositionDis = function () {
  elem = document.getElementById('dialogueInput');//This is the element that you want to move the caret to the end of
  setEndOfContenteditable(elem);
}