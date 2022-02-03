
<p align="center"><img align="center" src="https://github.com/jonah07/codeinputs/blob/a2972e03802df47872b2d45dfe2d4ed46b790408/media/codeinputs%20header.svg"></p>

# CodeInputs [![CodeFactor](https://www.codefactor.io/repository/github/jonah07/codeinputs/badge/main)](https://www.codefactor.io/repository/github/jonah07/codeinputs/overview/main)
With CodeInputs, you can create nice-looking code inputs with ease. CodeInputs are perfect for email/phone confirmation codes and can enhance your UI and UX. ⌨️

1. 👋 [Getting started](#getting-started)
2. ⚙️ [Customization](#customization)
3. 🎨 [Themes](#themes)

**Feel free to contribute to this repository! 🪴**

🐛 **Please create an issue if you found a bug:** [Create new issue](https://github.com/jonah07/codeinputs/issues/new)

## Getting started

To get started, paste this snippet in your HTML:

```html
<script defer src="https://cdn.jsdelivr.net/gh/jonah07/codeinputs@master/minified/client.js"></script>
```

Now let's create a code input. Create a div like this whereever you want to place your code input:

```html
<div id="codeinputs"></div>
```

As soon as you create the div, a code input will automatically appear. Now let's talk about [Customization](#customization) and [Themes](#themes).

## Customization

To customize the behavior of your code input, use the ``codeinputs`` function in a ``<script>`` tag.
```html
<script>
codeinputs({
 /* Your configuration */
}); 
</script>
```
### Configuration options

General:

| Name       | Description                                                 | Value Type                    | Example                                                                             | Default value  |
|------------|-------------------------------------------------------------|-------------------------------|-------------------------------------------------------------------------------------|----------------|
| element    | The id of your CodeInputs div                               | Element ID (without #)        | ``element: "my-codeinput-div"``                                                     | ``codeinputs`` |
| callback   | A function that is called once the user completed the input | Function with 'code' argument | ``` callback: (code) => {   console.log("The user entered the code " + code); } ``` | -              |
| inputClass | A CSS class that is applied to all digit input fields       | Element Class (without .)     | ``inputClass: "my-class"``                                                          | -              |
| length     | The length of the code (number of digit input fields)       | Number                        | ``length: 4``                                                                       | 6              |

Styling:
| Name       | Description                         |
|------------|-------------------------------------|
| width      | The width of each digit input field |
| fontSize   | The font size of the digits         |
| fontFamily | The font family of the digits       |

#### Example
```html
<script>
        codeinputs({
            element: "codeinputs",
            callback: (code) => {
               document.getElementById("success").innerHTML = "Thanks for entering a code! You entered: " + code;
            },
            inputClass: "codeinputs-custom-input",
            styles: {
                fontSize: "3em" 
            }
        });
</script>
```

## Themes

The default theme can be included using this link tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jonah07/codeinputs@master/minified/default.css">
```

It's really basic and only sets the border and font color. Currently, there are no other themes. But if you want to, you can create your own theme and upload it to this repository (would be awesome!).

### Creating your own theme
Creating your own theme is very simple. Create a CSS file and set properties for the ``.codeinputs-input`` class. Then, you can upload it to this repository (src/themes directory) by forking it and creating a pull request afterwards. After it has been merged, your theme is accessible using a link tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jonah07/codeinputs@master/minified/YOUR THEME NAME.css">
```
