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
}

$('.main').click(function(){
  console.log(this);
  closeMenuAll();
});

//menu
  $('.handle').mouseenter(function(){
    $('.menu-container').addClass('active');
  })
  $('.menu').mouseleave(function(){
    $('.menu-container').removeClass('active');
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
    describeInput.value = "/de";
    describeInput.focus();
    describeModal.style.top = rect.y + 30;
    describeModal.style.left = rect.x - 34;
    describeLoader.style.top = rect.y + 27;
    describeLoader.style.left = rect.x - 26;
    describeModal.style.opacity = 1;
    editor.innerHTML = editor.innerHTML.replace(/ \B\/\w+/gm, " ");
    
    
  }
  if (dialogueActivate) {
    dialogueInput.value = "/di";
    dialogueInput.focus();
    dialogueModal.style.top = rect.y + 30;
    dialogueModal.style.left = rect.x - 34;
    dialogueLoader.style.top = rect.y + 27;
    dialogueLoader.style.left = rect.x - 26;
    dialogueModal.style.opacity = 1;
    editor.innerHTML = editor.innerHTML.replace(/ \B\/\w+/gm, " ");
   
    // editor.textContent = editorQuillText.replace(/\B\/\w+/gm, "<span class='red'>$1</span>");
  }
  if (!describeActivate){
    describeModal.style.opacity = 0;
  }
  if (!dialogueActivate){
    dialogueModal.style.opacity = 0;
  }
});

var fakeGeneration = "<span class='fading' id='fading'>This is some AI shit that the AI writes in an AI way. It is very AI.</span>";
var fakeGenerationChrist = "This is some AI shit that the AI writes in an AI way. It is very AI.";
var fakeGenerationDia = "<span  class='fading' id='fading2'><p>&ldquo;This is the best thing that I have ever heard.&rdquo; he said.</p><p>&ldquo;I agree.&rdquo; Bosch replied.</p></span>";
var fakeGenerationDiaChrist = "&ldquo;This is the best thing that I have ever heard.&rdquo;";

$('#describeInput').on('keypress', function(e) {
  if(e.which == 13) { 
    describeModal.style.opacity = 0;
    describeModal.style.left= -2000;
    $('#describeLoader').fadeIn(200).delay(1800).fadeOut(200);
    setTimeout(
      function() 
      {         
          $('.ql-editor p:last').append(fakeGeneration).delay(5000);
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
  if(e.which == 13) { 
    dialogueModal.style.opacity = 0;
    dialogueModal.style.left= -2000;
    $('#describeLoader').fadeIn(200).delay(1800).fadeOut(200);
    setTimeout(
      function() 
      {         
          $('.ql-editor p:last').append(fakeGenerationDia).delay(5000);
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

