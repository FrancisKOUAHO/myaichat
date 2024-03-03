import {NextPage} from 'next'
import {LineWave} from 'react-loader-spinner'

const LoadingSpinner: NextPage = () => {
    return (
        <p className="text-center">
            <LineWave color="#000"/>
        </p>
    );
};

export default LoadingSpinner;
