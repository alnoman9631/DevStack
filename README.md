# Dev Stack Builder

Dev Stack Builder is a responsive React-based website that allows users to explore different development technologies and build their own personalized technology stack.

Users can browse technologies by category, view important information such as difficulty and rating, and add their preferred technologies to their stack. The selected technologies can also be removed individually or all at once.

## Live Website

Add your deployed website link here:

https://your-live-site-url.com

## GitHub Repository

Add your GitHub repository link here:

https://github.com/your-username/your-repository

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

### 2. Build Your Own Technology Stack

Users can add technologies to the "Your Stack" section.

The application prevents duplicate technologies from being added.

Users can also:

- View the number of selected technologies
- Remove individual technologies
- Remove all technologies at once
- See an empty-stack message when no technology is selected

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

Example:

```jsx
function App() {
  return <h1>Hello React</h1>;
}