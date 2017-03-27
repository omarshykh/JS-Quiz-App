var userName="admin";
var passWord="omega4141";
var stuName;
function quizButton()
{
    var usernameInput=document.getElementById("username").value;
    var passwordInput=document.getElementById("password").value;
    stuName=document.getElementById("namebox").value;

    if(usernameInput==="" && passwordInput==="" && stuName==="")
    {
        alert("Enter username,password and Your name first");
    }
    else if(usernameInput==="" && passwordInput!=="" && stuName!=="")
    {
        alert("Username field is empty,Enter username please!!");
    }
    else if(usernameInput!=="" && passwordInput==="" && stuName!=="")
    {
        alert("Password field is empty,Enter password please!!");
    }
    else if(usernameInput!=="" && passwordInput!=="" && stuName==="")
    {
        alert("YourName field is empty,Enter YourName please!!");
    }
    else
    {
        if(usernameInput===userName && passwordInput===passWord)
        {
                var parent=document.getElementById("indexdiv");
                parent.style.display="none";

                var newNode=document.createElement("input");
                newNode.setAttribute("type","button");
                newNode.setAttribute("value","Start Quiz");
                newNode.setAttribute("id","startquiz");
                newNode.setAttribute("onclick","doSomething()");

                var wrap=document.getElementById("wrapper");
                wrap.appendChild(newNode);
        }
        else
        {
            alert("Wrong Username or Password!!");
        }

    }

}

function doSomething()
{
    window.location.href="quiz.html";
}

var answerCount=0;
var quesCount=0;
var quesNoCount=0;
var totalMarks=40;
var markssObt=0;
var userInput;
var questions=["Which is the current using version of HTML?","html4","html5","html3","xml","Which button can select multiple options at a time?","radiobutton","checkbox","dropdownlist","noneOfThem","Which attribute of form has the URL of ther server of which data is submitted?","method","id","action","click","Which one of them is the least heading size?","h2","h1","h4","h6","HTML Tags are also reffered as?","Attributes","Markup","Text","Document","What is the best minimum resolution of image for browser?","300ppi","45ppi","72ppi","32ppi","Which one of them is a block level element?","img","strong","p","td","Which tag is used to add a list items in list?","dd","td","li","th","Which one of them is the Absolute URL?","https:\\www.google.com","quiz.html","images\index.html","project\index.html","Which markup is used to group form elements?","legend","fieldset","placeholder","noneOfThem","Which one of them is the biggest box of inline features?","div","span","header","noneOfThem","How many types of form controls are there?","2","5","4","3","Which one of them is a semantic markup?","p","em","ins","h1","'Target' attribute is used in which tag?","link","img","table","form","1.Burger 2.Chips 3.Colddrink. Which type of list it is?","ul","dl","ol","noneOfThem","Which value of type attribute in input tag is used to create area for comments?","text","textarea","comments","noneOfThem","Which identity is unique for an element?","class","id","href","noneOfThem","Which one of them is an inline element?","h2","a","li","td","Which attribute is used to give the path of image in img tag?","src","href","link","noneOfThem"];
var answers=["img","html5","checkbox","action","h6","Markup","72ppi","p","li","https:\\www.google.com","fieldset","span","3","em","link","ol","noneOfThem","id","a","src"];
var quesNum=["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
function nextQues()
{
   
 if(answerCount<=answers.length-1)
 {  
   if( ((document.getElementById("option1").checked)===false)&&
    ((document.getElementById("option2").checked)===false)&&
    ((document.getElementById("option3").checked)===false)&&
    ((document.getElementById("option4").checked)===false) )
    {
        alert("Please select any option first!!");
    }
    else
    {
        if((document.getElementById("option1").checked))
        {userInput=document.getElementById("option1").value;}

                if((document.getElementById("option2").checked))
        {userInput=document.getElementById("option2").value;}

                if((document.getElementById("option3").checked))
        {userInput=document.getElementById("option3").value;}

                if((document.getElementById("option4").checked))
        {userInput=document.getElementById("option4").value;}

        if(userInput===answers[answerCount])
        {
            markssObt=markssObt+2;
            answerCount++;
        }
        else{
            answerCount++;
        }
        if(answerCount<20)
        {
        changeQues();
        }
        else
        {
            var opt=document.getElementById("options");
            var que=document.getElementById("question");
            opt.style.display="none";
            que.style.display="none";
            var down=document.getElementById("submit");
            down.setAttribute("style","margin-top:300px");
            down.setAttribute("value","Show Result");
        }
    }

}
else
{
    score();
}

}

function changeQues()
{
    var beforeQuesNo="<h1 id='quesNo'>Question ";
    var middleQuesNo=quesNum[quesNoCount];
    var afterQuesNo=" of 20</h1>";
    var totalQuesNo=beforeQuesNo+middleQuesNo+afterQuesNo;
    document.getElementById("quesNo").innerHTML=totalQuesNo;

    var beforeCode="<p id='question'>";
    var afterCode="</p>";
    var middleCode=questions[quesCount];
    var totalCode=beforeCode+middleCode+afterCode;
    document.getElementById("question").innerHTML=totalCode;

    forOption1();
    forOption2();
    forOption3();
    forOption4();

    quesCount=quesCount+5;
    quesNoCount++;

    document.getElementById("option1").checked=false;
    document.getElementById("option2").checked=false;
    document.getElementById("option3").checked=false;
    document.getElementById("option4").checked=false;
}

function forOption1()
{
    document.getElementById("option1").setAttribute("value",questions[quesCount+1]);
    var labelBefore="<label id='label1'>";
    var mid=questions[quesCount+1];
    var labelAfter="</label>";
    var totalLabel=labelBefore+mid+labelAfter;
    document.getElementById("label1").innerHTML=totalLabel;
}

function forOption2()
{
    document.getElementById("option2").setAttribute("value",questions[quesCount+2]);
    var labelBefore="<label id='label2'>";
    var mid=questions[quesCount+2];
    var labelAfter="</label>";
    var totalLabel=labelBefore+mid+labelAfter;
    document.getElementById("label2").innerHTML=totalLabel;
}

function forOption3()
{
    document.getElementById("option3").setAttribute("value",questions[quesCount+3]);
    var labelBefore="<label id='label3'>";
    var mid=questions[quesCount+3];
    var labelAfter="</label>";
    var totalLabel=labelBefore+mid+labelAfter;
    document.getElementById("label3").innerHTML=totalLabel;
}

function forOption4()
{
    document.getElementById("option4").setAttribute("value",questions[quesCount+4]);
    var labelBefore="<label id='label4'>";
    var mid=questions[quesCount+4];
    var labelAfter="</label>";
    var totalLabel=labelBefore+mid+labelAfter;
    document.getElementById("label4").innerHTML=totalLabel;
}
function message(pr)
{
    if(pr>=60)
    {
        var back="Congratulations, you have passed with percentage " +pr+"%";
        return back;
    }
    else
    {
        var sad="Sorry, you have failed with percentage "+pr+"%";
        return sad;
    }

}

function score()
{
    var parent=document.getElementById("maindiv");
    var percentage= (markssObt*100)/totalMarks;
    var greet=message(percentage);
    var beforeCode="<p id='remarks'>";
    var middle="</p><p class='labels'>Total Questions</p><p id='totalques' class='mark'>20</p><p class='labels'>Correct Answers</p><p id='correct' class='mark'>";
    var afterCode="</p><input type='button' value='Back To Homepage' id='backbutton' onclick='backFunc()'>";
    var correctt=markssObt/2;
    var totalCode=beforeCode+greet+middle+correctt+afterCode;
    parent.innerHTML=totalCode;
    var stopTimer=document.getElementById("timer");
    stopTimer.style.display="none";
}

function startQuiz(){
    var myVar = setInterval(myTimer , 1000);
    var min = 23;
    var sec= 60;    
    function myTimer(){   
         sec--;
         if(sec == 0){
             if(min > 0){
             min--;
             sec = 60;
             }
             else{
                 clearInterval(myVar);
                 alert("Time's Up!");
                 score();

             }
         }
         document.getElementById("timer").innerHTML ="Time Remaining: " + min + ":" + sec;
         
     }    
}
function backFunc()
{
    window.location.href="index.html";
}