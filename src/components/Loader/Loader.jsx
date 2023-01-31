import { Puff } from 'react-loader-spinner';

export const PuffLoader = () => {
  return (
    <Puff
      height="100"
      width="100"
      radius={1}
      color="#3f51b5"
      ariaLabel="puff-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
