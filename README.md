# Duckies To-Do

**Duckies To-Do** is a single-page web application I created to make managing tasks simple and visually appealing. The app’s cheerful yellow and black theme keeps things bright and easy to navigate, and it’s designed to give users a clear snapshot of their tasks for today, upcoming deadlines, overdue items, and completed tasks—all on one page.


![Screenshot 2024-12-08 at 11 21 56 PM](https://github.com/user-attachments/assets/f32cc74f-450b-4734-92a6-5ec90000200d)



## Features

- **Task Management**: Add, edit, delete, and complete tasks effortlessly.
- **Organized Layout**: Tasks are divided into sections:
  - **Today**: See what needs to get done now.
  - **Upcoming**: Plan ahead with future tasks.
  - **Past Due**: Keep track of overdue tasks.
  - **Completed**: Celebrate your progress.
- **Dynamic Buttons**: Edit and delete buttons appear based on a task’s status, controlled by a ternary operator for efficient UI logic.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js

## How It Works

- **Frontend**:
  - React handles the dynamic rendering of tasks and UI.
  - Tasks dynamically show Edit or Delete buttons based on their state.
  - Tailwind CSS ensures a clean and responsive design.
- **Backend**:
  - Filters tasks into categories (Today, Upcoming, Past Due, Completed).
  - Handles task storage and retrieval for smooth frontend-backend interaction.

## Getting Started

1. Clone the repository:
   ```bash
   git clone
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```
4. Start the frontend development server:
   ```bash
   cd ../frontend
    npm run dev
   ```

## Future Plans

- Add user login for personalized task tracking.
- Include reminders for tasks.
- Enable drag-and-drop for reorganizing tasks.
- Add a dark mode for more customization.
- Change the UI of check boxes
- Port images as svg instead of png to improve the website's UI
