export default {
    name: 'Amrit Thapa',
    role: 'Software Engineer',
    email: 'amet.thapa27@gmail.com',
    phone: '+5699 123 4567',
    birthDay: '1997-11-17',
    location: 'Magdeburg, Germany',

    baseUrl: 'https://amritthapa27.com.np',

    siteTitle: 'Amrit Thapa Personal Resume | Resume',
    siteDescription: 'Resume of Amrit Thapa, a Software Engineer from Magdeburg, Germany. I have experience in Java | Spring Boot, React, Typescript. I am a Software Engineer with a passion for learning new technologies. I am a team player and I love to learn new things. I am always looking for new challenges and opportunities.',
    siteKeywords: "Amrit Thapa Resume, Amrit Thapa, Personal Resume",
    useAnalytics: false,
    useAnalyticsInDev: false,

    sections: [
        {
            title: 'Home',
            display: true,
            icon: 'fa6-solid:house',

        },
        {
            title: 'About',
            display: true,
            icon: 'fa6-solid:user',

        },
        {
            title: 'Resume',
            display: true,
            icon: 'fa6-solid:graduation-cap',
        },
        {
            title: 'Contact',
            display: true,
            icon: 'fa6-solid:envelope',
        }
    ],

    initialPage: 'home',

    header: {
        displayPhoto: true,
        photoPath: 'img/header_photo.jpg',
        displayName: true,
        displayRole: true,
        displaySocialIcons: true,
        displayDownloadCVButton: true,
        displayChangeLanguageButton: true,
        socialIcons: [
            {
                icon: 'fa6-brands:linkedin-in',
                url: 'https://www.linkedin.com/in/amritthapa27/',
                title: 'LinkedIn'
            },
            {
                icon: 'fa6-brands:github',
                url: 'https://github.com/ametthapa',
                title: 'GitHub'
            }
            // {
            //     icon: 'fa6-brands:stack-overflow',
            //     url: 'https://stackoverflow.com/',
            //     title: 'Stack Overflow'
            // },
            // {
            //     icon: 'fa6-brands:codepen',
            //     url: 'https://codepen.io/',
            //     title: 'CodePen'
            // },
        ]
    },

    home: {
        displayAnimatedBackground: true,
        animatedBackgroundItems: 10,
        displayDownloadCVButton: true,
        displayDownloadCVButtonOnlyOnMobile: true,
    },

    about: {
        displayPersonalInfo: true,
        personalInfo: {
            age: {
                display: true,
            },
            location: {
                display: true,
            },
            email: {
                display: true,
            },
            phone: {
                display: true,
            }
        },
        order: [
            'bio',
            'whatIDo',
            'testimonials',
        ],
        components: {
            bio: {
                display: true,
                displayTitle: false,
            },
            whatIDo: {
                display: true,
                displayTitle: true,
            },
            testimonials: {
                display: true,
                displayTitle: true,
            }
        }
    },

    contact: {
        displayContactForm: true,
        useRecaptcha: true,
        personalInfo: {
            location: {
                display: true,
            },
            email: {
                display: true,
            },
            phone: {
                display: true,
            },
            openToWork: {
                display: true,
            }
        }
    }
}