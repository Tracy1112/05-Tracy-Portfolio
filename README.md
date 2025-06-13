## (1) - Setup: create vite project with tailwind

- create and initiate vite project
- add tailwind
- [Tailwind Docs](https://tailwindcss.com/docs/guides/vite), just compatible V3
- remove App.css file
- delete contents of index.css (add `Preferences: Open Settings (JSON)` {"css.lint.unknownAtRules": "ignore"})
- delete contents of App.jsx
- change title in index.html
- remove StrictMode in main.jsx
- setup first tailwind classes in App.jsx

## (2) - Setup DaisyUI

- [DaisyUI](https://daisyui.com/), V4

## (3) - Install All Libraries (just React-18)

```sh
npm i axios@1.4.0 dayjs@1.11.9 @reduxjs/toolkit@1.9.5 @tanstack/react-query@4.32.6 @tanstack/react-query-devtools@4.32.6 react-icons@4.10.1 react-redux@8.1.2 react-router-dom@6.14.2 react-toastify@9.1.3

```

## (4) - Create All Pages

- create all pages and export from index.js
- import in app.jsx

## (5) - React router

- define router
- the router is passed as a prop to RouterProvider
- render the App component in main.jsx

## (6) - Error Page

- step in error page, import `useRouteError` and `Link`
- render two errors: 1> 404 errors 2>all other errors
- add button to 'Go back to Home'

## (7) - FormInput component

- create components folder with index.js file inside
- export from index.js
- decide on props: label, type, name, defaultValue

## (8) - SubmitBtn component

- dynamically renders based on whether the form is submitting
- use `useNavigation` to track the current navigation state
- when isSubmitting is yes, add loading spinner

## (9) - Register and Login page

- import { Form, Link } from 'react-router-dom'
- import { FormInput, SubmitBtn } from '../components'

## (10) - Custom class

- create custom class in index.css
- named as .align-element class
- add to HomeLayout Outlet component

## (10) - HomeLayout page structure

- consists of `Header, Navbar, Outlet`
- create `Loading` coponent
- check whether `isPageLoading` is true or not
- if it is false, display `Outlet`

## Challenge (11) - Header Component

- add two links - Login and Register
- imported in HomeLayout page to test the effect

## Challenge (12) - Navbar Component

- import icons `BsCart3`, `BsMoonFill`, `BsSunFill`, and `FaBarsStaggered`
- import `NavLink` from `'react-router-dom'`
- includes "logo, navLinks, theme icons, cart"
- screen size controlled layouts
- test effect in HomeLayout page

## Challenge (13) - NavLinks component

- self-define an array of links
- iterate over
- replace in Navbar
- test effect in HomeLayout page

## Challenge (14) - toggle theme function

- define daisyui theme settings in tailwind.config.js
- test in index.html
- in Navbar component, import `useState, useEffect`
- define themes object
- define the getThemeFromLocalStorage function
- initializtion theme, setTheme and handleTheme function
- useEffect(()=>{},[]), used to `fetching data, localStorage update, DOM manipulate`
- update DOM, and localStorage by useEffect
- while useState triggers render UI
- both hooks should be used inside the function

## Challenge (14) - Hero component

- import images from local
- define an array named carouselImages
- imported in Landing page and test effect

## Challenge (15) - FeaturedProducts component

- create `FeaturedProducts` components, which splits into `SectionTitle` and `ProductsGrid` components
- since this coponents requires fetch data from API, so create utils/index.jsx firstly
- generate and export customFetch function
- since we want to pre-fetch data before loading the landing page, we should take advantage of `loader`
- create and export loader function to pre-fetch data in Landing.jsx
- in the meantime, we consider there might be some errors, so we create ErrorElement componnet by using `useRouteError`
- in order to use that fecthed data, we should assign the loader to the router configuration
- define `loader` in Router Configuration
- finish SectionTitle and ProductsGrid components
- render data in ProductsGrid component by accessing data using `useLoaderData`
- generate and export formatPrice function in utils/index.js
- check `FeaturedProducts` components and Landing page and test effect

## Challenge (16) - About page

## Challenge (17) - SingleProduct page

- since this page also needs to fetch data, we define loader firstly
- loader function receives `params` from router, and gets Async data
- loader and router connection
- renderd in SinglePage component, useState for click color, and select amount
- in utils/index.jsx, create an react function named `generateAmountOptions`
- Array.from({length:number}, (\_, index)=>{ })

## Challenge (18) - Products page

- create `Filters, ProdcutsContainer: ProductsList/ProductsGrid, PaginationContainer` conponents
- craete loader to pre-fetch all products data
- connect loader and router
- ProductsList conponent to render data
- in ProductsContainer conponents, tarck state management of layout variable between 'grid' and 'list'
- on button click, `setLayout` updates 'grid' or 'list'
- applied different styles to active and non-active icons by defining a function to control
- if totalProducts === 0, display a sentence, otherwise display ProductsList or ProductsGrid

## Challenge (19) - Filter components

- when Products page initial load, create loader function to fetch data by receive arguments of (url, params:{}).
- so we could extract from the {request}, and finally get all query strings to create an object, named params;

```js
const params = Object.fromEntries([
  ...new URL(request.url).searchParams.entries(),
])
```

- in loader function, we return {products, params}
- so in one hand, we can extract query value, and then pre-filled in the different form components
- in other hand, we render data in other components
- in Filter component whilh splits as `FormInput, FormSelect, FormRange, FormCheckbox`, seach button is a submit type, reset is a link
- create `FormInput, FormSelect, FormRange, FormCheckbox` separately
- since it is a Form submit button, so it can automatically update the URL

## Challenge (20) - PaginationContainer components

- extract data from useLoaderData()
- create an pages array
- using `useLocation()` to get current `pathname` and `search`
- using `useNavigate()` to uodate URL

```js
const handlePageChange = (pageNumber) => {
  const searchParams = new URLSearchParams(search)
  searchParams.set('page', pageNumber)
  navigate(`${pathname}?${searchParams.toString()}`)
}
```

- set up `Prev`, `Next` button onClick functions

## Challenge (21) - Cart page (Redux Toolkit for state management)

- includes `SectionTitle, CartItemsList, CartTotals` components
- data comes from `useSelector()` to extract from the store state

### Challenge (21-1) - store

- new file store.js
- create and export a store with cartState inside
- in main.jsx, wrap <App /> and provide store as prop

### Challenge (21-2) - cartSlice.js

- new features/cart/cartSlice.js
- define `defaultState` object
- create `getCartFromLocalStorage` function || defaultState
- create `cartSlice` by passing an object with `name, initialState, reducers` properties
- export all action creators by cartSlice.actions
- export cartSlice.reducer

### Challenge (21-3) - complete every reducer function

- `addItem`: click the add to bag button, state change, and displayed in cart icon
- extract payload, .find method to match
- `localStorage.setItem('cart', JSON.stringify(state));`
- `clearCart`
- `removeItem`
- `editItem`
- refractor same code as a function: `calculateTotals`
- call reducer inside a reducer: `cartSlice.caseReducers.calculateTotals(state)`;

### Challenge (21-4) - use state data in component

- addProduct:
- singleProductPage: define a new object cartProduct and `dispatch(addItem({ product: cartProduct })`
- Navbar.jsx, display `numsItemIncart`

## Challenge (22-1) - Cart page

- create CartItemsList, CartTotals, CartItem components
- get numItemsInCart and two returns, one===0 and otherwise
- user? <Link 1>: <Link 2>

## Challenge (22-2) - CartTotals component

## Challenge (22-3) - CartItemsList component

- get cartItems, and iterate
- return `return <CartItem key={item.cartID} cartItem={item} />`

## Challenge (22-4) - CartItem component

- receive props
- dispatch actions based on remove and edit function
- `dispatch(removeItem({ cartID })`
- `dispatch(editItem({ cartID, amount: parseInt(e.target.value) })`

## Challenge (23) - userSlice.js

- features/user/userSlice.js
- define `themes` object
- create `getUserFromLocalStorage,getThemeFromLocalStorage `
- define `initialState` which is call these two localstorage functions
- create userSlice includes: `name, initialState, loginUser, logoutUser, toggleTheme`
- export action creators and reducer
- import in store.js

### Challenge (23-2) - theme logic

- complete toggleTheme reducer function
- Navbar.jsx, `handleTheme` function is to dispatch(toggTheme());

### Challenge (23-3) - logout logic

- complete logoutUser reducer function
- Header.jsx, get user by state.user
- if user exists, we have logout button, if not...
- `handleLogout` function is to navigate the homepage and dispatch two actions

- NavLinks.jsx, also get user by state.user
- `if ((url === 'checkout' || url === 'orders') && !user) return null;`

### Challenge (23-4) - register logic

- outside the register component, create `action function`
- make API call, if successful, return redirect("/login")
- connect action into react router

### Challenge (23-5) - login logic

- create login action, passing store as an argument from react-router
- inside the action, when successful, `store.dispatch(loginUser(response.data))`
- complete loginUser reducer function

### Challenge (23-6) - guestUser logic

- unlike the login page, it doesn't need an action, since no form submission
- so making API call inside the component, as `loginAsGuestUser` function
- when successful, dispatch action again

## Challenge (24) - Checkout page

- includes `CheckoutForm, SectionTitle, CartTotals` components
- useSelector to get the current cartState
- if no item in cart, one return
- others, another return

## Challenge (25) - restrict access of Checkout page

- previously, we restrict if no user login, Navlinks does not show up Checkout and Orders, but if manually input in url, still can access Checkout without user login
- so we restrict access in router aspect
- define a loader function, and pass store as argument
- by `store.getState().userState.user` to get user
- if no user, toast.warn and redirect
- if user has, then return null

## Challenge (26) - CheckoutForm component

- create the action function
- by getState() method to get current user state and cart state
- substruct state data and recreate an info object
- post API with info and headers
- dispatch clearCart action
- try, catch
- complete CheckoutForm component

## Challenge (27) - Orders page

- includes `OrdersList, ComplexPaginationContainer, SectionTitle` components
- define an loader function to pre-fetch data and restrict access
- pass store argument, and get user
- if no user ...
- if user exists, acquire params
- try and catch

## Challenge (28) - OrdersList component/ ComplexPaginationContainer

- useLoaderData
- <thead> <tr> <th>, <tbody> <tr> <td>
- for ComplexPaginationContainer component
- handlePageChane function
- addPageButton({pageNumber, activeClass}) function
- renderPageButtons function (first button, left ellipsis, currect page, right ellipsis, last button)
- complete the whole return function

## Challenge (29) - Setup react query

- in App.jsx, define queryClient, and pass as an argument in router configuration to loader/action function
- wrap router inside so that can use globally
- in Landing page, create featuredProductsQuery function, and modify loader;
- doing the same things in `SingleProduct, Products, and Orders` pages separately
- remove ordersQuery in CheckoutForm component within its action function
- remove all queries in Header component, by import {useQueryClient} hook
