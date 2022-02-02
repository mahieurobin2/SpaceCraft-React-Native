export const useImage = (title: string) => {
    const imageName = `${title.toLowerCase().replace(" ", "")}`;
  
    let source;
    switch (imageName) {
      case "cr90corvette":
        source = require("assets/vaisseaux/cr90corvette.png");
        break;
      case "stardestroyer":
        source = require("assets/vaisseaux/stardestroyer.jpg");
        break;
      case "sentinel-classlanding craft":
        source = require("assets/vaisseaux/sentinel.jpg");
        break;
      case "deathstar":
        source = require("assets/vaisseaux/deathstar.jpeg");
        break;
      case "millenniumfalcon":
        source = require("assets/vaisseaux/fauconmillenium.png");
        break;
      case "y-wing":
        source = require("assets/vaisseaux/ywing.jpg");
        break;
      case "x-wing":
        source = require("assets/vaisseaux/xwing.jpg");
        break;
      case "tieadvanced x1":
        source = require("assets/vaisseaux/tieadvanced.png");
        break;
      case "executor":
        source = require("assets/vaisseaux/Executor.jpg");
        break;
      case "rebeltransport":
        source = require("assets/vaisseaux/rebeltransport.png");
        break;
    }