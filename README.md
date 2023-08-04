# angular-ionic

# My Ionic Contacts App

This is a simple Ionic Contacts App that allows users to view and interact with their phone contacts.

## Installation

To download the project, run the following command:
git clone https://github.com/Islambek201632838/angular-ionic.git


Next, navigate to the project directory:
cd islambek

Then, install the required dependencies:
npm install

if modules are not downloaded run this commands:

npm install -g @angular/cli
npm install -g @ionic/cli
npm install @ionic-native/contacts@latest --legacy -peer-deps
npm install @ionic-native/barcode-scanner@latest --legacy -peer-deps
npm install ionic-native/android-permissions/ngx@latest --legacy -peer-deps


## Running the App

To start the development server and run the app, use the following command:
ionic serve or ng serve


After the development server has started, open your web browser and navigate to:
http://localhost:8100 for ionic and http://localhost:4200 for angular

You should see the app running in the browser.

## Usage

1. On the main page, you will see a list of your phone contacts.
2. Click on a contact to view its details on the second page.
3. To scan a QR code, click on the QR code icon in the header. The camera will open, and once it scans a QR code, an alert will display the scanned data.

## Note

- You can follow the numbered sections in this README to get started with the app easily.

