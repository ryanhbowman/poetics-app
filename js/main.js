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
  $('#critic').css('transform', 'translate3d(-45em,0,0)');
  $('#library').css('transform', 'translate3d(-45em,0,0)');
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
  closeAll();
});

$('#criticMenu').click(function(){
  $('.menu-container').removeClass('active');
  $('#critic').css('transform', 'translate3d(3em,0,0)');
  $('#library').css('transform', 'translate3d(-45em,0,0)');
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

var fakeGeneration = " <span class='fading' id='fading'>This is some AI shit that the AI writes in an AI way. It is very AI.</span>";
var fakeGenerationChrist = "This is some AI shit that the AI writes in an AI way. It is very AI.";
var fakeGenerationDia = "<span  class='fading' id='fading2'></span>";
var fakeGenerationDiaChrist = "&ldquo;This is the best thing that I have ever heard.&rdquo;";
var noMore = false;
var noMore2 = false;
var noMore3 = false;
var noMore4 = false;
var noMore5 = false;

$('#describeInput').on('keypress', function(e) {
  tagActive = tagActivate('describeInput', 'Bosch');
  if (tagActive && !noMore){
    describeInput.innerHTML = describeInput.innerHTML.replace("Bosch", "<span class='tag'>Bosch</span>&nbsp;");
    showSelectionPosition();
    noMore = true;
  }
  tagActive2 = tagActivate('describeInput', 'guns');
  if (tagActive2 && !noMore2){
    describeInput.innerHTML = describeInput.innerHTML.replace("guns", "<span class='tag'>guns</span>&nbsp;");
    showSelectionPosition();
    noMore2 = true;
  }
  tagActive3 = tagActivate('describeInput', 'Vietnam');
  if (tagActive3 && !noMore3){
    describeInput.innerHTML = describeInput.innerHTML.replace("Vietnam", "<span class='tag'>Vietnam tunnels</span>&nbsp;");
    showSelectionPosition();
    noMore3 = true;
  }
  tagActive4 = tagActivate('describeInput', '2');
  if (tagActive4 && !noMore4){
    describeInput.innerHTML = describeInput.innerHTML.replace("2", "<span class='tag'>2</span>&nbsp;");
    showSelectionPosition();
    noMore4 = true;
  }
  
  if(e.which == 13) { 
    describeModal.style.opacity = 0;
    describeModal.style.left= -2000;
    $('#describeLoader').fadeIn(200).delay(1800).fadeOut(200);
    setTimeout(
      function() 
      {     
        $('.ql-editor p:last').append(fakeGeneration).delay(5000);      
        new TypeIt("#fading", {
          speed: 40
        }).go();  
        
          
          setTimeout(
            function() 
            {   
                $('#fading').replaceWith(fakeGenerationChrist);
                $('.ql-editor').focus();
            }, 5000);
          
      }, 2000);
  }        
});

$('#dialogueInput').on('keypress', function(e) {
  tagActive = tagActivate('dialogueInput', 'Bosch');
  if (tagActive && !noMore){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("Bosch", "<span class='tag'>Bosch</span>&nbsp;");
    showSelectionPositionDis();
    noMore = true;
  }
  tagActive2 = tagActivate('dialogueInput', 'guns');
  if (tagActive2 && !noMore2){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("guns", "<span class='tag'>guns</span>&nbsp;");
    showSelectionPositionDis();
    noMore2 = true;
  }
  tagActive3 = tagActivate('dialogueInput', 'Vietnam');
  if (tagActive3 && !noMore3){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("Vietnam", "<span class='tag'>Vietnam tunnels</span>&nbsp;");
    showSelectionPositionDis();
    noMore3 = true;
  }
  tagActive4 = tagActivate('dialogueInput', '2');
  if (tagActive4 && !noMore4){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("2", "<span class='tag'>2</span>&nbsp;");
    showSelectionPositionDis();
    noMore4 = true;
  }
  tagActive5 = tagActivate('dialogueInput', 'Jenny');
  if (tagActive5 && !noMore5){
    dialogueInput.innerHTML = dialogueInput.innerHTML.replace("Jenny", "<span class='tag'>Jenny</span>&nbsp;");
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
           speed: 40,
           html: true,
           strings: ["<p>&ldquo;I was on the tunnel squad in the war. We used special weapons just like this down there. The moisture was the big problem, it would rust a gun in a single outing.&rdquo;</p>", "<p>&ldquo;Makes sense.&rdquo; Julie replied.</p>"]
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