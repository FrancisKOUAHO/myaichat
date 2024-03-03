import {NextPage} from 'next'
import {LineWave} from 'react-loader-spinner'

const LoadingSpinner: NextPage = () => {
    return (
        <LineWave
            height='200'
            width='200'
            wrapperClass='c-loading-spinner'
            color="white"
            ariaLabel="line-wave"
            visible={true}
        />
    );
};

export default LoadingSpinner;
