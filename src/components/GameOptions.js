import { options } from "../options"
import OptionCard from "./OptionCard"

const GameOptions = ({onOptionSelect}) => {
  return (
    <main>
        {options.map((option, index) => (
            <button key={index} onClick={() => onOptionSelect(option.name)}>
                <OptionCard option={option} />
            </button>
        ))}
    </main>
  )
}

export default GameOptions