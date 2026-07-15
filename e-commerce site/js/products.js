const PRODUCTS = [
  {
    id: 1, name: "Royal Banarasi Silk Saree", code: "ET-SAR-001", price: 4999,
    description: "Exquisite Banarasi silk saree with intricate gold zari work and traditional motifs. Perfect for weddings and festive occasions.",
    fabric: "Silk", occasion: "Wedding", category: "Sarees", subcategory: "Silk Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Red", "Maroon", "Gold"],
    images: ["https://picsum.photos/seed/saree1/600/800", "https://picsum.photos/seed/saree1b/600/800", "https://picsum.photos/seed/saree1c/600/800"],
    badge: "Bestseller", rating: 4.8, reviews: 124
  },
  {
    id: 2, name: "Elegant Georgette Party Saree", code: "ET-SAR-002", price: 2499,
    description: "Flowing georgette saree with sequin embellishments and a stunning pallu design for evening events.",
    fabric: "Georgette", occasion: "Party", category: "Sarees", subcategory: "Party Wear Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Navy Blue", "Wine", "Black"],
    images: ["https://picsum.photos/seed/saree2/600/800", "https://picsum.photos/seed/saree2b/600/800", "https://picsum.photos/seed/saree2c/600/800"],
    badge: "New", rating: 4.6, reviews: 87
  },
  {
    id: 3, name: "Cotton Handloom Daily Saree", code: "ET-SAR-003", price: 899,
    description: "Comfortable handloom cotton saree with simple border patterns. Ideal for everyday elegance.",
    fabric: "Cotton", occasion: "Daily Wear", category: "Sarees", subcategory: "Cotton Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["White", "Yellow", "Green"],
    images: ["https://picsum.photos/seed/saree3/600/800", "https://picsum.photos/seed/saree3b/600/800", "https://picsum.photos/seed/saree3c/600/800"],
    badge: "", rating: 4.4, reviews: 203
  },
  {
    id: 4, name: "Designer Chiffon Floral Saree", code: "ET-SAR-004", price: 1899,
    description: "Lightweight chiffon saree with beautiful floral prints and satin border. Effortlessly graceful.",
    fabric: "Chiffon", occasion: "Casual", category: "Sarees", subcategory: "Designer Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Peach", "Lavender", "Mint Green"],
    images: ["https://picsum.photos/seed/saree4/600/800", "https://picsum.photos/seed/saree4b/600/800", "https://picsum.photos/seed/saree4c/600/800"],
    badge: "New", rating: 4.7, reviews: 56
  },
  {
    id: 5, name: "Traditional Kanjivaram Silk Saree", code: "ET-SAR-005", price: 6999,
    description: "Authentic Kanjivaram silk with temple border and rich pallu. A timeless heirloom piece.",
    fabric: "Silk", occasion: "Wedding", category: "Sarees", subcategory: "Silk Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["Royal Blue", "Magenta", "Emerald Green"],
    images: ["https://picsum.photos/seed/saree5/600/800", "https://picsum.photos/seed/saree5b/600/800", "https://picsum.photos/seed/saree5c/600/800"],
    badge: "Premium", rating: 4.9, reviews: 78
  },
  {
    id: 6, name: "Printed Rayon Casual Saree", code: "ET-SAR-006", price: 699,
    description: "Soft rayon saree with contemporary prints. Comfortable and stylish for daily wear.",
    fabric: "Rayon", occasion: "Daily Wear", category: "Sarees", subcategory: "Daily Wear Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["Blue", "Pink", "Orange"],
    images: ["https://picsum.photos/seed/saree6/600/800", "https://picsum.photos/seed/saree6b/600/800", "https://picsum.photos/seed/saree6c/600/800"],
    badge: "", rating: 4.3, reviews: 312
  },
  {
    id: 7, name: "Net Embroidered Festival Saree", code: "ET-SAR-007", price: 3499,
    description: "Stunning net saree with heavy embroidery and stone work. Perfect for festivals and celebrations.",
    fabric: "Net", occasion: "Festival", category: "Sarees", subcategory: "Party Wear Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Gold", "Rose Gold", "Silver"],
    images: ["https://picsum.photos/seed/saree7/600/800", "https://picsum.photos/seed/saree7b/600/800", "https://picsum.photos/seed/saree7c/600/800"],
    badge: "Trending", rating: 4.7, reviews: 95
  },
  {
    id: 8, name: "Crepe Digital Print Saree", code: "ET-SAR-008", price: 1299,
    description: "Modern crepe saree with digital printed patterns. Lightweight and easy to drape.",
    fabric: "Crepe", occasion: "Office", category: "Sarees", subcategory: "Daily Wear Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["Grey", "Teal", "Rust"],
    images: ["https://picsum.photos/seed/saree8/600/800", "https://picsum.photos/seed/saree8b/600/800", "https://picsum.photos/seed/saree8c/600/800"],
    badge: "", rating: 4.5, reviews: 167
  },
  {
    id: 9, name: "Velvet Winter Saree", code: "ET-SAR-009", price: 3999,
    description: "Luxurious velvet saree with gold border. Perfect for winter weddings and special occasions.",
    fabric: "Velvet", occasion: "Wedding", category: "Sarees", subcategory: "Designer Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["Burgundy", "Deep Purple", "Forest Green"],
    images: ["https://picsum.photos/seed/saree9/600/800", "https://picsum.photos/seed/saree9b/600/800", "https://picsum.photos/seed/saree9c/600/800"],
    badge: "Premium", rating: 4.8, reviews: 42
  },
  {
    id: 10, name: "Linen Office Wear Saree", code: "ET-SAR-010", price: 1599,
    description: "Elegant linen saree with minimal border. Crisp and professional for office settings.",
    fabric: "Linen", occasion: "Office", category: "Sarees", subcategory: "Daily Wear Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["Beige", "White", "Light Blue"],
    images: ["https://picsum.photos/seed/saree10/600/800", "https://picsum.photos/seed/saree10b/600/800", "https://picsum.photos/seed/saree10c/600/800"],
    badge: "", rating: 4.6, reviews: 189
  },
  {
    id: 11, name: "Silk Blend Festive Saree", code: "ET-SAR-011", price: 2799,
    description: "Rich silk blend saree with traditional border and modern color combinations.",
    fabric: "Silk", occasion: "Festival", category: "Sarees", subcategory: "Silk Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Turquoise", "Coral", "Gold"],
    images: ["https://picsum.photos/seed/saree11/600/800", "https://picsum.photos/seed/saree11b/600/800", "https://picsum.photos/seed/saree11c/600/800"],
    badge: "New", rating: 4.5, reviews: 63
  },
  {
    id: 12, name: "Chiffon Ruffle Saree", code: "ET-SAR-012", price: 2199,
    description: "Trendy chiffon saree with ruffle borders. Contemporary style for modern women.",
    fabric: "Chiffon", occasion: "Party", category: "Sarees", subcategory: "Party Wear Sarees",
    ageGroup: "Teen Girls", sizes: ["Free Size"], colors: ["Blush Pink", "Lilac", "Sky Blue"],
    images: ["https://picsum.photos/seed/saree12/600/800", "https://picsum.photos/seed/saree12b/600/800", "https://picsum.photos/seed/saree12c/600/800"],
    badge: "Trending", rating: 4.7, reviews: 71
  },
  {
    id: 13, name: "Georgette Bandhani Saree", code: "ET-SAR-013", price: 3299,
    description: "Traditional bandhani print on pure georgette. Vibrant colors with authentic Rajasthani charm.",
    fabric: "Georgette", occasion: "Festival", category: "Sarees", subcategory: "Designer Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["Red", "Yellow", "Orange"],
    images: ["https://picsum.photos/seed/saree13/600/800", "https://picsum.photos/seed/saree13b/600/800", "https://picsum.photos/seed/saree13c/600/800"],
    badge: "", rating: 4.6, reviews: 98
  },
  {
    id: 14, name: "Cotton Printed Summer Saree", code: "ET-SAR-014", price: 549,
    description: "Breathable cotton saree with block prints. Perfect for hot summer days.",
    fabric: "Cotton", occasion: "Daily Wear", category: "Sarees", subcategory: "Cotton Sarees",
    ageGroup: "Senior Women", sizes: ["Free Size"], colors: ["White-Blue", "White-Green", "White-Pink"],
    images: ["https://picsum.photos/seed/saree14/600/800", "https://picsum.photos/seed/saree14b/600/800", "https://picsum.photos/seed/saree14c/600/800"],
    badge: "", rating: 4.4, reviews: 256
  },
  {
    id: 15, name: "Designer Tissue Saree", code: "ET-SAR-015", price: 5499,
    description: "Shimmering tissue saree with embroidery. Red-carpet ready elegance for special events.",
    fabric: "Georgette", occasion: "Party", category: "Sarees", subcategory: "Designer Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Champagne Gold", "Rose Gold", "Silver"],
    images: ["https://picsum.photos/seed/saree15/600/800", "https://picsum.photos/seed/saree15b/600/800", "https://picsum.photos/seed/saree15c/600/800"],
    badge: "Premium", rating: 4.9, reviews: 34
  },
  {
    id: 16, name: "Silk Cotton Blend Saree", code: "ET-SAR-016", price: 1199,
    description: "Versatile silk-cotton blend with zari border. Comfort meets traditional elegance.",
    fabric: "Cotton", occasion: "Traditional", category: "Sarees", subcategory: "Cotton Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["Maroon", "Navy", "Bottle Green"],
    images: ["https://picsum.photos/seed/saree16/600/800", "https://picsum.photos/seed/saree16b/600/800", "https://picsum.photos/seed/saree16c/600/800"],
    badge: "", rating: 4.5, reviews: 145
  },
  {
    id: 17, name: "Linen Cotton Casual Saree", code: "ET-SAR-017", price: 1399,
    description: "Relaxed linen cotton saree with tassels. Breezy comfort with understated style.",
    fabric: "Linen", occasion: "Casual", category: "Sarees", subcategory: "Cotton Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Indigo", "Olive", "Terracotta"],
    images: ["https://picsum.photos/seed/saree17/600/800", "https://picsum.photos/seed/saree17b/600/800", "https://picsum.photos/seed/saree17c/600/800"],
    badge: "", rating: 4.6, reviews: 112
  },
  {
    id: 18, name: "Crepe Western Print Saree", code: "ET-SAR-018", price: 1699,
    description: "Fusion crepe saree with geometric prints. Indo-western style for the modern woman.",
    fabric: "Crepe", occasion: "Party", category: "Sarees", subcategory: "Designer Sarees",
    ageGroup: "Teen Girls", sizes: ["Free Size"], colors: ["Black-Gold", "White-Silver", "Pink-Grey"],
    images: ["https://picsum.photos/seed/saree18/600/800", "https://picsum.photos/seed/saree18b/600/800", "https://picsum.photos/seed/saree18c/600/800"],
    badge: "New", rating: 4.4, reviews: 48
  },
  {
    id: 19, name: "Banarasi Organza Saree", code: "ET-SAR-019", price: 7499,
    description: "Exquisite organza saree with Banarasi weave. Sheer elegance for grand occasions.",
    fabric: "Silk", occasion: "Wedding", category: "Sarees", subcategory: "Silk Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Ivory Gold", "Pink Gold", "Lavender Gold"],
    images: ["https://picsum.photos/seed/saree19/600/800", "https://picsum.photos/seed/saree19b/600/800", "https://picsum.photos/seed/saree19c/600/800"],
    badge: "Premium", rating: 4.9, reviews: 29
  },
  {
    id: 20, name: "Chiffon Ombre Saree", code: "ET-SAR-020", price: 1999,
    description: "Beautiful ombre gradient chiffon saree. Dreamy color transitions for ethereal beauty.",
    fabric: "Chiffon", occasion: "Party", category: "Sarees", subcategory: "Party Wear Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Peach-Pink", "Blue-Purple", "Yellow-Orange"],
    images: ["https://picsum.photos/seed/saree20/600/800", "https://picsum.photos/seed/saree20b/600/800", "https://picsum.photos/seed/saree20c/600/800"],
    badge: "Trending", rating: 4.7, reviews: 83
  },
  {
    id: 21, name: "Anarkali Floor Length Kurti", code: "ET-KUR-001", price: 1899,
    description: "Graceful Anarkali kurti with floor-length hem and intricate thread work. Royal and feminine.",
    fabric: "Georgette", occasion: "Party", category: "Kurtis", subcategory: "Party Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Teal", "Wine", "Gold"],
    images: ["https://picsum.photos/seed/kurti1/600/800", "https://picsum.photos/seed/kurti1b/600/800", "https://picsum.photos/seed/kurti1c/600/800"],
    badge: "Bestseller", rating: 4.7, reviews: 156
  },
  {
    id: 22, name: "Cotton A-Line Kurti", code: "ET-KUR-002", price: 699,
    description: "Simple yet elegant cotton A-line kurti. Perfect for everyday comfort and style.",
    fabric: "Cotton", occasion: "Daily Wear", category: "Kurtis", subcategory: "Daily Wear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Sky Blue", "Lemon"],
    images: ["https://picsum.photos/seed/kurti2/600/800", "https://picsum.photos/seed/kurti2b/600/800", "https://picsum.photos/seed/kurti2c/600/800"],
    badge: "", rating: 4.3, reviews: 289
  },
  {
    id: 23, name: "Rayon Print Palazzo Kurti Set", code: "ET-KUR-003", price: 1299,
    description: "Coordinated kurti and palazzo set in soft rayon with contemporary prints.",
    fabric: "Rayon", occasion: "Casual", category: "Kurtis", subcategory: "Casual Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Mustard", "Coral", "Teal"],
    images: ["https://picsum.photos/seed/kurti3/600/800", "https://picsum.photos/seed/kurti3b/600/800", "https://picsum.photos/seed/kurti3c/600/800"],
    badge: "New", rating: 4.6, reviews: 78
  },
  {
    id: 24, name: "Silk Embroidered Kurti", code: "ET-KUR-004", price: 2499,
    description: "Luxurious silk kurti with detailed zardozi embroidery. Perfect for festive celebrations.",
    fabric: "Silk", occasion: "Festival", category: "Kurtis", subcategory: "Ethnic Wear",
    ageGroup: "Adults", sizes: ["M", "L", "XL", "XXL"], colors: ["Maroon", "Royal Blue", "Emerald"],
    images: ["https://picsum.photos/seed/kurti4/600/800", "https://picsum.photos/seed/kurti4b/600/800", "https://picsum.photos/seed/kurti4c/600/800"],
    badge: "Premium", rating: 4.8, reviews: 67
  },
  {
    id: 25, name: "Linen Office Kurti", code: "ET-KUR-005", price: 1199,
    description: "Professional linen kurti with minimalist design. Smart and sophisticated for the workplace.",
    fabric: "Linen", occasion: "Office", category: "Kurtis", subcategory: "Office Wear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Beige", "Grey", "Navy"],
    images: ["https://picsum.photos/seed/kurti5/600/800", "https://picsum.photos/seed/kurti5b/600/800", "https://picsum.photos/seed/kurti5c/600/800"],
    badge: "", rating: 4.5, reviews: 198
  },
  {
    id: 26, name: "Chikankari White Kurti", code: "ET-KUR-006", price: 1599,
    description: "Delicate Lucknowi chikankari kurti on white cotton. Timeless elegance from the city of nawabs.",
    fabric: "Cotton", occasion: "Traditional", category: "Kurtis", subcategory: "Ethnic Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Ivory", "Pastel Pink"],
    images: ["https://picsum.photos/seed/kurti6/600/800", "https://picsum.photos/seed/kurti6b/600/800", "https://picsum.photos/seed/kurti6c/600/800"],
    badge: "Bestseller", rating: 4.8, reviews: 234
  },
  {
    id: 27, name: "Georgette Sharara Set", code: "ET-KUR-007", price: 2899,
    description: "Trendy sharara set with georgette kurti and flared pants. Contemporary ethnic glamour.",
    fabric: "Georgette", occasion: "Party", category: "Kurtis", subcategory: "Party Wear",
    ageGroup: "Teen Girls", sizes: ["S", "M", "L", "XL"], colors: ["Lilac", "Mint", "Peach"],
    images: ["https://picsum.photos/seed/kurti7/600/800", "https://picsum.photos/seed/kurti7b/600/800", "https://picsum.photos/seed/kurti7c/600/800"],
    badge: "Trending", rating: 4.7, reviews: 89
  },
  {
    id: 28, name: "Cotton Short Kurti", code: "ET-KUR-008", price: 499,
    description: "Casual short kurti perfect for pairing with jeans or leggings. Everyday essential.",
    fabric: "Cotton", occasion: "Casual", category: "Kurtis", subcategory: "Casual Wear",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Yellow", "Pink", "Blue"],
    images: ["https://picsum.photos/seed/kurti8/600/800", "https://picsum.photos/seed/kurti8b/600/800", "https://picsum.photos/seed/kurti8c/600/800"],
    badge: "", rating: 4.2, reviews: 345
  },
  {
    id: 29, name: "Velvet Winter Kurti", code: "ET-KUR-009", price: 1999,
    description: "Rich velvet kurti with gold buttons. Warm and luxurious for winter gatherings.",
    fabric: "Velvet", occasion: "Party", category: "Kurtis", subcategory: "Party Wear",
    ageGroup: "Adults", sizes: ["M", "L", "XL", "XXL"], colors: ["Burgundy", "Navy", "Black"],
    images: ["https://picsum.photos/seed/kurti9/600/800", "https://picsum.photos/seed/kurti9b/600/800", "https://picsum.photos/seed/kurti9c/600/800"],
    badge: "", rating: 4.6, reviews: 112
  },
  {
    id: 30, name: "Indigo Block Print Kurti", code: "ET-KUR-010", price: 899,
    description: "Authentic indigo block-printed kurti from Jaipur. Artisanal charm meets modern silhouette.",
    fabric: "Cotton", occasion: "Casual", category: "Kurtis", subcategory: "Casual Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Indigo", "White", "Rust"],
    images: ["https://picsum.photos/seed/kurti10/600/800", "https://picsum.photos/seed/kurti10b/600/800", "https://picsum.photos/seed/kurti10c/600/800"],
    badge: "", rating: 4.5, reviews: 167
  },
  {
    id: 31, name: "Mirror Work Kurti", code: "ET-KUR-011", price: 1399,
    description: "Vibrant kurti adorned with traditional mirror work. Bright and festive for celebrations.",
    fabric: "Cotton", occasion: "Festival", category: "Kurtis", subcategory: "Ethnic Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Orange", "Green", "Red"],
    images: ["https://picsum.photos/seed/kurti11/600/800", "https://picsum.photos/seed/kurti11b/600/800", "https://picsum.photos/seed/kurti11c/600/800"],
    badge: "New", rating: 4.6, reviews: 54
  },
  {
    id: 32, name: "Peplum Kurti with Dhoti Pants", code: "ET-KUR-012", price: 1799,
    description: "Fusion peplum kurti paired with stylish dhoti pants. Modern ethnic fashion at its best.",
    fabric: "Crepe", occasion: "Party", category: "Kurtis", subcategory: "Party Wear",
    ageGroup: "Teen Girls", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Wine", "Teal"],
    images: ["https://picsum.photos/seed/kurti12/600/800", "https://picsum.photos/seed/kurti12b/600/800", "https://picsum.photos/seed/kurti12c/600/800"],
    badge: "Trending", rating: 4.7, reviews: 73
  },
  {
    id: 33, name: "Kantha Stitch Kurti", code: "ET-KUR-013", price: 1099,
    description: "Beautiful Bengali kantha stitch kurti. Handcrafted running stitch patterns on soft cotton.",
    fabric: "Cotton", occasion: "Casual", category: "Kurtis", subcategory: "Casual Wear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Red-White", "Blue-White", "Green-White"],
    images: ["https://picsum.photos/seed/kurti13/600/800", "https://picsum.photos/seed/kurti13b/600/800", "https://picsum.photos/seed/kurti13c/600/800"],
    badge: "", rating: 4.5, reviews: 128
  },
  {
    id: 34, name: "Tiered Maxi Kurti", code: "ET-KUR-014", price: 1499,
    description: "Romantic tiered maxi kurti with lace details. Feminine and flowing silhouette.",
    fabric: "Rayon", occasion: "Casual", category: "Kurtis", subcategory: "Casual Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Dusty Rose", "Sage", "Cream"],
    images: ["https://picsum.photos/seed/kurti14/600/800", "https://picsum.photos/seed/kurti14b/600/800", "https://picsum.photos/seed/kurti14c/600/800"],
    badge: "New", rating: 4.6, reviews: 62
  },
  {
    id: 35, name: "Asymmetric Hem Kurti", code: "ET-KUR-015", price: 999,
    description: "Contemporary asymmetric hem kurti with side slit. Chic and fashion-forward.",
    fabric: "Rayon", occasion: "Office", category: "Kurtis", subcategory: "Office Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Charcoal", "Wine", "Teal"],
    images: ["https://picsum.photos/seed/kurti15/600/800", "https://picsum.photos/seed/kurti15b/600/800", "https://picsum.photos/seed/kurti15c/600/800"],
    badge: "", rating: 4.4, reviews: 145
  },
  {
    id: 36, name: "Bridal Red Lehenga", code: "ET-LEH-001", price: 12999,
    description: "Stunning bridal lehenga in rich red with heavy gold embroidery. A dream wedding outfit.",
    fabric: "Silk", occasion: "Wedding", category: "Lehengas", subcategory: "Wedding",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Red", "Maroon"],
    images: ["https://picsum.photos/seed/leh1/600/800", "https://picsum.photos/seed/leh1b/600/800", "https://picsum.photos/seed/leh1c/600/800"],
    badge: "Premium", rating: 4.9, reviews: 45
  },
  {
    id: 37, name: "Pastel Floral Lehenga", code: "ET-LEH-002", price: 5999,
    description: "Soft pastel lehenga with 3D floral applique work. Romantic and contemporary bridal wear.",
    fabric: "Georgette", occasion: "Wedding", category: "Lehengas", subcategory: "Wedding",
    ageGroup: "Young Women", sizes: ["S", "M", "L"], colors: ["Blush Pink", "Lilac", "Mint"],
    images: ["https://picsum.photos/seed/leh2/600/800", "https://picsum.photos/seed/leh2b/600/800", "https://picsum.photos/seed/leh2c/600/800"],
    badge: "New", rating: 4.8, reviews: 67
  },
  {
    id: 38, name: "Party Wear Net Lehenga", code: "ET-LEH-003", price: 4499,
    description: "Glamorous net lehenga with sequin embellishments. Show-stopping party outfit.",
    fabric: "Net", occasion: "Party", category: "Lehengas", subcategory: "Party Wear",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["Gold", "Rose Gold", "Black"],
    images: ["https://picsum.photos/seed/leh3/600/800", "https://picsum.photos/seed/leh3b/600/800", "https://picsum.photos/seed/leh3c/600/800"],
    badge: "Trending", rating: 4.7, reviews: 89
  },
  {
    id: 39, name: "Mirror Work Festival Lehenga", code: "ET-LEH-004", price: 3499,
    description: "Colorful lehenga with traditional mirror work and scalloped hem. Perfect for Navratri.",
    fabric: "Cotton", occasion: "Festival", category: "Lehengas", subcategory: "Festival",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Multi-color", "Orange-Red", "Blue-Green"],
    images: ["https://picsum.photos/seed/leh4/600/800", "https://picsum.photos/seed/leh4b/600/800", "https://picsum.photos/seed/leh4c/600/800"],
    badge: "", rating: 4.6, reviews: 112
  },
  {
    id: 40, name: "Velvet Destination Wedding Lehenga", code: "ET-LEH-005", price: 8999,
    description: "Opulent velvet lehenga with crystal embellishments. Grand entrance guaranteed.",
    fabric: "Velvet", occasion: "Wedding", category: "Lehengas", subcategory: "Wedding",
    ageGroup: "Adults", sizes: ["M", "L", "XL"], colors: ["Royal Blue", "Emerald", "Burgundy"],
    images: ["https://picsum.photos/seed/leh5/600/800", "https://picsum.photos/seed/leh5b/600/800", "https://picsum.photos/seed/leh5c/600/800"],
    badge: "Premium", rating: 4.9, reviews: 38
  },
  {
    id: 41, name: "A-Line Chiffon Lehenga", code: "ET-LEH-006", price: 3999,
    description: "Lightweight chiffon lehenga with A-line silhouette. Easy to carry and graceful.",
    fabric: "Chiffon", occasion: "Party", category: "Lehengas", subcategory: "Party Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Powder Blue", "Peach", "Lavender"],
    images: ["https://picsum.photos/seed/leh6/600/800", "https://picsum.photos/seed/leh6b/600/800", "https://picsum.photos/seed/leh6c/600/800"],
    badge: "", rating: 4.6, reviews: 76
  },
  {
    id: 42, name: "Printed Georgette Lehenga Set", code: "ET-LEH-007", price: 2799,
    description: "Breezy printed lehenga set with blouse and dupatta. Affordable luxury for young fashionistas.",
    fabric: "Georgette", occasion: "Casual", category: "Lehengas", subcategory: "Casual",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["Floral Pink", "Floral Blue", "Floral Yellow"],
    images: ["https://picsum.photos/seed/leh7/600/800", "https://picsum.photos/seed/leh7b/600/800", "https://picsum.photos/seed/leh7c/600/800"],
    badge: "", rating: 4.5, reviews: 134
  },
  {
    id: 43, name: "Silk Banarasi Wedding Suit", code: "ET-SAL-001", price: 4999,
    description: "Regal Banarasi silk salwar suit with heavy dupatta. Traditional grandeur for wedding functions.",
    fabric: "Silk", occasion: "Wedding", category: "Salwar Suits", subcategory: "Wedding",
    ageGroup: "Adults", sizes: ["M", "L", "XL", "XXL"], colors: ["Gold", "Maroon", "Royal Blue"],
    images: ["https://picsum.photos/seed/suit1/600/800", "https://picsum.photos/seed/suit1b/600/800", "https://picsum.photos/seed/suit1c/600/800"],
    badge: "Bestseller", rating: 4.8, reviews: 134
  },
  {
    id: 44, name: "Cotton Patiala Suit", code: "ET-SAL-002", price: 999,
    description: "Comfortable Patiala suit with short kurti and pleated salwar. Fun and traditional.",
    fabric: "Cotton", occasion: "Casual", category: "Salwar Suits", subcategory: "Casual",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Yellow", "Green", "Peach"],
    images: ["https://picsum.photos/seed/suit2/600/800", "https://picsum.photos/seed/suit2b/600/800", "https://picsum.photos/seed/suit2c/600/800"],
    badge: "", rating: 4.4, reviews: 256
  },
  {
    id: 45, name: "Anarkali Churidar Set", code: "ET-SAL-003", price: 2299,
    description: "Floor-length Anarkali suit with churidar. Regal silhouette with modern sensibility.",
    fabric: "Georgette", occasion: "Festival", category: "Salwar Suits", subcategory: "Festival",
    ageGroup: "Adults", sizes: ["M", "L", "XL", "XXL"], colors: ["Wine", "Teal", "Dusty Pink"],
    images: ["https://picsum.photos/seed/suit3/600/800", "https://picsum.photos/seed/suit3b/600/800", "https://picsum.photos/seed/suit3c/600/800"],
    badge: "New", rating: 4.7, reviews: 89
  },
  {
    id: 46, name: "Palazzo Suit Set", code: "ET-SAL-004", price: 1599,
    description: "Flowing palazzo suit set with straight kurti. Contemporary ethnic elegance.",
    fabric: "Rayon", occasion: "Office", category: "Salwar Suits", subcategory: "Office Wear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Navy", "Grey", "Olive"],
    images: ["https://picsum.photos/seed/suit4/600/800", "https://picsum.photos/seed/suit4b/600/800", "https://picsum.photos/seed/suit4c/600/800"],
    badge: "", rating: 4.5, reviews: 178
  },
  {
    id: 47, name: "Sharara Suit with Dupatta", code: "ET-SAL-005", price: 3299,
    description: "Designer sharara suit with heavily embroidered dupatta. Mughal-inspired elegance.",
    fabric: "Crepe", occasion: "Party", category: "Salwar Suits", subcategory: "Party Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Lilac", "Mint", "Blush"],
    images: ["https://picsum.photos/seed/suit5/600/800", "https://picsum.photos/seed/suit5b/600/800", "https://picsum.photos/seed/suit5c/600/800"],
    badge: "Trending", rating: 4.7, reviews: 92
  },
  {
    id: 48, name: "Straight Cut Salwar Suit", code: "ET-SAL-006", price: 799,
    description: "Classic straight-cut salwar suit for everyday elegance. Simple and graceful.",
    fabric: "Cotton", occasion: "Daily Wear", category: "Salwar Suits", subcategory: "Daily Wear",
    ageGroup: "Senior Women", sizes: ["M", "L", "XL", "XXL", "3XL"], colors: ["White", "Beige", "Light Green"],
    images: ["https://picsum.photos/seed/suit6/600/800", "https://picsum.photos/seed/suit6b/600/800", "https://picsum.photos/seed/suit6c/600/800"],
    badge: "", rating: 4.3, reviews: 345
  },
  {
    id: 49, name: "Punjabi Phulkari Suit", code: "ET-SAL-007", price: 2699,
    description: "Vibrant Punjabi suit with authentic phulkari embroidery. Heritage art meets fashion.",
    fabric: "Cotton", occasion: "Festival", category: "Salwar Suits", subcategory: "Festival",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Orange", "Hot Pink", "Yellow"],
    images: ["https://picsum.photos/seed/suit7/600/800", "https://picsum.photos/seed/suit7b/600/800", "https://picsum.photos/seed/suit7c/600/800"],
    badge: "", rating: 4.6, reviews: 108
  },
  {
    id: 50, name: "Linen Minimalist Suit", code: "ET-SAL-008", price: 1899,
    description: "Clean-lined linen suit with modern tailoring. Sophisticated simplicity for the modern woman.",
    fabric: "Linen", occasion: "Office", category: "Salwar Suits", subcategory: "Office Wear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Ivory", "Stone", "Sage"],
    images: ["https://picsum.photos/seed/suit8/600/800", "https://picsum.photos/seed/suit8b/600/800", "https://picsum.photos/seed/suit8c/600/800"],
    badge: "", rating: 4.5, reviews: 156
  },
  {
    id: 51, name: "Bridal Heavy Gown", code: "ET-GWN-001", price: 9999,
    description: "Magnificent bridal gown with cathedral train and crystal beading. Fairytale wedding dreams.",
    fabric: "Silk", occasion: "Wedding", category: "Gowns", subcategory: "Bridal",
    ageGroup: "Young Women", sizes: ["S", "M", "L"], colors: ["Ivory", "Champagne", "Blush"],
    images: ["https://picsum.photos/seed/gown1/600/800", "https://picsum.photos/seed/gown1b/600/800", "https://picsum.photos/seed/gown1c/600/800"],
    badge: "Premium", rating: 4.9, reviews: 23
  },
  {
    id: 52, name: "Cocktail Party Gown", code: "ET-GWN-002", price: 4999,
    description: "Stunning cocktail gown with thigh-high slit and sequin bodice. Dazzle at evening events.",
    fabric: "Crepe", occasion: "Party", category: "Gowns", subcategory: "Party",
    ageGroup: "Young Women", sizes: ["XS", "S", "M", "L"], colors: ["Black", "Gold", "Red"],
    images: ["https://picsum.photos/seed/gown2/600/800", "https://picsum.photos/seed/gown2b/600/800", "https://picsum.photos/seed/gown2c/600/800"],
    badge: "Bestseller", rating: 4.8, reviews: 67
  },
  {
    id: 53, name: "Ball Gown Princess Style", code: "ET-GWN-003", price: 7499,
    description: "Voluminous ball gown with princess cut and tulle skirt. Made for fairy-tale moments.",
    fabric: "Net", occasion: "Party", category: "Gowns", subcategory: "Party",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M"], colors: ["Cinderella Blue", "Rose Pink", "Lavender"],
    images: ["https://picsum.photos/seed/gown3/600/800", "https://picsum.photos/seed/gown3b/600/800", "https://picsum.photos/seed/gown3c/600/800"],
    badge: "New", rating: 4.8, reviews: 45
  },
  {
    id: 54, name: "Mermaid Silhouette Gown", code: "ET-GWN-004", price: 5999,
    description: "Figure-hugging mermaid gown with lace overlay. Sophisticated and alluring.",
    fabric: "Crepe", occasion: "Party", category: "Gowns", subcategory: "Party",
    ageGroup: "Adults", sizes: ["S", "M", "L"], colors: ["Emerald", "Navy", "Wine"],
    images: ["https://picsum.photos/seed/gown4/600/800", "https://picsum.photos/seed/gown4b/600/800", "https://picsum.photos/seed/gown4c/600/800"],
    badge: "", rating: 4.7, reviews: 56
  },
  {
    id: 55, name: "A-Line Reception Gown", code: "ET-GWN-005", price: 4499,
    description: "Elegant A-line gown with sweetheart neckline. Timeless beauty for reception events.",
    fabric: "Georgette", occasion: "Wedding", category: "Gowns", subcategory: "Bridal",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Peach", "Dusty Rose", "Ivory"],
    images: ["https://picsum.photos/seed/gown5/600/800", "https://picsum.photos/seed/gown5b/600/800", "https://picsum.photos/seed/gown5c/600/800"],
    badge: "", rating: 4.7, reviews: 78
  },
  {
    id: 56, name: "Maxi Dress Floral", code: "ET-DRS-001", price: 1499,
    description: "Romantic floral maxi dress with flowy silhouette. Perfect garden party or brunch outfit.",
    fabric: "Chiffon", occasion: "Casual", category: "Long Dresses", subcategory: "Casual Dresses",
    ageGroup: "Young Women", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Floral Pink", "Floral Blue", "Floral Cream"],
    images: ["https://picsum.photos/seed/dress1/600/800", "https://picsum.photos/seed/dress1b/600/800", "https://picsum.photos/seed/dress1c/600/800"],
    badge: "Bestseller", rating: 4.7, reviews: 198
  },
  {
    id: 57, name: "Little Black Dress", code: "ET-DRS-002", price: 2299,
    description: "Classic LBD with modern cut-outs. The timeless essential every woman needs.",
    fabric: "Crepe", occasion: "Party", category: "Long Dresses", subcategory: "Party Dresses",
    ageGroup: "Young Women", sizes: ["XS", "S", "M", "L"], colors: ["Black"],
    images: ["https://picsum.photos/seed/dress2/600/800", "https://picsum.photos/seed/dress2b/600/800", "https://picsum.photos/seed/dress2c/600/800"],
    badge: "", rating: 4.8, reviews: 267
  },
  {
    id: 58, name: "Bohemian Summer Dress", code: "ET-DRS-003", price: 999,
    description: "Free-spirited boho dress with tiered skirt and tassel details. Effortlessly chic.",
    fabric: "Rayon", occasion: "Casual", category: "Long Dresses", subcategory: "Casual Dresses",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["Terracotta", "Olive", "Rust"],
    images: ["https://picsum.photos/seed/dress3/600/800", "https://picsum.photos/seed/dress3b/600/800", "https://picsum.photos/seed/dress3c/600/800"],
    badge: "Trending", rating: 4.6, reviews: 145
  },
  {
    id: 59, name: "Formal Wrap Dress", code: "ET-DRS-004", price: 1799,
    description: "Sophisticated wrap dress in luxe fabric. Professional polish with feminine charm.",
    fabric: "Crepe", occasion: "Office", category: "Long Dresses", subcategory: "Office Wear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Navy", "Charcoal", "Burgundy"],
    images: ["https://picsum.photos/seed/dress4/600/800", "https://picsum.photos/seed/dress4b/600/800", "https://picsum.photos/seed/dress4c/600/800"],
    badge: "", rating: 4.5, reviews: 189
  },
  {
    id: 60, name: "Sequin Party Dress", code: "ET-DRS-005", price: 2999,
    description: "Head-turning fully sequined mini dress. Light up every room you walk into.",
    fabric: "Net", occasion: "Party", category: "Long Dresses", subcategory: "Party Dresses",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M"], colors: ["Gold", "Silver", "Rose Gold"],
    images: ["https://picsum.photos/seed/dress5/600/800", "https://picsum.photos/seed/dress5b/600/800", "https://picsum.photos/seed/dress5c/600/800"],
    badge: "New", rating: 4.7, reviews: 56
  },
  {
    id: 61, name: "Linen Shirt Dress", code: "ET-DRS-006", price: 1299,
    description: "Effortlessly stylish linen shirt dress. Relaxed fit for comfortable sophistication.",
    fabric: "Linen", occasion: "Casual", category: "Long Dresses", subcategory: "Casual Dresses",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["White", "Khaki", "Sky Blue"],
    images: ["https://picsum.photos/seed/dress6/600/800", "https://picsum.photos/seed/dress6b/600/800", "https://picsum.photos/seed/dress6c/600/800"],
    badge: "", rating: 4.5, reviews: 213
  },
  {
    id: 62, name: "Velvet Evening Dress", code: "ET-DRS-007", price: 3499,
    description: "Luxurious velvet evening dress with off-shoulder neckline. Winter glamour at its finest.",
    fabric: "Velvet", occasion: "Party", category: "Long Dresses", subcategory: "Party Dresses",
    ageGroup: "Adults", sizes: ["S", "M", "L"], colors: ["Emerald", "Burgundy", "Midnight Blue"],
    images: ["https://picsum.photos/seed/dress7/600/800", "https://picsum.photos/seed/dress7b/600/800", "https://picsum.photos/seed/dress7c/600/800"],
    badge: "", rating: 4.8, reviews: 89
  },
  {
    id: 63, name: "Polka Dot Midi Dress", code: "ET-DRS-008", price: 1199,
    description: "Retro-chic polka dot midi dress with cinched waist. Vintage charm meets modern style.",
    fabric: "Crepe", occasion: "Casual", category: "Long Dresses", subcategory: "Casual Dresses",
    ageGroup: "Young Women", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Black-White", "Red-White", "Blue-White"],
    images: ["https://picsum.photos/seed/dress8/600/800", "https://picsum.photos/seed/dress8b/600/800", "https://picsum.photos/seed/dress8c/600/800"],
    badge: "Trending", rating: 4.6, reviews: 134
  },
  {
    id: 64, name: "Cotton Casual Day Dress", code: "ET-DRS-009", price: 799,
    description: "Easy breezy cotton day dress with pockets. Comfort and style for everyday adventures.",
    fabric: "Cotton", occasion: "Casual", category: "Long Dresses", subcategory: "Casual Dresses",
    ageGroup: "Young Women", sizes: ["XS", "S", "M", "L", "XL"], colors: ["White", "Yellow", "Coral"],
    images: ["https://picsum.photos/seed/dress9/600/800", "https://picsum.photos/seed/dress9b/600/800", "https://picsum.photos/seed/dress9c/600/800"],
    badge: "", rating: 4.4, reviews: 278
  },
  {
    id: 65, name: "Tulle Skater Party Dress", code: "ET-DRS-010", price: 1899,
    description: "Playful skater dress with tulle skirt and fitted bodice. Youthful and fun.",
    fabric: "Net", occasion: "Party", category: "Long Dresses", subcategory: "Party Dresses",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["Pink", "Lavender", "Mint"],
    images: ["https://picsum.photos/seed/dress10/600/800", "https://picsum.photos/seed/dress10b/600/800", "https://picsum.photos/seed/dress10c/600/800"],
    badge: "", rating: 4.6, reviews: 112
  },
  {
    id: 66, name: "Western Top - Crop Style", code: "ET-WES-001", price: 599,
    description: "Trendy crop top with puff sleeves. Pair with high-waist bottoms for a chic look.",
    fabric: "Crepe", occasion: "Casual", category: "Western Wear", subcategory: "Tops",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["White", "Black", "Pink"],
    images: ["https://picsum.photos/seed/west1/600/800", "https://picsum.photos/seed/west1b/600/800", "https://picsum.photos/seed/west1c/600/800"],
    badge: "", rating: 4.3, reviews: 345
  },
  {
    id: 67, name: "High-Waist Palazzo Pants", code: "ET-WES-002", price: 899,
    description: "Flattering high-waist palazzo pants in flowing fabric. Effortlessly elegant bottom wear.",
    fabric: "Rayon", occasion: "Casual", category: "Western Wear", subcategory: "Bottoms",
    ageGroup: "Young Women", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Black", "Beige", "Navy"],
    images: ["https://picsum.photos/seed/west2/600/800", "https://picsum.photos/seed/west2b/600/800", "https://picsum.photos/seed/west2c/600/800"],
    badge: "Bestseller", rating: 4.5, reviews: 267
  },
  {
    id: 68, name: "Denim Jacket", code: "ET-WES-003", price: 1499,
    description: "Classic denim jacket with distressed details. A wardrobe staple for all seasons.",
    fabric: "Cotton", occasion: "Casual", category: "Western Wear", subcategory: "Outerwear",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Blue", "Light Blue", "Black"],
    images: ["https://picsum.photos/seed/west3/600/800", "https://picsum.photos/seed/west3b/600/800", "https://picsum.photos/seed/west3c/600/800"],
    badge: "", rating: 4.6, reviews: 189
  },
  {
    id: 69, name: "Blazer - Office Chic", code: "ET-WES-004", price: 1999,
    description: "Tailored blazer with padded shoulders. Power dressing for the modern professional.",
    fabric: "Crepe", occasion: "Office", category: "Western Wear", subcategory: "Outerwear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Navy", "Charcoal"],
    images: ["https://picsum.photos/seed/west4/600/800", "https://picsum.photos/seed/west4b/600/800", "https://picsum.photos/seed/west4c/600/800"],
    badge: "", rating: 4.7, reviews: 156
  },
  {
    id: 70, name: "Striped Co-ord Set", code: "ET-WES-005", price: 1699,
    description: "Matching striped top and shorts set. Co-ordinate dressing made easy.",
    fabric: "Cotton", occasion: "Casual", category: "Western Wear", subcategory: "Co-ords",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["Blue-White", "Black-White", "Pink-White"],
    images: ["https://picsum.photos/seed/west5/600/800", "https://picsum.photos/seed/west5b/600/800", "https://picsum.photos/seed/west5c/600/800"],
    badge: "New", rating: 4.5, reviews: 78
  },
  {
    id: 71, name: "Knitwear Sweater", code: "ET-WES-006", price: 1299,
    description: "Cozy knit sweater with ribbed texture. Warmth and style for cooler days.",
    fabric: "Cotton", occasion: "Casual", category: "Western Wear", subcategory: "Knitwear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Cream", "Camel", "Grey"],
    images: ["https://picsum.photos/seed/west6/600/800", "https://picsum.photos/seed/west6b/600/800", "https://picsum.photos/seed/west6c/600/800"],
    badge: "", rating: 4.4, reviews: 213
  },
  {
    id: 72, name: "Kids Frock - Princess Style", code: "ET-KID-001", price: 699,
    description: "Adorable princess-style frock with tulle skirt and satin bow. Little girls feel like royalty.",
    fabric: "Net", occasion: "Party", category: "Long Dresses", subcategory: "Kids",
    ageGroup: "Kids", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], colors: ["Pink", "Lavender", "Mint"],
    images: ["https://picsum.photos/seed/kid1/600/800", "https://picsum.photos/seed/kid1b/600/800", "https://picsum.photos/seed/kid1c/600/800"],
    badge: "Bestseller", rating: 4.8, reviews: 167
  },
  {
    id: 73, name: "Kids Ethnic Lehenga Choli", code: "ET-KID-002", price: 999,
    description: "Mini lehenga choli set with traditional mirror work. Festive outfit for little divas.",
    fabric: "Cotton", occasion: "Festival", category: "Lehengas", subcategory: "Kids",
    ageGroup: "Kids", sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"], colors: ["Red", "Yellow", "Green"],
    images: ["https://picsum.photos/seed/kid2/600/800", "https://picsum.photos/seed/kid2b/600/800", "https://picsum.photos/seed/kid2c/600/800"],
    badge: "New", rating: 4.7, reviews: 89
  },
  {
    id: 74, name: "Kids Casual T-shirt Dress", code: "ET-KID-003", price: 399,
    description: "Fun and comfortable t-shirt dress with playful prints. Easy everyday wear for kids.",
    fabric: "Cotton", occasion: "Casual", category: "Long Dresses", subcategory: "Kids",
    ageGroup: "Kids", sizes: ["3-4Y", "5-6Y", "7-8Y"], colors: ["Yellow", "Pink", "Blue"],
    images: ["https://picsum.photos/seed/kid3/600/800", "https://picsum.photos/seed/kid3b/600/800", "https://picsum.photos/seed/kid3c/600/800"],
    badge: "", rating: 4.5, reviews: 234
  },
  {
    id: 75, name: "Teeny Kurti Set with Leggings", code: "ET-KID-004", price: 549,
    description: "Cute kurti and legging set for young girls. Comfortable ethnic wear for school events.",
    fabric: "Cotton", occasion: "Casual", category: "Kurtis", subcategory: "Kids",
    ageGroup: "Kids", sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], colors: ["Pink", "Lavender", "Peach"],
    images: ["https://picsum.photos/seed/kid4/600/800", "https://picsum.photos/seed/kid4b/600/800", "https://picsum.photos/seed/kid4c/600/800"],
    badge: "", rating: 4.6, reviews: 156
  },
  {
    id: 76, name: "Designer Clutch Bag", code: "ET-ACC-001", price: 1299,
    description: "Elegant designer clutch with chain strap. Embellished with rhinestones for evening glamour.",
    fabric: "Velvet", occasion: "Party", category: "Accessories", subcategory: "Bags",
    ageGroup: "Young Women", sizes: ["One Size"], colors: ["Gold", "Black", "Rose Gold"],
    images: ["https://picsum.photos/seed/acc1/600/800", "https://picsum.photos/seed/acc1b/600/800", "https://picsum.photos/seed/acc1c/600/800"],
    badge: "Bestseller", rating: 4.6, reviews: 189
  },
  {
    id: 77, name: "Silk Stole / Dupatta", code: "ET-ACC-002", price: 599,
    description: "Pure silk stole with hand-painted motifs. Versatile accessory for any outfit.",
    fabric: "Silk", occasion: "Traditional", category: "Accessories", subcategory: "Stoles",
    ageGroup: "Adults", sizes: ["One Size"], colors: ["Gold", "Maroon", "Teal"],
    images: ["https://picsum.photos/seed/acc2/600/800", "https://picsum.photos/seed/acc2b/600/800", "https://picsum.photos/seed/acc2c/600/800"],
    badge: "", rating: 4.5, reviews: 134
  },
  {
    id: 78, name: "Pearl Jewelry Set", code: "ET-ACC-003", price: 899,
    description: "Classic pearl necklace and earring set. Timeless elegance for traditional and modern outfits.",
    fabric: "Silk", occasion: "Wedding", category: "Accessories", subcategory: "Jewelry",
    ageGroup: "Adults", sizes: ["One Size"], colors: ["White Gold", "Rose Gold", "Gold"],
    images: ["https://picsum.photos/seed/acc3/600/800", "https://picsum.photos/seed/acc3b/600/800", "https://picsum.photos/seed/acc3c/600/800"],
    badge: "", rating: 4.7, reviews: 98
  },
  {
    id: 79, name: "Embroidered Potli Bag", code: "ET-ACC-004", price: 499,
    description: "Traditional potli bag with zardozi embroidery. Complete your ethnic look.",
    fabric: "Silk", occasion: "Festival", category: "Accessories", subcategory: "Bags",
    ageGroup: "Young Women", sizes: ["One Size"], colors: ["Gold", "Red", "Green"],
    images: ["https://picsum.photos/seed/acc4/600/800", "https://picsum.photos/seed/acc4b/600/800", "https://picsum.photos/seed/acc4c/600/800"],
    badge: "", rating: 4.4, reviews: 167
  },
  {
    id: 80, name: "Statement Jhumka Earrings", code: "ET-ACC-005", price: 399,
    description: "Oversized gold-tone jhumka earrings with enamel work. Bold ethnic accessorizing.",
    fabric: "Silk", occasion: "Traditional", category: "Accessories", subcategory: "Jewelry",
    ageGroup: "Young Women", sizes: ["One Size"], colors: ["Gold", "Oxidised Silver", "Rose Gold"],
    images: ["https://picsum.photos/seed/acc5/600/800", "https://picsum.photos/seed/acc5b/600/800", "https://picsum.photos/seed/acc5c/600/800"],
    badge: "Trending", rating: 4.6, reviews: 223
  },
  {
    id: 81, name: "Night Wear Satin Pajama Set", code: "ET-NIT-001", price: 799,
    description: "Luxurious satin pajama set with camisole top. Sweet dreams in soft comfort.",
    fabric: "Crepe", occasion: "Casual", category: "Night Wear", subcategory: "Pajama Sets",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Blush Pink", "Ivory", "Lavender"],
    images: ["https://picsum.photos/seed/night1/600/800", "https://picsum.photos/seed/night1b/600/800", "https://picsum.photos/seed/night1c/600/800"],
    badge: "Bestseller", rating: 4.7, reviews: 198
  },
  {
    id: 82, name: "Cotton Night Gown", code: "ET-NIT-002", price: 499,
    description: "Comfortable cotton night gown with lace trim. Soft and breathable for restful nights.",
    fabric: "Cotton", occasion: "Casual", category: "Night Wear", subcategory: "Night Gowns",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Pink", "Blue"],
    images: ["https://picsum.photos/seed/night2/600/800", "https://picsum.photos/seed/night2b/600/800", "https://picsum.photos/seed/night2c/600/800"],
    badge: "", rating: 4.4, reviews: 312
  },
  {
    id: 83, name: "Silk Robe & Slip Set", code: "ET-NIT-003", price: 1299,
    description: "Satin-finish robe with matching slip. Spa-like luxury for your nighttime routine.",
    fabric: "Crepe", occasion: "Casual", category: "Night Wear", subcategory: "Robes",
    ageGroup: "Young Women", sizes: ["S", "M", "L"], colors: ["Champagne", "Black", "Dusty Rose"],
    images: ["https://picsum.photos/seed/night3/600/800", "https://picsum.photos/seed/night3b/600/800", "https://picsum.photos/seed/night3c/600/800"],
    badge: "Premium", rating: 4.8, reviews: 67
  },
  {
    id: 84, name: "Rayon Lounge Set", code: "ET-NIT-004", price: 699,
    description: "Relaxed lounge set in soft rayon. Perfect for lazy weekends at home.",
    fabric: "Rayon", occasion: "Casual", category: "Night Wear", subcategory: "Lounge Sets",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Grey", "Sage", "Blush"],
    images: ["https://picsum.photos/seed/night4/600/800", "https://picsum.photos/seed/night4b/600/800", "https://picsum.photos/seed/night4c/600/800"],
    badge: "", rating: 4.5, reviews: 145
  },
  {
    id: 85, name: "Elegant Embroidered Kaftan", code: "ET-KID-005", price: 1899,
    description: "Flowing kaftan dress with intricate embroidery. Bohemian luxury for free spirits.",
    fabric: "Georgette", occasion: "Party", category: "Western Wear", subcategory: "Dresses",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Ivory", "Dusty Rose", "Sage"],
    images: ["https://picsum.photos/seed/west7/600/800", "https://picsum.photos/seed/west7b/600/800", "https://picsum.photos/seed/west7c/600/800"],
    badge: "New", rating: 4.7, reviews: 56
  },
  {
    id: 86, name: "Cord Set - Ethnic Fusion", code: "ET-WES-007", price: 1599,
    description: "Indo-western cord set with embroidered jacket. Fusion fashion for the bold.",
    fabric: "Crepe", occasion: "Party", category: "Western Wear", subcategory: "Co-ords",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Black-Gold", "White-Silver", "Wine-Gold"],
    images: ["https://picsum.photos/seed/west8/600/800", "https://picsum.photos/seed/west8b/600/800", "https://picsum.photos/seed/west8c/600/800"],
    badge: "Trending", rating: 4.6, reviews: 78
  },
  {
    id: 87, name: "Printed Tunics", code: "ET-KUR-016", price: 899,
    description: "Vibrant printed tunic top with side slits. Pair with jeans or leggings for a modern look.",
    fabric: "Rayon", occasion: "Casual", category: "Kurtis", subcategory: "Casual Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Abstract Blue", "Abstract Pink", "Abstract Green"],
    images: ["https://picsum.photos/seed/kurti16/600/800", "https://picsum.photos/seed/kurti16b/600/800", "https://picsum.photos/seed/kurti16c/600/800"],
    badge: "", rating: 4.4, reviews: 167
  },
  {
    id: 88, name: "Cold Shoulder Gown", code: "ET-GWN-006", price: 3999,
    description: "Modern cold shoulder gown with cape detail. Statement piece for cocktail events.",
    fabric: "Georgette", occasion: "Party", category: "Gowns", subcategory: "Party",
    ageGroup: "Young Women", sizes: ["S", "M", "L"], colors: ["Black", "Wine", "Royal Blue"],
    images: ["https://picsum.photos/seed/gown6/600/800", "https://picsum.photos/seed/gown6b/600/800", "https://picsum.photos/seed/gown6c/600/800"],
    badge: "", rating: 4.6, reviews: 45
  },
  {
    id: 89, name: "Lehenga with Crop Top", code: "ET-LEH-008", price: 3299,
    description: "Modern lehenga with embellished crop top. Contemporary ethnic fashion for young women.",
    fabric: "Crepe", occasion: "Party", category: "Lehengas", subcategory: "Party Wear",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["Neon Pink", "Electric Blue", "Lime"],
    images: ["https://picsum.photos/seed/leh8/600/800", "https://picsum.photos/seed/leh8b/600/800", "https://picsum.photos/seed/leh8c/600/800"],
    badge: "Trending", rating: 4.7, reviews: 89
  },
  {
    id: 90, name: "Dhoti Style Pants", code: "ET-WES-008", price: 699,
    description: "Fashion-forward dhoti pants in flowy fabric. Indo-western fusion bottom wear.",
    fabric: "Crepe", occasion: "Party", category: "Western Wear", subcategory: "Bottoms",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Gold", "Red"],
    images: ["https://picsum.photos/seed/west9/600/800", "https://picsum.photos/seed/west9b/600/800", "https://picsum.photos/seed/west9c/600/800"],
    badge: "", rating: 4.4, reviews: 134
  },
  {
    id: 91, name: "Ikat Print Saree", code: "ET-SAR-021", price: 1799,
    description: "Authentic ikat weave saree with bold geometric patterns. Artisanal beauty from handloom.",
    fabric: "Cotton", occasion: "Traditional", category: "Sarees", subcategory: "Cotton Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["Red-Black", "Blue-White", "Green-Yellow"],
    images: ["https://picsum.photos/seed/saree21/600/800", "https://picsum.photos/seed/saree21b/600/800", "https://picsum.photos/seed/saree21c/600/800"],
    badge: "", rating: 4.6, reviews: 89
  },
  {
    id: 92, name: "Peplum Gown with Belt", code: "ET-GWN-007", price: 3499,
    description: "Stylish peplum gown with metallic belt accent. Hourglass silhouette guaranteed.",
    fabric: "Crepe", occasion: "Party", category: "Gowns", subcategory: "Party",
    ageGroup: "Adults", sizes: ["S", "M", "L"], colors: ["Emerald", "Navy", "Black"],
    images: ["https://picsum.photos/seed/gown7/600/800", "https://picsum.photos/seed/gown7b/600/800", "https://picsum.photos/seed/gown7c/600/800"],
    badge: "", rating: 4.6, reviews: 67
  },
  {
    id: 93, name: "Cape Style Suit", code: "ET-SAL-009", price: 2799,
    description: "Modern suit with dramatic cape overlay. Contemporary elegance for special occasions.",
    fabric: "Georgette", occasion: "Party", category: "Salwar Suits", subcategory: "Party Wear",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Wine", "Emerald", "Royal Blue"],
    images: ["https://picsum.photos/seed/suit9/600/800", "https://picsum.photos/seed/suit9b/600/800", "https://picsum.photos/seed/suit9c/600/800"],
    badge: "New", rating: 4.7, reviews: 45
  },
  {
    id: 94, name: "Pleated Maxi Skirt", code: "ET-WES-009", price: 899,
    description: "Flowing pleated maxi skirt with elastic waist. Versatile bottom for multiple occasions.",
    fabric: "Crepe", occasion: "Casual", category: "Western Wear", subcategory: "Bottoms",
    ageGroup: "Young Women", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Black", "Gold", "Dusty Rose"],
    images: ["https://picsum.photos/seed/west10/600/800", "https://picsum.photos/seed/west10b/600/800", "https://picsum.photos/seed/west10c/600/800"],
    badge: "", rating: 4.5, reviews: 178
  },
  {
    id: 95, name: "Silk Party Saree with Blouse", code: "ET-SAR-022", price: 3999,
    description: "Elegant silk blend saree with ready-to-wear designer blouse. Effortless party styling.",
    fabric: "Silk", occasion: "Party", category: "Sarees", subcategory: "Party Wear Sarees",
    ageGroup: "Young Women", sizes: ["Free Size"], colors: ["Gold", "Rose Gold", "Emerald"],
    images: ["https://picsum.photos/seed/saree22/600/800", "https://picsum.photos/seed/saree22b/600/800", "https://picsum.photos/seed/saree22c/600/800"],
    badge: "Premium", rating: 4.8, reviews: 56
  },
  {
    id: 96, name: "Floral Skater Dress", code: "ET-DRS-011", price: 1099,
    description: "Cheerful floral skater dress with sweetheart neckline. Fun and flirty for warm days.",
    fabric: "Rayon", occasion: "Casual", category: "Long Dresses", subcategory: "Casual Dresses",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["Pink Floral", "Blue Floral", "Yellow Floral"],
    images: ["https://picsum.photos/seed/dress11/600/800", "https://picsum.photos/seed/dress11b/600/800", "https://picsum.photos/seed/dress11c/600/800"],
    badge: "", rating: 4.5, reviews: 156
  },
  {
    id: 97, name: "Kalamkari Kurti", code: "ET-KUR-017", price: 1199,
    description: "Hand-painted Kalamkari kurti with mythological motifs. Wearable art from Andhra Pradesh.",
    fabric: "Cotton", occasion: "Traditional", category: "Kurtis", subcategory: "Ethnic Wear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL"], colors: ["Red-Black", "Mustard-Brown", "Green-Red"],
    images: ["https://picsum.photos/seed/kurti17/600/800", "https://picsum.photos/seed/kurti17b/600/800", "https://picsum.photos/seed/kurti17c/600/800"],
    badge: "", rating: 4.6, reviews: 112
  },
  {
    id: 98, name: "Pre-Draped Saree Gown", code: "ET-GWN-008", price: 5499,
    description: "Innovative saree-gown fusion with pre-draped pallu. Saree elegance without the hassle.",
    fabric: "Georgette", occasion: "Wedding", category: "Gowns", subcategory: "Party",
    ageGroup: "Young Women", sizes: ["S", "M", "L"], colors: ["Gold", "Rose Gold", "Silver"],
    images: ["https://picsum.photos/seed/gown8/600/800", "https://picsum.photos/seed/gown8b/600/800", "https://picsum.photos/seed/gown8c/600/800"],
    badge: "Premium", rating: 4.9, reviews: 34
  },
  {
    id: 99, name: "Bandhani Print Kurti", code: "ET-KUR-018", price: 799,
    description: "Vibrant bandhani print kurti from Rajasthan. Traditional tie-dye art for everyday wear.",
    fabric: "Rayon", occasion: "Festival", category: "Kurtis", subcategory: "Ethnic Wear",
    ageGroup: "Adults", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Red-Yellow", "Blue-White", "Green-Orange"],
    images: ["https://picsum.photos/seed/kurti18/600/800", "https://picsum.photos/seed/kurti18b/600/800", "https://picsum.photos/seed/kurti18c/600/800"],
    badge: "", rating: 4.4, reviews: 198
  },
  {
    id: 100, name: "Off-Shoulder Ruffle Dress", code: "ET-DRS-012", price: 1799,
    description: "Flirty off-shoulder dress with cascading ruffles. Romantic and feminine for date nights.",
    fabric: "Crepe", occasion: "Party", category: "Long Dresses", subcategory: "Party Dresses",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["Coral", "Lavender", "Mint"],
    images: ["https://picsum.photos/seed/dress12/600/800", "https://picsum.photos/seed/dress12b/600/800", "https://picsum.photos/seed/dress12c/600/800"],
    badge: "Trending", rating: 4.7, reviews: 89
  },
  {
    id: 101, name: "Brocade Silk Saree", code: "ET-SAR-023", price: 5999,
    description: "Rich brocade silk saree with gold motifs. Timeless grandeur for temple visits and festivals.",
    fabric: "Silk", occasion: "Traditional", category: "Sarees", subcategory: "Silk Sarees",
    ageGroup: "Adults", sizes: ["Free Size"], colors: ["Deep Red", "Peacock Blue", "Bottle Green"],
    images: ["https://picsum.photos/seed/saree23/600/800", "https://picsum.photos/seed/saree23b/600/800", "https://picsum.photos/seed/saree23c/600/800"],
    badge: "Premium", rating: 4.8, reviews: 45
  },
  {
    id: 102, name: "Embellished Clutch Wallet", code: "ET-ACC-006", price: 799,
    description: "Multi-compartment clutch wallet with crystal embellishment. Style meets functionality.",
    fabric: "Velvet", occasion: "Party", category: "Accessories", subcategory: "Bags",
    ageGroup: "Young Women", sizes: ["One Size"], colors: ["Black", "Gold", "Maroon"],
    images: ["https://picsum.photos/seed/acc6/600/800", "https://picsum.photos/seed/acc6b/600/800", "https://picsum.photos/seed/acc6c/600/800"],
    badge: "", rating: 4.5, reviews: 134
  },
  {
    id: 103, name: "Silk Hair Accessories Set", code: "ET-ACC-007", price: 349,
    description: "Luxury silk scrunchie and clip set. Elevate your hairstyle with premium accessories.",
    fabric: "Silk", occasion: "Casual", category: "Accessories", subcategory: "Hair Accessories",
    ageGroup: "Teen Girls", sizes: ["One Size"], colors: ["Blush", "Champagne", "Black"],
    images: ["https://picsum.photos/seed/acc7/600/800", "https://picsum.photos/seed/acc7b/600/800", "https://picsum.photos/seed/acc7c/600/800"],
    badge: "New", rating: 4.6, reviews: 89
  },
  {
    id: 104, name: "Zari Work Dupatta", code: "ET-ACC-008", price: 899,
    description: "Exquisite zari work dupatta with scalloped edges. Elevate any outfit instantly.",
    fabric: "Silk", occasion: "Festival", category: "Accessories", subcategory: "Stoles",
    ageGroup: "Adults", sizes: ["One Size"], colors: ["Gold", "Silver", "Rose Gold"],
    images: ["https://picsum.photos/seed/acc8/600/800", "https://picsum.photos/seed/acc8b/600/800", "https://picsum.photos/seed/acc8c/600/800"],
    badge: "", rating: 4.7, reviews: 67
  },
  {
    id: 105, name: "Ruffle Saree Gown", code: "ET-GWN-009", price: 4799,
    description: "Dramatic ruffle saree gown with train. Red carpet glamour for wedding receptions.",
    fabric: "Crepe", occasion: "Wedding", category: "Gowns", subcategory: "Party",
    ageGroup: "Young Women", sizes: ["S", "M", "L"], colors: ["Wine", "Emerald", "Midnight"],
    images: ["https://picsum.photos/seed/gown9/600/800", "https://picsum.photos/seed/gown9b/600/800", "https://picsum.photos/seed/gown9c/600/800"],
    badge: "New", rating: 4.7, reviews: 34
  },
  {
    id: 106, name: "Embroidered Kids Lehenga", code: "ET-KID-006", price: 1299,
    description: "Designer kids lehenga with threadwork and sequins. Miniature luxury for special occasions.",
    fabric: "Georgette", occasion: "Wedding", category: "Lehengas", subcategory: "Kids",
    ageGroup: "Kids", sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], colors: ["Pink", "Peach", "Lilac"],
    images: ["https://picsum.photos/seed/kid6/600/800", "https://picsum.photos/seed/kid6b/600/800", "https://picsum.photos/seed/kid6c/600/800"],
    badge: "Premium", rating: 4.8, reviews: 45
  },
  {
    id: 107, name: "Block Print Wrap Dress", code: "ET-DRS-013", price: 1199,
    description: "Bohemian wrap dress with artisanal block prints. Effortless style with Indian heritage.",
    fabric: "Cotton", occasion: "Casual", category: "Long Dresses", subcategory: "Casual Dresses",
    ageGroup: "Young Women", sizes: ["S", "M", "L", "XL"], colors: ["Indigo", "Rust", "Mustard"],
    images: ["https://picsum.photos/seed/dress13/600/800", "https://picsum.photos/seed/dress13b/600/800", "https://picsum.photos/seed/dress13c/600/800"],
    badge: "", rating: 4.5, reviews: 123
  },
  {
    id: 108, name: "Georgette Anarkali Suit", code: "ET-SAL-010", price: 2499,
    description: "Graceful Anarkali suit with churidar and dupatta. Flowing elegance for festive gatherings.",
    fabric: "Georgette", occasion: "Festival", category: "Salwar Suits", subcategory: "Festival",
    ageGroup: "Adults", sizes: ["M", "L", "XL", "XXL"], colors: ["Coral", "Teal", "Wine"],
    images: ["https://picsum.photos/seed/suit10/600/800", "https://picsum.photos/seed/suit10b/600/800", "https://picsum.photos/seed/suit10c/600/800"],
    badge: "", rating: 4.6, reviews: 156
  },
  {
    id: 109, name: "Statement Oxidised Necklace", code: "ET-ACC-009", price: 499,
    description: "Chunky oxidised silver statement necklace. Bohemian glamour for ethnic and western outfits.",
    fabric: "Silk", occasion: "Casual", category: "Accessories", subcategory: "Jewelry",
    ageGroup: "Young Women", sizes: ["One Size"], colors: ["Oxidised Silver"],
    images: ["https://picsum.photos/seed/acc9/600/800", "https://picsum.photos/seed/acc9b/600/800", "https://picsum.photos/seed/acc9c/600/800"],
    badge: "Trending", rating: 4.5, reviews: 178
  },
  {
    id: 110, name: "Tiered Maxi Skirt Set", code: "ET-LEH-009", price: 2199,
    description: "Layered tiered skirt with matching crop top. Modern festive wear for the young at heart.",
    fabric: "Crepe", occasion: "Party", category: "Lehengas", subcategory: "Party Wear",
    ageGroup: "Teen Girls", sizes: ["XS", "S", "M", "L"], colors: ["Peach", "Lavender", "Mint"],
    images: ["https://picsum.photos/seed/leh9/600/800", "https://picsum.photos/seed/leh9b/600/800", "https://picsum.photos/seed/leh9c/600/800"],
    badge: "New", rating: 4.6, reviews: 67
  }
];

const TESTIMONIALS = [
  { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Elegant Threads has the most beautiful saree collection! The quality is exceptional and the customer service is outstanding.", avatar: "https://picsum.photos/seed/t1/100/100" },
  { name: "Anita Patel", location: "Delhi", rating: 5, text: "I bought a Banarasi silk saree for my daughter's wedding. It was absolutely stunning and received so many compliments!", avatar: "https://picsum.photos/seed/t2/100/100" },
  { name: "Meera Reddy", location: "Bangalore", rating: 4, text: "The kurtis are so comfortable and stylish. I ordered multiple pieces and loved every single one of them.", avatar: "https://picsum.photos/seed/t3/100/100" },
  { name: "Deepika Nair", location: "Chennai", rating: 5, text: "Best online shopping experience for ethnic wear. The fabrics are genuine and the designs are truly premium.", avatar: "https://picsum.photos/seed/t4/100/100" },
  { name: "Kavita Joshi", location: "Jaipur", rating: 5, text: "Love the variety and the attention to detail in every piece. My go-to store for all festive occasions.", avatar: "https://picsum.photos/seed/t5/100/100" },
  { name: "Ritu Agarwal", location: "Kolkata", rating: 4, text: "The lehenga I ordered was beyond my expectations. The embroidery work is absolutely mesmerizing.", avatar: "https://picsum.photos/seed/t6/100/100" }
];

const STORE_INFO = {
  name: "Elegant Threads",
  tagline: "Where Elegance Meets Fashion",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "info@elegantthreads.com",
  address: "42, Fashion Avenue, Brigade Road",
  city: "Bangalore",
  state: "Karnataka",
  pin: "560001",
  hours: "Mon-Sat: 10:00 AM - 9:00 PM | Sun: 11:00 AM - 7:00 PM",
  instagram: "https://instagram.com/elegantthreads",
  facebook: "https://facebook.com/elegantthreads",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9856437485447!2d77.6096!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1456f3e3b0e3%3A0x2d81c3c56a2c3b4a!2sBrigade%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
  googleMapsLink: "https://www.google.com/maps/search/Brigade+Road+Bangalore"
};
