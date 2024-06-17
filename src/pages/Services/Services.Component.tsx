import { useParams } from "react-router-dom";
import Ciment from "../../components/Ciment";
import Bois from "../../components/Bois";
import Elctro from "../../components/Electroménagers";

const Services = (): JSX.Element => {
    const params = useParams();

    if (params.serviceId == "ciment") {
        return (
            <div>
                <Ciment />
            </div>
        );
    } else if (params.serviceId == "bois") {
        return (
            <div>
                <Bois />
            </div>
        );
    } else if (params.serviceId == "clinker") {
        return (
            <div>
                <Elctro />
            </div>
        );
    }
    return (
        <div>
            <h1>404 Not Found</h1>
        </div>
    );
};

export default Services;
