const dinos = [
    {
      id: 'dino1',
      name: 'Rex',
      type: 'T Rex',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 99,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
      id: 'dino2',
      name: 'Steve',
      type: 'Velociraptor',
      age: 1,
      owner: 'Mary',
      adventures: [],
      health: 1,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
      id: 'dino3',
      name: 'Susan',
      type: 'Stegasaurus',
      age: 55,
      owner: 'Luke',
      adventures: [],
      health: 45,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    }
  ];
  
    
const printToDom =(divId, textToPrint)=>{
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML =textToPrint;
    };

 const closeSingleViewEvent =()=>{
     console.log('closeSingleViewEvent()');
     printToDom('single-view','');
     printDinos(dinos);
 }

const viewSingleDino= (e)=> {
    console.log('viewSingleDino()', e.target.closest('.card').id);
    const dinoId = e.target.closest('.card').id;
    const selectedDino = dinos.find((currentDino) => dinoId === currentDino.id);
console.log('selectedDino',selectedDino);
    let domString= '';
    domString += '<button id="close-single-view"class="btn btn-outline-dark single-dino"><i class="far fa-eye"></i></button>';
    domString += '<div class="container">'
    domString += '<div class="row">';
    domString += '<div class="col-6">';
    domString += `<img class="img-fluid" src="${selectedDino.imageUrl}"alt=""/>`;
    domString += '</div>';
    domString +='<div class="col-6">';
    domString += `<h2>${selectedDino.name}</h2>`;
    domString += `<p>Type: ${selectedDino.age}</p>`;
    domString += `<p>Age: ${selectedDino.owner}</p>`;
    domString += `<p>Health: ${selectedDino.health}</p>`;
    domString += '</div>';
    domString += '</div>';
   
    printToDom('kennel', '');
    printToDom('single-view',domString);
    console.log("test a", document.getElementById('close-single-view'));
    document.getElementById('close-single-view').addEventListener('click',closeSingleViewEvent);


}

const singleDinoAddEvents =()=>{
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for(let i=0; i < dinoViewButtons.length; i++){
        dinoViewButtons[i].addEventListener('click',viewSingleDino);
    }
};

const dinoHealth= (e)=>{
    const dinoId = e.target.closest('.card').id;
    const dinoPosition= dinos.findIndex((p)=> p.id === dinoId);
    if(dinos[dinoPosition].health < 100){
    dinos[dinoPosition].health += 1;
    printDinos(dinos);
    // console.log('went over image',dinoPosition);
    }   
};

const petEvents =()=>{
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for(let i=0; i < dinoPetButtons.length; i++) {
        dinoPetButtons[i].addEventListener('mouseleave',dinoHealth);
    }
};

const deleteDinoEvents = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
    dinos.splice(dinoPosition,1);
    printDinos(dinos);
    console.log('TRASHCAN')
  };
const deleteEvents = () => {
    const dinoDeleteButtons = document.getElementsByClassName('delete-dino');
    for(let i = 0; i < dinoDeleteButtons.length; i++) {
      dinoDeleteButtons[i].addEventListener('click', deleteDinoEvents);
    }
  };

 
  

const printDinos = (dinoArray) => {
    let domString = '';
    for (let i =0; i < dinoArray.length; i++){
      domString += '<div class="col-4">';
      domString += `<div class="card" id=${dinoArray[i].id}>`;
      domString += `<img class="card-img-top dino-photo" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
      domString += '<div class="card-body">';
      domString += `<h5 class="card-title">${dinoArray[i].name}</h5>`;
      domString += `<p class="card-text">Health: ${dinoArray[i].health}</p>`;
      domString += '<button class="btn btn-outline-dark single-dino"><i class="far fa-eye"></i></button>';
      domString += '<button class="btn btn-outline-dark delete-dino"><i class="fas fa-trash"></i></button>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
    printToDom('kennel', domString);
    singleDinoAddEvents();
    petEvents();
    deleteEvents();

  };


const newDino =(e)=> {
    e.preventDefault();
    const brandNewDino =  {
          id: `dino${dinos.length + 1}`,
          name: document.getElementById('dino-name').value,
          type: document.getElementById('dino-type').value,
          age: document.getElementById('dino-age').value,
          owner: document.getElementById('dino-owner').value,
          adventures: [],
          health: 100,
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
};


dinos.push(brandNewDino);
document.getElementById('new-dino-form').reset();
document.getElementById('collapseOne').classList.remove('show');
printDinos(dinos);
singleDinoAddEvents();
};

const init= ()=>{
 document.getElementById('submit-new-dino').addEventListener('click', newDino);
printDinos(dinos);
singleDinoAddEvents();
petEvents();
};

init();