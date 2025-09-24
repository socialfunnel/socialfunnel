import { useAgencyData } from "@/src/hooks/useAgencyData";
import Link from "next/link";

const DynamicWhyChooseUs = () => {
    const { whyChooseUs } = useAgencyData();

    return (
        <div className="why-choose-two-wrap">
            <div className="section-title mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Why Choose Social Funnel</span>
                <h2>Proven Systems That Deliver Predictable Results</h2>
            </div>
            {whyChooseUs.map((item, index) => (
                <div key={index} className={`why-choose-item-two wow fadeInUp delay-0-${index + 3}s`}>
                    <div className="icon">
                        <i className="fas fa-check" />
                        <span className="icon-bottom-shape" />
                    </div>
                    <div className="content">
                        <h4>
                            <Link legacyBehavior href="/services">
                                <a>{item.title}</a>
                            </Link>
                        </h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DynamicWhyChooseUs;