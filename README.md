By Fernando Dávalos

# Digital Hub

Digital Hub is a simple website that is responsive, creates transactions using different approaches using ReactJs

## Installation

1. Clone this repository locally.

2. Install dependencies using 

```bash
npm install
```

3. Start your app using

```bash
npm run start
```

4.Navigate to app in a Google Chrome or Mozilla Firefox (http:localhost:3000)

5. Enjoy!

I used the following technologies: ReactJs, Html, CSS

## Development Approach

I started working at first with the login page. The login page was the best starting point for this application. I started creating the basic architecture, along with the folder structure. 

I was following a very careful approach, one of the most important abilities you need to have as a React Developer is to know what is going to be a component, where the state should live, and what is updated when you modify the state.

For the login page the most challenging task was to create the validation funcionality. I decided to use regular expressions to validate whether or not the value is valid. 

After finishing the Login Page, I thought it was time to implement Redux into the application. Redux is handling all the information regarding the user, the balance information, and the transactions information.

Following the implementation of redux, I created the Router functionality, you cannot access any site of the page if you are not logged in. 

After creating the components of the HomePage, I started working with the transaction data. I decided to store all the data in Redux as an initial state, usually this data would come from an external server, but in this case, this approach is adecuate. 

As for the pie charts, D3 was the library of choice.

The final page was the transfer page, it was the most challenging of the three. For this page I created the 'Create New Transfer' component. This component is capable of creating transactions, these transactions are stored in redux, the application is also capable of adding money into the selected destination account, and decreasing money from the selected origin account.

Axios is what I decided to use as the library that would communicate with the server. I also implement MockAxios to return a simple response of sucess.

If you have any doubts regarding the project, you can contact me at fernando_29_1994@hotmail.com


