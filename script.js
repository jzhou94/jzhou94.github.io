    var academicsLeft = [false, false, false, false];

    window.onload = start;


    function start() {
      menuBox('Home', 'HomePage', 1);
      aboutMe(0);
    }

    function aboutMe(aboutOn) {
        if (aboutOn == 0) {
            document.getElementById('homeFill').style.height = "30%";
            document.getElementById('aboutTag').style.display = "block";
            document.getElementById('aboutContent').style.display = "none";
            document.getElementById('downloadTag').style.display = "none";
        } else {
            document.getElementById('homeFill').style.height = "0px";
            document.getElementById('aboutTag').style.display = "none";
            document.getElementById('aboutContent').style.display = "block";
            document.getElementById('downloadTag').style.display = "block";
        }
    }

    function menuBox(button, page, change) {
        document.getElementById('Home').style.backgroundColor = "white";
        document.getElementById('Projects').style.backgroundColor = "white";
        document.getElementById('Contact').style.backgroundColor = "white";

        document.getElementById('Home').style.fontWeight = "normal";
        document.getElementById('Projects').style.fontWeight = "normal";
        document.getElementById('Contact').style.fontWeight = "normal";

        var c0 = document.getElementsByClassName("normal");
        var c1 = document.getElementsByClassName("clicked");
        for (i = 0; i < 3; i++) {
            if (i == change) {
                c0[i].style.display = "none";
                c1[i].style.display = "block";
            } else {
                c0[i].style.display = "block";
                c1[i].style.display = "none";
            }
        }


        var bStyle = document.getElementById(button);
        bStyle.style.fontWeight = "bold";

        document.getElementById('HomePage').style.display = "none";
        document.getElementById('ProjectsPage').style.display = "none";
        document.getElementById('ContactPage').style.display = "none";
        var display = document.getElementById(page);
        display.style.display = "block";
    }


    function displayLeft(table, number, c) {

        var tableNum = document.getElementsByClassName(table);
        var thisBool = academicsLeft[number];
        var classNum = document.getElementById(c);

        var i;
        var a0 = document.getElementsByClassName("A0");
        var a1 = document.getElementsByClassName("A1");
        var a2 = document.getElementsByClassName("A2");
        var a3 = document.getElementsByClassName("A3");

        for (i = 0; i < tableNum.length; i++) { 

            a0[i].style.display = "none";
            a1[i].style.display = "none";
            a2[i].style.display = "none";
            a3[i].style.display = "none";
        }

        var c0 = document.getElementById("C0");
        var c1 = document.getElementById("C1");
        var c2 = document.getElementById("C2");
        var c3 = document.getElementById("C3");


        for (h = 0; h < 4; h++) { 
            academicsLeft[h] = false;
        }


        if (thisBool === false) {

            c0.style.height = "18%";
            c1.style.height = "18%";
            c2.style.height = "18%";
            c3.style.height = "18%";
            classNum.style.height = "40%";
            classNum.style.color = "#27aae1";

            academicsLeft[number] = true;
            var j;
            for (j = 0; j < tableNum.length; j++) {
                tableNum[j].style.display = "block";
            }

        } else {
            academicsLeft[number] = false;
            c0.style.height = "24%";
            c1.style.height = "24%";
            c2.style.height = "24%";
            c3.style.height = "24%";

            c0.style.color = "black";
            c1.style.color = "black";
            c2.style.color = "black";
            c3.style.color = "black";
        }
    }