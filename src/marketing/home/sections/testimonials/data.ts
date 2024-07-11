import avatar1 from "marketing/assets/images/avatar-1.jpg";
import avatar2 from "marketing/assets/images/avatar-2.jpg";
import avatar3 from "marketing/assets/images/avatar-3.jpg";

type Testimonial = {
    img: string;
    name: string;
    position: string;
    testimonial: string;
};

export const data: Testimonial[] = [
    {
        img: avatar1,
        name: "Kelsie Smith",
        position: "Product Manager at Expensify",
        testimonial:
            "Working with this team has been a game-changer. Their dedication and innovative solutions have significantly improved our processes.",
    },
    {
        img: avatar2,
        name: "John Doe",
        position: "Software Engineer at Google",
        testimonial:
            "The collaboration was seamless and the results were beyond our expectations. Highly recommend for anyone looking for professional and reliable service.",
    },
    {
        img: avatar3,
        name: "Michael Brown",
        position: "CTO at Tech Innovations",
        testimonial:
            "Their expertise and commitment to quality have been outstanding. We have seen remarkable improvements in our projects thanks to their contributions.",
    },
];

export const shiftTestimonialsRight = (testimonials: Testimonial[]) => {
    const length = testimonials.length;
    let shifted: Testimonial[] = [];

    for (let i = 0; i < length; i++) {
        let shiftToIdx = (i + 1) % length;
        shifted[shiftToIdx] = testimonials[i];
    }

    return shifted;
};

export const shiftTestimonialsLeft = (testimonials: Testimonial[]) => {
    const length = testimonials.length;
    let shifted: Testimonial[] = [];

    for (let i = 0; i < length; i++) {
        let shiftToIdx = (i - 1 + length) % length;
        shifted[shiftToIdx] = testimonials[i];
    }

    return shifted;
};

// [1,2,3] => [2,3,1]
