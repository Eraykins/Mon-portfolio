function validerFormulaire(){
let nom=document.getElementById('nom').value;
let email=document.getElementById('email').value;
let message=document.getElementById('message').value;
if(nom==''||email==''||message==''){
alert('Veuillez remplir tous les champs');
return false;
}
document.getElementById('resultat').innerText='Message envoyé avec succès';
return false;
}