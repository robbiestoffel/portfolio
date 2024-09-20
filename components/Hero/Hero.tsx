import { Title, Text } from '@mantine/core';

export default function Hero() {
  return (
    <>
      <Title ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: '#52228D', to: '#6B218D ' }}>
          Robbie Stoffel
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        ☾ actor • artist • nerd ☾
        <br />
        School of Science and Math , Durham NC , c/o '25
        <br />
        FRC 900 , The Zebracorns
        <br />
        Studio Art TA
      </Text>
    </>
  )
}