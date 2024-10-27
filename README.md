# 📌 Pin Management Application

This project is an **Interactive Map-based Application** built using **React and Leaflet**. It allows users to drop pins on a map, annotate them with remarks, fetch addresses automatically using the **OpenCage API**, and manage the pins through a sidebar. This app is suitable for tasks like saving locations, managing addresses, and navigating to saved pins efficiently.

---

## 🚀 Features

- **Interactive Map:** Users can click on the map to place pins.
- **Real-time Address Fetching:** Uses the OpenCage API to convert coordinates into readable addresses.
- **Pin Management with Remarks:** Users can annotate pins with custom remarks.
- **Persistent Storage:** Pins are saved to localStorage, making them available across sessions.
- **Sidebar for Pin Navigation:** View, select, and navigate to saved pins from a sidebar.
- **Smooth Map Navigation:** Clicking a pin in the sidebar animates the map to that location.
- **Custom Marker Icons:** Uses Leaflet's built-in markers with shadow effects for better visualization.

---

## 🛠️ How It Works

1. **Map Interaction:** Users click anywhere on the map to place a pin.
2. **Address Fetching:** As soon as a pin is dropped, the OpenCage API retrieves the corresponding address.
3. **Popup for Pin Details:** A popup allows users to enter remarks and save the pin with relevant information.
4. **Sidebar Navigation:** Saved pins appear in the sidebar with their remarks and addresses.
5. **Pin Selection:** Clicking a pin in the sidebar zooms and centers the map on that pin's location.
6. **Persistent Data:** Pins are stored locally in the browser’s localStorage, making them available across sessions.

---

## 💡 Application Flow

1. **User clicks on the map:** A marker is added at the clicked coordinates.
2. **Popup opens:** The user can see the fetched address and add a custom remark.
3. **Pin is saved:** Clicking “Save Pin” stores the pin in localStorage.
4. **Sidebar displays saved pins:** Users can see all saved pins with their remarks and addresses.
5. **Pin navigation:** Clicking on a pin in the sidebar moves the map to that location.

---

## 🔑 Dependencies

- **React:** Frontend framework for building user interfaces.
- **React-Leaflet:** React bindings for Leaflet to display interactive maps.
- **Leaflet:** JavaScript library for mobile-friendly interactive maps.
- **OpenCage API:** Provides address details based on geographic coordinates.
- **Tailwind CSS:** Utility-first CSS framework for styling components.

---

## 🏗️ Installation and Setup

Follow these steps to set up the project on your local machine:
1. **Clone the Repository:** Open a terminal and run:  ```bash git clone <repository-url> cd <project-directory> ``` 
2. **Install Dependencies:** Install all necessary dependencies using:  ```bash npm install ```
3. **Set Up OpenCage API Key:**  - Visit [OpenCage](https://opencagedata.com) to obtain a free API key.  - Open the project code and replace the placeholder API key with your actual key in the relevant configuration file.
4. **Run the Application:** Launch the app by running:  ```bash npm start ```  This will start the development server and open the app in your default browser.

