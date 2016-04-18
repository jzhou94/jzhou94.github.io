    var academicsLeft = [false, false, false, false];
    var academicsRight = [false, false, false, false];

    window.onload = start;


    function start() {
      menuBox('Home', 'HomePage');
    }



    $(function() {
        $('.nav a').on('click', function(){ 
            if($('.navbar-toggle').css('display') !='none'){
                $(".navbar-toggle").trigger( "click" );
            }
        });
    });



    function menuBox(button, page) {
        document.getElementById('Home').style.backgroundColor = "white";
        document.getElementById('Projects').style.backgroundColor = "white";
        document.getElementById('Academics').style.backgroundColor = "white";
        document.getElementById('Contact').style.backgroundColor = "white";

        document.getElementById('Home').style.fontSize = "85%";
        document.getElementById('Projects').style.fontSize = "85%";
        document.getElementById('Academics').style.fontSize = "85%";
        document.getElementById('Contact').style.fontSize = "85%";

        document.getElementById('Home').style.fontWeight = "normal";
        document.getElementById('Projects').style.fontWeight = "normal";
        document.getElementById('Academics').style.fontWeight = "normal";
        document.getElementById('Contact').style.fontWeight = "normal";

        document.getElementById('Home').style.boxShadow = "4px 4px 2px rgb(220, 220, 220)";
        document.getElementById('Projects').style.boxShadow = "4px 4px 2px rgb(220, 220, 220)";
        document.getElementById('Academics').style.boxShadow = "4px 4px 2px rgb(220, 220, 220)";
        document.getElementById('Contact').style.boxShadow = "4px 4px 2px rgb(220, 220, 220)";

        var bStyle = document.getElementById(button);
        bStyle.style.fontSize = "95%";
        bStyle.style.fontWeight = "bold";
        bStyle.style.boxShadow = "4px 4px 2px rgb(200, 200, 200)";

        document.getElementById('HomePage').style.display = "none";
        document.getElementById('ProjectsPage').style.display = "none";
        document.getElementById('AcademicsPage').style.display = "none";
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

            c0.style.height = "20%";
            c1.style.height = "20%";
            c2.style.height = "20%";
            c3.style.height = "20%";
            classNum.style.height = "38%";

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
        }
    }



    function displayRight(table, number, c) {

        var tableNum = document.getElementsByClassName(table);
        number = number - 4;
        var thisBool = academicsRight[number];
        var classNum = document.getElementById(c);

        var i;
        var a4 = document.getElementsByClassName("A4");
        var a5 = document.getElementsByClassName("A5");
        var a6 = document.getElementsByClassName("A6");
        var a7 = document.getElementsByClassName("A7");


        for (i = 0; i < tableNum.length; i++) { 

            a4[i].style.display = "none";
            a5[i].style.display = "none";
            a6[i].style.display = "none";
            a7[i].style.display = "none";
        }

        var c4 = document.getElementById("C4");
        var c5 = document.getElementById("C5");
        var c6 = document.getElementById("C6");
        var c7 = document.getElementById("C7");


        for (h = 0; h < 4; h++) { 
            academicsRight[h] = false;
        }


        if (thisBool === false) {

            c4.style.height = "20%";
            c5.style.height = "20%";
            c6.style.height = "20%";
            c7.style.height = "20%";
            classNum.style.height = "38%";

            academicsRight[number] = true;
            var j;
            for (j = 0; j < tableNum.length; j++) {
                tableNum[j].style.display = "block";
            }

        } else {
            academicsRight[number] = false;
            c4.style.height = "24%";
            c5.style.height = "24%";
            c6.style.height = "24%";
            c7.style.height = "24%";
        }
    }