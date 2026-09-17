# Dev Stack Builder

Dev Stack Builder is a responsive React-based website that allows users to explore different development technologies and build their own personalized technology stack.

Users can browse technologies by category, view important information such as difficulty and rating, and add their preferred technologies to their stack. The selected technologies can also be removed individually or all at once.

---


## Project Description

Dev Stack Builder is designed to help developers explore and organize the technologies they may want to use in their projects.

The website provides a collection of frontend, backend, database, and development tools. Each technology is displayed in a card containing its icon, name, description, category, difficulty level, rating, and badge.

Users can add technologies to their personal stack without duplicates and manage the selected technologies from the "Your Stack" section.

The project is built with React and uses JSON data to dynamically render the technology cards.

---

## Technologies Used

- React
- JavaScript
- Vite
- HTML
- CSS
- React-Toastify
- JSON
- Git & GitHub

---

## Main Features

### 1. Explore Development Technologies

Users can browse different technologies including:

- React
- Vue.js
- Svelte
- Next.js
- Node.js
- PostgreSQL
- Redis
- JavaScript
- TypeScript
- Java
- Tailwind CSS
- Docker

Each technology card displays:

- Technology icon
- Technology name
- Description
- Category
- Difficulty level
- Rating
- Badge
- Add to Stack button

---

### 2. Build Your Own Technology Stack

Users can add technologies to the "Your Stack" section.

The application prevents duplicate technologies from being added.

Users can also:

- View the number of selected technologies
- Remove individual technologies
- Remove all technologies at once
- See an empty-stack message when no technology is selected

Toast notifications are displayed when technologies are added, removed, or when duplicate additions are attempted.

---

### 3. Responsive Design

The website is responsive and works across:

- Desktop
- Tablet
- Mobile

The navigation bar also provides a mobile menu for smaller screen sizes.

---

## React Questions & Answers

### 1. What is JSX?

JSX stands for JavaScript XML.

It allows us to write HTML-like syntax inside JavaScript and use it to describe the UI of React components.


### 2. What is the difference between state and props?

Props are used to pass data from a parent component to a child component. Props are read-only and should not be changed by the child.

State is data managed inside a component. State can change over time, and when it changes, React re-renders the component.

In simple terms:

Props: Data passed from parent to child.
State: Data managed inside a component.

### 3. What is the useState hook?

useState is a React Hook that allows a functional component to store and manage state.

Example:

const [count, setCount] = useState(0);

Here:

count is the current state value.
setCount is the function used to update the state.
0 is the initial value.

### 4. What is the useEffect hook?

useEffect is a React Hook used to perform side effects in a component.

For example, it can be used to:

Fetch data
Interact with external systems
Run code after a component renders
Perform other side effects

### 5. Why is the key prop important when rendering lists?

The key prop helps React identify which items in a list have changed, been added, or been removed.

### 6. What is conditional rendering in React?

Conditional rendering means displaying different UI elements depending on a condition.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using props.

For example, App.jsx passes the technology data, selected stack, and onAdd function to TechnologyGrid