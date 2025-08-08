// Sample medical blog data
const blogData = {
    articles: [
        {
            id: 1,
            title: "Understanding Heart Disease: Prevention and Early Detection",
            category: "cardiology",
            excerpt: "Learn about the latest research in cardiovascular health, risk factors, and preventive measures that can save lives.",
            content: `
                <h2>Understanding Heart Disease: Prevention and Early Detection</h2>
                <p>Heart disease remains one of the leading causes of death worldwide, but much of it is preventable through lifestyle modifications and early detection strategies.</p>
                
                <h3>Risk Factors</h3>
                <p>Several factors contribute to heart disease risk:</p>
                <ul>
                    <li><strong>High Blood Pressure:</strong> Often called the "silent killer," hypertension puts extra strain on your heart.</li>
                    <li><strong>High Cholesterol:</strong> Excess cholesterol can build up in arteries, causing blockages.</li>
                    <li><strong>Smoking:</strong> Damages blood vessels and reduces oxygen in the blood.</li>
                    <li><strong>Diabetes:</strong> High blood sugar levels can damage blood vessels over time.</li>
                    <li><strong>Obesity:</strong> Excess weight puts additional strain on the heart.</li>
                </ul>
                
                <h3>Prevention Strategies</h3>
                <p>The good news is that heart disease is largely preventable:</p>
                <ul>
                    <li><strong>Regular Exercise:</strong> Aim for at least 150 minutes of moderate-intensity exercise weekly.</li>
                    <li><strong>Healthy Diet:</strong> Focus on fruits, vegetables, whole grains, and lean proteins.</li>
                    <li><strong>Stress Management:</strong> Practice relaxation techniques and maintain work-life balance.</li>
                    <li><strong>Regular Check-ups:</strong> Monitor blood pressure, cholesterol, and other vital signs.</li>
                </ul>
                
                <h3>Early Warning Signs</h3>
                <p>Recognizing symptoms early can be life-saving:</p>
                <ul>
                    <li>Chest pain or discomfort</li>
                    <li>Shortness of breath</li>
                    <li>Fatigue</li>
                    <li>Irregular heartbeat</li>
                    <li>Swelling in legs, ankles, or feet</li>
                </ul>
            `,
            author: "Dr. Sarah Johnson",
            date: "2024-01-15",
            readTime: "8 min read",
            icon: "fa-heartbeat"
        },
        {
            id: 2,
            title: "Neuroplasticity: How Your Brain Adapts and Heals",
            category: "neurology",
            excerpt: "Discover the remarkable ability of the brain to reorganize itself and what this means for stroke recovery and cognitive enhancement.",
            content: `
                <h2>Neuroplasticity: How Your Brain Adapts and Heals</h2>
                <p>Neuroplasticity, the brain's ability to change and adapt throughout life, is one of the most exciting discoveries in modern neuroscience.</p>
                
                <h3>What is Neuroplasticity?</h3>
                <p>Neuroplasticity refers to the brain's ability to change and adapt throughout life. This includes:</p>
                <ul>
                    <li><strong>Structural Plasticity:</strong> Physical changes in neural connections</li>
                    <li><strong>Functional Plasticity:</strong> Brain areas taking on new functions</li>
                    <li><strong>Synaptic Plasticity:</strong> Strengthening or weakening of connections between neurons</li>
                </ul>
                
                <h3>Clinical Applications</h3>
                <p>Understanding neuroplasticity has revolutionized treatment approaches:</p>
                <ul>
                    <li><strong>Stroke Recovery:</strong> Rehabilitation programs now focus on rewiring the brain</li>
                    <li><strong>Learning Disabilities:</strong> Targeted interventions can help overcome cognitive challenges</li>
                    <li><strong>Mental Health:</strong> Therapy and meditation can literally reshape brain structure</li>
                </ul>
                
                <h3>Enhancing Neuroplasticity</h3>
                <p>You can promote brain plasticity through:</p>
                <ul>
                    <li>Learning new skills</li>
                    <li>Regular physical exercise</li>
                    <li>Adequate sleep</li>
                    <li>Mindfulness meditation</li>
                    <li>Social interaction</li>
                </ul>
            `,
            author: "Dr. Michael Chen",
            date: "2024-01-12",
            readTime: "6 min read",
            icon: "fa-brain"
        },
        {
            id: 3,
            title: "The Gut-Brain Connection: How Nutrition Affects Mental Health",
            category: "nutrition",
            excerpt: "Explore the fascinating relationship between your digestive system and mental well-being, and how diet can influence mood and cognition.",
            content: `
                <h2>The Gut-Brain Connection: How Nutrition Affects Mental Health</h2>
                <p>The relationship between our gut and brain is more complex and influential than previously understood, with profound implications for mental health.</p>
                
                <h3>The Microbiome's Role</h3>
                <p>Your gut microbiome produces neurotransmitters that affect mood:</p>
                <ul>
                    <li><strong>Serotonin:</strong> 90% is produced in the gut, affecting mood and sleep</li>
                    <li><strong>GABA:</strong> The brain's main inhibitory neurotransmitter</li>
                    <li><strong>Dopamine:</strong> Associated with reward and motivation</li>
                </ul>
                
                <h3>Foods for Mental Health</h3>
                <p>Certain foods can support mental well-being:</p>
                <ul>
                    <li><strong>Probiotic Foods:</strong> Yogurt, kefir, fermented vegetables</li>
                    <li><strong>Omega-3 Rich Foods:</strong> Fatty fish, walnuts, flaxseeds</li>
                    <li><strong>Complex Carbohydrates:</strong> Whole grains, legumes</li>
                    <li><strong>Antioxidant-Rich Foods:</strong> Berries, dark leafy greens</li>
                </ul>
                
                <h3>The Inflammation Connection</h3>
                <p>Chronic inflammation can negatively impact mental health. Anti-inflammatory foods include:</p>
                <ul>
                    <li>Turmeric and ginger</li>
                    <li>Green tea</li>
                    <li>Dark chocolate</li>
                    <li>Olive oil</li>
                </ul>
            `,
            author: "Dr. Emily Rodriguez",
            date: "2024-01-10",
            readTime: "7 min read",
            icon: "fa-apple-alt"
        },
        {
            id: 4,
            title: "Managing Anxiety in the Modern World: Evidence-Based Strategies",
            category: "mental-health",
            excerpt: "Learn about the latest therapeutic approaches for managing anxiety, from cognitive techniques to lifestyle modifications.",
            content: `
                <h2>Managing Anxiety in the Modern World: Evidence-Based Strategies</h2>
                <p>Anxiety disorders are among the most common mental health conditions, but effective treatments are available and constantly improving.</p>
                
                <h3>Understanding Anxiety</h3>
                <p>Anxiety is a normal stress response, but becomes problematic when:</p>
                <ul>
                    <li>It's disproportionate to the situation</li>
                    <li>It interferes with daily functioning</li>
                    <li>It persists even when stressors are removed</li>
                </ul>
                
                <h3>Cognitive Behavioral Techniques</h3>
                <p>CBT strategies for anxiety management:</p>
                <ul>
                    <li><strong>Thought Challenging:</strong> Identifying and questioning anxious thoughts</li>
                    <li><strong>Behavioral Activation:</strong> Engaging in meaningful activities</li>
                    <li><strong>Exposure Therapy:</strong> Gradual exposure to feared situations</li>
                    <li><strong>Mindfulness:</strong> Present-moment awareness</li>
                </ul>
                
                <h3>Lifestyle Interventions</h3>
                <p>Daily practices that can reduce anxiety:</p>
                <ul>
                    <li>Regular exercise routine</li>
                    <li>Consistent sleep schedule</li>
                    <li>Limiting caffeine and alcohol</li>
                    <li>Deep breathing exercises</li>
                    <li>Progressive muscle relaxation</li>
                </ul>
                
                <h3>When to Seek Professional Help</h3>
                <p>Consider therapy or medication when anxiety:</p>
                <ul>
                    <li>Significantly impacts work or relationships</li>
                    <li>Causes physical symptoms</li>
                    <li>Leads to avoidance behaviors</li>
                    <li>Doesn't improve with self-help strategies</li>
                </ul>
            `,
            author: "Dr. James Wilson",
            date: "2024-01-08",
            readTime: "9 min read",
            icon: "fa-head-side-virus"
        },
        {
            id: 5,
            title: "Pediatric Nutrition: Building Healthy Eating Habits Early",
            category: "pediatrics",
            excerpt: "Essential guidelines for children's nutrition, from infancy through adolescence, setting the foundation for lifelong health.",
            content: `
                <h2>Pediatric Nutrition: Building Healthy Eating Habits Early</h2>
                <p>Proper nutrition during childhood is crucial for growth, development, and establishing lifelong healthy eating patterns.</p>
                
                <h3>Age-Specific Nutritional Needs</h3>
                <p>Nutritional requirements vary by developmental stage:</p>
                <ul>
                    <li><strong>Infants (0-6 months):</strong> Breast milk or formula exclusively</li>
                    <li><strong>6-12 months:</strong> Introduction of solid foods</li>
                    <li><strong>Toddlers (1-3 years):</strong> Variety and texture exploration</li>
                    <li><strong>School-age (4-12 years):</strong> Balanced meals for growth</li>
                    <li><strong>Adolescents (13-18 years):</strong> Increased calories for rapid growth</li>
                </ul>
                
                <h3>Key Nutrients for Growing Children</h3>
                <p>Essential nutrients for healthy development:</p>
                <ul>
                    <li><strong>Protein:</strong> For growth and muscle development</li>
                    <li><strong>Calcium:</strong> For bone and tooth development</li>
                    <li><strong>Iron:</strong> For cognitive development and energy</li>
                    <li><strong>Vitamin D:</strong> For bone health and immune function</li>
                    <li><strong>Omega-3 fatty acids:</strong> For brain development</li>
                </ul>
                
                <h3>Creating Positive Food Relationships</h3>
                <p>Strategies for healthy eating habits:</p>
                <ul>
                    <li>Model healthy eating behaviors</li>
                    <li>Involve children in meal planning and preparation</li>
                    <li>Create regular meal and snack times</li>
                    <li>Avoid using food as reward or punishment</li>
                    <li>Encourage trying new foods without pressure</li>
                </ul>
            `,
            author: "Dr. Lisa Thompson",
            date: "2024-01-05",
            readTime: "6 min read",
            icon: "fa-baby"
        },
        {
            id: 6,
            title: "Skin Cancer Prevention: Understanding Risk and Protection",
            category: "dermatology",
            excerpt: "Comprehensive guide to protecting your skin from harmful UV radiation and recognizing early warning signs of skin cancer.",
            content: `
                <h2>Skin Cancer Prevention: Understanding Risk and Protection</h2>
                <p>Skin cancer is the most common type of cancer, but it's also one of the most preventable through proper protection and early detection.</p>
                
                <h3>Types of Skin Cancer</h3>
                <p>The three main types of skin cancer:</p>
                <ul>
                    <li><strong>Basal Cell Carcinoma:</strong> Most common, rarely spreads</li>
                    <li><strong>Squamous Cell Carcinoma:</strong> Can spread if untreated</li>
                    <li><strong>Melanoma:</strong> Most dangerous, can spread rapidly</li>
                </ul>
                
                <h3>Risk Factors</h3>
                <p>Factors that increase skin cancer risk:</p>
                <ul>
                    <li>Fair skin, light eyes, blonde or red hair</li>
                    <li>History of sunburns or excessive sun exposure</li>
                    <li>Family history of skin cancer</li>
                    <li>Large number of moles</li>
                    <li>Weakened immune system</li>
                </ul>
                
                <h3>Prevention Strategies</h3>
                <p>Protect your skin with these measures:</p>
                <ul>
                    <li><strong>Sunscreen:</strong> SPF 30+ applied every 2 hours</li>
                    <li><strong>Protective Clothing:</strong> Long sleeves, wide-brimmed hats</li>
                    <li><strong>Seek Shade:</strong> Especially between 10 AM and 4 PM</li>
                    <li><strong>Avoid Tanning Beds:</strong> UV radiation increases cancer risk</li>
                    <li><strong>Regular Self-Exams:</strong> Check for changes in moles</li>
                </ul>
                
                <h3>The ABCDE Rule</h3>
                <p>Warning signs to watch for in moles:</p>
                <ul>
                    <li><strong>A</strong>symmetry</li>
                    <li><strong>B</strong>order irregularity</li>
                    <li><strong>C</strong>olor variation</li>
                    <li><strong>D</strong>iameter larger than a pencil eraser</li>
                    <li><strong>E</strong>volving or changing</li>
                </ul>
            `,
            author: "Dr. Robert Kim",
            date: "2024-01-03",
            readTime: "7 min read",
            icon: "fa-hand-holding-medical"
        }
    ],
    
    categories: [
        {
            name: "Cardiology",
            slug: "cardiology",
            description: "Heart health and cardiovascular diseases",
            icon: "fa-heartbeat",
            articleCount: 24,
            color: "#ef4444"
        },
        {
            name: "Neurology",
            slug: "neurology", 
            description: "Brain and nervous system disorders",
            icon: "fa-brain",
            articleCount: 18,
            color: "#8b5cf6"
        },
        {
            name: "Nutrition",
            slug: "nutrition",
            description: "Diet and nutritional health",
            icon: "fa-apple-alt",
            articleCount: 32,
            color: "#10b981"
        },
        {
            name: "Mental Health",
            slug: "mental-health",
            description: "Psychological wellness and therapy",
            icon: "fa-head-side-virus",
            articleCount: 21,
            color: "#f59e0b"
        },
        {
            name: "Pediatrics",
            slug: "pediatrics",
            description: "Children's health and development",
            icon: "fa-baby",
            articleCount: 15,
            color: "#06b6d4"
        },
        {
            name: "Dermatology",
            slug: "dermatology",
            description: "Skin conditions and treatments",
            icon: "fa-hand-holding-medical",
            articleCount: 19,
            color: "#f97316"
        }
    ],
    
    featuredAuthors: [
        {
            name: "Dr. Sarah Johnson",
            specialty: "Cardiologist",
            bio: "Board-certified cardiologist with 15 years of experience in preventive cardiology.",
            articles: 12
        },
        {
            name: "Dr. Michael Chen",
            specialty: "Neurologist",
            bio: "Neuroscience researcher specializing in neuroplasticity and stroke recovery.",
            articles: 8
        },
        {
            name: "Dr. Emily Rodriguez",
            specialty: "Nutritionist",
            bio: "Clinical nutritionist focused on the relationship between diet and mental health.",
            articles: 15
        },
        {
            name: "Dr. James Wilson",
            specialty: "Psychiatrist",
            bio: "Mental health expert specializing in anxiety disorders and cognitive behavioral therapy.",
            articles: 10
        }
    ],
    
    healthTips: [
        {
            title: "Stay Hydrated",
            description: "Drink at least 8 glasses of water daily for optimal health.",
            icon: "fa-tint"
        },
        {
            title: "Get Quality Sleep",
            description: "Aim for 7-9 hours of sleep each night for better recovery and health.",
            icon: "fa-bed"
        },
        {
            title: "Exercise Regularly",
            description: "150 minutes of moderate exercise weekly can prevent many diseases.",
            icon: "fa-running"
        },
        {
            title: "Eat Balanced Meals",
            description: "Include fruits, vegetables, lean proteins, and whole grains in your diet.",
            icon: "fa-utensils"
        },
        {
            title: "Manage Stress",
            description: "Practice relaxation techniques and maintain work-life balance.",
            icon: "fa-leaf"
        },
        {
            title: "Regular Check-ups",
            description: "Visit your healthcare provider regularly for preventive care.",
            icon: "fa-stethoscope"
        }
    ],
    
    medicalTerms: [
        {
            term: "Hypertension",
            definition: "High blood pressure, often called the 'silent killer' because it usually has no symptoms.",
            category: "cardiology"
        },
        {
            term: "Neuroplasticity",
            definition: "The brain's ability to reorganize itself by forming new neural connections throughout life.",
            category: "neurology"
        },
        {
            term: "Metabolism",
            definition: "The chemical processes that occur within a living organism to maintain life.",
            category: "nutrition"
        },
        {
            term: "Cognitive Behavioral Therapy",
            definition: "A type of psychotherapy that helps people identify and change destructive thought patterns.",
            category: "mental-health"
        },
        {
            term: "Immunization",
            definition: "The process of making a person immune to an infectious disease, typically by vaccination.",
            category: "pediatrics"
        },
        {
            term: "Melanoma",
            definition: "The most serious type of skin cancer that develops in the cells that produce melanin.",
            category: "dermatology"
        }
    ]
};

// Utility functions for data manipulation
const dataUtils = {
    // Get articles by category
    getArticlesByCategory: function(category) {
        if (category === 'all') {
            return blogData.articles;
        }
        return blogData.articles.filter(article => article.category === category);
    },
    
    // Search articles by title or content
    searchArticles: function(query) {
        const searchTerm = query.toLowerCase();
        return blogData.articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.content.toLowerCase().includes(searchTerm)
        );
    },
    
    // Get article by ID
    getArticleById: function(id) {
        return blogData.articles.find(article => article.id === parseInt(id));
    },
    
    // Get related articles (same category, excluding current article)
    getRelatedArticles: function(currentArticle, limit = 3) {
        return blogData.articles
            .filter(article => 
                article.category === currentArticle.category && 
                article.id !== currentArticle.id
            )
            .slice(0, limit);
    },
    
    // Get random health tip
    getRandomHealthTip: function() {
        const randomIndex = Math.floor(Math.random() * blogData.healthTips.length);
        return blogData.healthTips[randomIndex];
    },
    
    // Get category info by slug
    getCategoryBySlug: function(slug) {
        return blogData.categories.find(category => category.slug === slug);
    },
    
    // Format date for display
    formatDate: function(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    },
    
    // Get author articles
    getAuthorArticles: function(authorName) {
        return blogData.articles.filter(article => article.author === authorName);
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogData, dataUtils };
}