console.log("----------------------------------------------------")
Hooks.on('diceSoNiceReady', (dice3d) => {

dice3d.addSystem({id:"SDT",name:"SDT"},false);
dice3d.addDicePreset({
    type:"d20",
    labels:[
   'modules/sdtdice/faces/oops.webp','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/sdtdice/faces/ranger-symbol.webp'
    ],
bumpMaps: ["modules/sdtdice/faces/oops-bump.webp",,,,,,,,,,,,,,,,,,,
    "modules/sdtdice/faces/ranger-bump.webp"
  ],

    system:"SDT"
  });

})