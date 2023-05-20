import { Grid } from 'react-loader-spinner';
import { LoaderConainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderConainer>
      <Grid
        height="80"
        width="80"
        color="#4782ef"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderConainer>
  );
};

export default Loader;
