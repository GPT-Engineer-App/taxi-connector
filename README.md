# taxi-connector

Create a bare-bones application that I can modify and build on. "Create an Android and iOS compatible taxi booking application that includes the following features:

1. **Splash Screen:** Display a splash screen for 3-4 seconds when the app is launched.

2. **User Authentication:**
   - Provide options for 'Driver Login' and 'Customer Login' on the main screen after the splash screen.
   - Implement a sign-up process for new users under each category (driver or customer).
   - Ensure once logged in, users remain authenticated until they choose to log out.

3. **User Interface:**
   - Design an intuitive interface allowing seamless switching between 'Customer' and 'Driver' modes via a bottom navigation bar.

4. **Functionality:**
   - **Driver Features:**
     - Ability to view and accept ride requests.
     - Update availability status.
     - View earnings and trip history.
   
   - **Customer Features:**
     - Request rides with options for specifying pickup and drop-off locations.
     - Track driver location and estimated time of arrival.
     - Rate drivers and provide feedback after the trip.

5. **Admin Panel:**
   - Develop an admin panel accessible via web for managing drivers, customer support, and monitoring operations.

6. **Offline Functionality:**
   - Implement basic offline functionality such as caching recent user data and bookings for access when connectivity is limited.

7. **Payment Integration:**
   - Integrate secure payment gateways for handling transactions between customers and drivers.

8. **App Maintenance:**
   - Design the app architecture to allow for future updates and feature additions without requiring a complete rewrite.

9. **Testing and Deployment:**
   - Conduct thorough testing to ensure compatibility across different devices and operating system versions.
   - Generate APK and IPA files for Android and iOS respectively, ready for deployment to app stores.

10. **Security Considerations:**
    - Implement encryption for sensitive user data and transactions.
    - Ensure compliance with relevant data protection regulations.

Deliverables:
- Provide APK and IPA files for Android and iOS deployment.
- Ensure documentation includes instructions for future maintenance and updates."

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/taxi-connector.git
cd taxi-connector
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
