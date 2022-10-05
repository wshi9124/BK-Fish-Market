BK Fish Market is an E-Commerce site based of the needs and demands of a real client to promote their business. It includes both a user side to purchase products and an admin interface to edit, add, and deactivate products. 

# Technologies used:
######
Frontend: TypeScript, React, JavaScript, Tailwind CSS, local storage (to store cart items), React Router
######
Backend: Ruby on Rails, Active Storage (to store product images), Action Mailer (to send out greeting emails), Bcrypt (to salt and hash password) 
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

When a user clicks on a product, it will lead them to the Individual Product page. There, users can see the product's info, add to cart, and see reviews for that product. The counter to add to cart will not be less than 1 or more than 10. Users can only write a review if they are logged in and have not written a review for that product before. If they try, an error message will display. 

<img width="500" alt="Screen Shot 2022-10-03 at 3 23 46 PM" src="https://user-images.githubusercontent.com/104730743/193693015-f1e7b495-3a96-4f94-b960-481ef83bbc20.png">

<img width="500" alt="Screen Shot 2022-10-03 at 3 24 29 PM" src="https://user-images.githubusercontent.com/104730743/193692097-9865d287-941c-4e04-b034-78b1b532c33a.png">

<img width="500" alt="Screen Shot 2022-10-03 at 3 27 06 PM" src="https://user-images.githubusercontent.com/104730743/193694869-401544a9-26bf-40c3-9f15-f453c99ad7c1.png">

<img width="500" alt="Screen Shot 2022-10-03 at 3 29 30 PM" src="https://user-images.githubusercontent.com/104730743/193691847-a128d399-4cc0-4e28-9dd5-47d3e9ce37d0.png">

<img width="500" alt="Screen Shot 2022-10-03 at 5 25 24 PM" src="https://user-images.githubusercontent.com/104730743/193692130-3ff2fac6-291a-4b78-aa0c-7ea4192f2ad7.png">

<img width="500" alt="Screen Shot 2022-10-03 at 5 28 43 PM" src="https://user-images.githubusercontent.com/104730743/193692142-c027a99d-220a-412d-80e4-348373659f4c.png">

<img width="500" alt="Screen Shot 2022-10-03 at 5 29 01 PM" src="https://user-images.githubusercontent.com/104730743/193692158-03dc971c-dfee-411f-93b0-b5a87fe6ff9a.png">

<img width="500" alt="Screen Shot 2022-10-03 at 5 52 07 PM" src="https://user-images.githubusercontent.com/104730743/193692883-d2d44252-942e-4c76-b677-ae993fba9287.png">
