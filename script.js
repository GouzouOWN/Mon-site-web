/*
//MOT_D'ALERTE:
alert("Sois la bienvenue ! Si tu fait des betises sur ce site, tu vas te faire séquestrer, fusiller, ensorceler, trucider et atomiser de la surface de la terre. Bonne decouverte ପ(๑•ᴗ•๑)ଓ ");

//PRENOM:
let prenom=prompt("Comment t'applle-tu (＠'ω'＠)?");
alert("❣️Coucou " + prenom );

//ÂGE:
let age = prompt("Quel âge as-tu ??? ⁺‧₊˚ ཐི⋆♱⋆ཋྀ ˚₊‧⁺");
if(age>=12){
	alert("Bien venue dans ce site ! ⎛⎝ ≽ > ⩊ < ≼ ⎠⎞");
else{
	alert("Tu es trop jeune, vas voir ailleurs si j'y suis ! ╭∩╮( ＾◡＾)╭∩╮");
}


//MOT DE PASSE_N°1:
let mdp=prompt("Mot de passe stp ʢ•·̫•ʡ");
let vrai_mdp=
if(modp=="I LOVE MY"){
	alert("Re-bien venue dans ce site ! Amuse toi bien ⎛⎝ ≽ > ⩊ < ≼ ⎠⎞");
}
else{
	alert("Desoler, mot de passe incorecte, vas voir ailleurs si j'y suis !            ╭∩╮( ＾◡＾)╭∩╮");
}

//MOT_DE_PASSE_N°2:
let mdp=prompt("Mot de passe stp ʢ•·̫•ʡ");
let vrai_mdp="I LOVE MY"
while(mdp!=vrai_mdp){
	alert("Desoler, mot de passe incorecte, vas voir ailleurs si j'y suis !            ╭∩╮( ＾◡＾)╭∩╮ ");
	mdp=prompt("Mot de passe stp ʢ•·̫•ʡ");
}
alert("Re-bien venue dans ce site ! Amuse toi bien ⎛⎝ ≽ > ⩊ < ≼ ⎠⎞" );
*/


//PRENOM_TITRE:
let prenom=prompt("Comment t'applle-tu (＠'ω'＠)?");
let titre=document.getElementById("titre");
titre.textContent="❣ Coucou " + prenom ;


//PETIT_PARAGRAPHE:
let paragraphe=document.createElement("p");
paragraphe.innerText="Hello world !";
document.getElementById("boite").appendChild(paragraphe);

