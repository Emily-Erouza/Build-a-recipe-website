const breakFastList = [
  {
    title: "Full English breakfast",
    description:
      "Ever wondered how to make a full English breakfast? Well here's our foolproof method for the right timings.",
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/full-english-breakfast/original.jpg",
  },
  {
    title: "Orange and rasberry granola",
    description:
      " Make your own oat milk in this recipe for no-added-sugar granola, or serve with organic cow’s milk or yogurt ",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/orange-raspberry-granola-5bb480d.jpg?quality=90&webp=true&resize=300,272,"  },
  {
    title: "Corn flakes",
    description:
      "Breakfast cereal is made from processed grains and often fortified with vitamins and minerals. It is commonly eaten with milk, yogurt, fruit, or nuts",
    image:
      "https://www.realsimple.com/thmb/5oNAi0IwrdaMUYOzRlEjlCPKFb8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthiest-cereal-2000-48972ae0c4bc43fd9646625f8d219a66.jpg",
      
  },
  {
    title: "Egg Grilled Chess ",
    description:
  "This doubly good breakfast sandwich combines a load of favorites all in one! Imagine starting your day off with a hearty and melty Bacon and Egg Breakfast Grilled Cheese!",
    image:
    "https://irepo.primecp.com/2015/06/223330/Bacon-and-Egg-Breakfast-Grilled-Cheese_Medium_ID-1029582.jpg?v=1029582",
  },
  
];

const lunchList = [
  {
    title: "vegetable side dish",
    description:
      "Eating healthy can be hard when balancing everything in your life. ",
    image:
      "https://diabetes.org/sites/default/files/styles/full_width/public/2019-04/Hero%20-%20Tips%20and%20Meal%20Planning_%20Meal%20Ideas%402x-min.jpg",
  },
  {
    title: "Burger king",
    description:
      "A flame-grilled beef patty, topped with tomatoes, fresh cut lettuce, mayo, pickles, a swirl of ketchup, and sliced onions on a soft sesame seed bun.",
    image:
      "https://img1.10bestmedia.com/Images/Photos/358188/Black-Tap-Burgers-Venetian_55_660x440.jpg",
  },
  {
    title: "Fuit salad galore",
    description:
      "Fresh fruit salad galore dressing is an amazingly refreshing and satisfying friuts. A variety of fruit flavors and textures with loads of strawberries is an experience you are sure to love.",
    image:
      "https://i.pinimg.com/550x/27/67/13/27671336862abe919c01f204c4992a19.jpg",
  },
  {
    title: "Marinated chicken club sandwhich",
    description:
"This salad sandwich with herb mayo is the perfect quick and easy lunch recipe. Use any fresh vegetables you have to make a delicious, filling meal.",
    image:
      "https://img.taste.com.au/y4pjW_QW/w720-h480-cfill-q80/taste/2016/11/marinated-chicken-club-sandwich-1970-1.jpeg",
  },
 
];

const dinnerList = [
  {
    title: "Homemade chicken stew",
    description:
      "No such thing as perfect, except for our fried chicken.I wish that you and your family always sit together and have a happy chicken meal.Let’s eat and celebrate this very delicious fried chicken day.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/003/010/725/small_2x/homemade-chicken-stew-with-tomatoes-onions-carrot-and-potatoes-on-plate-with-rice-photo.jpg",
  },
  {
    title: "meatballs",
    description:
" Discover our healthy, protein-packed dinner ideas, including chicken, beef, pork and fish dishes as well as vegetarian recipes using tofu and eggs",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/high-protein-dinners-slow-cooker-meatballs-image-5a04d02.jpg?quality=90&resize=500,454",
  },
  {
    title: "Salmon fried rice",
    description:
      " salmon mean you’re only steps away from salmon fried rice. Just chop up a few veggies and you’ve got a healthful fried rice dinner in a flash.",
    image:
"https://www.simplyrecipes.com/thmb/KnTmysyojaHVx_I3IrxT53asvdo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__05__salmon-fried-rice-horiz-a2-1600-b2d7c09d64c84c4698a13e7cf31510ca.jpg",
  },
  {
    title: " 7 colours beef stew",
    description:
      "7 Colours , is a traditional South African meal that would include Rice in most cases , Chicken or beef for the meat and a whole lot of sides such pumpkin , sweet potatoes , beetroot , cabbage , beans salad , potato salad , coleslaw etc.",
    image:
"https://www.koo.co.za/-/media/Project/Tiger/Koo/Koo/Recipes/7-Colours-with-beef-stew.jpg",
  },
  
];

// Get references to the buttons
var breakfastButton = document.getElementById("breakfast");
var lunchButton = document.getElementById("lunch");
var dinnerButton = document.getElementById("dinner");

// Attach event listeners to the buttons
breakfastButton.addEventListener("click", handleButtonClick);
lunchButton.addEventListener("click", handleButtonClick);
dinnerButton.addEventListener("click", handleButtonClick);

// Function 1 = handel order values
function handleButtonClick() {
  // Retrieve the value of the clicked button
  var value = this.getAttribute("value");

  //   Display order name
  document.getElementById("orderName").innerHTML = `<h2>${value}</h2>`;
  getOrderListByOrderName(value);
}

function getOrderListByOrderName(value) {
  if (value === "Breakfast") {
    const orderContainer = document.getElementById("orderContainerbox");

    orderContainer.innerHTML = ""; // Clear previous content

    const orderCards = breakFastList.map((order, i) => {
      const card = `
        <div style="width:100%" class="card" style="width: 18rem;">
          <img class="card-img-top" src="${order.image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${order.title}</h5>
            <p class="card-text">${order.description}</p>
            <a href="" type="button" class="btn btn-primary" onclick="handleFormTitle()" data-toggle="modal" data-target="#exampleModalCenter">Order</a>
          </div>
        </div>
      `;

      return card;
    });

    orderContainer.innerHTML = orderCards.join("");
  } else if (value === "Lunch") {
    const orderContainer = document.getElementById("orderContainerbox");

    orderContainer.innerHTML = ""; // Clear previous content

    const orderCards = lunchList.map((order, i) => {
      const card = `
        <div style="width:100%" class="card" style="width: 18rem;">
          <img class="card-img-top" src="${order.image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${order.title}</h5>
            <p class="card-text">${order.description}</p>
            <a href="" type="button" class="btn btn-primary" onclick="handleFormTitle()" data-toggle="modal" data-target="#exampleModalCenter">Order</a>
          </div>
        </div>
      `;

      return card;
    });

    orderContainer.innerHTML = orderCards.join("");
  } else if (value === "Dinner") {
    const orderContainer = document.getElementById("orderContainerbox");

    orderContainer.innerHTML = ""; // Clear previous content

    const orderCards = dinnerList.map((order, i) => {
      const card = `
        <div style="width:100%" class="card" style="width: 18rem;">
          <img class="card-img-top" src="${order.image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${order.title}</h5>
            <p class="card-text">${order.description}</p>
            <a href="" type="button" class="btn btn-primary" onclick="handleFormTitle()" data-toggle="modal" data-target="#exampleModalCenter">Order</a>
          </div>
        </div>
      `;

      return card;
    });

    orderContainer.innerHTML = orderCards.join("");
  }
}

function displayAllOderList() {
  const listofOrders = [];
  breakFastList.map((order) => {
    listofOrders.push(order);
  });
  lunchList.map((order) => {
    listofOrders.push(order);
  });
  dinnerList.map((order) => {
    listofOrders.push(order);
  });

  console.log("first", listofOrders);

  const orderContainer = document.getElementById("orderContainerbox");

  orderContainer.innerHTML = ""; // Clear previous content

  const orderCards = listofOrders.map((order, i) => {
    const card = `
      <div style="width:100%" class="card" style="width: 18rem;">
        <img class="card-img-top" src="${order.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${order.title}</h5>
          <p class="card-text">${order.description}</p>
          <a href="" type="button" class="btn btn-primary" onclick="handleFormTitle()" data-toggle="modal" data-target="#exampleModalCenter">Order</a>
        </div>
      </div>
    `;

    return card;
  });

  orderContainer.innerHTML = orderCards.join("");
}