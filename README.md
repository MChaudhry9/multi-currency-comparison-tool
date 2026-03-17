<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Global Currency Comparison Tool</h3>

  <p align="center">
    This is a Python-based web application that serves as a tool to compare a product's price across multiple international currencies using real-time exchange rate data through an external API
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-app">Running the App</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

When people shop or travel internationally, they often see product prices listed in different currencies and can quickly become overwhelmed by determining which price is most suitable for them and their budget, due to not knowing exchange rates. Without accurate currency conversion, consumers may not know whether a product is more affordable in one country than another.

This project aims to develop a Python-based web application that serves as a tool to compare a product's price across multiple international currencies using real-time exchange rate data through an external API. By automating the process of converting prices and displaying read-to-view comparisons, this app will help users make informed purchasing decisions without the hassle.

This project is useful because exchange rates change frequently, and manually calculating conversions for multiple currencies can be time-consuming and inaccurate. Automating this tedious process provides end users with efficiency and accuracy.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Features -->
## Features

- [ ] Enter product price with selected base currency
- [ ] Fetch real-time exchange rates via API
- [ ] Convert price into multiple currencies (USD, EUR, GBP, JPY, etc.)
- [ ] Display results in a clear comparison table
- [ ] Identify the lowest (best value) currency automatically
- [ ] Fast and responsive UI with React + Vite
    - [ ] Styled with Tailwind CSS and icons from Lucide


<p align="right">(<a href="#readme-top">back to top</a>)</p>




### Built With

* [![Python][Python.org]][Python-url]
* [![Flask][Flask.palletsprojects]][Flask-url]
* [![Requests][Requests.readthedocs]][Requests-url]
* [![ExchangeRate API][ExchangeRateAPI]][ExchangeRateAPI-url]
* [![React][React.js]][React-url]
* [![Vite][Vite.dev]][Vite-url]
* [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
* [![Lucide][Lucide.dev]][Lucide-url]

<!-- Badge Image + Link Definitions -->
[Python.org]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/

[Flask.palletsprojects]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/

[Requests.readthedocs]: https://img.shields.io/badge/Requests-2A6DB0?style=for-the-badge&logo=python&logoColor=white
[Requests-url]: https://requests.readthedocs.io/

[ExchangeRateAPI]: https://img.shields.io/badge/ExchangeRate_API-1A73E8?style=for-the-badge&logo=googlecloud&logoColor=white
[ExchangeRateAPI-url]: https://www.exchangerate-api.com/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/

[Vite.dev]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/

[TailwindCSS.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/

[Lucide.dev]: https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white
[Lucide-url]: https://lucide.dev/


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps below.

### Prerequisites

Make sure you have the following software installed:

* npm
  ```sh
  npm install npm@latest -g
  ```
* Python (3.x)
* pip (Python package manager)

### Installation

1. Get a free API key for real-time exchange rate data: [https://www.exchangerate-api.com/](www.exchangerate-api.com)
2. Clone the repo
   ```sh
   git clone https://github.com/MChaudhry9/multi-currency-comparison-tool.git
   ```
3. Install frontend dependencies
   ```sh
   npm install
   ```
4.  Install backend dependencies  
   ```sh
   pip install Flask requests python-dotenv flask-cors
   ```
5. Add your API key to a `.env` file
   ```env
   API_KEY = 'ENTER YOUR API';
   ```
6. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

### Running the App

1. Start the backend (Flask)
   ```sh
   python app.py
   ```
2. Start the frontend (React + Vite) 
    ```sh
    cd frontend
    npm run dev 
    ```
3. Open your browser and visit:
   `http://localhost:5173`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

Mamuna Chaudhry - [https://www.linkedin.com/in/mamuna-chaudhry/](https://www.linkedin.com/in/mamuna-chaudhry/) - mamunachaudhry9@gmail.com

Project Link: [https://github.com/MChaudhry9/multi-currency-comparison-tool](github.com/MChaudhry9/multi-currency-comparison-tool)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


