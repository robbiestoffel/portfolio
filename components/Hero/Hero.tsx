import { Text } from '@mantine/core';

export default function Hero() {
  return (
    <>
      <h1 className='text-center mt-32 text-8xl font-extrabold'>
        <Text inherit variant="gradient" component="span" gradient={{ from: '#52228D', to: '#6B218D ' }}>
          Robbie Stoffel
        </Text>
      </h1>
      <p className='text-center text-xl mx-auto mt-6'>
        ☾ actor • artist • nerd ☾
        <br />
        School of Science and Math , Durham NC , c/o '25
        <br />
        FRC 900 , The Zebracorns
        <br />
        Studio Art TA
      </p>
    </>
  )
}