document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    
    // Validation basique
    const prénom = document.getElementById('prénom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const acceptterms = document.getElementById('accept-terms').value;
    const notrobot = document.getElementById('not-robot').value;

    
    if (prénom && nom && email && subject && message && acceptterms && notrobot) {
        alert('Votre message a été envoyé avec succès !');
        // Ici, vous pouvez ajouter le code pour envoyer le formulaire via AJAX ou une autre méthode
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

/*parking js*/
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})
