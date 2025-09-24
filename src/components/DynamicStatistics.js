import { useAgencyData } from "@/src/hooks/useAgencyData";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/src/components/Counter"), {
    ssr: false,
});

const DynamicStatistics = () => {
    const { statistics } = useAgencyData();

    return (
        <div className="row justify-content-between">
            {statistics.map((stat, index) => (
                <div key={index} className="col-xl-2 col-lg-3 col-6">
                    <div className={`counter-item counter-text-wrap wow fadeInUp delay-0-${index + 2}s`}>
                        <i className={stat.icon} />
                        <Counter end={stat.number} extraClass={stat.suffix} />
                        <span className="counter-title">{stat.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DynamicStatistics;