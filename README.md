# After After Effects: Coding Animations


[Link to slides](https://docs.google.com/presentation/d/1zWHdEhEzFgYVlVtwaTGzFS0I4BO92OhDIrdmys0TN2o/edit?usp=sharing)

## PREPARING FOR SCRIPTING

I assume you have Adobe After Effects and Adobe Media Encoder installed. If not, intall them.

If you are on Windows you can alternatively install Adobe ExtendScript, that makes your life easier. However, it was discontinued by Adobe so in the future you will still need to follow the next steps.

https://www.codeandmotion.com/blog/visual-studio-code-adobe-extendscript

### Step 1: Download and install Visual Studio Code

VS Code is a code editor. We need it because it has some plugins that can really help us.
Download it from here: https://code.visualstudio.com/

Once downloaded create a Workspace

### Step 2: Add Type Definitions

This will help us coding by adding Intelligense.

Get the type definitions here: https://github.com/pravdomil/Types-for-Adobe
Download the whole zip. 
In the scripting workspace create a folder called types.
Copy and paste the file in AfterEffects/{version}/index.d.ts to the folder we just created

Add the types that you need depending on which software you’re scripting for. Rename the main file to index.d.ts.

### Step 3: Create a file jsconfig.json in the workspace main folder

```
{
    "compilerOptions": {
      "module": "none",
      "target": "ES3",
      "noLib": true,
      "checkJs": false
    }
}
```

### Step 4: Install VS Code Plugin Adobe Script Runner

This plugin helps us directly run code from VS Code in After Effects.
Once installed type `command + shift + P` to test it

## RESOURCES

- [Youtube channel for expressions](https://www.youtube.com/watch?v=SFgWa5G0VAE&list=PLvr5U5ZSt6IzHyvSL9fo0M9NRPsTvra31)
- [Youtube channel for scripting](https://www.youtube.com/c/NTProductions)
- [Tutorials and stuff](http://www.motionscript.com/)
- [Expression Library](https://reelsmart.co/expression-library/)
- https://aenhancers.com/
- https://video.stackexchange.com/questions/tagged/after-effects
- https://video.stackexchange.com/questions/tagged/after-effects-expressions
