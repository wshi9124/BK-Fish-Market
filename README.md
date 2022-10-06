BK Fish Market is an E-Commerce site based on the needs and demands of a real client to promote their business. It includes both a user side to purchase products and an admin interface to edit, add, and deactivate products. 

# Technologies used:
######
Frontend: TypeScript, React, JavaScript, Tailwind CSS, local storage (to store cart items), React Router
######
Backend: Ruby on Rails, Active Storage (to store product images), Action Mailer (to send out greeting emails), Bcrypt (to salt and hash password), Active Records Validations
######
Other: Google Maps API, Google Geocoding API

# Security
This project uses sessions to authenticate users and Bcrypt to encrypt passwords. 
There are separate protected routes (private routes) for the user routes and admin routes.  

# Features 
######
When a user first enters the site, the Rails backend will check if there is a session. If there is, it will automatically log the user in and navigate the user to the appropriate route. 
######
The home page features a carousel. The first page of the carousel has the welcome message. If a user is not logged in, it will say "Welcome to B&K Fish Market". However, if they are logged in, it will say 'Welcome ${user_name}'. The second page of the carousel has the discount code for free shipping. The third page has a link to navigate the user to the About Us page.

<img width="500" alt="Screen Shot 2022-10-03 at 3 19 38 PM" src="https://user-images.githubusercontent.com/104730743/193691309-0a6f4c55-ba09-4411-9a20-5247adebead5.png">

The About Us page displays the most current information on B&K Fish Market. This includes images that link to B&K's actual UberEats, Grubhub, and DoorDash pages. It also uses Google Maps API so that users can get directions to the store. 

<img width="500" alt="Screen Shot 2022-10-03 at 3 21 50 PM" src="https://user-images.githubusercontent.com/104730743/194146393-d1b35aae-c38f-4d07-b78c-60de3f977d45.png">

The Products page displays all the active products that users can purchase. Users can also sort products by their category or search for them using the search bar. This page is available to users even if they are not logged in.

<img width="500" alt="Screen Shot 2022-10-03 at 3 22 50 PM" src="https://user-images.githubusercontent.com/104730743/193691593-3ad4c934-dd10-4930-a3b5-add8356005a5.png">

When a user clicks on a product, it will lead them to the Individual Product page. There, users can see the product's info, add to cart, and see reviews for that product. The counter to add to cart will not be less than 1 or more than 10. Users can only write a review if they are logged in and have not written a review for that product before. If they try, a error message will display. 

<img width="500" alt="Screen Shot 2022-10-03 at 3 23 46 PM" src="https://user-images.githubusercontent.com/104730743/193693015-f1e7b495-3a96-4f94-b960-481ef83bbc20.png">

Cart Items are stored in local storage. This way, users can view their cart even after they close their browser. Users can also remove individual items or remove all items from cart. If there are no items in cart, it will state that. If there are items in cart and the user is not logged in, it will prompt the user to log in. If the user is logged in, they can check out.     

<img width="500" alt="Screen Shot 2022-10-03 at 3 24 29 PM" src="https://user-images.githubusercontent.com/104730743/193692097-9865d287-941c-4e04-b034-78b1b532c33a.png">

If a invalid username and password combination is typed in, a error message will display and the inputs will clear. If users log in as a user, they will be taken to the home page. If users log in as a Admin, they will be taken to the admin interface. 

<img width="500" alt="Screen Shot 2022-10-05 at 5 42 14 PM" src="https://user-images.githubusercontent.com/104730743/194169519-5210c46e-5561-4899-ae64-053c0d79cb10.png">

Users can choose to make either a regular account or an admin account. Users need to pass a number of validations or else a error message will display. Once an account is made, a welcome email will be sent and the user will be navigated to the appropriate page. 

<img width="500" alt="Screen Shot 2022-10-03 at 3 27 06 PM" src="https://user-images.githubusercontent.com/104730743/193694869-401544a9-26bf-40c3-9f15-f453c99ad7c1.png">

On the Checkout page, users can format their address using Google Geocoding API. This is done by displaying the first result when fetching from the API. The map will also pan to the location that is formatted. If there is no result, a error message will display. Users can also input the discount code found on the home page for free shipping. Once a user checks out, they will be navigated to the Purchase History page.  

<img width="500" alt="Screen Shot 2022-10-03 at 3 29 30 PM" src="https://user-images.githubusercontent.com/104730743/193691847-a128d399-4cc0-4e28-9dd5-47d3e9ce37d0.png">

On the Purchase History page, users can see their past purchases. The purchases are sorted with the newest on top. Since the purchase price is on a different column on another table, it will not change even if an admin changes the product price after it is purchased. If a user decides to buy again and an admin deactivates the product, the product will display "Out of Stock" on the individual product page.    

<img width="500" alt="Screen Shot 2022-10-03 at 5 25 24 PM" src="https://user-images.githubusercontent.com/104730743/193692130-3ff2fac6-291a-4b78-aa0c-7ea4192f2ad7.png">

On the admin interface, users can edit a product's name, image, description and price. They can also search and filter for products. If a product is out of stock, admins can deactivate or activate products. 

<img width="500" alt="Screen Shot 2022-10-03 at 5 28 43 PM" src="https://user-images.githubusercontent.com/104730743/193692142-c027a99d-220a-412d-80e4-348373659f4c.png">

Admins can also add new products for sale. If a new product is sucessfully made, admins will be navigated to the Admin home page. 

<img width="500" alt="Screen Shot 2022-10-03 at 5 29 01 PM" src="https://user-images.githubusercontent.com/104730743/193692158-03dc971c-dfee-411f-93b0-b5a87fe6ff9a.png">

This is an example of the Individual Product page if the product is deactivated and a user tries to buy again.

<img width="500" alt="Screen Shot 2022-10-03 at 5 52 07 PM" src="https://user-images.githubusercontent.com/104730743/193692883-d2d44252-942e-4c76-b677-ae993fba9287.png">

# System dependencies
######
Ruby: 3.1.2
######
Node: 16.17.1
######
PostgreSQL: 12.12

# Configuration:
### Install packages:
######
bundle install
######
npm install --prefix client
######
### Database creation & initialization:
######
rails db:create db:migrate
### How to run the test suite:
######
rails s
######
npm start --prefix client
######
open localhost:4000 on your browser
