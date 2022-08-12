
   var clickY = document.getElementsByTagName("color");
   clickY.addEventListener('click', function (event) {
      alert("Yellow.")
   })

 
   var clickYz = document.getElementsByTagName("place");
   clickYz.addEventListener('click', function (event) {
      alert("Home")
   })
 
   var clickYzz = document.getElementsByTagName("ritual");
  clickYzz.addEventListener('click', function (event) {
      alert("Sleep, Eat,Study, Repeat")
   })

   const .btn-default = document.querySelector('.btn-default');
   .btn-default.addEventListener('click', clickY);
   const .btn-defaultz = document.querySelector('.btn-defaultz');
   .btn-defaultz.addEventListener('click', clickYz);
   const .btn-defaultx= document.querySelector('.btn-defaultx');
   .btn-defaultx.addEventListener('click', clickYzz);
