import Grid from '../components/Grid';

type HomeProps = {
  handleSeedChange: (key: string, value: string | number) => void,
  inventory: {
    seeds: {
      onion: number,
      potato: number
    },
  },
}

const Home = ({ handleSeedChange, inventory }: HomeProps) => {
  return (
    <Grid />
  )
}

export default Home
