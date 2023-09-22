import { options } from "../options"
import OptionCard from "./OptionCard"

const GameOptions = () => {
  return (
    <main>
        {options.map((option, index) => (
            <button key={index}>
                <OptionCard option={option} />
            </button>
        ))}
    </main>
  )
}

export default GameOptions