let buttonFamily = document.getElementById('button-family');
let buttonSpecial = document.getElementById('button-special');
let buttonSocial = document.getElementById('button-social');

let titleItem = document.getElementById('title-item');
let contentItem = document.getElementById('content-item');
let imageItem = document.getElementById('image-item')

let titleFamily = 'Family Gathering';
let contentFamily = `We love catering for entire families. So please bring everyone along for a special meal with your 
loved ones. We’ll provide a memorable experience for all.`;

let titleSpecial = 'Special Events';
let contentSpecial = `Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
We’ll be sure to mark your special date with an unforgettable meal.`;

let titleSocial = 'Social Events';
let contentSocial = `Are you looking to have a larger social event? No problem! We’re more than happy to cater for big 
parties. We’ll work with you to make your event a hit with everyone.`;


buttonFamily.onclick = () => {
    titleItem.innerText = titleFamily;
    contentItem.innerText = contentFamily;
}

buttonSpecial.onclick = () => {
    titleItem.innerText = titleSpecial;
    contentItem.innerText = contentSpecial;
}

buttonSocial.onclick = () => {
    titleItem.innerText = titleSocial;
    contentItem.innerText = contentSocial;
}