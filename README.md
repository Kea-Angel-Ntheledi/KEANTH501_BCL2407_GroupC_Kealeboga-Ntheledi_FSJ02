# eCommerce Store: MyStore
## Introduction
Welcome to the eCommerce Store MyStore project! This application is a modern, full-featured online store designed to showcase and sell products. It leverages the power of Next.js for server-side rendering and a rich user interface built with Tailwind CSS. The application features dynamic routing, product management, and user interactions such as liking products and adding items to the cart.

## Key Features
### Dynamic Product Pages: 
View detailed information about products, including images, descriptions, prices, and reviews.
### Interactive UI: 
Includes "Back", "Add to Cart", and "Like" buttons with responsive design.
### Cart Management: 
Basic functionality for adding products to a cart (implementation can be extended).
### Review System: 
Users can read and view customer reviews.

## Technologies Used
### Next.js: 
A React framework for building server-side rendered applications.
### Tailwind CSS: 
A utility-first CSS framework for rapid UI development.
### React: 
The JavaScript library for building user interfaces.
### Node.js: 
JavaScript runtime used for the server-side logic.
### JavaScript: 
Programming language used for client and server code.

## Setup Instructions
Prerequisites
### Node.js: 
Ensure Node.js is installed. You can download it from nodejs.org.
### Clone the Repository
1. Start by cloning the repository to your local machine:
      - Git clone https://github.com/your-username/ecommerce-store.git
      - cd ecommerce-store
2. Install the required dependencies using npm or yarn:
      - npm install
3. Start the Next.js development server:
      - npm run dev

#### Usage Examples
##### Viewing a Product
Navigate to a product page using a URL pattern such as:
http://localhost:3000/products/[id], where [id] is the unique identifier for the product. 
For example, http://localhost:3000/products/123 will display the details for the product with ID 123.

##### Adding to Cart
Click on the "Add to Cart" button to simulate adding a product to the shopping cart. Note: This example displays an alert, but you should integrate this functionality with a cart management system.

##### Liking a Product
Click on the "Like" button to toggle the like state for the product. The button’s appearance changes based on whether the product is liked or not.

##### Navigating Back
Click on the "Back" button to navigate to the previous page in your browser history.
