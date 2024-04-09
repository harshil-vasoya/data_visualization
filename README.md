# Data Visualization Project

Welcome to the Data Visualization project! This MERN stack project focuses on visualizing data using various types of charts and graphs. Users can explore data, add new data, and apply filters based on different criteria. Authentication is handled using JWT (JSON Web Tokens).

<h1> frontend </h1> = https://data-visualization.digo18.in/
<h1> backend </h1> = https://data-visualization-back.vercel.app/


## Features

- Authentication using JWT
- Visualization of data using different chart types:
  - Line chart
  - Pie chart
  - Bar chart
  - Doughnut chart
  - PieRadar chart
  - Polar chart
  - Radar chart
- Ability to add new data
- Filter data based on:
  - End year
  - Pestle
  - Source
  - Country
  - Region
  - Topic

## Deployment

- Backend: Deployed on Vercel
- Frontend: Deployed on Hostinger
- Environment variables used in both backend and frontend

## Data Fields

- `end_year`: Year of completion
- `intensity`: Intensity of the data
- `sector`: Sector to which data belongs
- `topic`: Topic of the data
- `insight`: Insight extracted from the data
- `url`: URL associated with the data
- `region`: Region where the data is relevant
- `start_year`: Year of commencement
- `impact`: Impact of the data
- `country`: Country associated with the data
- `relevance`: Relevance of the data
- `pestle`: PESTLE category of the data
- `source`: Source of the data
- `title`: Title of the data
- `likelihood`: Likelihood of the data

## Installation

1. **Clone the Repository**:

    ```bash
    git clone <repository-url>
    cd data-visualization
    ```

2. **Installation for frontend**:

    ```bash
    cd client
    npm i
    npm start
    ```
3.  **Installation for backend**:

    ```bash
    cd backend
    npm i
    nodemon index.js
    ```

4. **Set Up Environment Variables**:

    - Create a `.env` file in both the backend and frontend directories.
    - Add the necessary environment variables:

    **Frontend (.env)**:
    ```
    REACT_APP_SERVER_URL=<your-backend-url>
    ```

    **Backend (.env)**:
    ```
    CONNECTION_STRING_ATLAS=<your-mongodb-connection-string>
    PORT=<your-backend-port>
    TOKEN_KEY=<your-jwt-secret>
    ```

5. **Start the Application**:

    ```bash
    npm start
    ```

    This will start both the frontend and backend servers concurrently.

## Usage

- Users can sign up or log in to access the data visualization features.
- Once authenticated, users can explore the available data and visualize it using the provided charts.
- Users can also add new data and apply filters based on different criteria to narrow down the results.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.


## Credits

- Chart.js: JavaScript library for creating various charts and graphs
- MongoDB: NoSQL database for storing data
- Express.js: Backend framework for building RESTful APIs
- React.js: Frontend library for building user interfaces
- Node.js: JavaScript runtime environment for running server-side code

Feel free to customize this README according to your project's specific details and requirements.
