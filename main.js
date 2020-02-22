const dinos =[];

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
console.log('hi from newDino', dinos);
};

const init= ()=>{
 document.getElementById('submit-new-dino').addEventListener('click', newDino);

};

init();