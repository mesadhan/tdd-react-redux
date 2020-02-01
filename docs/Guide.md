## 🔰 What is React?

React is a UI library built by Facebook. React gives us the ability to logically think about our frontend sites and apps.

## 🔰 What is Redux?


## 🔰 What is TDD?


## 🔰 React Benefits are:

- Strong community.
- Can be made quickly.
- Are easy to understand.
- Clean & reuse programming
- Allow us to logically see the flow of data.
- Scale well with small and large teams.
- Transfer knowledge from desktop to mobile apps.

## 🔰 Recommended Knowledge (Prerequisites)

- Knowledge of HTML & CSS.
- Knowledge of JavaScript and ES6.
- Some knowledge about the DOM.
- Some knowledge about Node & npm.
- Knowledge of basic Command line.

## 🔰 Knowledge of JavaScript and ES6

We need basic knowledge about ES6. Primarily 5 main syntax updates need to know, that are used heavily in React.

📗 1.let and const in addition to var:- Use `const` or `let` instead of `var`

```js
var message = 'Hello! world';       // ES5 Expression
let message = 'Hello! world';       // ES6 Expression
const message = 'Hello! world';     // ES6 - const like constant or final
```

📗 2.Arrow Functions (=>):- is compact alternative to a regular function expression

```js
// ES5 Expression
function getGreetings() {
  return 'Hello! From JavaScript.';
};

// ES5 Expression
function addNumbers(a, b) {
  return a + b;
}

// ES6 Expression
const getGreetings = () => {
  return 'Hello! From JavaScript.';
};

// ES6 Expression
const addNumbers = (a, b) => a + b;

// Or, ES6 Expression
const addNumbers = (a, b) => {
    return a + b;
};
```

📗 3.Classes:-

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

```js
class App extends React.Component {
  render() {
    const text = "Hello! World";
    return (
      <div>Message is: {text}</div>
    );
  }
}
```

📗 4.Destructuring:-

Object destructuring and array destructuring are very easy ways to simplify our JavaScript code.

>  Object Destructing

```js
// create an object
const product = {
    name: 'Item 1',
    price: 200
};

// we can access object
let name = product.name;
let price = product.price;

// we can destructuring that object like below
let { name, price } = product;

// Module Import Issue,
import ReactDOM from 'react-dom';           // no destructuring
import { render } from 'react-dom';         // with destructuring
```

> Array Destructuring

```js
// create an array
const product = ['item 1', 'item 2'];

// access without destructuring
let product1 = product[0];
let product2 = product[1];

// access with destructuring
let [p1, p2] = product;
```

📗 5.Spread:-

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.


```js
// Object spread
const defaults =  {name: 'Product 1', price: 200};
const options = {
  ...defaults,
  visible: true
};
// Output: Object { name: "Product 1", price: 200, visible: true }

//Array spread
const roles = ['admin', 'officer', 'executive'];
const fullRoles = [
  ...roles,
  'super-admin'
]
//Output: Array ["admin", "officer", "executive", "super-admin"]
```


## 🔰  Create React App

- 1.[Download & Install NodeJS](https://nodejs.org/en/download/)
- 2.[Download & Install VSCode](https://code.visualstudio.com/download)
- 3.Prerequisites Configurations

> We need to install `yarn` package manager alternate of `npm` so we can download packages Ultra Fast.
Based on operating system, [Install it form here.](https://legacy.yarnpkg.com/en/docs/install)

- 4.Check environments is ready or not.

```bash
node --version
v10.15.3

npm --version
6.4.1

yarn --version
1.21.1
```

`Note: Versions might be different, from me. Now we good to go forward`

- 4.Open terminal or command line and follow below commands,

```bash
# create new react app using command
npx create-react-app tdd-react-redux

# change directory or open directory using terminal command
cd tdd-react-redux

# run project
npm start
```

- 5.Open project folder using VSCode, React offers us

```bash
tdd-react-redux
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
├── README.md
├── node_modules
├── package.json
├── .gitignore
```

- 6.Now install library, by opening terminal or command line

```bash
yarn add react-router-dom
yarn add node-sass
yarn add prop-types
yarn add -D enzyme enzyme-adapter-react-16 jest jest-enzyme
yarn add redux react-redux redux-thunk
yarn add -D husky
```


## 🔰  Final project structure

```bash
tdd-react-redux
└── src
    ├── actions
        ├── index.js
        ├── types.js
    ├── assets
        ├── logo.png
    ├── components
        ├── core
            ├── button
            ├── headline
            ├── listitem
            ├── Common.js
            ├── IconWithList.js
            ├── PrintJson.js
            ├── style.scss
        ├── layouts
        ├── About.js
        ├── About.test.js
        ├── BlogPost.js
        ├── BlogPost.test.js
        ├── DetailsPage.js
        ├── DetailsPage.test.js
        ├── style.scss
    ├── reducers
        ├── posts
            ├── post.integration.test.js
            ├── reducer.js
        ├── index.js
    ├── App.scss
    ├── App.js
    ├── App.test.js
    ├── index.scss
    ├── index.js
    └── createStore.js
    └── serviceWorker.js
├── utils
    ├── index.js
├── .env
├── .env.development
├── .env.production
├── .env.test
├── README.md
├── node_modules
├── package.json
├── .gitignore
```

[Full Source Code](https://github.com/mesadhan/tdd-react-redux)


## 🔰 Let's come into the coding part

📗 Config Environment

> 1.Create `utils/index.js` file for test helper

```js
import PropTypes, {checkPropTypes} from 'prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../src/reducers';
import { middlewares } from './../src/createStore';

export const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
};

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
};


export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};
```

> 3.Create `src/createStore.js`, to support redux and enable store,

```js
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

export const middlewares = [ReduxThunk];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export const store = createStoreWithMiddleware(RootReducer);
```

> 4.Update `setupTests.js` file, for enzyme support,

```js
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});
```

> 5.To Enable Redux Provider open `src/index.js` file and update it,

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './createStore';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
``` 


#### 📗 6.Now, Config Reducers

> Create redux `src/reducers/posts/reducer.js`

```js
import { types } from './../../actions/types';

const postReducer = (state=[], action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return action.payload;
    
        case types.GET_FORTNITE_POSTS:
            return action.payload;
        default:
            return state;
    }
};
export default postReducer;
```

> Create `src/reducers/posts/reducer.spec.js` test file

```js
import { types } from './../../actions/types';
import postReducer from './reducer'

describe('Posts Reducer', () => {
    it('Should return default state', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', ()=> {
        const posts = [
            { title: 'title 1',description: 'description 1' },
            { title: 'title 2',description: 'description 2' }
        ];
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
});
```

> Finally, create your `src/reducers/index.js` and include

```js
import { combineReducers } from 'redux';
import posts from './posts/reducer';

export default combineReducers({
    posts
});
```

#### 📗 6.Now Create Redux Actions

> Create `src/actions/types.js` and include

```js
export const types = {
    GET_POSTS: 'getPosts',
    GET_FORTNITE_POSTS: 'getFortnite'
};
```

> Create `src/actions/index.js` and includes

```js
import { types } from './types';

export const fetchPosts = () => async (dispatch) => {
    try {
        const url = "https://jsonplaceholder.typicode.com";
        const posts = await fetch(`${url}/posts?_limit=10`);
        const res = await posts.json();
        dispatch({
            type: types.GET_POSTS,
            payload: res
        });
    } catch (error) {
        console.error("An error occurred");
        console.error(error);
    }
};

export const fetchFortnitePosts = () => async (dispatch) => {
    try{
        const url = "https://fortnite-api.theapinetwork.com/store/get";
        const result = await fetch(url);
        const res = await result.json();
        dispatch({
            type: types.GET_FORTNITE_POSTS,
            payload: res
        });
    }catch(error) {
        console.error(error);
    }
};
```

> Finally, create `src/reducers/posts/post.integration.spec.js` and include

```js
import { testStore } from './../../../utils';
import { fetchPosts, fetchFortnitePosts } from './../../actions';

describe('fetch api action', () => {

    let store;
    beforeEach(() => {
        store = testStore();
    });

    it('Store is updated correctly', () => {

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();

                //console.log('response', newState.posts[0]);
                //expect(newState.posts[0].title).not(undefined);
                expect(newState.posts[0]).toHaveProperty('title');
                expect(newState.posts[0]).toHaveProperty('body');

            });
    });
    
    it('Store is update with Fortnite api data correctly', () => {
        const store = testStore();
        return store.dispatch(fetchFortnitePosts())
        .then(() => {
            const newState = store.getState();
            //console.log('output', newState.posts.data);
            
            expect(newState.posts.data[0]).toHaveProperty('itemId');
            expect(newState.posts.data[0].item).toHaveProperty('name');
            expect(newState.posts.data[0].item.images).toHaveProperty('icon');
            
        });
    });
});

```


## 🔰 7.Setup React Component & Test Cases


#### 📗 1. Nav Component,
 
 
> create `src/components/layouts/nav/index.spec.js`

```js
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../../utils'
import Nav from './index';

const setUp =(props = {}) => {
    return shallow(<Nav/>);
};

describe('Index Component', () => {

    let component;
    beforeEach(()=> {
        component = setUp();
    });

    it('Should render without error', () => {
        const wrapper = findByTestAttr(component, 'navComponent');
        expect(wrapper.length).toBe(1)
    });
});

```

> create `src/components/layouts/nav/index.js`

```js
import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <div data-test="navComponent" className="navComponent">
            <div className="leftMenus">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="rightMenus">
                <img data-test="userLogo" src="https://mesadhan.github.io/assets/profile_pic.jpg" alt="logo"/>
            </div>
        </div>
    )
};

export default Nav;
```

#### 📗 2. IconListItem Component


> Create `src/components/core/IconWithList.spec.js`, and include

```js
import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../../utils'
import IconWithList from './IconWithList';

describe('IconWithList Component', () => {

    describe('Checking PropTpes', () => {

        it('Should not throwing warning', () => {
            const expectedProps = {
                name: 'item 1',
                icon: 'icon',
                ratings: {}
            };
            const propsError = checkProps(IconWithList, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Should Renders', () => {
        let component;
        beforeEach(() => {
            const props = {
                name: 'item 1',
                icon: 'icon',
                ratings: {
                    avgStars: 1,
                    totalPoints: 1,
                    numberVotes: 1
                },
            };
            component = shallow(<IconWithList {...props} />);
        });

        it('Should render a ItemList', () => {
            let itemList = findByTestAttr(component, 'IconWithListComponent');
            expect(itemList.length).toBe(1);
        });

        it('Should render a name', () => {
            let title = findByTestAttr(component, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a Icon', () => {
            let title = findByTestAttr(component, 'componentIcon');
            expect(title.length).toBe(1);
        });

        it('Should render a Stars', () => {
            let title = findByTestAttr(component, 'componentStars');
            expect(title.length).toBe(1);
        });

        it('Should render a Points', () => {
            let title = findByTestAttr(component, 'componentPoints');
            expect(title.length).toBe(1);
        });

        it('Should render a Votes', () => {
            let title = findByTestAttr(component, 'componentVotes');
            expect(title.length).toBe(1);
        });
    });

    describe('Should Not Renders', () => {
        let component;
        beforeEach(() => {
            component = shallow(<IconWithList/>);
        });

        it('Component is not render', () => {
            let listItem = findByTestAttr(component, 'IconWithListComponent');
            expect(listItem.length).toBe(0);
        });
    });
});
```

> Create `src/components/core/IconWithList.js`, and include

```js
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './style.scss'

class IconWithList extends Component {

    render() {
        const {icon, name, ratings} = this.props;

        if (!name) return null;

        return (
            <div data-test="IconWithListComponent" className="IconWithList">
                <img data-test="componentIcon" className="itemIcon" src={icon} alt="Icon"/>
                <div className="itemBoxChildren">
                    <h3 className="itemTitle" data-test="componentTitle"> {name}</h3>
                    <p data-test="componentStars" >Avg. Stars:- {ratings.avgStars}</p>
                    <p data-test="componentPoints" >Total Points:- {ratings.totalPoints}</p>
                    <p data-test="componentVotes" >Votes:- {ratings.numberVotes}</p>
                </div>
            </div>
        )
    }
};

IconWithList.propTypes = {
    name: PropTypes.string
};
export default IconWithList;
```

#### 📗 3. App Component

> Create `src/components/About.test.js`, and include

```js
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils'
import About from './About';

const setUp =(props = {}) => {
    return shallow(<About/>);
};

describe('About Component', () => {

    let component;
    beforeEach(()=> {
        component = setUp();
    });

    it('Should render without error', () => {
        const wrapper = findByTestAttr(component, 'aboutComponent');
        expect(wrapper.length).toBe(1)
    });
});
```


> Create `src/components/About.js`, and include

```js
import React, { Component } from 'react';

class About extends Component {
    render() {
        document.title = "About";
        return (
            <div data-test="aboutComponent">
                <h1>Hello From About Page</h1>
            </div>
        );
    }
}
export default About;
```

#### 📗 3. App Component

> Create `src/components/DetailsPage.test.js`, and include

```js

```

> Create `src/components/DetailsPage.js`, and include

```js

```

#### 📗 3. App Component

> Create `src/App.test.js`, and include

```js
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../utils'
import App from './App';

const setUp = (props = {}) => {
    return shallow(<App />);
};

describe('App Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without error', () => {
        const wrapper = findByTestAttr(component, 'appComponent');
        expect(wrapper.length).toBe(1)
    });
});
```

> Create `src/App.js`, and include

```js
import React, { Component } from 'react';
import Nav from './components/layouts/nav';
import Home from './components/Home';
import About from './components/About';
import './app.scss'

import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

import BlogPost from "./components/BlogPost";
import DetailsPage from "./components/DetailsPage";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div data-test="appComponent" className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/item/:id" exact component={DetailsPage} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
```

#### 📗 2. Home Component Setup


> Create `src/components/Home.test.js`

```js

```

> Create `src/components/Home.js`

```js

```



##  🔰  References

- https://linuxjourney.com/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
