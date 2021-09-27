# hcs21-final-travelblog-vue

This is the frontend app for my final project of the Full-Stack Program at the Hamburg Coding School.

The backend app can be found in this repository https://github.com/JannekS/hcs21-final-travelblog-node

The requirements for the project are listed here: https://github.com/hamburgcodingschool/fullstack-2021-2_vuejs/blob/main/project.md

### Bonus Tasks

I implemented the following bonus tasks:
- A map is shown on every detail page with the marker set to the corresponding coordinates
- all the blog post data is stored in a database (mariaDB) and served through a REST API with JSON (see the repo)
  - the API has to endpoints so far: one for serving the preview data for the home page (ordered by date descending) and one for the detailed post data (based on post id parameter in the request)
  - The author and blog post images are served by the backend as well.

### Misc

I tried to make the website as responsive as possible. To improve the user experience on small devices I will implement a burger menu in the near future.

### Hosting

The frontend app is hosted on: https://hopeful-hoover-d95227.netlify.app/
The backend server is hosted on: https://hcs21-travelblog-node-server.herokuapp.com (go to /posts to get the preview data for all posts)






