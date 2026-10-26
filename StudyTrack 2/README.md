# StudyTrack: Student Task and Study Planner

PHP application for students using HTML, CSS, SCSS, JavaScript, and **MySQL** (not Firebase).

## Run with XAMPP

1. Copy the `StudyTrack` folder into XAMPP's `htdocs` directory.
2. Start Apache and MySQL in the XAMPP Control Panel.
3. Visit `http://localhost/phpmyadmin`, select **Import**, choose `database.sql`, and run it. It creates `studytrack` and the `users`, `tasks`, and `notes` tables.
4. Visit `http://localhost/StudyTrack/`.

Default MySQL settings are host `localhost`, user `root`, blank password, database `studytrack`. Set `STUDYTRACK_DB_HOST`, `STUDYTRACK_DB_USER`, `STUDYTRACK_DB_PASSWORD`, and `STUDYTRACK_DB_NAME` to override them.

## Features

- Student registration, login, logout confirmation, and account recovery guidance.
- Add tasks with title, description, and deadline; view pending/completed tasks; mark complete; confirm before deletion.
- Create and delete study notes with delete confirmation.
- Dashboard totals followed by Upcoming Tasks, sorted by closest pending deadline.
- Loading feedback and brief success/error notices.

The SCSS variables match the requested palette: `#163238`, `#07181C`, `#B98F9A`, `#D5CFCA`, `#172124`, `#16A34A`, `#8F2945`, and `#F59E0B`. The dashboard puts the four summary cards **above** Upcoming Tasks. The layout adapts to desktop and mobile screens.

We confirm this is our own work and we are present today.
