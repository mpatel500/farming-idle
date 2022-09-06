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
    <div>
      <button
        onClick={() => {
          handleSeedChange('onion', inventory.seeds.onion + 1)
        }}
      >
        Increment the onion
      </button>
      {JSON.stringify(inventory)}
    </div>
  )
}

export default Home
