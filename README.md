# Project Documentation

This project is built using React with Vite for fast development and smooth performance.

For styling, I have used Tailwind CSS. It helps to quickly build UI, manage responsiveness, and handle light/dark themes easily.

Theme switching (light and dark mode) is implemented using React Context API. The theme is managed globally so it works across the entire app without prop drilling.

Tech Stack : React Vite , Tailwind CSS , Vercel

Live Url : https://technical-assesment-4hiz4brlb-ramsurat0880s-projects.vercel.app/

The layout is divided into three main sections:

- Sidebar
- Header
- Main Content Area

Each section is created as a separate component to keep things clean and reusable.

Routing is handled using react-router-dom, which allows navigation between pages without reloading.

The UI is divided into small reusable components such as:

- Button
- Table
- Table Header
- Cards
- Status Badge

This makes the project easy to maintain and scale.

---

## Installation & Setup

Follow these steps to run the project locally:

1. Install dependencies:

```
npm install
```

2. Start the development server:

```
npm run dev
```

3. Open in browser:

```
http://localhost:5173
```

---

## Build for Production

To create a production build:

```
npm run build
```

To preview the build:

```
npm run preview
```

---

Overall, the project is structured in a simple and clean way, focusing on reusable components and easy scalability.
