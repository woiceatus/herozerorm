# Heroes Lore: Zero — Story & Endings

Extracted from decompiled J2ME dialogue scripts (`*.m` map/script data) in the English build (HarpreeT / EA Mobile).

## Premise

**Lucian** grows up in **Silverleaf Village** after his parents — **Ian** (Frostwave Swordsman) and **Lea** (Red/Crimson Mage) — left for the civil war and never returned. He is raised by **Clare** (his adoptive mother / mentor) and is close to orphanage girl **Alpez** (green hair).

A mission for Clare (retrieve a package from **Ben** in **Melon Village**) pulls Lucian into the wider conflict. He meets **Arteli Calmon**, an Elemental nicknamed the **Hymn of Destruction**, who is being hunted by the cult **Legolas**.

When Alpez is kidnapped by Legolas, Lucian and Calmon form a pact: she becomes his sword and shield; he becomes the master she needs to use her power. Their journey south (Melon → Humming City → ruins / Aquila’s Nest) is about stopping Legolas from resurrecting an ancient god — and about learning that this world has already been remade many times.

## Core myth (spoilers)

- A chained **Giant God** wants freedom from the other gods.
- Humans are too weak to kill the **Protector** (warden of the seal), so the Giant God has the world **recreated / reincarnated** over and over until someone succeeds.
- **Elementals** were created as weapons to help kill Protectors.
- **Aquila** is the Protector assigned to the southern ruins — not simply a cult boss. Legolas followers are tools to train Lucian and lure him to Aquila.
- **Alpez** is tied to a divine **box** (Pandora-like): opening it can kill the Giant God, but may also erase her.
- The mysterious **Maskman** helps Lucian at key points, aiming to create a chance to strike the Giant God’s heart. Players who finish deeper routes are surprised by who is under the mask (dialogue strongly ties him to Lucian’s family / Ian’s circle).

Major supporting cast: **Anthony** & **Alicia** (Legolas agents), **Arkley / Kratos / Timoros** (Aquila’s master mages), **Juliko**, and others.

Difficulty layers after clearing: **Expert Mode** → **Hell Mode** (New Game+ style; endings and dialogue change with choices such as meeting **Clare** vs **Alpez** before leaving the village).

---

## Endings

### 1) Joke / “early Aquila” ending (`m/72.m`)

If you somehow defeat **Aquila at the western cave** on the first meeting (players report this with strong classes like Gunblader/Assassin on a new file):

- The cast breaks the fourth wall: Aquila panics, Anthony (26, unemployed, single) hijacks an “emergency command menu.”
- Choices include **load a previous save** or **End the story**.
- Fake epilogue: Legolas collapses, Lucian marries Alpez, Calmon wanders off… then Calmon interrupts (“the marriage is invalid”) and the real plot resumes / NG.

Pure gag ending.

### 2) First ending — Normal clear (`m2/d8.m`)

After defeating the Giant God with help from Alpez’s power:

- The world “returns to normal” (no Protector / monster / Elemental conspiracy).
- Alpez believes she has no place in that world because of her sin; Lucian forgives her and asks her to come back.
- She only has power left to send **Lucian** back. **Calmon** refuses to vanish with Alpez, forces Alpez to stay with Lucian as “punishment,” then chooses to disappear herself (“things that shouldn’t have existed should disappear”).
- Lucian is offered a chance to pick another reborn world (e.g. parents alive, no war). He refuses a world without Calmon and returns to **their** world with her.
- Meta beat: Calmon congratulates you on the **first ending**, notes **multiple endings**, and says the **second playthrough** ending depends on your choices. Alpez jokes she “wasn’t featured much in the first ending.”

### 3) Choice-driven endings (Expert / Hell / 2nd playthrough)

Game text and player reports agree: after the first clear, endings branch on story choices (notably **Meet Clare** vs **Meet Alpez** before leaving Silverleaf, and related Clare/Alpez dialogue in Expert/Hell).

Documented player outcomes:

| Ending flavor | What happens |
|---|---|
| **Green-hair dies** | Alpez does not survive the finale (sacrifice / box cost). |
| **Both live** | Lucian, Calmon, and Alpez survive the aftermath. |
| **Deeper / “true” path** | Maskman’s identity is revealed; fuller Giant God / reincarnation lore. |

Finale scripts in `m2/d7.m` / `m2/b4.m` / `m2/c0.m` cover the serious climax:

- Defeat Aquila → force the Giant God out → Alpez opens the box → Maskman creates an opening → final fight.
- A mid-finale branch has Calmon spending her remaining power to **teleport only Lucian out** of Aquila’s self-destruct blast (“Wait for me”), which lines up with the “someone dies / someone is left behind” ending variants players describe.

Exact flag logic is in obfuscated bytecode; the strings above are the narrative outcomes encoded in the scripts.

---

## Short plot walkthrough (no ending spoilers)

1. Silverleaf orphanage life; Clare’s errand to Melon.
2. Meet Calmon; Alpez kidnapped; pact; western cave / Legolas.
3. Leave village (optional: speak to Clare and/or Alpez).
4. Travel south through Melon, jungle, Humming City, swamp / ruins.
5. Learn Elemental / Protector / Giant God lore; confront Aquila and the mages.
6. Final temple / nest; Aquila → Giant God; box / Maskman climax.
7. Clear unlocks Expert → Hell; replay for other endings and jobs (Gunblader / Elementalist unlocks).

---

## Jobs (for context)

Warrior, Assassin, Knight, Gunslinger; unlock **Gunblader** (Humming City arena / Leonille) and **Elementalist** (post-clear / pact-related routes).
