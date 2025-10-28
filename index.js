
///////////..............IDHR MN PEHLE PAGE KI JS LIKH RHA HOON..................///////




let inputName=document.querySelector("#player-name");

let easyButton=document.querySelector("#easy");

let hardButton=document.querySelector("#hard");

let ruleButton= document.querySelector("#rules");

let startButton=document.querySelector("#start");

let mainContainer = document.querySelector(".container");

let rulesSection = document.querySelector(".rules-section");

let closeRulesButton = document.querySelector(".close-btn"); 

let mainContent = document.querySelector(".main-content");

let gameContainer = document.querySelector("#game-container");

let playerWelcome = document.querySelector("#player-welcome");

let difficultyLevel = document.querySelector("#difficulty-level");

let gameImageLeft=document.querySelector("#gameleftimage");

let gameImageRight=document.querySelector("#gamerightimage");

let  gameMapDiv =  document.querySelector("#game-table");

let leftImage=document.querySelector("#leftContainer");

let elapsedTime = document.querySelector("#elapsed-time");

let displayPlayerName=document.querySelector("#display-player-name");








let isEasyButton=false;

let isHardButton=false;

let name1=inputName.value;

let selectedDifficulty = null;




///////........JO Button bhi select ho uska color change ho jay.......//////////

function resetColor(){
    easyButton.style.backgroundColor="";
    hardButton.style.backgroundColor="";
}

easyButton.addEventListener("click",()=>{
    resetColor();

    easyButton.style.backgroundColor="pink";
    isEasyButton=true;
    isHardButton=false;
    selectedDifficulty = "Easy";
})

hardButton.addEventListener("click",()=>{
    resetColor();
    hardButton.style.backgroundColor="pink";
    isEasyButton=false;
    isHardButton=true;
    selectedDifficulty = "Hard";
})

ruleButton.addEventListener("click", () => {
    ruleButton.style.backgroundColor = 'black'; 
    
    setTimeout(() => {
        ruleButton.style.backgroundColor = ''; 
    }, 1000);
});




//////......idhr mn ye kr rha hoon k agr rule button pr click ho to sb naya a jay.........//////////




ruleButton.addEventListener("click", () => {
    mainContainer.style.display = "none"; 
    rulesSection.style.display = "block"; 
});

closeRulesButton.addEventListener("click", () => {
    rulesSection.style.display = "none"; 
    mainContainer.style.display = "block";
});









////............  idhr mn tiles store krwa rha hoon.............///////////



const TILE_TYPES = {    
    EMPTY: 'Images/starter_eng/pics/tiles/empty.png',
    MOUNTAIN: 'Images/starter_eng/pics/tiles/mountain.png',
    BRIDGE: 'Images/starter_eng/pics/tiles/bridge.png',
    OASIS: 'Images/starter_eng/pics/tiles/oasis.png',
    BRIDGERAIL: 'Images/starter_eng/pics/tiles/bridge_rail.png',
    CURVERAIL: 'Images/starter_eng/pics/tiles/curve_rail.png',
    STRAIGHTRAIL: 'Images/starter_eng/pics/tiles/straight_rail.png',
    MOUNTAINRAIL: 'Images/starter_eng/pics/tiles/mountain_rail.png'
};








//..............ye sb mere pass easymaps hain ..................//


const easyMap1 = [
    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
         { type: TILE_TYPES.MOUNTAIN, angle: 90, connections:{left:0,right:0,up:0,down:0}}, 
         { type: TILE_TYPES.EMPTY , connections:{left:0,right:0,up:0,down:0}}, 
         { type: TILE_TYPES.EMPTY , connections:{left:0,right:0,up:0,down:0}}, 
         { type: TILE_TYPES.OASIS , connections:{left:0,right:0,up:0,down:0}}],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN, angle: 180, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY , connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN, angle: 270, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }]
];

const easyMap2 = [
    [{ type: TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN,angle:180, connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY , connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.MOUNTAIN, angle:180, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN , angle:270, connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }]
];
const easyMap3 = [
    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY ,connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.BRIDGE,connections:{left:0,right:0,up:0,down:0} }],

    [ { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN , angle:180, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0} },
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        { type: TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },  
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN , angle:180, connections:{left:0,right:0,up:0,down:0}}]
];

const easyMap4 = [
    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}  }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [ { type: TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY , connections:{left:0,right:0,up:0,down:0} },
        { type: TILE_TYPES.MOUNTAIN , angle:90 , connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN , angle:90 ,connections:{left:0,right:0,up:0,down:0}  }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },  
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} },
        { type: TILE_TYPES.MOUNTAIN , angle:270, connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }]
];


const easyMap5 = [
    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN , angle: 360, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY , connections:{left:0,right:0,up:0,down:0} }],

    [ { type: TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN , angle:270, connections:{left:0,right:0,up:0,down:0}}, 
        { type: TILE_TYPES.EMPTY , connections:{left:0,right:0,up:0,down:0}}],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} },  
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{ type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.MOUNTAIN, angle:180, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }, 
        { type: TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }]
];




//..................These are the hardLevel maps..............//
//ye sb mere pass hardMaps hain//

const hardMap1=[
    [{type:TILE_TYPES.EMPTY , connections:{left:0,right:0,up:0,down:0}  },
        {type:TILE_TYPES.MOUNTAIN, angle:90, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0} }],

    [{type:TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0} }],

    [{type:TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0} },
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:270, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.MOUNTAIN, angle:270, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.OASIS,connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}]
];

const hardMap2=[
    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle: 90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle: 180, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle: 90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.MOUNTAIN, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}]
];

const hardMap3=[
    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle: 270, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:270, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle: 270, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0}}]
];


const hardMap4=[
    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:180, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle: 270, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:180,connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:270, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],
    [{type:TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}]
];



const hardMap5=[
    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],
    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, angle:90, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, angle:90,connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.OASIS, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.MOUNTAIN,angle:180, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.BRIDGE, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY,connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}],

    [{type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}},
        {type:TILE_TYPES.EMPTY, connections:{left:0,right:0,up:0,down:0}}]
];



const easyMaps=[easyMap1,easyMap2,easyMap3,easyMap4,easyMap5];


const hardMaps=[hardMap1,hardMap2,hardMap3,hardMap4,hardMap5];



//////...........idhr mn dekh rha hoon k agr start Button press hota hai to wo pehle dekhay k sb sahi sa dia ha ya nhi .........////////

let selectedMap=null;
let isGameStarted = false;

startButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    isGameStarted = true;
    let playerName = inputName.value.trim();
    let selectedDifficulty = isEasyButton ? "Easy" : isHardButton ? "Hard" : null;

    if (!playerName || !selectedDifficulty) {
        
    } else {
        displayPlayerName.textContent = playerName;
    
        mainContent.style.display = "none";
    
        gameContainer.style.display = "flex";

        gameImageLeft.style.display="flex";

        gameImageRight.style.display="flex";



        
        if(selectedDifficulty==="Easy"){
            let random=Math.floor(Math.random() * easyMaps.length);
             selectedMap=easyMaps[random];


            printMap(selectedMap);
        }
        else if(selectedDifficulty==="Hard"){
            let random=Math.floor(Math.random() * hardMaps.length);
             selectedMap=hardMaps[random];


            printMap(selectedMap);
        }
        //createGameTable(selectedDifficulty);
    }
});




function printMap(map) {
    
    gameMapDiv.innerHTML = ''; 

    const table = document.createElement('table'); 
    table.style.borderSpacing = '0';


    for (let i = 0; i < map.length; i++) {
        const tr = document.createElement('tr'); 

   
        for (let j = 0; j < map[i].length; j++) {
            const tile = map[i][j]; 
            const td = document.createElement('td'); 

            const img = document.createElement('img'); 
            img.src = tile.type; 


            if (tile.angle) {
                img.style.transform = `rotate(${tile.angle}deg)`; // agr tile k pass koi angle ha to wo use angle pr store kre
            }

            
            td.appendChild(img); 

            td.dataset.originalSrc = tile.type;
            td.dataset.originalAngle = tile.angle || 0;
            tr.appendChild(td);
        }

        table.appendChild(tr); 
    }

    gameMapDiv.appendChild(table); // idhr mn map div mn add kr rha hoon ta keh wo show kre

    //console.log("Map is printed successfully:", gameMapDiv);
}



//////////////..........idhr user input image select kr rha ha.........//////////////
let selectedImage="";
leftImage.addEventListener("click",(event)=>{
    if(event.target.tagName==="IMG")
    {
        selectedImage=event.target.src;

    }

    console.log(selectedImage);
})

////////////............ye mera angle lene k function ha............////////////

function getRotationAngleFromTransform(td) {
    const img = td.querySelector('img');
    if (img) {
        const transform = img.style.transform || window.getComputedStyle(img).transform;

        if (transform.includes('rotate')) {

            const angleMatch = transform.match(/rotate\(([-\d.]+)deg\)/);
            return angleMatch ? parseFloat(angleMatch[1]) : 0;
        }
    }
    return 0; 
}


let gameActive = true;




/////..............Idhr mn wo user input table k ander store krwa rha hoon........../////


let c=0;
gameMapDiv.addEventListener("click",(event)=>{
    if (!gameActive) return;

    if(event.target.tagName==="TD"  || event.target.closest("td"))
    {

        const td=event.target.closest("td");
        c=c+1;

        if(!selectedImage)
        {
            return
        }
        let existingImage=td.querySelector('img');
        let existingAngle=0;
        let existingType="";

        if(existingImage)
        {
            existingAngle=getRotationAngleFromTransform(td);
            const imgSrc = existingImage.src;
            existingType = imgSrc.split('/').pop().replace('.png', '');

        }
        if(existingType==="oasis")
        {
    
            return
        }
        console.log(selectedImage.split('/').pop().replace('.png',''));
        if(existingType==='mountain' && selectedImage.split('/').pop().replace('.png','')!=="mountain_rail")
        {
            
            return 
        }
        if(existingType==='bridge' && selectedImage.split('/').pop().replace('.png','')!=="bridge_rail")
        {
            
            return
        }
        if (existingType === 'empty' && selectedImage.split('/').pop().replace('.png', '') !== "straight_rail") {
            if (selectedImage.split('/').pop().replace('.png', '') !== "curve_rail") {

                return;
            }
        }
        


        let userPlacedImage = td.querySelector('img.user-placed');

        if (userPlacedImage) {
          
            if(existingType==="straight_rail" || existingType==="curve_rail")
            {
                let currentAngle = getRotationAngleFromTransform(td); 
            let newAngle = (currentAngle + 90) % 360; 

            userPlacedImage.style.transform = `rotate(${newAngle}deg)`;


            const row = td.parentElement.rowIndex;
            const col = td.cellIndex;
            selectedMap[row][col].angle = newAngle;

            
            updateConnections(selectedMap);

            return; 

            }
            
        }


        
        td.innerHTML = '';
        const img = document.createElement('img');
        
        img.src =selectedImage

        img.classList.add("user-placed"); 

        if(existingAngle!==0)
        {
            img.style.transform=`rotate(${existingAngle}deg)`
        }

        const selectedType = selectedImage.split('/').pop().replace('.png', '');
        td.setAttribute("data-type", selectedType);
        console.log(`the data-type of the tile is: ${selectedType}`);
        td.appendChild(img);





         
         const row = td.parentElement.rowIndex;
        const col = td.cellIndex;
        selectedMap[row][col].type = selectedImage;
        selectedMap[row][col].angle = existingAngle;
        selectedMap[row][col].userPlaced = true;

        updateConnections(selectedMap);

    }

})




gameMapDiv.addEventListener("contextmenu", (event) => {
    if (!gameActive) {
        event.preventDefault(); 
        return;
    }
    if (event.target.tagName === "TD" || event.target.closest("td")) {
        event.preventDefault();
        const td = event.target.closest("td");
       


        const userPlacedImage = td.querySelector('img.user-placed');
        if (userPlacedImage) {
            td.removeChild(userPlacedImage); 

            
            const img = document.createElement('img');
            img.src = td.dataset.originalSrc; 
            img.style.transform = `rotate(${td.dataset.originalAngle}deg)`;

            td.appendChild(img);


            const row = td.parentElement.rowIndex;
            const col = td.cellIndex;
            selectedMap[row][col].type = td.dataset.originalSrc;
            selectedMap[row][col].angle = parseInt(td.dataset.originalAngle) || 0;
            selectedMap[row][col].userPlaced = false;

            console.log(`Restored tile at (${row}, ${col}): Type = ${selectedMap[row][col].type}, Angle = ${selectedMap[row][col].angle}`);

            
            updateConnections(selectedMap);


        }
    }
});



/////////////////.............time start ho jata ha....////////////////////


let timerInterval;
let elapsedSeconds = 0;

startButton.addEventListener("click", () => {
    startTime();
});

function startTime() {
    clearInterval(timerInterval); 
    elapsedTimeDis(); 
    timerInterval = setInterval(() => {
        elapsedSeconds++;
        elapsedTimeDis();
    }, 1000);
}


function elapsedTimeDis() {
    
    const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');
    elapsedTime.textContent = `${minutes}:${seconds}`;
}










////////////,,,,,,,,,,,,,,....End Game........,,,,,,,,,,,,,,//////////////////




function updateConnections(map) {
    const directions = {
        up: { row: -1, col: 0, opposite: 'down' },
        down: { row: 1, col: 0, opposite: 'up' },
        left: { row: 0, col: -1, opposite: 'right' },
        right: { row: 0, col: 1, opposite: 'left' }
    };

    let allConnected = true;

    
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            const tile = map[row][col];
            tile.connections = { left: 0, right: 0, up: 0, down: 0 };

            const typePath = tile.type.replace(window.location.origin + '/', '');


            if (typePath === TILE_TYPES.BRIDGERAIL || typePath === TILE_TYPES.STRAIGHTRAIL) {
                if (tile.angle === 90 || tile.angle === 270) {
                    tile.connections.left = 1;
                    tile.connections.right = 1;
                } else {
                    tile.connections.up = 1;
                    tile.connections.down = 1;
                }
            } else if (typePath === TILE_TYPES.CURVERAIL || typePath === TILE_TYPES.MOUNTAINRAIL) {
                if (tile.angle === 0) {
                    tile.connections.down = 1;
                    tile.connections.right = 1;
                } else if (tile.angle === 90) {
                    tile.connections.left = 1;
                    tile.connections.down = 1;
                } else if (tile.angle === 180) {
                    tile.connections.up = 1;
                    tile.connections.left = 1;
                } else if (tile.angle === 270) {
                    tile.connections.right = 1;
                    tile.connections.up = 1;
                }
            }
        }
    }


    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            const tile = map[row][col];

            for (const [direction, { row: dRow, col: dCol, opposite }] of Object.entries(directions)) {
                const neighborRow = row + dRow;
                const neighborCol = col + dCol;

                if (tile.connections[direction]) {
                    const isNeighborInBounds = 
                        neighborRow >= 0 && neighborRow < map.length &&
                        neighborCol >= 0 && neighborCol < map[0].length;

                    if (isNeighborInBounds) {
                        const neighbor = map[neighborRow][neighborCol];
                        if (neighbor.connections[opposite] !== tile.connections[direction]) {
                            allConnected = false;
                            console.log(`Connection failed between (${row}, ${col}) [${direction}] and (${neighborRow}, ${neighborCol}) [${opposite}].`);
                        } else {
                            console.log(`Connection confirmed between (${row}, ${col}) [${direction}] and (${neighborRow}, ${neighborCol}) [${opposite}].`);
                        }
                    } else {
                        allConnected = false;
                        console.log(`No neighbor found for (${row}, ${col}) in direction [${direction}].`);
                    }
                }
            }
        }
    }

    if (allConnected && c>12) {
        showCongratulations();
    }
}




function showCongratulations() {
    gameActive = false;
    clearInterval(timerInterval); 
    const playerName = document.querySelector("#player-name").value || "Anonymous";
    const timeElapsed = document.querySelector("#elapsed-time").textContent;
    const difficulty = isEasyButton ? "Easy" : "Hard"; 

    const congratsMessage = document.createElement('div');
    congratsMessage.classList.add('congratulations');
    congratsMessage.innerText = `Congratulations ${playerName}! You've completed the puzzle in ${timeElapsed}!`;

    document.body.appendChild(congratsMessage);

    
    setTimeout(() => {
        congratsMessage.classList.add('hide');
        setTimeout(() => congratsMessage.remove(), 1000);
    }, 3000);

    
     console.log("Updating leaderboard...");
    updateLeaderboard(playerName, timeElapsed, difficulty);
}



let leaderBoardButton = document.querySelector("#leaderboard-button"); 
let leaderBoardPopup = document.querySelector("#leaderboard-popup"); 
let closePopupButton = document.querySelector("#close-popup");
let easyLeaderboardButton = document.querySelector("#easy-leaderboard");
let hardLeaderboardButton = document.querySelector("#hard-leaderboard");
let leaderboard5x5 = document.querySelector("#leaderboard-5x5");
let leaderboard7x7 = document.querySelector("#leaderboard-7x7");
let leaderboardList5x5 = document.querySelector("#leaderboard-list-5x5");
let leaderboardList7x7 = document.querySelector("#leaderboard-list-7x7");
let resetButton=document.querySelector("#reset-leaderboard");


const leaderboardEasy = JSON.parse(localStorage.getItem("leaderboardEasy")) || [];
const leaderboardHard = JSON.parse(localStorage.getItem("leaderboardHard")) || [];

leaderBoardButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    leaderBoardPopup.style.display = 'block'; 
    leaderboard5x5.classList.remove("visible"); 
    leaderboard7x7.classList.remove("visible");
});

closePopupButton.addEventListener("click", (event) => {
    event.preventDefault();
    leaderBoardPopup.style.display = 'none'; 
});

easyLeaderboardButton.addEventListener("click", () => {
    leaderboard5x5.classList.add("visible");
    leaderboard7x7.classList.remove("visible"); 
    loadLeaderboardData(leaderboardList5x5, "5x5");
});

hardLeaderboardButton.addEventListener("click", () => {
    leaderboard7x7.classList.add("visible");
    leaderboard5x5.classList.remove("visible"); 
    loadLeaderboardData(leaderboardList7x7, "7x7");
});

function updateLeaderboard(playerName, timeElapsed, difficulty) {
    const entry = { name: playerName, time: timeElapsed };
    
    const leaderboardKey = difficulty === "Easy" ? "leaderboardEasy" : "leaderboardHard";
    const leaderboardData = JSON.parse(localStorage.getItem(leaderboardKey)) || [];
    
    leaderboardData.push(entry);
    leaderboardData.sort((a, b) => a.time.localeCompare(b.time));
    leaderboardData.splice(5); 

    localStorage.setItem(leaderboardKey, JSON.stringify(leaderboardData));
    
    console.log(`Updated ${difficulty} leaderboard:`, leaderboardData);
}

function loadLeaderboardData(listElement, difficulty) {
    listElement.innerHTML = ""; 
    
    const leaderboardKey = difficulty === "5x5" ? "leaderboardEasy" : "leaderboardHard";
    const data = JSON.parse(localStorage.getItem(leaderboardKey)) || [];
    
    console.log(`Loaded ${difficulty} leaderboard data:`, data);

    if (data.length === 0) {
        listElement.innerHTML = "<li>No records yet</li>";
    } else {
        data.forEach(entry => {
            const listItem = document.createElement("li");
            listItem.textContent = `${entry.name} - ${entry.time}`;
            listElement.appendChild(listItem);
        });
    }
}




function resetLeaderboard() {

    localStorage.removeItem("leaderboardEasy");
    localStorage.removeItem("leaderboardHard");


    leaderboardEasy.length = 0;
    leaderboardHard.length = 0;


    loadLeaderboardData(leaderboardList5x5, "5x5");
    loadLeaderboardData(leaderboardList7x7, "7x7");

    console.log("Leaderboard has been reset.");
}


resetButton.addEventListener("click", () => {
    
    resetLeaderboard();
});



let backButton = document.querySelector("#back-menu");

backButton.addEventListener("click", () => {
    console.log("Hiding game elements and showing menu");
    gameContainer.style.display = "none";
    gameImageLeft.style.display = "none";
    gameImageRight.style.display = "none";
    mainContent.style.display = "flex"; 
    console.log("Current display style of mainContent:", mainContent.style.display);
});



function ResetGame() {
   
    clearInterval(timerInterval);
    elapsedSeconds = 0;
    elapsedTimeDis();

 
    gameMapDiv.innerHTML = '';
    
}
