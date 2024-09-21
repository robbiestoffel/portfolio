import { Text } from '@mantine/core';

export default function Hero() {
  return (
    <div className='pt-72 pb-64' id="home">
      <h1 className='text-center text-9xl font-kalam font-extrabold'>
        <Text inherit variant="gradient" component="span" gradient={{ from: '#a8a29e', to: '#a8a29e' }}>
          Robbie Stoffel
        </Text>
      </h1>
      <p className='text-center text-2xl mx-auto mt-6 text-stone'>
        ☾ actor • artist • nerd ☾
        <br />
        School of Science and Math , Durham NC , c/o '25
        <br />
        FRC 900 , The Zebracorns
        <br />
        Studio Art TA
      </p>
    </div>
  )
}