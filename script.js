    var academicsLeft = [false, false, false, false, false];
    var academicsRight = [false, false, false, false, false];

    window.onload = start;


    function start() {
      menuBox('Home', 'HomePage');
    }

    function menuBox(button, page) {
        document.getElementById('Home').style.backgroundColor = "whitesmoke";
        document.getElementById('About').style.backgroundColor = "whitesmoke";
        document.getElementById('Projects').style.backgroundColor = "whitesmoke";
        document.getElementById('Academics').style.backgroundColor = "whitesmoke";
        document.getElementById('Contact').style.backgroundColor = "whitesmoke";
        var color = document.getElementById(button);
        color.style.backgroundColor = "#E5E4E2";
        document.getElementById('HomePage').style.display = "none";
        document.getElementById('AboutPage').style.display = "none";
        document.getElementById('ProjectsPage').style.display = "none";
        document.getElementById('AcademicsPage').style.display = "none";
        document.getElementById('ContactPage').style.display = "none";
        var display = document.getElementById(page);
        display.style.display = "inline-block";

        document.body.style.backgroundImage = "";
        if (display.id == 'HomePage') {
            document.body.style.backgroundImage = "url('https://scontent-iad3-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/12417948_1217077384973594_4415534927972210358_n.jpg?oh=09ac50116fe0532fbdf4e856c59f3715&oe=574E323F')";
        } else if (display.id == 'ProjectsPage') {
            document.body.style.backgroundImage = "url('https://scontent.xx.fbcdn.net/hphotos-xtp1/t31.0-8/10648329_1048735358530943_5188772945848430037_o.jpg')";
        }
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
        var a4 = document.getElementsByClassName("A4");

        for (i = 0; i < tableNum.length; i++) { 

            a0[i].style.display = "none";
            a1[i].style.display = "none";
            a2[i].style.display = "none";
            a3[i].style.display = "none";
            a4[i].style.display = "none";
        }

        var c0 = document.getElementById("C0");
        var c1 = document.getElementById("C1");
        var c2 = document.getElementById("C2");
        var c3 = document.getElementById("C3");
        var c4 = document.getElementById("C4");


        for (h = 0; h < 5; h++) { 
            academicsLeft[h] = false;
        }


        if (thisBool === false) {

            c0.style.height = "18%";
            c1.style.height = "18%";
            c2.style.height = "18%";
            c3.style.height = "18%";
            c4.style.height = "18%";
            classNum.style.height = "28%";

            academicsLeft[number] = true;
            var j;
            for (j = 0; j < tableNum.length; j++) {
                tableNum[j].style.display = "block";
            }

        } else {
            academicsLeft[number] = false;
            c0.style.height = "20%";
            c1.style.height = "20%";
            c2.style.height = "20%";
            c3.style.height = "20%";
            c4.style.height = "20%";
        }
    }



    function displayRight(table, number, c) {

        var tableNum = document.getElementsByClassName(table);
        number = number - 5;
        var thisBool = academicsRight[number];
        var classNum = document.getElementById(c);

        var i;
        var a5 = document.getElementsByClassName("A5");
        var a6 = document.getElementsByClassName("A6");
        var a7 = document.getElementsByClassName("A7");
        var a8 = document.getElementsByClassName("A8");
        var a9 = document.getElementsByClassName("A9");


        for (i = 0; i < tableNum.length; i++) { 

            a5[i].style.display = "none";
            a6[i].style.display = "none";
            a7[i].style.display = "none";
            a8[i].style.display = "none";
            a9[i].style.display = "none";
        }

        var c5 = document.getElementById("C5");
        var c6 = document.getElementById("C6");
        var c7 = document.getElementById("C7");
        var c8 = document.getElementById("C8");
        var c9 = document.getElementById("C9");


        for (h = 0; h < 5; h++) { 
            academicsRight[h] = false;
        }


        if (thisBool === false) {

            c5.style.height = "18%";
            c6.style.height = "18%";
            c7.style.height = "18%";
            c8.style.height = "18%";
            c9.style.height = "18%";
            classNum.style.height = "28%";

            academicsRight[number] = true;
            var j;
            for (j = 0; j < tableNum.length; j++) {
                tableNum[j].style.display = "block";
            }



        } else {
            academicsRight[number] = false;
            c5.style.height = "20%";
            c6.style.height = "20%";
            c7.style.height = "20%";
            c8.style.height = "20%";
            c9.style.height = "20%";
        }
    }