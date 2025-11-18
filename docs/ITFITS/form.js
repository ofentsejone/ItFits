function  submitInfo(event){
    event.preventDefault();//prevent page reload on form submission

let bodyHeight=document.getElementById("bodyHeight").value;
let legHeight=document.getElementById("legHeight").value;
let torsoHeight=document.getElementById("torsoHeight").value;

    if(bodyHeight>5 || (torsoHeight >2 && torsoHeight>=bodyHeight) || (legHeight>2 && legHeight>=bodyHeight) || (torsoHeight+legHeight!= bodyHeight)){
       window.alert("Incorrect")
    }
    
   else{
    document.body.innerHTML = `
        <h2>Submitted Measurements</h2>
        <p><strong>Body Height:</strong> ${bodyHeight} m</p>
        <p><strong>Leg Height:</strong> ${legHeight} m</p>
        <p><strong>Torso Height:</strong> ${torsoHeight} m</p>`;
   }
     
}