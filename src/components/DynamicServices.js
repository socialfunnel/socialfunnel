import { useAgencyData } from "@/src/hooks/useAgencyData";
import Link from "next/link";

const DynamicServices = () => {
    const { services } = useAgencyData();

    return (
        <div className="row">
            {services.slice(0, 4).map((service, index) => (
                <div key={service.id} className="col-xl-3 col-lg-4 col-md-6">
                    <div className={`service-three-item wow ${index % 2 === 0 ? 'fadeInUp' : 'fadeInDown'} delay-0-${index + 2}s`}>
                        <div className="title-icon">
                            <h5>
                                <Link legacyBehavior href="/services">
                                    <a>{service.title}</a>
                                </Link>
                            </h5>
                            <img src={service.icon} alt="Icon" />
                        </div>
                        <div className="content">
                            <p>{service.shortDescription}</p>
                            <Link legacyBehavior href="/services">
                                <a className="read-more style-two">
                                    <span>Read More</span>{" "}
                                    <i className="far fa-arrow-right" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DynamicServices;