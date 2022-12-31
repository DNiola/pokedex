
function renderAllPokemons(t) {
  return `
    <div class="pokedexBG">
    <div onclick="openPokemon(${t})" id="pokemonContainer${t}" class="pokedex">
      <div class="imgCardContainerBG">
        <img class="imgCardBG" src="img/pokemonBallBG.png">
         <div class="infoContainer">
        <img class="imgSize" id="pokemonImage${t}">
        
      </div>
      </div>
      <div>
        <span id="pokemonID${t}"></span>
        <h1 id="pokemonName${t}"></h1><span style="color:black" id="pokemonTypes${t}"></span>
        <span style="color:black" id="pokemonTypesX${t}"></span>
      </div>
     
    </div>
    
    </div>`;
}


function renderCountsPokemons(t) {
  return `
  <div class="pokedexBG">
  <div onclick="openPokemon(${t})" id="pokemonCountContainer${t}" class="pokedex">
    <div class="imgCardContainerBG">
      <img class="imgCardBG" src="img/pokemonBallBG.png">
       <div class="infoContainer">
      <img class="imgSize" id="pokemonCountImage${t}">
    </div>
    </div>
    <div>
      <span id="pokemonCountID${t}"></span>
      <h1 id="pokemonCountName${t}">
      </h1><span style="color:black" id="pokemonCountTypes${t}"></span>
      <span style="color:black" id="pokemonCountTypesX${t}"></span>
    </div>
   
  </div>
  
  </div>`;
}

function openPokemonHTML(t) {
  return `
  <div id="cardContainer" class="pokemonContainerOpen roll-in-blurred-bottom">
    <div class="test">
      <div id="pokemonContainer${t}Open" class="pokedexCard">
        <div> 
        <div class="pokemonNameContainerPosi">
          <div class="pokemonNameContainer">
                <h1 class="pokemonNamePosi" id="pokemonName${t}Open"></h1>
              </div>
          </div>
          <div class="cardheader">
            <div class="idPosi">
              <h3 class="pokemonPosiID" id="pokemonID${t}Open"></h3>
            </div>
           
            <div class="closeBtnPosi">
              <button class="cardBtnIcons" onclick="closeCard()">
                <img class="cardIconsImg" src="icon/close.png">
              </button>
            </div>
          </div>
          <div class="infoContainerPosi">
          <div>
            <button class="cardBtnIcons" onclick="lastPokemon(${[t]})">
            <img class="cardIconsImg" src="icon/left.png"></button>
          </div>
            <div class="infoPosiContainerOpen">
              <div class="infoContainerOpen">
              <img class="imgSize" id="pokemonImage${t}Open">
              </div>
            </div>
            <div>   
            <button class="cardBtnIcons" onclick="nextPokemon(${[t]})"><img class="cardIconsImg" src="icon/right.png"></button>
            </div>
          </div>
          <div class="subInfoCounatiner">
            <div class="positionTypes">
              <b class="abilities" id="pokemonTypes${t}Open"></b>
              <b class="abilities" id="pokemonTypesX${t}Open"></b>
            </div>
            <div class="positionWH">
              <b class="propotion" id="weight${t}">Weight</b>
              <b class="propotion" id="height${t}">Size</b>
            </div>
            <b class="abilities positionWH" id="abilities${t}">Abilities: </b>
          </div>
        
        <table class="blueTable">
<thead>
<tr>
<th>Happiness</th>
<th>Generation</th>
<th>Gender Rate</th>
<th>Capture Rate</th>
<th>Growth Rate</th>
<th>Egg Group</th>
<th>Hatch Counter</th>
<th>Habitat</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<span id="happiness${t}" class="centerFlex"></span>
</td>
<td ><span class="centerFlex" id="generation${t}"></span> 
</td>
<td > 
<div class="genderSingleRate">
  <span id="genderRate${t}"></span>
</div>
  <div class="genderContainer">
    <img class="genderMaleIMG" src="img/male.png">
      <span id="maleRate${t}"></span>
        <img class="genderIMG" src="img/female.png">
          <span id="femaleRate${t}"></span>
  </div>
</td>
<td><span class="centerFlex" id="captureRate${t}"></span></td>
<td><span class="centerFlex" id="growthRate${t}"></span></td>
<td><span class="centerFlex" id="eggGroup${t}"></span></td>
<td><span class="centerFlex" id="hatchCounter${t}"></span></td>
<td><span class="centerFlex" id="habitat${t}"></span></td>
</tr>
</tbody>
</table>

        <canvas class="chart" id="myChart"></canvas>


        <div class="evolutionContainer" id="evolutionContainer">
          <div class="evolutionPokemonContainer d-none" id=evolutionChain0${t}>
            <img class="evolutionIMG" id="evolutionChainIMG0${t}">
          </div>
          <img class="cardIconsImg d-none" id="evolutionArray" src="icon/right.png">
          <div class="evolutionPokemonContainer d-none" id=evolutionChain1${t}>
            <img class="evolutionIMG" id="evolutionChainIMG1${t}">
          </div>
          <img class="cardIconsImg d-none" id="secondEvolutionArray" src="icon/right.png">
          <div class="evolutionPokemonContainer d-none" id="evolutionChain2${t}">
            <img class="evolutionIMG" id="evolutionChainIMG2${t}">
          </div>
        </div>
        <div>



        <div class="positionTypes">
        <span class="moves" id="moves${t}"><h3>moves:</h3></span>
        </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

function openDiagram(currentPokemon) {
  statHP = currentPokemon["stats"][0]["base_stat"];
  statATK = currentPokemon["stats"][1]["base_stat"];
  statDEF = currentPokemon["stats"][2]["base_stat"];
  statSATK = currentPokemon["stats"][3]["base_stat"];
  statSDEF = currentPokemon["stats"][4]["base_stat"];
  statSPEED = currentPokemon["stats"][5]["base_stat"];
  statMAX = 250;
  Chart.defaults.borderColor = '#fafafa';
  Chart.defaults.color = 'white';
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["HP", "ATK", "DEF", "S.ATK", "S.DEF", "SPEED"],
      datasets: [
        {
          label: "Base stats:",
          data: [statHP, statATK, statDEF, statSATK, statSDEF, statSPEED, statMAX],
          borderRadius: 8,
          backgroundColor: [ 
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",   
          ],
          borderColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(255, 205, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(201, 203, 207, 0.7)",
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      indexAxis: "y",
      barPercentage: 0.6,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    plugins: [ChartDataLabels]
  });
}


