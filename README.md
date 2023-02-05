# feline-good

##Architecture

Feline Good relies on a reactive architecture in order to coordinate the state and flow of the application. The index.js contains our State class, which is a data structure to hold the current values needed by the application, and propagate changes based on those values. The APIcalls.js class contains the UI and DOM logic. It subscribes to changes in the global State object, and hooks the interactive elements of the DOM to their State values.

##Technical Details

Feline Good relies on one external library, namely hammer.mins.js for the multi-touch functionality animations, but no frameworks for the front-end application. As noted in the Architecture section, Feline Good bootstraps its own application flow. We chose a reactive model in order to concisely handle the asynchronous aspect of the buttons and API calls.

##Live Demo 

--> https://lampealex888.github.io/feline-good/
