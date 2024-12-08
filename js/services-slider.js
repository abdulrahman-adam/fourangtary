

let sliderContainer = document.getElementById('sliderContainer');
// console.log(sliderContainer)
let precedantElement = document.getElementById('pre');
// console.log(precedantElement)
let suivantElement = document.getElementById('next');
// console.log(suivantElement)

const listImage = [

    `<div class='img-slider'>
    
        <div class="test33">
            <h4>Réparation téléphones</h4>
            <h6 class="test34">Selon les besoins du projet, je peux construire des web/applications complexes et modernes.

            Grâce à plusieurs technologies, le site web obtient une très bonne note de référencement, et toutes les
            pages de la web/app sont partageables sur les réseaux sociaux, et ceux de manière dynamique.</h6>
        </div>

            <img src="../image/services/1.jpeg" alt="" width='300px'>
    
    </div>`,


  ` <div class='img-slider'>
  
  <div class="test33">

  <h4>Vente téléphones</h4>
  <h6 class="test34">Je m'applique pour développer des sites web et applications mobiles qui s'adaptent à tout genre d'écrans.

  La web/app peut fonctionner sur plusieurs plateformes selon les besoins : IOS, Android, Navigateur web...</h6>



</div>

<img src="../image/services/2.jpg" alt="" width='300px'></div>`,

` <div class='img-slider'>

<div class="test33">

<h4>Services financier</h4>
<h6 class="test34">En plus de l'authentification classique (Email et mot de passe), je peux mettre en place des authentifications à travers les réseaux sociaux (Google, Facebook, Github...).

Je peux aussi m'occuper de la mise en place d'un système de paiement en ligne...</h6>



</div>

<img src="../image/services/3.jpg" alt="" width='300px'></div>`

];

// note 

//  index commence 0


// pour récupère l'image premier 
// sliderContainer.innerHTML += listImage[0];

let m = 0;
sliderContainer.innerHTML += listImage[m];
sliderContainer.innerHTML += `<p>slide #${m+1} of ${listImage.length}</p>`;


// On laiser le button précédant disabled
precedantElement.setAttribute('disabled', 'disabled');

// On déplacement les images avec le button suivant


suivantElement.addEventListener('click', (eo) => {
    precedantElement.removeAttribute('disabled');

    m++;
    sliderContainer.innerHTML += listImage[m];
    // sliderContainer.innerHTML += `<p>slide #1 of 8</p>`;
    //  length array
    sliderContainer.innerHTML += `<p class='hide'>slide #${m+1} of ${listImage.length}</p>`;

    // Si 

    if(m+1 == listImage.length) {
        suivantElement.setAttribute('disabled', 'disabled');

    }
     // On suprime le current class active existe dans l'element 
     parentNumbers.getElementsByClassName("active-number")[0].classList.remove("active-number");
     // console.log('parentNumbers.getElementsByClassName("active-number")[0]'),
     // On ajout le class active pour l'element cliquer
     parentNumbers.getElementsByTagName('button')[m].classList.add("active-number");


})

precedantElement.addEventListener('click', (eo) => {
    suivantElement.removeAttribute('disabled');

    m--;

    sliderContainer.innerHTML += `<p>slide #${m+1} of ${listImage.length}</p>`;

    sliderContainer.innerHTML += listImage[m];
    // sliderContainer.innerHTML += `<p>slide #1 of 8</p>`;

    //  length array

    if(m == 0) {
        precedantElement.setAttribute('disabled', 'disabled');

    }


    // On suprime le current class active existe dans l'element 
    parentNumbers.getElementsByClassName("active-number")[0].classList.remove("active-number");
    // console.log('parentNumbers.getElementsByClassName("active-number")[0]'),
    // On ajout le class active pour l'element cliquer
    parentNumbers.getElementsByTagName('button')[m].classList.add("active-number");

})



// On suprimer la class active du numero dans les button  1-8

let parentNumbers = document.getElementsByClassName('numbers')[0];
// console.log(parentNumbers)
let allButtons2 = document.querySelectorAll('.mynumber');
// console.log(allButtons2)

allButtons2.forEach((item, index)=> {
    item.addEventListener('click', (eo) =>{
        // On suprime le current class active existe dans l'element 
        parentNumbers.getElementsByClassName("active-number")[0].classList.remove("active-number");
        // console.log('parentNumbers.getElementsByClassName("active-number")[0]'),
        // On ajout le class active pour l'element cliquer
        item.classList.add("active-number");

        sliderContainer.innerHTML += listImage[index];
        sliderContainer.innerHTML += `<p>slide #${index+1} of ${listImage.length}</p>`;

        // On récupère l'index d'item cliquer
        m = index;

        if(index == listImage.length-1){
            suivantElement.setAttribute('disabled', 'disabled');
            precedantElement.removeAttribute('disabled');

        } else if(index == 0) {
            
            suivantElement.removeAttribute('disabled');
            precedantElement.setAttribute('disabled', 'disabled');

        } else {
            suivantElement.removeAttribute('disabled');
            precedantElement.removeAttribute('disabled');

        } 

    })
})


// l'indice de tableau de l'élément courant