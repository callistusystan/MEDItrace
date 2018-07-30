# MEDItrace

:heart:

This project won <strong>FIRST PLACE</strong> for the Unihack Melbourne Hack 2018!

## Inspiration

It is estimated that anywhere between 10% and 15% of all illnesses are misdiagnosed. In addition to this, some problems might not actually be discovered during a checkup if the patient doesn't remember or mention symptoms they've experienced over a long period of time. Formal health records don't help much to remedy these issues, as they don't contain things a patient hasn't told their doctor, and are often hard to access or learn much from at a glance.

## What it does

MEDItrace is an app that allows people to log details of symptoms they've experienced, to help provide their doctors with as much information as possible so that they receive the most informed advice. Each time a symptom is logged, additional metadata is collected, such as the temperature, humidity and the user's heart rate. This extra data can be used by healthcare professionals to provide even more informed advice, as some symptoms could be related to certain external factors.

## How we built it

For the frontend, we built a web app using React. On the backend, we have a few different technologies in use. For storing data and hosting our demo, we used Firebase because of its ease of use. For capturing the user's health data including their heart rate, food intake and water intake, we wrote a backend in Python using Flask to pull the data from the Fitbit API and push it to the Firebase store. We also built a separate Node.js backend to capture information about the user's range of motion in their limbs, which we prototyped capturing from either a Bosch sensor tag or Android device.

To find out more, view our [devpost article](https://devpost.com/software/meditrace)!


## Demo

Feel free to try out our [app hosted on firebase](https://mediocre-unihack.firebaseapp.com/) :fire:


## Development Team
- [David Copley](https://github.com/davidcopley)
- [David Lei](https://github.com/darvid7)
- [Caleb Joseph](https://github.com/calebj0seph)
- [Patrick Shaw](https://github.com/PatrickShaw)
- [Callistus Tan](https://github.com/callistusystan)


## Screenshots

<img src="/screenshots/screenshot1.png" width="50%"><img src="/screenshots/screenshot2.png" width="50%">
<img src="/screenshots/screenshot3.png" width="50%"><img src="/screenshots/screenshot4.png" width="50%">
<img src="/screenshots/screenshot5.png" width="50%"><img src="/screenshots/screenshot6.png" width="50%">
<img src="/screenshots/screenshot7.png" width="50%">


### Usage ###

Requirements:

1. Node.js

Steps:

1. Clone this project and extract it on your computer
2. Open a terminal and change to the project directory
3. Enter the following commands:

	```
		> npm install
		> npm start
	```
