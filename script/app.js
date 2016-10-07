var app=angular.module("app",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider
    .state('/home', {
      url: "/home",
      templateUrl: "partials/home.html",
      controller:function($scope){
      	$scope.name=[{'name1':'Apple','key':0},
      				{'name1':'Mango','key':1},
      				{'name1':'Orange','key':2},
      				{'name1':'Lemon','key':3},
      				{'name1':'Banana','key':4},
      				{'name1':'Cherry','key':5},
      				{'name1':'Grape','key':6},
      				{'name1':'Pineapple','key':7},
      				{'name1':'Strawberry','key':8},
      				{'name1':'Guava','key':9}];

      }
    })
    .state('/detail', {
      url: "/:key",
      templateUrl: "partials/detail.html",
      controller:function($scope,$stateParams){
      	$scope.details={
      		'name':["Apple","Mango","Orange","Lemon","Banana","Cherry","Grape","Pineapple","Strawberry","Guava"],
      		'description':['Delicious and crunchy, apple fruit is one of the most popular and favorite fruits among the health conscious, fitness lovers who firmly believe in the concept of “health is wealth.” This wonderful fruit is packed with rich phyto-nutrients that, in the true sense, indispensable for optimal health. Certain antioxidants in apple have several health promoting and disease prevention properties, and thereby, truly justifying the adage, “an apple a day keeps the doctor away.',
      						'The king of the fruits," mango fruit is one of the most popular, nutritionally rich fruits with unique flavor, fragrance, taste, and heath promoting qualities, making it numero-uno among new functional foods, often labeled as “super fruits.','Mango is one of the delicious seasonal fruits grown in the tropics. The tree is believed to be originating in the sub-Himalayan plains of Indian subcontinent. Botanically, this exotic fruit belongs within the family of Anacardiaceae, a family that also includes numerous species of tropical-fruiting trees in the flowering plants such as cashew, pistachio,...',
      						'Delicious and juicy orange fruit contains an impressive list of essential nutrients, vitamins, minerals for normal growth and development and overall well-being.Botanically; orange is the citrus fruit belonging in the Rutaceae family, of the genus; Citrus. The genus citrus also includes other related species of oranges such as pomelo, tangerine (mandarin orange), yuzu, lemon, and grapefruit.',
      						'Juicy, acidic, yet flavorful, lemon is one of the most widely used citrus fruits worldwide. Lime, a close relative, is comparitively smaller and possesses thinner skin.Botanically, this citrus fruit belongs to the family of Rutaceae, in the genus, Citrus (which also includes orange, pomelo, tangerine, and grapefruit). Scientific name: Citrus limon. It is the smallest among citrus fruits, nevertheless, holds more health benefiting nutrients than other larger citrus family fruits such as oranges, yuzu, pomelo (Citrus maxima), etc',
      						'Enjoy banana fruit; natures own energy-rich food that comes with a safety envelope! Fresh, creamy, and delicious dessert bananas are one of the cheapest and readily available fruits year around.Botanically, it belongs to the family of Musaceae. Commercially, it is one of the widely cultivated crops in the tropical and subtropical zones. Scientific name: Musa acuminata colla.',
      						'Wonderfully delicious, cherry fruit is packed with full of health-benefiting nutrients and unique antioxidants. Cherries are native to Eastern Europe and Asia Minor regions.Botanically, the fruit is a “drupe” (stone fruit), belonging to the broad Rosaceae family of small tree fruits in the genus, Prunus. Some of the common “drupe” family fruits are plums, peaches, apricots etc. Although several species of cherries exist, two popular cultivars are wild or sweet-cherry, and sour or tart-cherry. While sweet cherries belong to the species of Prunus avium, tart variety belongs to that of Prunus cerasus..',
      						'The evergreen grapefruit trees usually grow to around 5–6 meters (16–20 ft) tall, although they can reach 13–15 m (43–49 ft). The leaves are glossy dark green, long (up to 15 centimeters (5.9 in)) and thin. It produces 5 cm (2 in) white four-petaled flowers. The fruit is yellow-orange skinned and generally an oblate spheroid in shape; it ranges in diameter from 10–15 cm (3.9–5.9 in). The flesh is segmented and acidic, varying in color depending on the cultivars, which include white, pink and red pulps of varying sweetness (generally, the redder varieties are sweeter). The 1929 US Ruby Red (of the Redblush variety) has the first grapefruit patent.',
      						'One of the most prized and popular fruits, pineapple or "ananas" has an interesting history to narrate. Originally indigenous to local Paraguayans in South America, it spread from its native land by the local Indians up through the South and Central Americas and to the West Indies. Later, it was brought to Spain when Columbus discovered Americas’ in 1493. In the 15th and 16th centuries, it spread to rest of the world by the European sailors (just like tomatoes) who carried it along with them to protect themselves from scurvy, a disease caused by the deficiency of vitamin C.',
      						'Delicious, rich-red, sweet, yet gently tangy strawberries are among the most popular berries. These berries are native to Europe, however, nowadays cultivated in many temperate regions all over the world as an important commercial crop. Botanically, the plant is a low-growing runner (creeper) belonging to the family of Rosaceae, in the genus: Fragaria.',
      						'Guava is another tropical fruit rich in high-profile nutrients. With its unique flavor, taste, and health-promoting qualities, the fruit easily fits into the category of new functional foods, often labelled as “super-fruits.”It is an evergreen, tropical shrub or low-growing small tree probably originated in the central Americas. Guavas actually thrive well under both humid and dry climates and can tolerate brief periods of cold spells, but can only withstand a few degrees of frost. Its adaptability into ranging emvironments makes it a favorite commercial crop in some tropical areas'],
      		'img':['../images/apple.jpg','../images/mango.jpg','../images/orange.jpg','../images/lemon.jpg','../images/banana.jpg','../images/cherry.jpg','../images/grape.jpg','../images/pineapple.jpg','../images/strawberry.jpg','../images/guava.jpg']	

      	};
      	$scope.name=$scope.details.name[$stateParams.key];
      	$scope.desc=$scope.details.description[$stateParams.key];
      	$scope.img=$scope.details.img[$stateParams.key];
		console.log($stateParams.key);
      }
    })
});