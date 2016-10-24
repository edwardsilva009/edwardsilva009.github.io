//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=30;
var successes=0; successesMax=9; attempts=0; attemptsMax=5;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFF80"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=5; messageOk=" congratulations"; messageTime="00:02:45"; messageError="volver a intentarlo"; messageAttempts="2"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_self"; goURLAttempts="_self"; goURLError="_self"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#00FFFF"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0"];
var posX=[200,42,485,152,354,274,331,-1,139]; var posY=[26,92,123,123,159,56,263,174,299];
var coorx=["MTcz", "Mzc", "NTU2", "MjI5", "MzY2", "MzIx", "MzAy", "NTk", "MTcz"]; var coory=["MjE", "OTI", "Njk", "MTQ2", "MTMw", "OTc", "MjMz", "MjM3", "MjY1"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
answers=["cámara ip", "cámara domo", "smartphone", "DVR", "Mouse", "control", "monitor", "Webcam", "Alarma"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="QWN0aXZpZGFkNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
