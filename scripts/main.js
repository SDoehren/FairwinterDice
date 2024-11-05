Hooks.on('diceSoNiceReady', (dice3d) => {

    dice3d.addSystem({id: "Gwen", name: "Gwen"}, false);
    dice3d.addDicePreset({
        type: "d20",
        labels: [
            'modules/fairwinterdice/faces/gwen/d20/1-face.webp', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
            'modules/fairwinterdice/faces/gwen/d20/20-face.webp'
        ],
        bumpMaps: ["modules/fairwinterdice/faces/gwen/d20/1-bump.webp", , , , , , , , , , , , , , , , , , ,
            "modules/fairwinterdice/faces/gwen/d20/20-bump.webp"
        ],

        system: "Gwen"
    });

})