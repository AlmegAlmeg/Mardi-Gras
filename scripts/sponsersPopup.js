//suppliers popup
const sponsersPopupBtn = document.querySelectorAll('.openSponserPopup');
const sponserPopup =document.querySelector('.sponsers-popup');
const closePopup =document.querySelector('.closePopup');

const popupHeader = document.querySelector('.popupHeader');
const headers = [
    "Walk-On's Bistreaux and Bar",
    "Sheraton New Orleans Hotel",
    "Ace Hotel",
    "The Ritz-Carlton",
    "Premium Parking - P402",
    "Louisiana Children's Museum",
    "Museum of Death",
    "Haunted Museum"
];

const popupPara = document.querySelector('.popupPara');
const paragraphs = [
    "There’s really no better way to describe the uniqueness of Walk-On’s Sports Bistreaux. We start every dish from scratch and use fresh ingredients to bring our mouthwatering, Cajun cuisine to life. And whether you’re here for dinner with the family, date night, cocktails with the girls or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you. ",
    
    "Stay at this vibrant hub in the heart of the city, steps from the iconic French Quarter. Oversized suites and the best city rooftop views, this is your home away from home. Check Rates. Book Online. Amenities: Indoor And Outdoor Event Space, Public Service Restaurant.",

    "Your health is our highest priority. We're taking extra steps to stay clean & sanitized. Home to well-appointed rooms, event spaces, a restaurant, rooftop bar and all-day café.",
    
    "The Ritz-Carlton, New Orleans invites visitors to its French Quarter retreat, set within a 1908 Beaux Arts building. Here, one can bask in the silence of the hotel’s beautiful courtyard, experience the mysticism of the city through the spa’s Voodoo Ritual or learn how to play the trumpet with in-house jazz musician Jeremy Davenport.",

    "Our goal at Premium Parking is not to be the biggest parking operator, but the best. Learn how we perform at a level that moves us and our partners forward.",

    "Discover 8.5 acres of in-and-outdoor activities at our new location in New Orleans City Park. Come play with us today!",

    "The Museum of Death houses the world’s largest collection of serial killer artwork, antique funeral ephemera, mortician and coroners instruments, Manson Family memorabilia, pet death taxidermy, crime scene photographs and so much more! ",

    "Among the hundreds of terrifying possessions, museum-goers can even peek inside the VW death van in which Dr. Jack Kevorkian ended the suffering of terminally ill patients as well as get a close-up look at the “Propofol chair” from Michael Jackson’s death room."
];

const popupLink = document.querySelector('.popupLink');
const links = [
    "https://walk-ons.com/",
    "https://www.marriott.com/hotels/travel/msyis-sheraton-new-orleans-hotel/",
    "https://acehotel.com/new-orleans/",
    "https://www.ritzcarlton.com/en/hotels/new-orleans",
    "https://www.premiumparking.com/P402",
    "https://lcm.org/",
    "http://www.museumofdeath.net/",
    "https://thehauntedmuseum.com/"
];

const popup = document.querySelector('.popup');
const popupBackgrounds = [

];

for(let i = 0; i < sponsersPopupBtn.length; i++){
    sponsersPopupBtn[i].addEventListener('click', ()=>{
        sponserPopup.style.display = "block";
        popupHeader.innerHTML = headers[i];
        popupLink.setAttribute('href', links[i]);
        popupLink.setAttribute('target', '_blank');
        popupPara.innerHTML = paragraphs[i];
        popup.style.background = `linear-gradient(to bottom , rgba(255,255,255,0.9) 60%, transparent), url("/img/supply${i+1}.jpg") center`;
        setTimeout(()=>{
            popup.style.top = "0";
        },200)
    })
}
closePopup.addEventListener('click',()=>{
    sponserPopup.style.display = "none";
    popup.style.top = "-100vh";
})