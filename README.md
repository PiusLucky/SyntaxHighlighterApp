# SyntaxHighlighterApp
Snippet Highlighter is a web application that converts raw source codes into fancy HTML that can be used directly in your blog or anywhere you intend to drop a quick code snippet. The generated code is relatively responsive and scalable.

<p align="center">
  <img alt="SHA Logo" src="https://raw.githubusercontent.com/PiusLucky/SyntaxHighlighterApp/master/staticfiles/img/logo.svg" width="100" />
</p>
<h1 align="center">
  Turn that code snippet into a beauty!
</h1>
<p align="center">
 Syntax highlighter made specifically for <a href="https://snippet2html.herokuapp.com/">Developers</a>.
</p>
<p align="center">
    <a href="https://github.com/pygments/pygments/workflows/Pygments/badge.svg">
       <img alt="Version" src="https://github.com/pygments/pygments/workflows/Pygments/badge.svg" />
    </a>
    <a href="https://img.shields.io/website-up-down-green-red/http/shields.io.svg">
       <img alt="Version" src="https://img.shields.io/website-up-down-green-red/http/shields.io.svg" />
    </a>
    <a href="https://img.shields.io/badge/python-3.7.2-blue.svg">
       <img alt="Version" src="https://img.shields.io/badge/python-3.7.2-blue.svg" />
    </a>
     <a href="https://img.shields.io/pypi/l/ansicolortags.svg">
       <img alt="Version" src="https://img.shields.io/pypi/l/ansicolortags.svg" />
    </a>
     
 
</p>


## :pushpin: The Dashboard

![demo](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/static/screenshots/page1.PNG?raw=true)

>The dashboard displays the input field, stacks, styles and advance options. Each of these categories are extremely useful in outputting a more human-driven 
code snippet. 


## :pushpin: Stack [Languages]

![demo](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/static/screenshots/page1b.PNG?raw=true)

>The stack section within the dashboard allows you to choose any programming language of choice, this allows for flexibility over automation. We feature 500+ programming languages as provided by the <b>Pygment</b> library. Some of the top languages include <code>Python</code>, <code>Javascript</code>, <code>C</code>, <code>C#</code>, <code>Java</code>, <code>Ruby</code>, <code>Kotlin</code>, <code>Go</code>, <code>Swift</code>, <code>PHP</code> and so on...



### 🎨 Styles [Themes]

![demo](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/static/screenshots/page1c.PNG?raw=true)

>We support 50+ themes including most popular theme like monokai (a default theme for the Sublime text editor). Others include <code>Vim</code>, <code>Vs</code>, <code>Emacs</code> e.t.c.


### 🎨 Advance Options

![demo](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/static/screenshots/page1d.PNG?raw=true)

The Dashboard houses the <code>advance options</code> tab and it contains series of options like:


| Options                | Functionality                                                               |
| ---------------------  | --------------------------------------------------------------------------  |
| Generator Initial Text | The initialization text for the generated HTML, <em>Default(Yes)</em>       | 
| Line Number            | Insert line number in the generated snippet, <em>Default(No)</em>           |
| Line Number Color(sub) | Line number color, trigerred when LN is toggled on, <em>Default(Dark)</em>  |
| Border Color           | Color of the border with <em>Default(`#5c4d5c`)</em>                        |



## :pushpin: Border Controls

![demo](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/static/screenshots/page1d.PNG?raw=true)

>Here, you can customize the border-width which include manipulating the <code>border-top-width</code>, <code>border-right-width</code>, <code>border-bottom-width</code> and <code>border-left-width</code>.


## :pushpin: Border Radius

![demo](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/static/screenshots/page1e.PNG?raw=true)

>Here, you can customize the radius of the border, takes in value between 0 and 1 (in 'rem').


## :pushpin: Padding Controls

![demo](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/static/screenshots/page1f.PNG?raw=true)

>Here, you can customize the padding which include manipulating the <code>padding-top-width</code>, <code>padding-right-width</code>, <code>padding-bottom-width</code> and <code>padding-left-width</code>.



## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Pink           | ![#ff00cc](https://via.placeholder.com/10/ff00cc?text=+) `#ff00cc` |
| Blue           | ![#24273F](https://via.placeholder.com/10/24273F?text=+) `#24273F` |
| Gunmetal       | ![#022B3A](https://via.placeholder.com/10/022B3A?text=+) `#022B3A` |
| Cyan           | ![#00ffff](https://via.placeholder.com/10/00ffff?text=+) `#00ffff` |





## 🎨 Final Output [Snippet]

![demo](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/static/screenshots/page1i.PNG?raw=true)

>This shows the HTML code of your snippet, ready to be pasted into your email, blog or anywhere possible.

![demo](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/static/screenshots/page1j.PNG?raw=true)

>This shows a quick preview of the generated snippet. Comes in handy all the time.


## :pushpin: Requirements

The web app is run on Python 3.7.2, Django 3.0.8 and Pygments 2.6.1. It has been tested live on Windows.



## 🛠 Installation & Set Up

A0. Download or clone the repository

A1. Navigate to the root directory [directory that contains <code>manage.py</code>]

A2. Create a virtual environment using your terminal, activate and return to the root folder.

   ```sh
   virtualenv MyVirtualEnviroment && cd MyVirtualEnviroment/Scripts && activate && cd ../..
   ```
1. Install packages in requirements.txt
   
   ```sh
   pip install -r requirements.txt
   ```

2. Navigate to the settings.py file and adjust the settings file like so:

   Replace:

   ```python
   "contents in settings.py"
   ```
   
   With:
   
    ```python
   "contents in local-settings.py"
   ```

3. Migrate & Run development server like so:

   ```sh
   python manage.py migrate && python manage.py runserver
   ```

## Author

👤 **Pius Lucky**

- Github: [@PiusLucky](https://github.com/PiusLucky)
- Official: [https://www.joint-access-programmer.com](https://www.joint-access-programmer.com)

## Show your support

Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/jointaccessprogrammer">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2020 [Pius Lucky](https://github.com/PiusLucky).<br />
This project is [MIT](https://github.com/PiusLucky/SyntaxHighlighterApp/blob/master/LICENSE) licensed.

<div align="right">
    <b><a href="#top">↥ Back To Top</a></b>
</div>
