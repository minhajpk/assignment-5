

function getInnerTextById (id){
    const value = document.getElementById(id).innerText;
    const Convertedvalue = parseInt(value);
    return Convertedvalue;

}
function getInnerTextSetValueandId (id, value){
    document.getElementById(id).innerText = value;
}