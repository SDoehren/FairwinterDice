Hooks.on('diceSoNiceReady', (dice3d) => {

    dice3d.addSystem({id: "Gwen", name: "Gwen"}, false);
    dice3d.addDicePreset({
        type: "d20",
        labels: [
            'modules/fairwinterdice/faces/gwen/d20/1-face.png',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12', '13', '14', '15',
            'modules/fairwinterdice/faces/gwen/d20/16-face.png',
            'modules/fairwinterdice/faces/gwen/d20/17-face.png',
            'modules/fairwinterdice/faces/gwen/d20/18-face.png',
            'modules/fairwinterdice/faces/gwen/d20/19-face.png',
            'modules/fairwinterdice/faces/gwen/d20/20-face.png',

        ],
        bumpMaps: ["modules/fairwinterdice/faces/gwen/d20/1-bump.png",
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            'modules/fairwinterdice/faces/gwen/d20/16-bump.png',
            'modules/fairwinterdice/faces/gwen/d20/17-bump.png',
            'modules/fairwinterdice/faces/gwen/d20/18-bump.png',
            'modules/fairwinterdice/faces/gwen/d20/19-bump.png',
            'modules/fairwinterdice/faces/gwen/d20/20-bump.png',

        ],
        emissiveMaps: [
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            "modules/fairwinterdice/faces/gwen/d20/no-em.png",
            'modules/fairwinterdice/faces/gwen/d20/16-em.png',
            'modules/fairwinterdice/faces/gwen/d20/17-em.png',
            'modules/fairwinterdice/faces/gwen/d20/18-em.png',
            'modules/fairwinterdice/faces/gwen/d20/19-em.png',
            'modules/fairwinterdice/faces/gwen/d20/20-em.png',

        ],
        emissive: 0xd4c098,
        emissiveIntensity: 0.9,


        system: "Gwen"
    });

})