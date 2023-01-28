window.onload = async function () {

// Création de card automatique :
//Arrêt car limitation de demande de l'api github en anonyme.

//     async function github(name) {
//         try {

//             const response = await fetch(`https://api.github.com/repos/Bouftout/${name}`)
//             let info = await response.json()

//             const container = document.getElementById("card")

// if(info.created_at == undefined) console.error("#%Error N'a pas de date,donc ne peut pas crée la card");

//             container.innerHTML += `        
//         <div class="card">
//         <h3 class="title">${name}</h3>
//         <h5>${(new Date(info.created_at)).toLocaleDateString()}</h5>
//         <div class="bar">
//             <div class="emptybar"></div>
//             <div class="filledbar"></div>
//         </div>
//         <div class="circle">
//             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
//                 <circle class="stroke" cx="60" cy="60" r="50" />
//             </svg>
//         </div>
//     </div>`

//         } catch (err) {
//             console.log(err);
//         }
//     }

//     const name = ["compagnioncube","PortalAudio","servernodejsweb","pokemarker","casisio","discord-exp-mysql","YtbDownload-Electron","chataleau","elispray"]

//     name.forEach(element => {
//         github(element)
//     });

}