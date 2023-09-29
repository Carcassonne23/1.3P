<template>
    <div>
      <h1>Lord of the Rings Character Biographies</h1>
      <p>Please choose a character to learn more about them:</p>
      <button @click="selectRandomCharacter">Random Character</button><br>
      <select v-model="selectedCharacter">
        <option disabled value="">Character</option>
        <option v-for="character in characters" :key="character.name" :value="character.name">{{ character.name }}</option>
      </select>
      <div v-if="selectedCharacter">
        <img :src="getCharacterImage(selectedCharacter)" :alt="selectedCharacter" class="responsive-image">
        <p>{{ getCharacterBio(selectedCharacter) }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            selectedCharacter: '',
            characters: [
                {
                    name: 'Aragorn',
                    image: './images/characters/aragorn.jpg',
                    bio: 'Aragorn II, son of Arathorn II and Gilraen, also known as Elessar and Strider, was the 16th and last Chieftain of the Dunedain of the North; later crowned King Elessar Telcontar (March 1, 2931 - FO 120), the 26th King of Arnor, 35th King of Gondor and first High King of Gondor and Arnor since the short reign of Isildur. He was a great Ranger and warrior, and as Isildurs heir he bore the shards of Narsil, reforged and renamed Anduril, Flame of the West, in the Great War of the Ring.'
                },
                {
                    name: 'Arwen',
                    image: './images/characters/arwen.jpg',
                    bio: 'Arwen was the Half-elven daughter of Elrond and Celebrían. She was often called Arwen Undomiel or "Evenstar". In marrying Aragorn II Elessar after the War of the Ring, she became Queen of the Reunited Kingdom of Arnor and Gondor, and like Beren and Lúthien before her, she united Elf and Man in peace, while becoming mortal.'
                },
                {
                    name: 'Bilbo',
                    image: './images/characters/bilbo.jpg',
                    bio: 'Bilbo Baggins was a Hobbit of the Shire, the main protagonist of The Hobbit and a secondary character in The Lord of the Rings. Gandalf suggested to Thorin and Company that they hire Bilbo Baggins to be their burglar in the Quest of Erebor, and later fought in the Battle of Five Armies. Bilbo was also one of the bearers of the One Ring, and the first to voluntarily give it up, although with some difficulty. He wrote many of his adventures in a book he called There and Back Again. Bilbo adopted his second-cousin-once-removed Frodo Baggins to be his heir after his parents, Drogo and Primula, drowned in the Brandywine River. Bilbo was the first hobbit to become famous in the world at large, and one of the few to set foot in the Undying Lands.'
                },
                {
                    name: 'Boromir',
                    image: './images/characters/boromir.jpg',
                    bio: 'Boromir was a valiant warrior of Gondor, renowned for his prowess in combat and skill on the battlefield. He was the eldest son of Denethor II, who was Steward of Gondor during the War of the Ring, and his wife Finduilas. Even the people of Rohan admired him, particularly Eomer. He was the older brother of Faramir.'
                },
                {
                    name: 'Elrond',
                    image: './images/characters/elrond.jpg',
                    bio: 'Elrond (Sindarin: "Star-dome") Half-elf, Lord of Rivendell, was a mighty Elf-ruler of old who dwelt in Middle-earth from the First Age to the beginning of the Fourth Age. He was the father of Elladan and Elrohir and Arwen Undomiel, the eventual wife of Aragorn II Elessar.'
                },
                {
                    name: 'Eomer',
                    image: './images/characters/eomer.jpg',
                    bio: 'Éomer Éadig was a Man of Rohan and the eventual eighteenth King of Rohan, and first of the Third Line of their Kings. In the last decade of the Third Age, Éomer was the Third Marshal of the Mark.'
                },
                {
                    name: 'Eowyn',
                    image: './images/characters/eowyn.jpg',
                    bio: 'Faramir was the second son of Denethor II and younger brother of Boromir. He was Captain of the Rangers of Ithilien and Captain of the White Tower upon his brothers death. After the War of the Ring, Faramir became the first Prince of Ithilien and married Eowyn of Rohan.'
                },
                {
                    name: 'Faramir',
                    image: './images/characters/faramir.jpg',
                    bio: 'Éowyn was a shieldmaiden of Rohan, daughter of Éomund and Théodwyn, younger sister of Éomer and niece of King Théoden. After the War of the Ring, she married Faramir and had one son with him, Elboron.'
                },
                {
                    name: 'Frodo',
                    image: './images/characters/frodo.jpg',
                    bio: 'Frodo Baggins, son of Drogo Baggins, was a hobbit of the Shire in the late Third Age. He is commonly considered Tolkiens most renowned character for his leading role in the Quest of the Ring, in which he bore the One Ring to Mount Doom, where it was destroyed. He was a Ring-bearer, best friend to his gardener, Samwise Gamgee, and was one of three hobbits who sailed from Middle-earth to the Uttermost West at the end of the Third Age.'
                },
                {
                    name: 'Galadriel',
                    image: './images/characters/galadriel.jpg',
                    bio: 'Galadriel was the "Lady" of the woods of Lothlórien, which she ruled with Celeborn, her husband. One of the greatest Elves in Middle-earth, she surpassed nearly all others in beauty, knowledge, and power. She bore Nenya, one of the three Elven rings of power. J.R.R. Tolkien deemed her as one of the mightiest and fairest of all Elves remaining in Middle-earth in the Third Age. She was the only daughter and youngest child of Finarfin, prince of the Ñoldor, and Eärwen, whose cousin was Lúthien. Her elder brothers were Finrod Felagund, Orodreth, Angrod, and Aegnor.[4] Galadriel was a niece of Fëanor, the most important Elf of the early First Age.'
                },
                {
                    name: 'Gandalf',
                    image: './images/characters/gandalf.jpg',
                    bio: 'Gandalf, known temporarily as the Grey and later the White, and originally named Olorin (Quenya), was an Istar (Wizard), dispatched to Middle-earth in the Third Age to combat the threat of Sauron. He joined Thorin II Oakenshield and his company to reclaim the Lonely Mountain from Smaug, helped form the Fellowship of the Ring to destroy the One Ring, and led the Free Peoples in the final campaign of the War of the Ring.'
                },
                {
                    name: 'Gimli',
                    image: './images/characters/gimli.jpg',
                    bio: 'Gimli, son of Gloin, was a Dwarf of the House of Durin and a member of the Fellowship of the Ring. Unlike other Dwarves, he readily fought alongside Elves in the War of the Ring against Sauron at the end of the Third Age. After the defeat of Sauron, in the early Fourth Age, he was given the lordship over the Glittering Caves at Helms Deep, which he presided over until he departed from Middle-earth.'
                },
                {
                    name: 'Gollum',
                    image: './images/characters/gollum.jpg',
                    bio: 'Gollum, originally named Sméagol (or Trahald), was at first a Stoor, one of the three early Hobbit-types. The name Gollum was derived from the sound of his gurgling, choking cough. His life extended far beyond his nature, by the effects of possessing the One Ring. Sméagol was about 589 years old when he died, a remarkable age for a creature that was once a Hobbit, but he had been deformed and twisted in body and mind by the corruption of the Ring. His chief desire was to repossess the Ring that had enslaved him, and he pursued it for many years after Bilbo Baggins found it in Gollums cave within the Misty Mountains. Inadvertently, Gollum would play a vital role in the ultimate Quest of the Ring.'
                },
                {
                    name: 'Legolas',
                    image: './images/characters/legolas.jpg',
                    bio: 'Legolas was a Sindar Elf who was part of the Fellowship of the Ring in the Third Age. Son of the Elvenking Thranduil of Mirkwood, Legolas was Mirkwoods prince, a messenger, and a master archer. With his keen eyesight, sensitive hearing, and excellent bowmanship, Legolas was valuable to the Fellowship in their journey across Middle-earth. He was well-known for becoming friends with the Dwarf Gimli, despite their long-held differences.'
                },
                {
                    name: 'Merry',
                    image: './images/characters/merry.jpg',
                    bio: 'Meriadoc "Merry" Brandybuck was a Hobbit of the Shire and one of Frodo Baggins cousins and closest friends. He loved boats and ponies and had a great interest in the maps of Middle-earth. He was also one of the nine companions of the Fellowship of the Ring, and later became the eighth Master of Buckland.'
                },
                {
                    name: 'Morgoth',
                    image: './images/characters/morgoth.jpg',
                    bio: 'Melkor (Quenya: "He who arises in might"), predominantly known as Morgoth (Sindarin: "Black Foe of the World")[1], was the first Dark Lord, and the primordial source of evil in Eä. Originally the most powerful of the Ainur created by Eru Ilúvatar, Melkor rebelled against his creator out of pride and sought to corrupt Arda. After committing many evils across the First Age and preceding eras, such as the theft of the Silmarils and destruction of the Two Lamps and Two Trees of Valinor, Morgoth was defeated by the Host of Valinor in the War of Wrath. As punishment, he was banished from of Arda into the Void, though it was prophesied that he would one day return.'
                },
                {
                    name: 'Pippin',
                    image: './images/characters/pippin.jpg',
                    bio: 'Peregrin Took, more commonly known as Pippin, was a hobbit of the the Shire, and one of Frodo Baggins youngest and closest friends. He was a member of the Fellowship of the Ring and, after the War of the Ring, became thirty-second Thain of the Shire.'
                },
                {
                    name: 'Sam',
                    image: './images/characters/sam.jpg',
                    bio: 'Samwise Gamgee, known as Sam, was a hobbit of the Shire. He was Frodo Baggins gardener and best friend. Sam proved himself to be Frodos closest and most dependable companion, the most loyal of the Fellowship of the Ring, and played a critical role in protecting Frodo and destroying the One Ring.'
                },
                {
                    name: 'Saruman',
                    image: './images/characters/saruman.jpg',
                    bio: 'Saruman, also known as Saruman the White, was first of the Istari (Wizards), the emissaries of the Valar sent to Middle-earth in the Third Age to help in countering the returned Sauron. He was originally the orders chief, and was head of the White Council that for a time opposed the Dark Lord. But, in time, Saruman was overcome by lust for power and swore fealty to Sauron, becoming his puppet. Having betrayed the Free Peoples, the corrupted Wizard hoped to either rule Middle-earth together with his new master, or supplant him to rule all himself. During the War of the Ring, Saruman marshalled an army at Isengard to both conquer Rohan on Saurons behalf and try to seize the One Ring without his knowledge. After Saurons downfall, Saruman journeyed to the Shire, dragging Gríma along, and imposed a terror regime with him as the petty thug-lord. However, the oppressed Hobbits rallied against him and the overthrown wizard was backstabbed by the mistreated Wormtongue. His houseless spirit was denied passage into the West.'
                },
                {
                    name: 'Sauron',
                    image: './images/characters/sauron.jpg',
                    bio: 'The eponymous Lord of the Rings, was the greatest subversive Maia, maker of the One Ring, renowned student of the Vala Aulë, and chief vassal of Morgoth in the First Age. After Morgoths ousting by the Valar, Sauron became the second Dark Lord and sought to conquer Middle-earth, and even Númenor, through guileful trickery, with the Rings of Power or with overwhelming legions. At the end of the Second Age, Sauron caused the downfall of Númenor, and was then defeated in Mordor in the War of the Last Alliance of Elves and Men united under Gil-galad and Elendil. In the final battle, Isildur managed to cut the One Ring from him, dismantling his corporeal form and robbing him of much of his power. After centuries lying dormant, rebuilding strength and stirring awake evil things, Sauron returned to power late in the Third Age, but was vanquished at the destruction of his Ring in Mount Doom, by Frodo Baggins, and he became "maimed for ever, becoming a mere spirit of malice that gnaws itself in the shadows, but cannot again grow or take shape".'
                },
                {
                    name: 'Theoden',
                    image: './images/characters/theoden.jpg',
                    bio: 'Theoden, son of Thengel and Morwen Steelsheen, was the seventeenth King of Rohan, last of the Second Line of the royal House of Eorl.He was the uncle of Éomer and Éowyn and the father of Théodred. During the war, he was brainwashed by Saruman the White and under the control, he unintentionally allowed orcs to roam the plains of Rohan and kill and destroy in their path. Saruman appointed Grima Wormtongue, Théodens trusted servant to speak for Théoden. He was saved by Gandalf and offered his allegiance with the Fellowship in the war. He lost his son Théodred in battle and banished Eomer. Determined to save his people from Saruman, he retreats to Helms Deep where one of the major battles of the war would occur. After the victory at Helms Deep and the death of Saruman, Théoden reluctantly rode to Minas Tirith to aid Gondor in the Battle of Pelennor Fields against Mordor. He was attacked on the battlefield by the Witch-king of Angmar and almost slain but was rescued by Eowyn who slew the Ringwraith. He thanked his niece and died from his wounds.'
                },
            ],
            isPictureVisible: false,
        };
    },
    methods: {
        getCharacterImage(characterName) {
            const character = this.characters.find((char) => char.name === characterName);
            if (character) {
                return character.image;
            }
            return '';
        },
        getCharacterBio(characterName) {
            const character = this.characters.find((char) => char.name === characterName);
            if (character) {
                return character.bio;
            }
            return '';
        },
        togglePicture() {
            this.isPictureVisible = !this.isPictureVisible;
        },
        selectRandomCharacter() {
            const randomIndex = Math.floor(Math.random() * this.characters.length);
            this.selectedCharacter = this.characters[randomIndex].name;
        },
    },
};
  </script>  