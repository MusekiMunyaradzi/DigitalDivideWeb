var dropdowns=document.querySelectorAll('.dropdown');

dropdowns.forEach(function(element)
{
  var link= element.previousElementSibling;
  link.addEventListener('click',function(){
       element.style.display=(element.style.display==='block')?
       'none':'block';
  });

});