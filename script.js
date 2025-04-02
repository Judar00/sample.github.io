// Property Data with multiple images
const properties = [
    {
        id: 1,
        title: "Luxury Penthouse with Ocean View",
        address: "123 Coastal Drive, Malibu, CA",
        price: 4500000,
        type: "apartment",
        beds: 4,
        baths: 3.5,
        sqft: 3200,
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        featured: true
    },
    {
        id: 2,
        title: "Modern Family Home in Suburbs",
        address: "456 Maple Street, Austin, TX",
        price: 1250000,
        type: "house",
        beds: 5,
        baths: 3,
        sqft: 2800,
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        featured: true
    },
    {
        id: 3,
        title: "Downtown Luxury Condo",
        address: "789 Urban Ave, New York, NY",
        price: 3200000,
        type: "condo",
        beds: 3,
        baths: 2.5,
        sqft: 2100,
        images: [
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        featured: true
    },
    {
        id: 4,
        title: "Mediterranean Villa with Pool",
        address: "101 Sunset Blvd, Miami, FL",
        price: 5800000,
        type: "villa",
        beds: 6,
        baths: 4.5,
        sqft: 4500,
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        featured: true
    },
    {
        id: 5,
        title: "Modern Lakefront Cottage",
        address: "202 Lakeside Drive, Lake Tahoe, CA",
        price: 2200000,
        type: "house",
        beds: 3,
        baths: 2,
        sqft: 1800,
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        featured: false
    },
    {
        id: 6,
        title: "Penthouse with City Views",
        address: "303 Skyline Blvd, Chicago, IL",
        price: 3800000,
        type: "apartment",
        beds: 3,
        baths: 3,
        sqft: 2400,
        images: [
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        featured: true
    }
]

function createPropertyCard(property) {
    return `
        <div class="property-card" data-id="${property.id}">
            <div class="property-img">
                <div class="property-carousel" id="carousel-${property.id}">
                    ${property.images.map(img => `
                        <div class="carousel-slide">
                            <img src="${img}" alt="${property.title}">
                        </div>
                    `).join('')}
                </div>
                <div class="carousel-controls">
                    <button class="carousel-prev" data-carousel="carousel-${property.id}">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="carousel-next" data-carousel="carousel-${property.id}">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="carousel-dots" data-carousel="carousel-${property.id}">
                    ${property.images.map((_, index) => `
                        <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
                    `).join('')}
                </div>
                ${property.featured ? '<span class="property-badge">Featured</span>' : ''}
                
                <!-- Property Preview Overlay -->
                <div class="property-preview">
                    <h3>${property.title}</h3>
                    <div class="preview-price">$${property.price.toLocaleString()}</div>
                    <div class="preview-features">
                        <div class="preview-feature">
                            <i class="fas fa-bed"></i>
                            <span>${property.beds} beds</span>
                        </div>
                        <div class="preview-feature">
                            <i class="fas fa-bath"></i>
                            <span>${property.baths} baths</span>
                        </div>
                        <div class="preview-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.sqft.toLocaleString()} sqft</span>
                        </div>
                    </div>
                    <a href="#" class="preview-btn">View Details</a>
                </div>
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-address">
                    <i class="fas fa-map-marker-alt"></i> ${property.address}
                </p>
                <div class="property-price">$${property.price.toLocaleString()} <span>/ sale</span></div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.beds} beds</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.baths} baths</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.sqft.toLocaleString()} sqft</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize and add the map
function initMap() {
    // The location of the office
    const officeLocation = { lat: 36.2083, lng: -115.9839 }; // Approximate coordinates for Pahrump, NV
    // The map, centered at officeLocation
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: officeLocation,
        styles: [
            {
                "featureType": "poi",
                "stylers": [
                    { "visibility": "off" }
                ]
            }
        ]
    });
    // The marker, positioned at officeLocation
    new google.maps.Marker({
        position: officeLocation,
        map: map,
        title: "Marci Metzger Homes Office"
    });
}

// Load Google Maps API
function loadMapScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCbdsKhso0JipSIuURMXSE7NP20sr3INm0&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

// Load the map when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadMapScript();
    // ... rest of your existing code
});