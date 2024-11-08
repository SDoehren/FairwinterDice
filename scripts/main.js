Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "Gwen", name: "Gwen"}, false);
    dice3d.addDicePreset({
        type: "d20",
        atlas: "modules/fairwinterdice/faces/gwen/d20/gwenfaces-0.json",
        labels: ["d20-1.webp", "d20-2.webp", "d20-3.webp", "d20-4.webp", "d20-5.webp", "d20-6.webp", "d20-7.webp", "d20-8.webp", "d20-9.webp", "d20-10.webp", "d20-11.webp", "d20-12.webp", "d20-13.webp", "d20-14.webp", "d20-15.webp", "d20-16.webp", "d20-17.webp", "d20-18.webp", "d20-19.webp", "d20-20.webp"],
        bumpMaps: ["d20-1-bump.webp", "d20-2-bump.webp", "d20-3-bump.webp", "d20-4-bump.webp", "d20-5-bump.webp", "d20-6-bump.webp", "d20-7-bump.webp", "d20-8-bump.webp", "d20-9-bump.webp", "d20-10-bump.webp", "d20-11-bump.webp", "d20-12-bump.webp", "d20-13-bump.webp", "d20-14-bump.webp", "d20-15-bump.webp", "d20-16-bump.webp", "d20-17-bump.webp", "d20-18-bump.webp", "d20-19-bump.webp", "d20-20-bump.webp"],
        emissiveMaps: ["d20-1-em.webp", "d20-2-em.webp", "d20-3-em.webp", "d20-4-em.webp", "d20-5-em.webp", "d20-6-em.webp", "d20-7-em.webp", "d20-8-em.webp", "d20-9-em.webp", "d20-10-em.webp", "d20-11-em.webp", "d20-12-em.webp", "d20-13-em.webp", "d20-14-em.webp", "d20-15-em.webp", "d20-16-em.webp", "d20-17-em.webp", "d20-18-em.webp", "d20-19-em.webp", "d20-20-em.webp"],
        emissive: 0xd2a13e,
        emissiveIntensity: 0.9,
        system: "Gwen"
    });

    dice3d.addDicePreset({
        type: "d6",
        atlas: "modules/fairwinterdice/faces/gwen/d6/gwenfaces-d6.json",
        labels: ["d6-1-face.webp","d6-2-face.webp","d6-3-face.webp","d6-4-face.webp","d6-5-face.webp","d6-6-face.webp",],
        bumpMaps: ["d6-1-bump.webp","d6-2-bump.webp","d6-3-bump.webp","d6-4-bump.webp","d6-5-bump.webp","d6-6-bump.webp",],
        emissiveMaps: ["d6-1-em.webp","d6-2-em.webp","d6-3-em.webp","d6-4-em.webp","d6-5-em.webp","d6-6-em.webp",],
        emissive: 0xd2a13e,
        emissiveIntensity: 0.9,
        system: "Gwen"
    });

    dice3d.addDicePreset({
        type: "d8",
        atlas: "modules/fairwinterdice/faces/gwen/d8/gwenfaces-0.json",
        labels: ["d20-1.webp", "d20-2.webp", "d20-3.webp", "d20-4.webp", "d20-5.webp", "d20-6.webp", "d20-7.webp", "d20-20.webp"],
        bumpMaps: ["d20-1-bump.webp", "d20-2-bump.webp", "d20-3-bump.webp", "d20-4-bump.webp", "d20-5-bump.webp", "d20-6-bump.webp", "d20-7-bump.webp", "d20-20-bump.webp"],
        emissiveMaps: ["d20-1-em.webp", "d20-2-em.webp", "d20-3-em.webp", "d20-4-em.webp", "d20-5-em.webp", "d20-6-em.webp", "d20-7-em.webp", "d20-20-em.webp"],
        emissive: 0xd2a13e,
        emissiveIntensity: 0.5,
        system: "Gwen"
    });
})