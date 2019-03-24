/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


      var p1,p2,p3,p4,p5,p6;
      var current = 0;
      function Product () {
        
      }
      function Product (name,des,img) {
        this.name = name;
        this.des = des;
        this.img = img;
      }
      function initProduct () {
        p1 = new Product("RAYBAN RB3447V",
          "500$",
          "img/pr1.jpg"
          )
        p2 = new Product("VIGCOM VG1666 C3",
          "450$",
          "img/pr2.jpg"
          )
        p3 = new Product("VIGCOM VG1663 C12",
          "499$",
          "img/pr3.jpg"
          )
        p4 = new Product("VIGCOM VG1663 C8",
          "430$",
          "img/pr4.jpg"
          )
        p5 = new Product("VIGCOM VG1650 C10",
          "330$",
          "img/pr5.jpg"
          )
        p6 = new Product("VIGCOM VG1663 C5",
          "630$",
          "img/pr6.jpg"
          )
      }
      function loadProduct () {
        console.log('AHihi')
          initProduct();
        slider1 ();
      }
      function slider1 () {
        console.log('test');
        var name1 = document.getElementById("name-1");
        name1.innerHTML  = p1.name;
        var des1 = document.getElementById("des-1");
        des1.innerHTML  = p1.des;
        var img1 = document.getElementById("img-1");
        img1.src = p1.img;
        var name2 = document.getElementById("name-2");
        name2.innerHTML  = p2.name;
        var des2 = document.getElementById("des-2");
        des2.innerHTML  = p2.des;
        var img2 = document.getElementById("img-2");
        img2.src = p2.img;
        var name3 = document.getElementById("name-3");
        name3.innerHTML  = p3.name;
        var des3 = document.getElementById("des-3");
        des3.innerHTML  = p3.des;
        var img3 = document.getElementById("img-3");
        img3.src = p3.img;
      }
      function slider2 () {
        
        var name1 = document.getElementById("name-1");
        name1.innerHTML  = p4.name;
        var des1 = document.getElementById("des-1");
        des1.innerHTML  = p4.des;
        var img1 = document.getElementById("img-1");
        img1.src = p4.img;
        var name2 = document.getElementById("name-2");
        name2.innerHTML  = p5.name;
        var des2 = document.getElementById("des-2");
        des2.innerHTML  = p5.des;
        var img2 = document.getElementById("img-2");
        img2.src = p5.img;
        var name3 = document.getElementById("name-3");
        name3.innerHTML  = p6.name;
        var des3 = document.getElementById("des-3");
        des3.innerHTML  = p6.des;
        var img3 = document.getElementById("img-3");
        img3.src = p6.img;
      }
      function pre () {
        
        if (current > 0)
        {
          current--;
          slider1();
          
        }else {
          current = 1;
          slider2();
        }
        
      }
      function next () {
        if (current > 0)
        {
          current = 0;
          slider1();
          
        }else {
          current++;
          slider2();
        }
        
      }