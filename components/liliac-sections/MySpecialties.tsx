import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import "../../styles/my-specialties.css";

export default function MySpecialties() {
    const specialties = [
        {
            title: "Self-Esteem",
            description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
            image: "/assets/images/1.jpg",
        },
        {
            title: "Relationships",
            description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
            image: "/assets/images/2.jpg",
        },
        {
            title: "Burnout",
            description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
            image: "/assets/images/3.jpg",
        },
    ];

    return (
        <section className="specialties-section">
            <FadeIn>
                <h2 className="specialties-title">My Specialties</h2>
            </FadeIn>

            <div className="specialties-grid">
                {specialties.map((item, index) => (
                    <div key={index} className="specialty-card">
                        <FadeIn delay={100 + index * 150}>
                            <h3 className="specialty-card-title">{item.title}</h3>
                        </FadeIn>

                        <FadeIn delay={200 + index * 150}>
                            <p className="specialty-card-text">{item.description}</p>
                        </FadeIn>

                        <FadeIn delay={300 + index * 150} className="specialty-image-wrapper">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="specialty-image"
                            />
                        </FadeIn>
                    </div>
                ))}
            </div>
        </section>
    );
}
