const dog_api = 'https://dog.ceo/api/breeds/list/all';
const dog_by_breed = "https://dog.ceo/api/breed/";
const select = document.getElementById("selectBreed");
const viewDog = document.querySelector("button");
const breedImage = document.getElementById("breedImage");
function random(){

    $.ajax({
        type: "GET",
        url: `${dog_api}`,
        dataType: "JSON",
        success: data => {
            let dogNames = Object.keys(data.message);
            dogNames.forEach(name => {
                select.innerHTML += `<option value="${name}">${name}</option>`;
            })
        },
        error: error => {
            console.log("An error occured");
        }
    });
}

random();

viewDog.addEventListener("click", () => {

    $.ajax({
        type: "GET",
        url: `https://dog.ceo/api/breed/${select.value}/images/random`,
        dataType: "JSON",
        success: data => {
            breedImage.setAttribute(`src`, `${data.message}`);
        },
        error: error => {
            console.log("An error occured");
        }
    });
});
