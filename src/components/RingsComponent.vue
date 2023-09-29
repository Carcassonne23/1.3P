<template>
    <div>
      <br>
      <h1>The Rings of Power</h1><br>
      <div id="app">
        <ul>
          <li
            v-for="(item, index) in items"
            :key="index"
            class="list-item"
            @click="showDetails(index)"
          >
            {{ item.name }}
          </li>
        </ul>
        <div class="item-details" v-if="selectedItem">
          <h2>{{ selectedItem.name }}</h2><br>
          <p>{{ selectedItem.description }}</p>
          <img :src="selectedItem.image || defaultImage" alt="Item Image">
        </div>
      </div>
      <br><br><img src="./images/ringsofpower/oneb.jpg" alt="The One Ring" class="responsive-image"><br>
      <p>Three Rings for the Elven-kings under the sky,<br>
        Seven for the Dwarf-lords in their halls of stone,<br>
        Nine for Mortal Men doomed to die,<br>
        One for the Dark Lord on his dark throne<br>
        In the Land of Mordor where the Shadows lie.<br>
        One Ring to rule them all, One Ring to find them,<br>
        One Ring to bring them all and in the darkness bind them<br>
        In the Land of Mordor where the Shadows lie.<br></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            name: "The Three Rings",
            description: "Celebrimbor forged the Three Rings by himself, and they were never touched by Sauron. They were called Narya (the Ring of Fire), Nenya (the Ring of Adamant), and Vilya (the Ring of Air). Narya was first worn first by Gil-galad, who gave it Círdan, and was lastly worn by Gandalf. Gil-galad also initially owned Vilya, before Elrond inherited it after the former's death. Nenya was worn only by Galadriel. They remained hidden, and the whereabouts of the three were not openly revealed until the end of the Third Age, after the One Ring was destroyed, and the Dark Lord Sauron was overthrown. Instead of making the wearer invisible, these rings were themselves invisible. Galadriel revealed her possession of one of the rings to Frodo Baggins while he was in Lothlórien, after his possession of the One Ring enabled him to see her ring. Later, while traveling down the River Anduin, Frodo spoke of it to Aragorn, who admonished him not to speak of it outside of Lórien. Each of the Three Rings had special properties, but their powers were limited. During the Council of Elrond, Elrond stated that neither Rivendell, nor Lórien, nor the Grey Havens (the locations of the Three Elven Rings) had the power to withstand the might of Mordor.",
            image: "./images/ringsofpower/three.jpg"
          },
          {
            name: "The Seven Rings",
            description: "Sauron presented the Seven Rings to the Dwarf-lords. This might have been the division of seven Dwarf clans mentioned in The History of Middle-earth: Durin's Folk, Firebeards, Broadbeams, Ironfists, Stiffbeards, Blacklocks, and Stonefoots. The Dwarves used their Rings to establish their fabled treasure hoards (which in turn attracted dragons), but Sauron, according to portions of The Silmarillion, was unable to force the Dwarven bearers to submit to his will. Indeed, the rings did not even turn them invisible; and the Dwarves were immune to some of the rings' more detrimental effects. It is believed that the Dwarves' natural hardiness, and the fact that it was only the more powerful Dwarf lords who possessed them, made them resistant to Sauron's control. While it is not directly stated, the Rings possibly gave the Dwarf lords who wielded them an increased life span. The net effect of these rings was to bring vast wealth to the wearer and but to also intensify their greed, which ultimately led to the wielders' ruin. At the time of the War of the Ring four rings had been consumed by dragon fire and the rest re-acquired by Sauron.",
            image: "./images/ringsofpower/seven.jpg"
          },
          {
            name: "The Nine Rings",
            description: "The nine rings for mortal men were those divided amongst those men doomed to become the Nazgûl, the Ringwraiths. These ring-bearers held rings that were controlled by Sauron, for they became evil servants of his. None are mentioned specifically throughout The Lord of the Rings save their leader, the Witch-king of Angmar. His second-in-command was named in the Unfinished Tales as Khamûl, the Black Easterling. The effects of the Nine on the Men were that they each acquired great power and wealth, became powerful Sorcerers and appeared to have eternal life, for they did not age. After a time however, life became unendurable to them, and when they put the Rings on, they often beheld the phantoms and delusions of Sauron. One by one, according to the nature of the Man and his innate inability to resist evil, they fell under Sauron's permanent control, and became wraiths who did only Sauron's bidding. They remained permanently invisible, except to those Elves who had once dwelt in the Undying Lands (few indeed by the Third Age) and Maiar such as Sauron and the Wizards. They were also visible to whomever wore the Ruling Ring (whether the other Rings conferred this ability is unknown). This process also appeared to link their lives and power with Sauron's, making them little more than extensions of his will. When Sauron's power was weak, the wraiths themselves were also fairly powerless. As Sauron became stronger however, they became much more powerful, to the point where the Witch-king was presumably able to match Gandalf the White in strength.",
            image: "./images/ringsofpower/nine.jpg"
          },
          {
            name: "The One Ring",
            description: "The One Ring, secretly forged by Sauron in the heart of Mount Doom, had the power to dominate the other nineteen Great Rings. Sauron's intent was to command the minds of the other ring bearers through their rings of power. His original intention was for the Rings to be given to Elves of power and influence. Sauron then intended to forge the One Ring which, through the lesser rings, would allow Sauron direct influence over the thoughts of the other ring-bearers. Had it succeeded perfectly, Sauron would have achieved dominance over the Elves with no military action required. However, for this plan to be successful the Ruling Ring would have to be significantly stronger than the other rings, and Sauron put a great amount of his own power into the Ring in order to achieve this. As the Ruling Ring, it had all the powers of the other rings, but to a far greater extent, and had some powers uniquely its own. While Sauron's plan didn't succeed perfectly, the existence of the One Ring on his finger meant that the other rings, with which many kingdoms had been built, could not be used safely. Additionally, intentionally or not, Sauron's personal power was greatly enhanced so long as he wore the Ring, giving him military might the likes of which he could never have otherwise achieved.",
            image: "./images/ringsofpower/one.jpg"
          }
        ],
        selectedItem: null,
        defaultImage: "./images/ringsofpower/default.jpg"
      };
    },
    methods: {
      showDetails(index) {
        this.selectedItem = this.items[index];
      },
    },
  };
  </script>